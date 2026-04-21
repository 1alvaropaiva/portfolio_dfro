import { type ReactNode} from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const SectionCard = ({ title, children, className = "" }: SectionCardProps) => {
  return (
    <section className={`bg-accent p-8 rounded-xl shadow-sm my-8 border border-gray-100 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary pb-3 mb-6 flex items-center gap-2">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default SectionCard;
