import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [transactions, setTransaction] = useState([]);

  const addTransaction = ((amount, item, transactionType) => {
    setTransaction((transactions) => [...transactions, {
      id:transactions.length,
      amount:amount,
      item:item,
      transactionType:transactionType

    }]);

    console.log(transactions);

  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path= "/sign-up" component={SignUp}></Route>
        <Route path= "/home">
        <Home  list={transactions} add={addTransaction}/>
        </Route>
      </Switch>
     
    </Router>

  );
};

export default App;
