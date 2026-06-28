
const SkillsBar = ({ language, percentage, isIntersecting }) => {
  const width = isIntersecting ? percentage : 0;

  return (
    <div className="h-full w-full flex flex-col justify-center items-center lg:gap-0.5 gap-2">
      <div className="h-1/3 w-full flex justify-between pl-2">
        <h2 className="text-start text-gray-300 font-semibold lg:text-sm text-xs">{language}</h2>
        <h3 className="text-end text-pink-600 font-medium lg:text-sm text-xs">{percentage}%</h3>
      </div>
      <div className="h-1/6 w-full rounded-3xl border-2 border-pink-600 flex relative overflow-hidden">
        <div
          style={{ width: `${width}%` }}
          className="absolute inset-y-0 left-0 h-full rounded-l-3xl bg-pink-600 transition-all duration-1000 ease-in-out"
        ></div>
      </div>
    </div>
  )
}

export default SkillsBar
