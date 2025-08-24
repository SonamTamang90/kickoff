"use client";
import SidebarLayout from "@/components/dashboard/SidebarLayout";
import {
  Sidebar,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
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
import {
  UserCircle,
  Shield,
  Lightbulb,
  LogOut,
  ChevronDown,
  ChevronDownIcon,
} from "lucide-react";

function AccountDropdownMenu({
  anchor,
}: {
  anchor: "top start" | "bottom end";
}) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircle />
        <DropdownLabel>My account</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <Shield />
        <DropdownLabel>Privacy policy</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <Lightbulb />
        <DropdownLabel>Share feedback</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <LogOut />
        <DropdownLabel>Sign out</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <SidebarLayout
      navbar={
        <NavBar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/users/erica.jpg" square />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </NavBar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <Avatar src="/assets/logo.svg" />
                <SidebarLabel className="uppercase font-bold">
                  Kickoff
                </SidebarLabel>
                <ChevronDownIcon />
              </DropdownButton>
            </Dropdown>
          </SidebarHeader>
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
