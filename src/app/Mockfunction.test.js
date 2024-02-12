import React from "react";
import {render,screen,fireEvent} from "@/testing-library/react"
import Mockfunction from "./Mockfunction";
import '@testing-library/jest-dom'


describe("Mockfunction component",()=>{
    it("Renders correctly",()=>{
        render(<Mockfunction/>)
        const element=screen.getByTestId("mock-fn")
        expect (element).toBeInTheDocument()
    })
    test("check h1 element component",()=>{
        const mocIncFn=jest.fn()
        const mocDecFn=jest.fn()
        render(<Mockfunction cmt={10} fnInc={mocIncFn}  fnDec={mocDecFn} />)
        const incBtnRef= screen.getByTestId("incBtn")
        const decBtnRef= screen.getByTestId("decBtn")
        fireEvent.click(incBtnRef)
        fireEvent.click(incBtnRef)
        fireEvent.click(incBtnRef)
        expect (mocIncFn).toHaveBeenCalledTimes(3)
        fireEvent.click(decBtnRef)
        fireEvent.click(decBtnRef)
        expect (mocDecFn).toHaveBeenCalledTimes(2)
    })
})