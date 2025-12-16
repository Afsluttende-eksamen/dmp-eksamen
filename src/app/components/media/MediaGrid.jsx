export default function MediaGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {children}
    </div>
  );
}
