export function Input({ children, styles, ...props }) {
  return (
    <div className="mt-3 flex flex-col">
      <label className="text-lg my-1 font-inter font-medium"> {children} </label>
      <input
        className={`${styles} w-60 font-inter font-medium text-xs w-3/4 h-10 rounded-sm p-1`}
        type="text"
        name="name"
        placeholder="Digite sua resposta"
        {...props}
      />
    </div>
  );
}
