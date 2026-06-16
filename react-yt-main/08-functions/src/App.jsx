// import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('hello harshal');
  }
  return (
    <div>
      <button onDoubleClick={btnClicked}>Click</button>
    </div>
  )
}

export default App