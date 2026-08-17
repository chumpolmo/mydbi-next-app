import Header from "../components/header";
import Footer from "../components/footer";

export default function ToDoLists(){

   let name = "Chumpol Mokarat";
   let major = "DBI";
   let studentNo = "020169100999-9";
   let active = true;
   const role = "Student";

   const toDoItem = [
     "เรียนวิชา Web Programming",
     "เรียนวิชาวิเคราะห์ข้อมูลเชิงธุรกิจ",
     "กินข้าวมื้อเย็นที่ Central ลาดพร้าว"
   ];

   const isActive = (active: boolean) => {
        if(active == true)
           return <>{role}</>;
        else
           return <>N/A</>;
   }

   const getToDoItem = toDoItem.map((item) => {
        // <li>{item}</li>
     return (
     <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-all group">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-700">{item}</span>
      </div>
      <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg xmlns="http://w3.org" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>);
   });

   console.log("Name: ", name);

   return (
    <>
      <Header />

<div className="flex items-center justify-center mt-10">
  <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-center">
        
    {/*<!-- Name & Title -->*/}
    <h3 className="text-xl font-bold text-slate-800 mb-5">{name}</h3>
    <p className="text-sm font-medium text-lime-800 mb-3">รหัสนักศึกษา: {studentNo}</p>
    <p className="text-sm font-medium text-lime-800 mb-3">สาขาวิชา: {major}</p>
    <p className="text-sm font-medium text-lime-800 mb-3">สถานภาพ: {isActive(active)}</p>

  </div>
</div>
      {/* 
      <p>ชื่อ-สกุล: {name}</p>
      <p>รหัสนักศึกษา: {studentNo}</p>
      <p>สาขาวิชา: {major}</p>
      <p>สถานภาพนักศึกษา: {isActive(active)}</p>
      <p>บทบาท: {role}</p> */}
      <h1 className="rounded-lg text-2xl font-bold tracking-tight text-gray-900 bg-gray-100 p-3 m-5">รายการที่ต้องทำ</h1>
      <ul className="list-disc pl-5 pr-5 space-y-3 text-slate-800">
        {getToDoItem}
      </ul>
      <Footer />
    </>
   );
} 