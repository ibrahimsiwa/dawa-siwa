import Link from "next/link";
import { ReactNode } from "react";
import StaffLogoutButton from "@/components/staff-logout-button";

export default function StaffLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f5ef]">
      <header className="border-b border-[#e5dac9] bg-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
              siwa 360
            </p>

            <p className="mt-1 font-bold text-[#315c4c]">دعوة — الإدارة</p>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#315c4c]">
            <Link
              href="/staff"
              className="rounded-xl px-3 py-2 hover:bg-[#f8f5ef]"
            >
              الطلبات
            </Link>

            <Link
              href="/staff/account"
              className="rounded-xl px-3 py-2 hover:bg-[#f8f5ef]"
            >
              حسابي
            </Link>

            <Link
              href="/staff/team"
              className="rounded-xl px-3 py-2 hover:bg-[#f8f5ef]"
            >
              المستخدمون
            </Link>

            <StaffLogoutButton />
          </nav>
        </div>
      </header>

      {children}
    </div>
  );
}