import PetForm from "./components/petForm";

export default function Demo() {

  const addTask = () => {
    console.log("Add task.");
  }

  const editingTask = () => {
    console.log("Editing task.");
  }

  const updateTask = () => {
    console.log("Update task.");
  }

  return (
  <div>
    
    <PetForm />

    <div className="border-b border-gray-200 p-4">
        <h2 className="text-2xl font-semibold text-gray-800">รายการสมุนไพรในระบบ</h2>
    </div>
    <div className="p-6 max-w-full mx-auto">
      <div className="overflow-x-auto rounded-xl shadow-md bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white text-sm uppercase tracking-wider">
              <th className="px-6 py-4">ชื่อสมุนไพร</th>
              <th className="px-6 py-4">ประเภท</th>
              <th className="px-6 py-4">ผู้ผลิต</th>
              <th className="px-6 py-4">ดำเนินการ</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">มะกรูด</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-3 rounded">ใช้ภายนอก</span></td>
              <td className="px-6 py-4">สมชาย ใจดี</td>
              <td className="px-6 py-4">
                <button 
                className="ms-2 px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-700 transition">ลบ</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">ฟ้าทะลายโจร</td>
              <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-3 rounded">ใช้ภายในและภายนอก</span></td>
              <td className="px-6 py-4">มงคล สุขใจ</td>
              <td className="px-6 py-4">
                <button 
                className="ms-2 px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-700 transition">ลบ</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">ขมิ้นชัน</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-3 rounded">ใช้ภายนอก</span></td>
              <td className="px-6 py-4">สมหญิง รักงาน</td>
              <td className="px-6 py-4">
                <button 
                className="ms-2 px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-red-700 transition">ลบ</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <hr className="my-4 border-blue-gray-50" />
    <div color="blue-gray" className="text-center font-normal my-4">
        &copy; 2026 By ชื่อ-สกุล: xxx xxx รหัสนักศึกษา: xxxxxxxxxxxx-x
    </div>
  </div>
  );
}