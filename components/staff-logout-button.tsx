"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function StaffLogoutButton() {
  async function handleLogout() {
    const supabase = createSupabaseBrowserClient();

    await supabase.auth.signOut();

    window.location.href = "/staff/login";
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-xl px-3 py-2 text-[#c9783d] hover:bg-[#fff3e8]"
    >
      تسجيل الخروج
    </button>
  );
}