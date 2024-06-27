import { useEffect, useState } from "react";

function CurrentTime() {
  const [time,setTime] = useState(new Date());

  useEffect(()=>{
    console.log("itnervell has been setup")
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancelled the Interval")
    }
  },[])
  
  return (
    <p className="lead">
      This is the current time:{time.toLocaleDateString()} -{""}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default CurrentTime;
