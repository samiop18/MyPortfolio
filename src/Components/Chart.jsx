import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import LeetcodeProgress from "../Data/LeetcodeProgress"
ChartJS.register(ArcElement, Tooltip, Legend)

const Chart = () => {
  const totalQuestions = LeetcodeProgress.totalQuestions

  const options = {
    cutout: "75%", 
    plugins: {
      legend: {
        display: false, 
      },
    },
    maintainAspectRatio: false,
  }

  return (
    
    <div className="h-2/3 w-1/2 bg-transparent flex flex-row relative lg:scale-120 scale-110 transition-all duration-200 ease-in-out hover:scale-130">
      
      <Doughnut 
        options={options}
        data={{
          labels: ["easy", "medium", "hard"],
          datasets: [
            {
              label: "questions",
              data: [LeetcodeProgress.easy, LeetcodeProgress.medium, LeetcodeProgress.hard],
              backgroundColor: [
                "#0acc0d",
                "#db8814",
                "#e32c0b"
              ],
              borderColor: "transparent", 
              borderRadius: 1,
              spacing: 5 
            }
          ]
        }}     
      />

     
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none font-mono text-white">
        <span className="text-2xl font-extrabold tracking-tight">{totalQuestions}</span>
        <span className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Solved</span>
      </div>

    </div>
  )
}

export default Chart