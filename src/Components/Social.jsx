import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon ,LinkedinIcon, LeetcodeIcon} from "@hugeicons/core-free-icons";
const Social = () => {
  return (
    <div className="h-12 w-full flex justify-center items-center gap-4">
      <a href="#" className="text-white font-extrabold flex items-center justify-center text-center rounded-full bg-green-700 h-12 w-12 transition-all duration-300 ease-in-out hover:-translate-y-2 active:scale-80 hover:bg-green-600"><HugeiconsIcon icon={GithubIcon} size={24} strokeWidth={2}/></a>
      <a href="#" className="text-white font-extrabold flex items-center justify-center text-center rounded-full bg-green-700 h-12 w-12 transition-all duration-300 ease-in-out hover:-translate-y-2 active:scale-80 hover:bg-green-600"><HugeiconsIcon icon={LinkedinIcon} size={24} strokeWidth={2} /></a>
      <a href="#" className="text-white font-extrabold flex items-center justify-center text-center rounded-full bg-green-700 h-12 w-12 transition-all duration-300 ease-in-out hover:-translate-y-2 active:scale-80 hover:bg-green-600"><HugeiconsIcon icon={LeetcodeIcon} size={24} strokeWidth={2}/></a>
    </div>
  )
}

export default Social

