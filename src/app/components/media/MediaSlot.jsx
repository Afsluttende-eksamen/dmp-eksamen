export default function MediaSlot({ size = "normal", children }) {
  const sizeClasses = size === "large" 
    ? "md:col-span-2 md:row-span-2 h-[300px] md:h-[525px]" 
    : "h-[300px] md:h-[250px]";

  return (
    <div className={`overflow-hidden rounded-3xl ${sizeClasses}`}>
      {children}
    </div>
  );
}