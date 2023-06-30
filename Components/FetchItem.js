import React from "react";
import "./FetchItem.css"

const FetchItem =(props)=>{
    return(
        <div className="item">
            <h4>{props.name}</h4>
            <h4>{props.author}</h4>
            <h4>{props.title}</h4>

        </div>
    )
}

export default FetchItem;