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
     
      <tr>
       {/* <td>
         {element.first_name}
       </td>
       <td>{element.last_name}</td> 
     <button type="button" class="btn btn-primary"  onClick={handler}>ok</button>
       */}

       <td><img src={element.avatar}></img></td>
        <td><button  type="button" class="btn btn-primary" value={element.id} onClick={getinfo}> VIEW </button></td>
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
      {/* <p>{element.id}</p>
      <tr>
       <td>
         {element.first_name}
       </td>
       <td>{element.last_name}</td>

       <td><img src={element.avatar}></img></td>
        <td><button value={element.id} > Ok</button></td>
      </tr> */}


<div class="col-sm-6" style={{}}>
      <h1>{element.first_name}</h1>
      <h2>{element.last_name}</h2>
    </div>
 <div class="col-sm-6" style={{}}>
    <img src={element.avatar}></img>
    </div>

      
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
     <button type="button" class="btn btn-primary"  onClick={handler}>ok</button>

<div class="container">
  <div class="row">
    <div class="col-sm-6 ">

     <div class="shadow p-3 mb-5 bg-white rounded">
    <table >
     <tbody>
       {rows()}
     </tbody>
        
     </table>
     </div> 
    
    </div>
    <div class="col-sm-6" style={{border:"3px solid red" , padding:"50px" }}>
 
    {objfun()}

    </div>
   
  </div>
</div>  
     
     
     </>
    )
}