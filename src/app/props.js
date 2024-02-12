import React from 'react'

 const Props = ({name}) => {
  return <div>
    <p data-testid="venkata">props</p>
     <h1 data-testid="suv">{name ? name: "guest"}</h1>

  </div>
   
  
}
export default Props
