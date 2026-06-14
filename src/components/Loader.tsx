import { useEffect, useState } from "react";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-dark flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 text-light">
        GW<span className="text-accent">.</span>
      </h1>

      <div className="w-48 md:w-64 h-1 bg-light/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      <p className="mt-4 text-light/50 font-display text-sm tracking-widest">
        {Math.min(progress, 100)}%
      </p>
    </div>
  );
}

export default Loader;
