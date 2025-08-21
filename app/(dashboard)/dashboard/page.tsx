"use client";
import SidebarLayout from "@/components/dashboard/SidebarLayout";
import { Sidebar } from "@/components/dashboard/Sidebar";

const Dashboard = () => {
  return (
    <SidebarLayout
      navbar={<nav>Side nav links</nav>}
      sidebar={<Sidebar></Sidebar>}
    >
      <h1 className="text-dark-200 uppercase font-heading tracking-wider font-bold">
        Side Bar
      </h1>
    </SidebarLayout>
  );
};

export default Dashboard;
