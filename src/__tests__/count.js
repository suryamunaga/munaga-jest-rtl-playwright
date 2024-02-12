import React from "react";
import Count from "@/app/count";
import { render, screen,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe("ga",()=>{

test("Render correctly",()=>{
    render(<Count/>)
    const element=screen.getByTestId("sun")
   expect (element).toBeInTheDocument()
})

test("initial component",()=>{
    render(<Count/>)
    const element=screen.getByTestId("ef")
   expect (element).toHaveTextContent(0)
})

test("count on button click",()=>{
    render(<Count/>)
    const element=screen.getByTestId("ef")
    const btn = screen.getByRole('button')
    fireEvent.click(btn)
    fireEvent.click(btn)
    fireEvent.click(btn)
   expect (element).toHaveTextContent(3)
})

})