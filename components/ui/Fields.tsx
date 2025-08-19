import { useId } from "react";
import clsx from "clsx";

const formClasses =
  "block w-full appearance-none rounded-md border border-dark-700/40 bg-dark-975 py-2.5 px-[calc(--spacing(3)-1px)] text-white placeholder:text-dark-400 focus:border-primary-500 focus:outline-hidden focus:ring-primary-500 sm:text-sm";

const Label = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">
      {children}
    </label>
  );
};

export const TextField = ({
  label,
  type = "text",
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"input">, "id"> & {
  label?: string;
}) => {
  const id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
};

export const SelectField = ({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"select">, "id"> & {
  label?: string;
}) => {
  const id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, "pr-8")} />
    </div>
  );
};
