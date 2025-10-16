import Aside from "@/components/Dashboard/Aside/Aside";
import Footer from "./Footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12">
      <Aside />
      <main className="col-span-12 lg:ml-[20%] xl:ml-[19%]">
        {children}
        <Footer/>
      </main>
    </div>
  );
}
