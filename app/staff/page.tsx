import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function StaffDashboardPage() {
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

  const { count } = await supabase
    .from("member_profiles")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending");

  return (
    <main className="container-page py-10">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[2rem] border border-[#e5dac9] bg-white p-7 shadow-sm">
          <p className="text-sm font-bold text-[#c9783d]">
            مرحبًا، {staff.display_name}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#315c4c]">
            طلبات التسجيل
          </h1>

          <p className="mt-4 leading-8 text-[#6c776f]">
            هذه المساحة مخصصة لمراجعة طلبات الأعضاء والتحقق منها. صلاحيات
            الموظف محدودة بالمراجعة والتوثيق، أما إدارة الحسابات والصلاحيات
            فمخصصة للمدير.
          </p>
        </section>

        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl border border-[#e5dac9] bg-white p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-[#315c4c]">{count ?? 0}</p>
            <p className="mt-2 text-sm text-[#6c776f]">
              طلبات بانتظار المراجعة
            </p>
          </div>

          <div className="rounded-3xl border border-[#e5dac9] bg-white p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-[#315c4c]">—</p>
            <p className="mt-2 text-sm text-[#6c776f]">طلبات مقبولة</p>
          </div>

          <div className="rounded-3xl border border-[#e5dac9] bg-white p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-[#315c4c]">—</p>
            <p className="mt-2 text-sm text-[#6c776f]">طلبات تحتاج تعديلًا</p>
          </div>
        </div>

        <section className="mt-7 rounded-3xl border border-[#e5dac9] bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-[#315c4c]">
            المرحلة التالية
          </h2>

          <p className="mt-3 leading-8 text-[#6c776f]">
            سنضيف هنا جدول الطلبات، والبحث، والتصفية حسب المنطقة، ومراجعة صور
            الوجه والخلف، وأزرار القبول أو طلب التعديل.
          </p>
        </section>
      </div>
    </main>
  );
}