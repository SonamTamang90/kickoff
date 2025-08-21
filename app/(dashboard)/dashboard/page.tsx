"use client";
import SidebarLayout from "@/components/dashboard/SidebarLayout";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/Button";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <SidebarLayout
      navbar={<nav>Side nav links</nav>}
      sidebar={<Sidebar></Sidebar>}
    >
      <h1 className="text-dark-200 uppercase font-heading tracking-wider font-bold">
        Side Bar
      </h1>
      <Button
        onClick={logout}
        className="mt-8 uppercase font-bold cursor-pointer"
      >
        Sign Out
      </Button>
    </SidebarLayout>
  );
};

export default Dashboard;
