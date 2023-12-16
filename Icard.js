export default function Jsondemo(props)
{  
    let {movie ,  Year} =  props.obj
    let styleobj = {border:"3px solid orange" , width:"200px" }
    return (
         <div style={styleobj} >
        <p>Movie :{movie}</p>
            <p>Year :{Year}</p>
            
    </div>

    )

}