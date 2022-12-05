export default function Button({ children, styles, ...props }) {
  return (
    <button
    className={`${styles} text-xs p-2 rounded-lg font-inter font-medium`}
    {...props}
    >
      {children}
    </button>
  );
}
