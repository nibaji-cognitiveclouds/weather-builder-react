import { fireEvent, render, screen } from "@testing-library/react"

import Home from "../../screens/Home"

jest.mock("react-router-dom", ()=>{
    return {
        useNavigate : () => jest.fn()
     }
 })

describe("Home",()=>{
    it("renders without crash", ()=>{
        render(<Home/>)
    })

    it("has button working", ()=>{
        render(<Home/>)
        const input = screen.getByPlaceholderText("Enter country")
        fireEvent.change(input, {target:{value:"test"}})
        const btn = screen.getByRole("button")
        expect(btn).toBeEnabled()
        fireEvent.click(btn)
    } )
})