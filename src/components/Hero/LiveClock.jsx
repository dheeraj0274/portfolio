"use client"
import React , {useEffect , useState} from "react"

const LiveClock = ()=>{
    const [time , setTime]=useState(null);

    useEffect(()=>{
        const updateTime = ()=>{
            const now = new Date()

            setTime({
                clock: new Intl.DateTimeFormat("en-IN" , {
                    timeZone:'Asia/Kolkata',
                    hour:"2-digit",
                    minute:"2-digit",
                    second:"2-digit",
                    hour12:true
                }).format(now),
                

                date:new Intl.DateTimeFormat("en-IN" , {
                    timeZone:"Asia/Kolkata",
                    weekday:"long",
                    day:'2-digit',
                    month:"long",
                    year:"numeric"
                    
                }).format(now)
            })
        }
        updateTime()
        const interval = setInterval(updateTime , 1000)
        return ()=> clearInterval(interval)
    },[])
    return (
    <div className="flex items-center gap-4 bg-black border border-white/10 backdrop-blur-md rounded-xl p-4 max-w-[400px] mx-auto md:mx-0 hover:border-primary/60 transition duration-300">
      <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
        <span className="text-xl">🕒</span>
      </div>

      <div className="flex-1 text-left">
        <p className="text-xl font-semibold tracking-wide">
          {time ? time.clock : "--:--:--"}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {time ? time.date : "Loading date..."}
        </p>

        <p className="text-[10px] text-primary font-semibold mt-1 tracking-widest">
          INDIA STANDARD TIME · IST
        </p>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-green-400">LIVE</span>
      </div>
    </div>
  );
}
export default LiveClock