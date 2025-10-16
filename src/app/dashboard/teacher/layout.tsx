import Navbar from "@/components/Dashboard/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Navbar/>
        { children }
    </div>
  );
}
