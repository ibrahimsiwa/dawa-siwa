import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function StaffAccountPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/staff/login");
  }

  const { data: staff } = await supabase
    .from("staff_profiles")
    .select("display_name, role, active")
    .eq("id", user.id)
    .single();

  if (!staff?.active) {
    redirect("/staff/login");
  }

  return (
    <main className="container-page py-10">
      <div className="mx-auto max-w-3xl">
        <section className="rounded-[2rem] border border-[#e5dac9] bg-white p-7 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
            siwa 360
          </p>

          <h1 className="mt-4 text-3xl font-bold text-[#315c4c]">
            إعدادات الحساب
          </h1>

          <p className="mt-4 leading-8 text-[#6c776f]">
            هذه الصفحة مخصصة لإدارة بيانات حسابك. سيتم تفعيل تغيير الاسم والبريد
            ورمز الدخول بعد ربط النماذج بإجراءات الخادم الآمنة.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#f8f5ef] p-5">
              <p className="text-sm text-[#6c776f]">اسم العرض</p>
              <p className="mt-2 font-bold text-[#315c4c]">
                {staff.display_name}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f8f5ef] p-5">
              <p className="text-sm text-[#6c776f]">الدور</p>
              <p className="mt-2 font-bold text-[#315c4c]">
                {staff.role === "admin" ? "مدير" : "موظف مراجعة"}
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-[#f1dfbb] bg-[#fffaf0] p-5 text-sm leading-7 text-[#765d32]">
            لا نضع نموذج تغيير كلمة المرور في الواجهة قبل إكمال إجراءات التحقق
            وإعادة المصادقة؛ لأن تغيير بيانات الدخول عملية حساسة ويجب حمايتها
            بجلسة حديثة وقيود إضافية.
          </div>
        </section>
      </div>
    </main>
  );
}