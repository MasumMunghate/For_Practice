import { useState, useEffect } from "react"

const UseeffectHook = ()=>{
    const [count , setCount ] = useState(0)
  const [decrease , setdecrease ] = useState(100)

  // useEffect(()=>{
  //   console.log("This Function Call Every Time when Page is Refresh");
  //   temp()
  // })

  // function temp(){
  //   console.log("Call this Function");
  // }

  // useEffect(()=>{
  //   console.log("This Function call every time");
  // },[]) // call only when component is mounted


  const Add = ()=>{
    setCount(count + 1)
  }

  const Decrease = ()=>{
    setdecrease(decrease - 1)
  }

  useEffect(()=>{
    console.log(count);
    console.log("Add Hoga");
  },[Decrease])

    return (
        <>
        <h1> All About Useeffect Hook </h1>
     <button onClick={Add}>{count}</button>
    <button onClick={Decrease}>{decrease}</button> 
        </>
    )
}

export default UseeffectHook;