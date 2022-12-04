export function DisabledInput({ children, styles, answer }) {
  return (
    <div className="mt-3 flex flex-col">
      <label className="text-lg my-1 font-inter font-medium"> {children} </label>
      <input
        className={`${styles} bg-black-200 font-inter font-medium text-xs w-3/4 h-10 rounded-sm p-1 border-2 border-dark-gray`}
        type="text"
        name="name"
        placeholder={answer}
        disabled
      />
    </div>
  );
}

export function InputDescription({ children, styles, answer, ...props }) {
  return (
    <div className="mt-3 flex flex-col">
      <label className="text-xl my-1 font-inter font-medium"> {children[0]} </label>
      <label className="text-lg my-1 font-inter font-medium text-dark-gray"> {children[1]} </label>
      <input
        className={`${styles} font-inter font-medium text-xs w-3/4 h-10 rounded-sm p-1 focus:outline-none focus:border-sky-500 border-2 border-dark-gray`}
        type="text"
        name="name"
        placeholder={answer}
        {...props}
      />
    </div>
  );
}

export function DisabledInputDescription({ children, styles, answer, ...props }) {
  return (
    <div className="mt-3 flex flex-col">
      <label className="text-xl my-1 font-inter font-medium"> {children[0]} </label>
      <label className="text-lg my-1 font-inter font-medium text-dark-gray"> {children[1]} </label>
      <input
        className={`${styles} font-inter font-medium text-xs w-3/4 h-10 rounded-sm p-1 focus:outline-none focus:border-sky-500 border-2 border-dark-gray`}
        type="text"
        name="name"
        placeholder={answer}
        {...props}
        disabled
      />
    </div>
  );
}

export function Input({ children, styles, answer, ...props }) {
  return (
    <div className="mt-3 flex flex-col">
      <label className="text-lg my-1 font-inter font-medium"> {children} </label>
      <input
        className={`${styles} font-inter font-medium text-xs w-3/4 h-10 rounded-sm p-1 focus:outline-none focus:border-sky-500 border-2 border-dark-gray`}
        type="text"
        name="name"
        placeholder={answer}
        {...props}
      />
    </div>
  );
}
