import React,{useState,} from "react";
import "../css/add.css"


function AddItem(props){

    const [amount, setAmount] = useState("");
    const [item, setItem] = useState("");
    const [transactionType, setTransactionType] = useState("");

    const add = (()=> {
       
        props.add(amount, item, transactionType);

    })
    return(
        <div>
            <div id="text"><h2>ADD TRANSACTIONS</h2></div>
           <input placeholder="Enter Item"  onChange={(e)=> setItem(e.target.value)}/>{""}<br></br>
           <input placeholder="Enter amount"  onChange={(e)=> setAmount(e.target.value)}/>{""}<br></br>

           <select onChange={(e)=> setTransactionType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
           </select>{""}<br></br>

           <button id="addBtn" onClick={add} ><b>Add</b></button>


        </div>  

    )
}

export default AddItem;