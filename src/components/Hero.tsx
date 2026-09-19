import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">    {/* Hero Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
      <span className="brand-gradient-text block">
        Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options,
         compare them side by side, and put together the stack that fits your
    next project.
          </p>

        
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="brand-gradient rounded-full px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition duration-200 hover:border-[#DB2777] hover:text-[#DB2777]"
            >
              Learn More
            </a>
          </div>
        </div>

    
        <div className="relative flex justify-center lg:justify-end">
        <img
            src={bannerStack}
            alt="DevStack development technology stack"
            className="w-full max-w-lg object-contain"
          />
        </div>
   </div>
    </section>
  );
}