import Header from "@/components/landing/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-auto" style={{ backgroundColor: '#0a0a0b' }}>{children}</main>
    </>
  );
};

export default Layout;
