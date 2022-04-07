/** @format */

import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../screens/Home";

jest.mock("react-router-dom", () => {
	return {
		useNavigate: jest.fn(),
	};
});

describe("Home", () => {
	it("renders", () => {
		render(<Home />);
	});

	it("matches snapshot", () => {
		const view = render(<Home />);
		expect(view).toMatchSnapshot();
	});

	it("has button disabled", () => {
		render(<Home />);
		const submitButton = screen.getByRole("button");
		expect(submitButton).toBeDisabled();
	});

	it("has button enabled on input", () => {
		render(<Home />);
		const input = screen.getByRole("textbox");
		fireEvent.change(input, { target: { value: "test" } });
		const submitButton = screen.getByRole("button");
		expect(submitButton).not.toBeDisabled();
	});
});
