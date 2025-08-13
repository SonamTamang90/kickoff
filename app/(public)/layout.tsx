import Header from "@/components/landing/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
    </>
  );
};

export default Layout;
