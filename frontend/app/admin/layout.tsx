import Link from "next/link";
import {
  LayoutDashboard,
  Bike,
  MessageSquare,
  CreditCard,
  Home,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/bikes", label: "Bikes", icon: Bike },
  { href: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
  { href: "/admin/finance", label: "Finance", icon: CreditCard },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0B]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/[0.08] bg-[#121212] lg:block">
        <div className="flex h-16 items-center border-b border-white/[0.08] px-6">
          <Link href="/admin" className="text-lg font-bold text-white">
            Admin<span className="text-tvs-red">Panel</span>
          </Link>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-text transition-colors hover:bg-white/5 hover:text-white"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
          <Link
            href="/"
            className="mt-6 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-text transition-colors hover:bg-white/5 hover:text-white"
          >
            <Home className="h-4 w-4" />
            Back to Site
          </Link>
        </nav>
      </aside>

      <main className="flex-1 lg:ml-64">
        <div className="border-b border-white/[0.08] bg-[#121212] px-6 py-4 lg:hidden">
          <Link href="/admin" className="text-lg font-bold text-white">
            Admin Panel
          </Link>
        </div>
        <div className="p-6 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
