export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none text-black opacity-[0.04] dark:text-white dark:opacity-[0.05]"
    >
      <div
        className="grid-pattern absolute inset-0"
        style={{ color: "currentColor" }}
      />
    </div>
  );
}
