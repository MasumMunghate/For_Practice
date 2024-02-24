import { useState } from "react";

const RegistretionForm = ()=>{

    const [name ,setName] = useState("")
    const [lastName ,setLastName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [contory ,setcontory] = useState("")

    const [showData, setShowData] = useState([])

    const clickHamdle = ()=>{
       const data = {name , lastName, email,password,contory}
       setShowData((items)=>[...items , data])

       setName("");
       setLastName("");
       setEmail("");
       setPassword("");
       setcontory("");

       console.log(...showData , data);
    }
    return(
        <>
        <h1 className="RegistretionHeading">Resistretion Form</h1>
        <div className="mainContainer">
            <div className="container">
               <div>
               <label>Full Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
               </div>

               <div>
               <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
               </div>

               <div>
               <label>Emain ID</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
               </div>

               <div>
               <label>Password</label>
                <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
               </div>

               <div>
               <label>Country Name</label>
                <input type="text" value={contory} onChange={(e)=>setcontory(e.target.value)}/>
               </div>
            </div>
           <button onClick={clickHamdle}>Submit</button>
           
        </div>
        <div className="submittedData">
        <h2>Submitted Data</h2>
        {
            showData.map((data, index)=>{
                return(
                    <>
                    <span>
                    <h1 key={index}>{data.name}</h1>
                    <h1 key={index}>{data.lastName}</h1>
                    <h1 key={index}>{data.email}</h1>
                    <h1 key={index}>{data.password}</h1>
                    <h1 key={index}>{data.contory}</h1>
                    </span>

                    </>
                )
            })
        }
      </div>
        </>
    )
}

export default RegistretionForm