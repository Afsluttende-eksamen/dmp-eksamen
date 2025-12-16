export default function BookingItem({ number, text }) {
  return (
    <div className="pb-4 border-b flex items-center gap-3 md:gap-4">
      <h3>{number}</h3>
      <h4>{text}</h4>
    </div>
  );
}
