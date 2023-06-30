import React from 'react';
import { useState,useEffect,useRef} from 'react';
//import ProgressBar from './ProgressBar';
import "./ProgressPage.css"
import {Link} from "react-router-dom";
import {CircularProgressbarWithChildren} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ProgressPage = () => {
  const time= useRef(120)
  const startTime= useRef(120)
  const progress= useRef(100)
  const [intervalId,setIntervalId]= useState(null) 
  const [minutes,setMinutes]=useState(2)
  const [seconds,setSeconds]=useState(0)
  const [toggle,setToggle]= useState(false)
  
  const updateFunction = ()=>{
    time.current-=1
   let pre= Math.floor(time.current/60)
   let post= time.current%60
    setMinutes((prev)=>pre)
    setSeconds((prev)=>post)
    //console.log("startTime",startTime.current)
    const tempProgress = (time.current/startTime.current)*100
    progress.current= tempProgress
    //console.log("time",time) 
    
    //console.log("progress",progress.current)
    

   
    
    
  }
  const startHandler=()=>{
    if(time.current!==0 &&intervalId===null){
      const id= setInterval(updateFunction,1000)
    setIntervalId((prev)=>id)
    }
    
  }

  const skipHandler=()=>{
   // clearInterval(intervalId)
   // progress.current=0
    time.current=0
    //startTime.current=0
    setToggle((prev)=>!prev)
   
    
    console.log("startTime",startTime.current)
    console.log("time",time.current) 
    console.log("progress",progress.current)
    
    
    
  }

  const addHandler=()=>{
    console.log(intervalId)
    if (intervalId===null){

      progress.current=100
      time.current +=10
      startTime.current=time.current
      
      
       
      const id =setInterval(updateFunction,1000)
      setIntervalId((prev)=>id)  
    }
    else{
      progress.current=100
      time.current+=10  
      startTime.current=time.current 
      
       
    }
  }
 // const value = `${minutes}:${seconds}`


  useEffect(()=>{  
    if(time.current===0 ){
      setMinutes(0)
      setSeconds(0)
      progress.current= 0
      startTime.current=0
      clearInterval(intervalId)
      setIntervalId((prev)=>null)
      
      
      console.log("startTime",startTime.current)
      console.log("time",time.current) 
      console.log("progress",progress.current)

    }
    else{
      console.log("startTime",startTime.current)
      console.log("time",time.current) 
      console.log("progress",progress.current)

      
    }


    

  },[time.current,toggle])
    // Set the progress percentage
    // console.log("startTime",startTime.current)
    // console.log("time",time.current) 
    // console.log("progress",progress.current)
  let  tempminutes = minutes<10? "0"+minutes : minutes
  let tempsecs = seconds<10? "0"+seconds : seconds
  let value= `${tempminutes}:${tempsecs}`



  

  return (
    <div>
      <div style={{width:400,height:400}}>
      <CircularProgressbarWithChildren value={progress.current}>
        <div  style={{fontSize: 40}}> 
          <strong>{value}</strong>
        </div>
        </CircularProgressbarWithChildren>  
      </div>
      
        
      <button onClick={addHandler}>+10 sec</button>
      <button onClick={skipHandler}>skip</button>
      <button onClick={startHandler}>start</button>
      <Link to={"/Fetch"}> FetchPage</Link>
    </div>
  );
};

export default ProgressPage;  
