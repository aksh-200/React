import { useState } from "react";
import Hello from "./Hello"
import SayHi from "./sayhi";
import ShowMonth  from "./ShowMonth"

export default function App1()
{    
    let [col , setcolor] = useState("green");

    function handler(event)
    {   
         setcolor(event.target.value)

    }



    return(
        <>
          
        <Hello num1 = {10} color={col}></Hello>
        <input type="color"  onChange={handler}></input>
        <SayHi></SayHi>
        <ShowMonth></ShowMonth>
        </>
        

        )
}