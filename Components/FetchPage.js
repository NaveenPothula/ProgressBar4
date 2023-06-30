import React, { useEffect, useState } from "react"
import FetchList from "./FetchList"

const FetchPage=()=>{

    const [data,setData]= useState(null)

    useEffect(()=>{
        
            const datafetch= async()=>{
                try{
            const response= await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8ee503f2f6514225acbdfc312fecdc17")
                const jsondata= await   response.json()
                //console.log(jsondata)
                setData(jsondata)
                //console.log(data)
                }
                catch(e){
                    console.log(e.message)
                }
                
            }
            datafetch()
            
            
        
        
    },[])  
    console.log(data)  


      

    
    return(
        <div>
        {data?(
            <FetchList value= {data.articles}/>

        ):
        <p>loading</p>
    }
            
           
    </div>
    )
   
}

export default FetchPage;