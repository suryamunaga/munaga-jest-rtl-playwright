import React from "react";
import Helloworld from "./helloworld";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


describe ('surya',()=>{

    it("Renders correctly",()=>{// JEST know inside TESTFILE ,it()and test() ARE TEST CASES
        render(<Helloworld/>)
      const element=  screen. getByTestId("header")
      expect(element).toBeInTheDocument()
    })

    test("check h1 content",()=>{
      render(<Helloworld/>)
      const element=  screen. getByTestId("header")
      expect(element).toHaveTextContent("Helloworld")
    })
})