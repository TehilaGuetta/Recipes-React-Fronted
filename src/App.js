import logo from './logo.svg';
import './App.css';
import { Routing } from './components/routing';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { MyProvider } from './usercontext';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav';
function App() {
  const [listuser,setlistuser]=useState([

  ])
  const managername="אברהם"
  const managerpass=111
  const [ismanager,setismanager]=useState(true)
  const [canadd,setcanadd]=useState(true)
  const [currentuser,setcurrentuser]=useState({})
  const list=[]
const coderecipe=""
  const transfer={
    list:list,
    coderecipe:coderecipe,
    listuser:listuser,
    setlistuser:setlistuser,
    managername:managername,
    managerpass:managerpass,
    ismanager:ismanager,
    setismanager:setismanager,
    canadd:canadd,
    setcanadd:setcanadd,
    currentuser:currentuser,
    setcurrentuser:setcurrentuser
  }
  return (
    <Provider store={store}>
      <MyProvider value={transfer}>
        <BrowserRouter>
        <Nav></Nav>
  <Routing></Routing>
  </BrowserRouter>
  </MyProvider>
  </Provider>
  );
}

export default App;
