"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function StaffLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!username || !password) {
      setMessage("اكتب اسم المستخدم ورمز الدخول.");
      return;
    }

    setMessage("سيتم تفعيل تسجيل الدخول بعد إنشاء نظام الحسابات الآمن.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] px-4 py-10">
      <section className="w-full max-w-md rounded-[2rem] border border-[#e5dac9] bg-white p-7 text-center shadow-sm sm:p-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
          siwa 360
        </p>

        <p className="mt-6 font-bold text-[#c9783d]">دخول مخصص</p>

        <h1 className="mt-3 text-3xl font-bold text-[#315c4c]">
          الإدارة
        </h1>

        <p className="mt-4 leading-8 text-[#6c776f]">
          هذه الصفحة مخصصة للمدير والموظفين المعتمدين فقط.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-right">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-bold text-[#315c4c]"
            >
              اسم المستخدم
            </label>

            <input
              id="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="اكتب اسم المستخدم"
              required
              className="w-full rounded-2xl border border-[#e5dac9] bg-[#fdfcf9] px-4 py-3 outline-none focus:border-[#315c4c] focus:ring-4 focus:ring-[#315c4c]/10"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-[#315c4c]"
            >
              رمز الدخول
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="اكتب رمز الدخول"
              required
              className="w-full rounded-2xl border border-[#e5dac9] bg-[#fdfcf9] px-4 py-3 outline-none focus:border-[#315c4c] focus:ring-4 focus:ring-[#315c4c]/10"
            />
          </div>

          {message && (
            <p className="rounded-2xl bg-[#fffaf0] p-3 text-sm leading-6 text-[#765d32]">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#315c4c] px-6 py-4 font-bold text-white transition hover:bg-[#234338]"
          >
            تسجيل الدخول
          </button>
        </form>

        <Link
          href="/"
          className="mt-6 inline-block text-sm font-semibold text-[#315c4c] underline"
        >
          العودة إلى الموقع
        </Link>
      </section>
    </main>
  );
}