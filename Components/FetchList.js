import React from "react"
import FetchItem from "./FetchItem"

const FetchList=(props)=>{
    return(
        <div>
            <ul>

                {props.value.map((item)=>(  
                    <FetchItem
                    key={item.title}
                    name={item.source.name}
                    author={item.author}
                    title={item.title}
                    />
                ))

                }

            </ul>

        </div>
    )
}

export default FetchList