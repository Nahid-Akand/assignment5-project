import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-pink-200 hover:shadow-lg">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {technology.badge}
        </span>
      </div>

    
      <div className="mt-5 flex-1">
        <h3 className="text-xl font-bold text-slate-900">
          {technology.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {technology.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {technology.category}
          </span>

          <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
            {technology.difficulty}
          </span>
        </div>
      </div>

     
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-semibold text-slate-700">
            {technology.rating}
          </span>
        </div>

        <button
          type="button"
          disabled={isAdded}
          onClick={() => onAdd(technology)}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:-translate-y-0.5 hover:shadow-md"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}