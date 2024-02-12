import React from 'react'

 const Mockfunction = ({cnt,fnInc,fnDec}) => {
  return (
    <div date-testid="mock-fn">
        <h1>{cnt}</h1>
        <button data-testid="incBtn" onClick={fnInc}>INCREMENT</button>
        <button data-testid="decBtn" onClick={fnDec}>DECEREMENT</button>
        
    </div>
  )
}
export default Mockfunction
