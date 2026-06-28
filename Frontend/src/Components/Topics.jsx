

const Topics = (obj) => {
  return (
    <button style={{boxShadow:"0 4px 24px #fc0384"}} className="h-10 lg:w-30 w-25 bg-linear-to-r from-black to-pink-600 text-gray-200 rounded-lg transition-all duration-400 ease-in-out hover:to-black hover:from-pink-600 hover:-translate-y-2">
      {obj.topic}
    </button>
  )
}

export default Topics
