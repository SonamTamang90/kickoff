import { Card } from "@/components/dashboard/Card";
import { Heading, Subheading } from "@/components/dashboard/Heading";
import { Select } from "@/components/dashboard/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/dashboard/Table";
import { getRecentTournaments } from "@/lib/data";
import { MedalIcon, Trophy, UsersRound, Volleyball } from "lucide-react";

const DashboardPage = async () => {
  const tournaments = await getRecentTournaments();
  return (
    <>
      <Heading>Good Morning, Sonam</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overview</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Active Tournaments"
          value="23"
          description="4 new this month"
          iconColor="primary"
          icon={<Trophy />}
        />
        <Card
          title="Registered Teams"
          value="148"
          description="12 pending approval"
          iconColor="primary"
          icon={<UsersRound />}
        />
        <Card
          title="Upcoming Matches"
          value="8"
          description="3 today"
          iconColor="primary"
          icon={<Volleyball />}
        />
        <Card
          title="Completed Tournaments"
          value="27"
          description="4 this month"
          iconColor="primary"
          icon={<MedalIcon />}
        />
      </div>
      <Subheading className="mt-14">Recent Tournaments</Subheading>
      <Table className="mt-4 [--guter:--spacing(6)] lg:[--gutter:--spacing(10)]">
        <TableHead>
          <TableHeader>Tournament</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Start Date</TableHeader>
          <TableHeader>Teams</TableHeader>
          <TableHeader>Organizer</TableHeader>
        </TableHead>
        <TableBody>
          {tournaments.map((tournament) => (
            <TableRow
              key={tournament.id}
              href={tournament.url}
              title={`Tournament #${tournament.id}`}
            >
              <TableCell>{tournament.name}</TableCell>
              <TableCell>{tournament.status}</TableCell>
              <TableCell>{tournament.startDate}</TableCell>
              <TableCell>{tournament.teams}/{tournament.maxTeams}</TableCell>
              <TableCell>{tournament.organizer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DashboardPage;
