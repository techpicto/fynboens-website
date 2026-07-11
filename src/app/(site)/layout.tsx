import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <div className="pb-20 lg:pb-0">
        <Footer />
      </div>
      <MobileBookingBar />
    </>
  );
}
