"use client";
import SidebarLayout from "@/components/dashboard/SidebarLayout";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/dashboard/Sidebar";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import {
  NavBar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/dashboard/NavBar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/dashboard/Dropdown";
import { Avatar } from "@/components/dashboard/Avatar";
import { Gauge, Trophy, Users, MessageSquare, FileText, Calendar, Settings } from "lucide-react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const { logout } = useAuth();

  const pathname = usePathname();

  return (
    <SidebarLayout
      navbar={<></>}
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <Avatar src="/assets/logo.svg" />
                <SidebarLabel>Kickoff</SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
            </Dropdown>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/dashboard" current={pathname === "/dashboard"}>
                <Gauge className="w-5 h-5 text-dark-400" />
                <SidebarLabel>Dashboard</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/tournaments" current={pathname === "/tournaments"}>
                <Trophy className="w-5 h-5 text-dark-400" />
                <SidebarLabel>Tournaments</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/teams" current={pathname === "/teams"}>
                <Users className="w-5 h-5 text-dark-400" />
                <SidebarLabel>Teams</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/matches" current={pathname === "/matches"}>
                <Calendar className="w-5 h-5 text-dark-400" />
                <SidebarLabel>Matches</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/messages" current={pathname === "/messages"}>
                <MessageSquare className="w-5 h-5 text-dark-400" />
                <SidebarLabel>Messages</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/documents" current={pathname === "/documents"}>
                <FileText className="w-5 h-5 text-dark-400" />
                <SidebarLabel>Documents</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/settings" current={pathname === "/settings"}>
                <Settings className="w-5 h-5 text-dark-400" />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
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
