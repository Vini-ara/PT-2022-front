export default function Button({children, styles, ...props}) {
    return (
        <button className={`${styles} absolute -translate-y-[260px] left-1/2 -translate-x-1/2 justify-center px-5 py-2 rounded-lg  font-bold `} {...props}>
            {children}
        </button>
    )
}