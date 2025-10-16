import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import ReduxProvider from "@/Providers/ReduxProvider";
import AuthProvider from "@/Providers/AuthProvider";
import ToastProvider from "@/Providers/Toastprovider";
import CleanUpCookies from "@/Providers/CleanUpCookies";
import ScrollButtonToTop from "@/components/ScrollButtonToTop/ScrollButtonToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="@container overflow-hidden relative">
        <ReduxProvider>
          <AuthProvider>
            <CleanUpCookies>
              <ToastProvider>
                <Navbar />
                {children}
                <ScrollButtonToTop />
              </ToastProvider>
              <Footer />
            </CleanUpCookies>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
