export function TechLogo({ name, Icon, color }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-1 text-center md:w-16 md:flex-none">
      <Icon size={28} color={color} />
      <span className="text-[10px] font-semibold leading-tight md:text-[11px]" style={{ color }}>
        {name}
      </span>
    </div>
  );
}