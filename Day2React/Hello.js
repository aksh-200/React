import React from "react";
import "./example1.css"
export default class Hello extends React.Component
{     


    render()
    {    
        return(
            <div className="outline">
            <div> 
                div1 <br></br>

                <div style={{backgroundColor:this.props.color }}>
                    <br></br>
                    num1 = {this.props.num1}
                    

                </div>
            </div>
            </div>
        )
    }
}


