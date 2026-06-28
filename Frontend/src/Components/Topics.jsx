

const Topics = (obj) => {
  return (
    <button style={{boxShadow:"0 4px 24px #e06f12"}} className="h-10 w-30 bg-linear-to-r from-black to-orange-500 text-gray-200 rounded-lg transition-all duration-400 ease-in-out hover:to-black hover:from-orange-500 hover:-translate-y-2">
      {obj.topic}
    </button>
  )
}

export default Topics
