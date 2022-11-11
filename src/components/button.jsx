export default function Button({children, styles, ...props}) {
    return (
        <button className={`${styles} px-4 py-3 rounded-lg mt-10 ml-10  font-bold border-4`} {...props}>
            {children}
        </button>
    )
}