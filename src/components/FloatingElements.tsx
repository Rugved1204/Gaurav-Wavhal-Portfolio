function FloatingElements() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-[15%] left-[20%] w-80 h-80 bg-light/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-[70%] right-[25%] w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="absolute top-[20%] right-[15%] w-4 h-4 bg-accent rounded-full animate-float" />
      <div className="absolute top-[60%] left-[10%] w-5 h-5 bg-accent rounded-full animate-float-delayed" />
      <div className="absolute bottom-[30%] right-[30%] w-4 h-4 bg-light rounded-full animate-float" />
      <div className="absolute top-[35%] left-[40%] w-4 h-4 bg-accent rounded-full animate-float-delayed" />
    </div>
  );
}

export default FloatingElements;
