import type { Technology } from "../types/technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {stack.length}{" "}
            {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
      </div>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-5 py-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
            +
          </div>

          <p className="mt-4 text-sm font-medium text-slate-700">
            Your stack is empty
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                  <img
                    src={technology.icon}
                    alt={`${technology.name} icon`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-white hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full rounded-lg border border-slate-200 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-50 hover:text-pink-700"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}