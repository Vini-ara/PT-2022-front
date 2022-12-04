export default function Button({ children, styles, ...props }) {
  return (
    <button
    className={`${styles} text-xs p-2 rounded-xl font-inter font-medium border-4`}
    {...props}
    >
      {children}
    </button>
  );
}
