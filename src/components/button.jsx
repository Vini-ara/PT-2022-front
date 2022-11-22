

export default function Button({children, styles, ...props}) {
    return (
        <button className={`${styles} h-8 w-24 text-xs  rounded mt-2 ml-60 mb-2 mr-10 font-medium border-4`} {...props}>
            {children} 
        // <button className={`${styles} absolute -translate-y-[260px] left-1/2 -translate-x-1/2 justify-center px-5 py-2 rounded-lg  font-bold `} {...props}>
            {children}
        </button>
    )
}