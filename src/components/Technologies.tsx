import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technology data.");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies have been removed from your stack.");
  };

  if (loading) {
    return (
      <section
        id="technologies"
        className="bg-slate-50 px-4 py-20"
      >
        <div className="mx-auto flex min-h-72 max-w-7xl items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <span className="loading loading-spinner loading-lg text-pink-500" />

            <p className="text-sm font-medium text-slate-600">
              Loading technologies...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore The{" "}
         <span className="text-[#EC4899]">Technologies</span>
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

       
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
       
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
         {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={handleAdd}
              />
            ))}
          </div>

          
          <YourStack
        stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}