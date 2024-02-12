import React from "react";
import Props from "./props";
import { render ,screen} from '@testing-library/react'
import '@testing-library/jest-dom'

describe("ram",()=>{
    it("Render Correctly",()=>{
     render(<Props/>)  
   const element=  screen.getByTestId ("venkata")
   expect(element).toBeInTheDocument()
    })

    it("with props",()=>{
        render(<Props name="uv"  />)  
        const element =  screen.getByTestId ("suv")
        expect(element).toHaveTextContent("uv")
          
       })

       it("without props",()=>{
        render(<Props  />)  
        const element =  screen.getByTestId ("suv")
        expect(element).toHaveTextContent("guest")
       
       })
})