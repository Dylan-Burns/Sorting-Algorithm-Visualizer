import React from "react"

export default function Button(props){
    return (
        <div>
            <button 
                className="button" 
                onClick={props.handleClick}
            >
                {props.name}

            </button>
            
        </div>   

    )
    
}
