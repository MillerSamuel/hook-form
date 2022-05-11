import React,{useState} from "react";


const Form=()=>{

    let [fName,setFName]=useState("");
    let [lName,setLName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [confirm,setConfirm]=useState("");



    return(
        <>
        <form>
            <div className="m-2">
                <label htmlFor="fName">First Name:</label>
                <input onChange={(e)=>setFName(e.target.value)} type="text" name="fName" />
            </div>
            <div className="m-2">
                <label htmlFor="lName">Last Name:</label>
                <input onChange={(e)=>setLName(e.target.value)} type="text" name="lName" />
            </div>
            <div className="m-2">
                <label htmlFor="email">Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" name="eamil" />
            </div>
            <div className="m-2">
                <label htmlFor="password">Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" />
            </div>
            <div className="m-2">
                <label htmlFor="confirm">Confirm Password:</label>
                <input onChange={(e)=>setConfirm(e.target.value)} type="password" name="confirm" />
            </div>
        </form>
        <hr />
        <p>First Name: {fName}</p>
        <p>Last Name: {lName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>
        </>
    )
    
}

export default Form;