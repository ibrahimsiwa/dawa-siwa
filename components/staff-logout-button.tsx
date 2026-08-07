"use client";

export default function StaffLogoutButton() {
  return (
    <button
      type="button"
      className="rounded-xl px-3 py-2 text-[#c9783d] hover:bg-[#fff3e8]"
      onClick={() => {
        window.location.href = "/staff/login";
      }}
    >
      تسجيل الخروج
    </button>
  );
}
