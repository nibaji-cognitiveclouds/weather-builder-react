import { fireEvent } from "@testing-library/react"
import { render, screen } from "@testing-library/react"

import Countries from "../../screens/Countries"

jest.mock("react-router-dom", ()=>{
   return {
       useLocation : () =>{
        return {
                state: {
                    country: "India"
                }
            }
       }
    }
})

describe("Home",()=>{

    jest.setTimeout(20000)

    it("renders without crash", ()=>{
        render(<Countries/>)
    })

    it("has weather button working", async ()=>{
        render(<Countries/>)

        const countryLoader = screen.getByTestId("countryLoader")
        expect(countryLoader).toBeInTheDocument()

        await new Promise(r=> setTimeout(r,5000))

        const weatherbtn = screen.getByTestId("weatherBtn")
        expect(weatherbtn).toBeInTheDocument()

        fireEvent.click(weatherbtn)
        const weatherLoader = screen.getByTestId("weatherLoader")
        expect(weatherLoader).toBeInTheDocument()

        await new Promise(r=> setTimeout(r,5000))

        const okBtn = screen.getByTestId("okBtn")
        expect(okBtn).toBeInTheDocument()
        fireEvent.click(okBtn)

    })
})