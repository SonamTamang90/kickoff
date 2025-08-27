import { Badge } from "./Badge";
import { Divider } from "./Divider";

export function Stat({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div>
      <Divider />
      <div className="mt-6 text-dark-200 text-lg/6 font-medium sm:text-sm/6">
        {title}
      </div>
      <div className="mt-3 text-3xl/8 font-semibold text-white sm:text-2xl/8">
        {value}
      </div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
        <Badge color={change.startsWith("+") ? "lime" : "pink"}>{change}</Badge>{" "}
        <span className="text-zinc-500">from last week</span>
      </div>
    </div>
  );
}
