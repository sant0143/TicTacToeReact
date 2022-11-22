import React, { useEffect, useState } from 'react'
// import TicTacToe from './components/TicTacToe/TicTacToe'


function Counter() {
  const[plus,setPlus] = useState(0)
  const[count,setCount] = useState(0)
  
  //similar to componentDidMount
  // useEffect(function(){
  //   document.title=`You clicked ${plus} times`
  // },[])

  //similar to componentDidUpdate
  useEffect(function(){
      document.title=`You clicked ${count} times`
    },[plus,count]) //empty dependency array

  const Increment = ()=>{
    setPlus(plus + 1)
  }
  return (
    <div style={{marginLeft : '20px'}}>
      <h1>Counter : {plus}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={()=>setCount(count+1)}>Increment 2</button>
    </div>
  )
}


function App() {
  const[showCounter,setShowCounter] = useState(false)
  return (
    <div className='app'>
      {/* <TicTacToe/> */}
      {
        showCounter && <Counter/>
      }
      <button onClick={()=>{setShowCounter(true)}}>Mount</button>
      <button onClick={()=>{setShowCounter(false)}}>Unmount</button>
    </div>
  )
}

export default App