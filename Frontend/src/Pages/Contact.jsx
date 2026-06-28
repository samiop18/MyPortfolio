
import { Minus, Square, X, Send } from 'lucide-react';
import Social from "../Components/Social";
import ContactBG from "../Components/ContactBG"
import axios from "axios"
import { useState } from 'react'
import Loader from '../Components/Loader'

const Contact = () => {

  const [popout, setPopout] = useState(false)
  const [buffer, setBuffer] = useState(false)

  const popoutHandler = () => {
    setPopout(!popout)

  }


  const submiteHandler = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    setBuffer(true)

    axios.post("https://samitesh-portfolio-backend.vercel.app/api/send", data)
      .then((res) => {
        setBuffer(false)
        popoutHandler()
        console.log(res)
        console.log("message uploaded successfully")
        e.target.reset()
      })
      .catch((err) => {
        setBuffer(false)
        console.log(err)
        console.log("error uploading the message")
      })
  }
  return (
    <section id="contact" className=" relative h-screen w-full bg-transparent flex flex-col justify-center items-center gap-10">
      <ContactBG />
      <h1 className="z-40 text-5xl text-gray-200 font-extrabold mt-10">Get in <span className="text-pink-600">touch</span></h1>
      <div className="z-40 h-[50%] w-[95%] lg:w-[80%] flex flex-col lg:flex-row justify-center items-center gap-10">


        <div className="hidden lg:flex flex-col h-full w-6/10 border-2 border-pink-600 bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[0px_4px_24px_rgba(22,163,74,0.4)]">

          <div className="h-10 w-full bg-[#323233] flex flex-row items-center justify-between px-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-xs font-mono">contact.json - VS Code</div>
            <div className="flex gap-3 text-gray-400">
              <Minus size={16} className="cursor-pointer hover:text-white transition-colors" />
              <Square size={14} className="cursor-pointer hover:text-white transition-colors" />
              <X size={16} className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div className="flex-1 w-full p-4 lg:p-6 font-mono text-sm lg:text-base overflow-auto">
            <div className="flex">
              <div className="flex flex-col text-gray-500 select-none pr-4 text-right border-r border-gray-700 mr-4">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-300"><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">contactDetails</span> <span className="text-[#56b6c2]">=</span> {"{"}</div>
                <div className="ml-6 mt-1"><span className="text-green-500">"name"</span><span className="text-gray-300">:</span> <span className="text-pink-500">"Samitesh Panda"</span><span className="text-gray-300">,</span></div>
                <div className="ml-6 mt-1"><span className="text-green-500">"email"</span><span className="text-gray-300">:</span> <span className="text-pink-500">"samiteshpanda@gmail.com"</span><span className="text-gray-300">,</span></div>
                <div className="ml-6 mt-1"><span className="text-green-500">"phone"</span><span className="text-gray-300">:</span> <span className="text-pink-500">"+91 70080 24595"</span><span className="text-gray-300">,</span></div>
                <div className="ml-6 mt-1"><span className="text-green-500">"location"</span><span className="text-gray-300">:</span> <span className="text-pink-500">"Odisha, India"</span><span className="text-gray-300">,</span></div>
                <div className="ml-6 mt-1"><span className="text-green-500">"socials"</span><span className="text-gray-300">:</span> {"{"}</div>
                <div className="ml-12 mt-1"><span className="text-green-500">"github"</span><span className="text-gray-300">:</span> <span className="text-pink-500">"github.com/samiop18"</span><span className="text-gray-300">,</span></div>
                <div className="ml-12 mt-1"><span className="text-green-500">"linkedin"</span><span className="text-gray-300">:</span> <span className="text-pink-500">"linkedin.com/in/samitesh"</span></div>
                <div className="ml-6 mt-1 text-gray-300">{"}"}</div>
                <div className="text-gray-300 mt-1">{"}"}<span className="text-[#56b6c2]">;</span></div>
              </div>
            </div>
          </div>
        </div>


        <div className="relative h-full w-8/10 lg:w-4/10 rounded-3xl p-6 lg:p-8 flex flex-col justify-center items-center">
          <div className="rounded-3xl absolute inset-0 h-full w-full z-10 bg-linear-to-r to-pink-900 from-black border-0 border-l-8 border-pink-700 flex items-center flex-col justify-center gap-4">
            <h1 className="text-2xl text-pink-600 font-bold text-center ">Send A<span className="text-gray-300"> Message</span></h1>
            <form
              onSubmit={(e) => {
                submiteHandler(e);

              }}
              className="h-8/10 w-9/10 flex flex-col items-center justify-center gap-1">
              <label htmlFor="name" className="text-pink-600 font-bold text-start w-8/10">Your Name</label>
              <input type='text' id='name' name='name' placeholder="" className="border-pink-600 border-3 w-8/10 rounded-3xl bg-black text-gray-300 flex px-3 mb-2"></input>
              <label htmlFor="email" className="text-pink-600 font-bold text-start w-8/10">Your Email</label>
              <input type='text' id='email' name='email' placeholder="" className="border-pink-600 border-3 w-8/10 rounded-3xl bg-black text-gray-300 flex px-3 mb-2"></input>
              <label htmlFor="message" className="text-pink-600 font-bold text-start w-8/10">Message</label>
              <textarea id='message' name='message' placeholder="" className="border-pink-600 border-3 w-8/10 rounded-3xl h-1/5 bg-black text-gray-300 flex px-3 py-2 mb-2 resize-none"></textarea>

              <button type="submit" className="relative w-1/2 h-10 mt-2 flex items-center justify-center gap-1 bg-linear-to-r from-pink-800 to-black py-3 px-6 rounded-3xl text-bold text-sm text-gray-300 border-0 border-r-8 border-pink-600 transition-all duration-200 ease hover:from-black hover:to-pink-700 hover:border-r-0 hover:border-l-8 active:scale-105">{buffer ? <Loader /> : <span className='flex items-center justify-center'>Send Message <Send /></span>}</button>

            </form>

          </div>



          <div className={`absolute inset-0 z-40 bg-transparent backdrop-blur-sm rounded-3xl flex items-center justify-center transition-all duration-300 ease-in-out ${popout ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <div style={{boxShadow : "0 4px 24px #fc0384"}}className={`w-11/12 md:w-1/2 lg:w-2/3 rounded-3xl border-4 border-pink-600 flex flex-col items-center justify-center gap-6 p-8 bg-linear-to-r from-pink-900 to-black shadow-2xl shadow-pink-600/20 text-center transition-all duration-300 ease-in-out ${popout ? "scale-100 translate-y-0" : "scale-95 translate-y-10"}`}>
              <h1 className="text-lg text-gray-200 font-bold">Message Sent Successfully!</h1>
              <button onClick={popoutHandler} className="px-8 py-2 mt-2 rounded-3xl bg-pink-600 text-gray-200 font-bold cursor-pointer hover:bg-pink-700 transition-all hover:scale-105">OK</button>
            </div>
          </div>


        </div>


      </div>
      <div className="z-20 flex flex-col h-1/8 w-4/10  gap-1">
        <Social />
        <h1 className="text-xs text-gray-300 text-center mt-3">Samitesh Panda | MERN Stack developer</h1>
      </div>
    </section>
  )
}

export default Contact
