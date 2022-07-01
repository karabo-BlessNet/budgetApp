import React from "react";

import '../css/displayTransactions.css'

function DisplayTransation(props){
    console.log(props)
     
  return(
    <div>
        {props.list.map((item) => (
            <div key={item.id}>
                {item.transactionType === "Expense" ? (
                 <div className="transaction-item">
                    <div>
                        <h4>{item.item}</h4>
                    </div>

                    <div>
                        <h3><u>{"R" + item.amount}</u></h3>
                    </div>
                    <div className="Expense-line"></div>
                </div>
                ) : (
                    <div className="transaction-item">
                        <div>
                            <h4>{item.item}</h4>
                        </div>

                        <div>
                            <h3><u>{"R" + item.amount}</u></h3>
                        </div>
                        <div className="Income-line"></div>
                    </div>
                )}

                
                
            </div>

        ))}
    </div>

  );


}



export default DisplayTransation;