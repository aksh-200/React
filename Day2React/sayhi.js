import { useState } from "react"

export default function SayHi()
{
   let [msg , setmsg ] = useState("Hi")
   
   function handler()
   {
    setmsg("Hello")
   }
    return(      
<>
      <button onClick={handler}>Button</button>
      <p>{msg}</p>

      </>
    )
}