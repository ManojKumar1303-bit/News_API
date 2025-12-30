import React, { useEffect, useState } from 'react'

function TimerApp() {
    //state to store seconds
    const[seconds,setSeconds]=useState(0);

    //state to check wheather the timer is running
    const[running,setRunning]=useState(false);

    //useEffect runs when running is true
    useEffect(() => {
        let timer;
        //if running is true
        if(running){
            timer=setInterval(()=> {
                setSeconds(prev=>prev+1);
            },1000
            );
        }
        return () => clearInterval(timer);
    },[running]

    );


  return (
    <div className='App'>
      <h2>Timer application</h2>
      <p>0 Seconds</p>
      <button onClick={()=>setRunning(true)}>Start</button>
      <button onClick={()=>setRunning(false)}>Stop</button>
      <button onClick={()=>setSeconds(0)}>Reset</button>
    </div>
  )
}

export default TimerApp
//5f69fb0983ff47628c0bd9bb1b5a05c6