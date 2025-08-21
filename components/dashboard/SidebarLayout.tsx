const SidebarLayout = ({
  navbar,
  sidebar,
  children,
}: React.PropsWithChildren<{
  navbar: React.ReactNode;
  sidebar: React.ReactNode;
}>) => {
  return (
    <div className="relative isolate flex min-h-svh w-full bg-black max-lg:flex-col">
      {/* Sidebar on desktop */}
      <div className="fixed inset-y-0 left-0 w-64 max-lg:hidde">{sidebar}</div>

      {/* Content */}
      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
        <div className="grow p-6 lg:bg-dark-975 lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-dark-900">
          <div className="max-auto max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;
