import clsx from "clsx";

type CardProps = {
  title: string;
  value: string;
  description?: string;
  icon: React.ReactNode;
  iconColor?:
    | "primary"
    | "blue"
    | "green"
    | "purple"
    | "yellow"
    | "red"
    | "gray";
} & React.ComponentPropsWithoutRef<"div">;

export const Card = ({
  className,
  title,
  value,
  description,
  icon,
  iconColor = "primary",
  ...props
}: CardProps) => {
  const iconColorClasses = {
    primary:
      "bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15 rounded-full",
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300",
    green: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300",
    purple:
      "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300",
    yellow:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300",
    red: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300",
    gray: "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-300",
  };

  return (
    <div
      {...props}
      className={clsx(
        className,
        "rounded-lg bg-white p-6 shadow dark:bg-dark-900 border-dark-700"
      )}
    >
      <div className="flex flex-col">
        <div
          className={clsx(
            "h-10 w-10 flex items-center justify-center mb-6",
            iconColorClasses[iconColor]
          )}
        >
          {icon}
        </div>
        <div>
          <p className="text-dark-200 text-lg/6 font-medium sm:text-sm/6">
            {title}
          </p>
          <p className="mt-3 text-3xl/8 font-semibold text-white sm:text-2xl/8">
            {value}
          </p>
          {description && (
            <p className="text-sm/6 sm:text-xs/6 text-zinc-500 dark:text-zinc-400 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
