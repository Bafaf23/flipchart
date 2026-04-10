const Logo = ({ className = "text-slate-500" }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-600 p-1">
        <span className="font-bold text-white">DEV</span>
      </div>
      <h1 className={`text-xl font-bold tracking-tight ${className}`}>
        BRYANT
      </h1>
    </div>
  );
};

export default Logo;
