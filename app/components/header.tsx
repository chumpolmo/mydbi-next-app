export default function Header() {
  return (
<header className="bg-white shadow-md w-full top-0 left-0 z-50">
  <nav className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
    <div className="flex">
      <img src="/images/cafe.png" style={{ width:"30px", height:"30px"  }} title="Logo web" />
      <a href="/" className="text-2xl font-bold text-indigo-600 ml-3">
        Beritokai
      </a>
    </div>

    <div className="hidden md:flex items-center gap-6 text-gray-600">
      <a href="/week03" className="hover:text-indigo-600">
        หน้าแรก
      </a>
      <a href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        ติดต่อเรา
      </a>
    </div>
  </nav>
</header>
  );
}