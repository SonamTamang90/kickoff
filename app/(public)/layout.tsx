const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex-auto">{children}</main>
    </>
  );
};

export default Layout;
