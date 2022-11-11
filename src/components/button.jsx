

export default function Button({children, bgColor, textColor, borderColor, ...props}) {
    return (
        <button className={`${bgColor} px-4 py-3 rounded-lg mt-10 ml-10 ${textColor} font-bold border-4 ${borderColor}`} {...props}>
            {children}
        </button>
    )
}