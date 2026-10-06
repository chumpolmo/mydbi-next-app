import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from "./config/firebase.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

// Object array
const myShop = [
  {
     shopId: 100,
     shopName: "Adidas",
     shopContact: "admin.adidas@mail.com",
     shopAddress: "Dindaeng, Bangkok, 10400",
     shopOpen: true
  },
  {
     shopId: 200,
     shopName: "McShop",
     shopContact: "mc.shop@mail.com",
     shopAddress: "Bangyhai, Nontaburi, 10400",
     shopOpen: true
  },
  {
     shopId: 300,
     shopName: "Uniqlo",
     shopContact: "admin.uniqlo@mail.com",
     shopAddress: "Huai Khwang, Bangkok, 10400",
     shopOpen: true
  }
];

// http://localhost:8000/
app.get('/', (req, res) => {
    res.send('Hello, Mr.Chumpol Mokarat.');
    // throw new Error('BROKEN');
});

// http://localhost:8000/shops/200
async function getShops() {
   const result = [];
   const shopRef = db.collection('shops_new');
   const snapshot = await shopRef.get();
   snapshot.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data()
      });
   }); 

   return result;
}

// http://localhost:xxxx/api/shops
app.get('/api/shops', async(req, res) => {
  try {
    const snapshot = await db
      .collection("shops_new")
      .orderBy("shopName", "desc")
      .get();

    const shops = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(shops);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch shops",
      error: error.message,
    });
  }
});

app.get('/shops{/:shopId}', (req, res, next) => {
   //res.set('Content-type', 'application/json');
   try {
     let shid = Number(req.params.shopId);
     if(isNaN(shid)){
        //res.json(getShops());
        getShops().then((jsonData) => {
          res.send(jsonData);
        }).catch((error) => {
          res.send(error);
        });
        //res.json(myShop);
        //   res.send("Please provide the specific shop ID, please try again.");
        //   throw new Error('Please provide the specific shop ID, please try again.');
     }else{
      const myRes = myShop.filter(
         myObj => { return (myObj.shopId === shid) }
      );

      const isEmptyArray = Array.isArray(myRes) && myRes.length === 0;
      if(isEmptyArray){
         res.send("Shop ID not found, please try again.");
         throw new Error("Shop ID not found, please try again.");
      }

      //   let myText = '';
      //   myText+= `<h1>Shop information:</h1><hr/>`;
      //   myText+= `<b>Shop ID:</b> ${myRes[0].shopId}<br/>`;
      //   res.send(myText);
      res.json(myRes[0]); // {..}
     }
   } catch (error) {
     next(error);
   }

});

// The :id parameter is optional here
app.get('/products{/:id}', (req, res) => {
  const productId = req.params.id;
  
  if (productId) {
    res.send(`Fetching product details for ID: ${productId}`);
  } else {
    res.send('Fetching all products');
  }
});

app.listen(port, () => {
   console.log(`App listening on port ${port}.`);
});

// การอ่านข้อมูลร้านค้าจากไฟร์เบสด้วย id (Method: GET)
// Endpoint: http://localhost:xxxx/api/shops/100
app.get('/api/shops/:id', async (req, res) => {
    try {
      const doc = await db
      .collection("shops_new")
    .doc(req.params.id)
    .get();

      res.json({
  id: doc.id,
  ...doc.data(),
      });
    } catch (error) {
      res.status(500).json(
  {
    message: "FAILED: Error with retrieving shop using the shopId.",
    error: error.message
  }
      );
    }
});

// การลบข้อมูลร้านค้าจากไฟร์เบสด้วย id (Method: DELETE)
const deleteShop = async (req, res) => {
    const ShopRef = db
      .collection("shops_new")
      .doc(req.params.id);
 
    await ShopRef.delete();
 
    res.status(200).json({
      message: "Shop deleted successfully",
      id: req.params.id,
    });
}
 
// App route: /api/shops/:id (Method: DELETE)
// Endpoint: http://localhost:xxxx/api/shops/100
app.delete('/api/shops/:id', (req, res) => {
  try {
    deleteShop(req, res);
  } catch (error) {
    res.status(500).json({
      message: "Failed to deleting shop.",
      error: error.message,
    });
  }
});

// การสร้างข้อมูลร้านค้าในไฟร์เบส (Method: POST)
const createShop = async (req, res) => {
    const {
      shopName,
      shopAddress,
      shopContact,
      shopOpen,
    } = req.body;
 
    if (!shopName || !shopContact || !shopAddress) {
      return res.status(400).json({
        message: "Name, address and contact are required",
      });
    }
 
    const shopRef = await db.collection("shops_new").doc();
    const newId = shopRef.id; // Access the generated ID
 
    const newShop = {
      shopId: newId,
      shopName,
      shopAddress,
      shopContact,
      shopOpen: shopOpen === 'true',
    };
 
    const docRef = await db
      .collection("shops_new")
      .add(newShop);
 
    res.status(201).json({
      id: docRef.id,
      ...newShop,
    });
}
 
// App route: /api/shops (Method: POST)
// Endpoint: http://localhost:xxxx/api/shops
app.post('/api/shops', (req, res) => {
  try {
    createShop(req, res);
  } catch (error) {
    res.status(500).json({
      message: "Failed to adding shop.",
      error: error.message,
    });
  }
});