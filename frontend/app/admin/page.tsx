import { Bike, MessageSquare, Star, TrendingUp } from "lucide-react";
import { bikesData } from "@/lib/data/bikes";

const stats = [
  {
    label: "Total Bikes",
    value: bikesData.length,
    icon: Bike,
    change: "In catalog",
  },
  {
    label: "Featured",
    value: bikesData.filter((b) => b.featured).length,
    icon: Star,
    change: "On homepage",
  },
  {
    label: "Inquiries",
    value: "—",
    icon: MessageSquare,
    change: "Connect API",
  },
  {
    label: "Categories",
    value: new Set(bikesData.map((b) => b.category)).size,
    icon: TrendingUp,
    change: "Active",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <p className="mt-1 text-gray-text">Manage your TVS showroom content</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="h-8 w-8 text-tvs-red" />
              <span className="text-xs text-gray-text">{stat.change}</span>
            </div>
            <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-text">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
        <h2 className="text-lg font-bold text-white">Quick Actions</h2>
        <p className="mt-2 text-sm text-gray-text">
          Full CRUD operations will connect to the backend API once PostgreSQL is configured.
          Use <code className="rounded bg-white/10 px-1.5 py-0.5 text-tvs-red">npm run db:seed</code> to populate the database.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-text">
          <li>• Add / edit / delete bikes</li>
          <li>• Upload bike images</li>
          <li>• Manage featured bikes</li>
          <li>• View customer inquiries</li>
          <li>• Update finance options</li>
        </ul>
      </div>
    </div>
  );
}
