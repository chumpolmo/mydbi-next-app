import Header from "../components/header";
import Footer from "../components/footer";

export default function MyWeek03(){
  
  return (
    <>
      <Header />
      <div className="mt-16 flex h-[80vh] items-top justify-center bg-blue-50 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/bg.jpg')`}}
      >
        <p className="text-white text-5xl pt-35">
          Welcome to my web application...
        </p>
      </div>
      <Footer />
    </>
  );
}