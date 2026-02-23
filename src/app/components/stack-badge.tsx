import StackIcon from "tech-stack-icons";

type StackBadgeProps = {
  iconTitle: string;
};

export function StackBadge({ iconTitle }: StackBadgeProps) {
  return (
    <div className="flex max-h-6 p-2.5 gap-2.5 border border-white rounded-full justify-center items-center bg-white/20">
      <StackIcon name={iconTitle.toLocaleLowerCase()} className="size-2.5" />
      <pre className="text-white text-[10px]">{iconTitle}</pre>
    </div>
  );
}
