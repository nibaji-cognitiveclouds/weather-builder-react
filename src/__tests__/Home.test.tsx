/** @format */

import { render } from "@testing-library/react";
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
});
