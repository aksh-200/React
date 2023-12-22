import axios from "axios"
import { useState } from "react"

export default function Ajaxfun2()
{
    let [arr,setarr]=useState([]);
    
  
let [id, setid] = useState()
let [ob,setobj] = useState([])//Here we are initializing array ;
let [strobj ,stringobj] = useState()
 


  function rows()
  {
    return arr.map((element)=>{
        
    return(
      <>
      <p>{element.id}</p>
      <tr>
       <td>
         {element.first_name}
       </td>
       <td>{element.last_name}</td>

       <td><img src={element.avatar}></img></td>
        <td><button value={element.id} onClick={getinfo}> Ok</button></td>
      </tr>
      </>
      )
    })
  }
    

function getinfo(event)
{

 setid(event.target.value);
 let ob1 = arr.filter((ele,index)=>{
 
  return ele.id == id;
})

  setobj(ob1);
  console.log( ob1);

 }


 function objfun()
 {   return ob.map((element)=>{
        
    return(
      <>
      <p>{element.id}</p>
      <tr>
       <td>
         {element.first_name}
       </td>
       <td>{element.last_name}</td>

       <td><img src={element.avatar}></img></td>
        <td><button value={element.id} > Ok</button></td>
      </tr>
      </>
      )
    })

 }
 

    function handler(){

        let promise=axios.get("https://reqres.in/api/users?page=2")
        promise.then
        ((response)=>{
        setarr(response.data.data)
    //   console.log(response.data.data)
       
    })

    promise.catch((reject)=>{console.log("reject",reject)})

   // console.log("Array is ",arr)
    //console.log("id",id)
  

    }
    
    
    return(

     <>
     <button  onClick={handler}>ok</button>
     <table>
     <tbody>
       {rows()}
     </tbody>
        
     </table>

     <hr></hr>
     
    <table>
<tbody>
    {objfun()}
</tbody>

    </table>
    
   
    
     </>
    )
}