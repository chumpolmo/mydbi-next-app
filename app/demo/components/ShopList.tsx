'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ShopList({ data }){

  const router = useRouter();

  // State variables      
  const [keyword, setKeyword] = useState(''); 

  const filterShop = data.filter(
    item => {
        const searchText = keyword.toLowerCase();
        return item.shopName.toLowerCase().includes(searchText);
    }
  );

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this shop?"
    );
    if (!confirmed) return;
    try {
      const response = await fetch(
        `http://localhost:8000/api/shops/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete Shop");
      }
      router.refresh();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
<div className="max-w-3xl ma-auto p-6">
      {/* Search */}
      <div className="mb-6">

        <input
          type="text"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Search shop..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-4 mb-4 text-gray-600">
            Found {filterShop.length} shop(s)
        </div>

<div className="flex justify-between items-center">
  <Link href="/demo/new"
    className="bg-green-600 text-white px-4 py-2 rounded-lg mb-3">
    + Add New
  </Link>
</div>

        <div className="space-y-4">
        {
        /* Display shop */
        filterShop.map(shop => (
          <div key={shop.shopId} className="border rounded-lg p-4">
            <h2 className="font-semibold">
                {shop.shopName}
            </h2>
            <p>Open status: {shop.shopOpen?"Open":"Closed"}</p>
            <Link href={`/demo/${shop.id}`}
            className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded">
            View Detail
            </Link>

            <Link href={`/demo/${shop.id}/edit`}
              className="inline-block ms-1 bg-yellow-500 text-white px-4 py-2 rounded">
              Update
            </Link>

            <button
              onClick={(e)=>handleDelete(`${shop.id}`)}
              className="ms-1 bg-red-500 text-white px-3 py-2 rounded"
            >
            Delete
            </button>
          </div>
        ))
        }
        </div>

      </div>
</div>
  );
}