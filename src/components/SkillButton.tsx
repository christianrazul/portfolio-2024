import { ReactNode } from "react";

interface SkillButtonProps {
  children: ReactNode;
}
export const SkillButton = ({ children }: SkillButtonProps) => {
  return (
    <button className="flex gap-2 rounded-md bg-secondary-300 px-2 py-1 font-satoshi text-accent-400">
      {children}
    </button>
  );
};
