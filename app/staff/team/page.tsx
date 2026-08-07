import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function StaffTeamPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/staff/login");
  }

  const { data: staff } = await supabase
    .from("staff_profiles")
    .select("role, active")
    .eq("id", user.id)
    .single();

  if (!staff?.active || staff.role !== "admin") {
    redirect("/staff");
  }

  return (
    <main className="container-page py-10">
      <div className="mx-auto max-w-5xl">
        <section className="rounded-[2rem] border border-[#e5dac9] bg-white p-7 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
            siwa 360
          </p>

          <h1 className="mt-4 text-3xl font-bold text-[#315c4c]">
            إدارة المستخدمين
          </h1>

          <p className="mt-4 leading-8 text-[#6c776f]">
            هذه الصفحة للمدير فقط. ستسمح لاحقًا بإضافة موظف مراجعة، تعطيل حساب،
            تغيير الدور، وإعادة ضبط بيانات الدخول وفق إجراءات آمنة.
          </p>

          <div className="mt-7 rounded-2xl bg-[#f8f5ef] p-5 text-sm leading-7 text-[#6c776f]">
            لم نفعّل إضافة الموظفين من الواجهة بعد. الحساب الإداري الأول يجب
            إنشاؤه يدويًا من Supabase Dashboard أو عبر إجراء خادم محمي، حتى لا
            يستطيع أي زائر إنشاء حساب مدير.
          </div>
        </section>
      </div>
    </main>
  );
}