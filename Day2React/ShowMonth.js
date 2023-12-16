import { useState } from "react"

export default function ShowMonth()
{

let [month,setMonth] = useState("");


function handler(event)
{
    let SelectedMonth = parseInt(event.target.value);
    switch(SelectedMonth)
    {
        case 1: setMonth("January");break;
        case 2: setMonth("February");break;
        case 3: setMonth("March");break;
        case 4: setMonth("April");break;
        case 5: setMonth("May");break;
        case 6: setMonth("June");break;
        case 7: setMonth("July");break;
        case 8: setMonth("August");break;  
        case 9: setMonth("September");break;
        case 10: setMonth("October");break;
        case 11: setMonth("November");break;
        case 12: setMonth("December");break;
       
    }
}


return (

        <div>
            <select onChange={handler}>
                <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>

        <p>The Month Name is : {month}</p>

        </div>
    )
}