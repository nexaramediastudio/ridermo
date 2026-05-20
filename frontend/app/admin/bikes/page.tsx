import Link from "next/link";
import { Plus, Pencil } from "lucide-react";
import { bikesData, formatPrice } from "@/lib/data/bikes";

export default function AdminBikesPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Bikes</h1>
          <p className="mt-1 text-gray-text">Manage your TVS inventory</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-tvs-red px-5 py-2.5 text-sm font-semibold text-white opacity-60"
          disabled
          title="Connect database to enable"
        >
          <Plus className="h-4 w-4" />
          Add Bike
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-white/[0.08] bg-white/[0.03]">
            <tr>
              <th className="px-6 py-4 font-semibold text-white">Name</th>
              <th className="hidden px-6 py-4 font-semibold text-white md:table-cell">Category</th>
              <th className="hidden px-6 py-4 font-semibold text-white sm:table-cell">CC</th>
              <th className="px-6 py-4 font-semibold text-white">Price</th>
              <th className="px-6 py-4 font-semibold text-white">Featured</th>
              <th className="px-6 py-4 font-semibold text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bikesData.map((bike) => (
              <tr key={bike.id} className="border-b border-white/[0.05] hover:bg-white/[0.02]">
                <td className="px-6 py-4 font-medium text-white">{bike.name}</td>
                <td className="hidden px-6 py-4 text-gray-text md:table-cell">{bike.category}</td>
                <td className="hidden px-6 py-4 text-gray-text sm:table-cell">{bike.engineCc}</td>
                <td className="px-6 py-4 text-gray-text">{formatPrice(bike.price)}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      bike.featured
                        ? "bg-tvs-red/20 text-tvs-red"
                        : "bg-white/5 text-gray-text"
                    }`}
                  >
                    {bike.featured ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/bikes/${bike.slug}`}
                      className="text-gray-text hover:text-white"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      className="text-gray-text opacity-50"
                      disabled
                      title="Connect database to enable"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
