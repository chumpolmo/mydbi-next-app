import Link from "next/link";
import { Suspense } from "react";
import { ShopItem } from "../components/ShopItem";
import Loading from "../components/Loading";

export default async function ShopDetail({ params }){
  // Object destructuring
  const { id } = await params;

  let shop = {};
  try {
    const response = await fetch(`http://localhost:8000/api/shops/${id}`);
    if(response.ok){
      shop = await response.json();
    }else{
      console.log(`Network response ไม่ได้กรุณาตรวจสอบ (Status: ${response.ok})`);
    }
  } catch(error) {
    console.log(`Error ระหว่างการดึงข้อมูลจาก URL ${error}`);
  }

  // const shop = ShopItem.find(
  //   item => item.id === Number(id)
  // );

   const isOpenStatus = (s: boolean) => {
      return s ? "Open" : "Closed"
   }  

  return (
    <Suspense fallback={<Loading />}>
<div className="w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold">
        Shop Detail
      </h1>

      <div
        key={shop.shopId} className="border rounded-lg p-4 m-4">
        <p className="mt-4 font-semibold">
          Shop name: {shop.shopName}
        </p>
        <p className="my-4">
          Address: {shop.shopAddress}
        </p>
        <p className="my-4">
          Contact: {shop.shopContact}
        </p>
        <p className="my-4">
          Open Status: {shop.shopOpen ? "Open" : "Closed"}
        </p>
      </div>

      <Link href="/demo" className="bg-gray-600 text-white px-4 py-2 rounded">Back</Link>

    </div>
    </Suspense>
  );

}