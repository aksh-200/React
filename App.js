
import './App.css';
import Welcome from "./welcome";
import Sum from './Math';
import { Multiplication } from './MathMultiplication';
import Total from './Total';

import Jsondemo from './Icard';

function App() {
 
 
    let arr = [10,20,30]
    let obj  = {
       movie:"Animal",
       Year:"2023"
    }   

    //let obj = {name:"Akshay",dob:"1-1-2000",phone:"1233455"} 
  

    return (

        <>
        <Welcome></Welcome>
        <Sum num1={10} num2={20}></Sum>
        <Multiplication n1={20} n2={50}></Multiplication>
        <Total nums={arr}></Total>
         <Jsondemo obj={obj}></Jsondemo>
         

      
       
        </>
      );
    }
    
 


export default App;
