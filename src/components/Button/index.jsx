function DefaultButton({
  children,
  onClick,
  type = "button",
  className = "",
  style = {}
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-visible
        px-8 py-3
        md:px-12 md:py-4
        lg:px-16 lg:py-5
        rounded-full
        text-white font-bold
        text-sm
        md:text-lg
        lg:text-[22px]
        tracking-wide
        border border-black
        shadow-[0_0_20px_rgba(255,180,80,0.25)]
        hover:scale-105
        transition-all duration-300
        universe-button
        smoke-edge
        cursor-pointer
        ${className}
      `}
      style={style}
    >
      {children}
    </button>
  )
}

export default DefaultButton