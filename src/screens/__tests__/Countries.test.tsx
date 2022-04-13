/** @format */

import { render, screen } from "@testing-library/react";
import Countries from "../Countries";

jest.mock("react-router-dom", () => {
	return {
		useLocation: () => {
			return {
				state: {
					country: "ind",
				},
			};
		},
	};
});

describe("Countries", () => {
	it("renders", () => {
		render(<Countries />);
	});

	it("matches snapshot", () => {
		const view = render(<Countries />);
		expect(view).toMatchSnapshot();
	});

	it("has button enabled", () => {
		render(<Countries />);
		const weatherButton = screen.getByRole("button");
		expect(weatherButton).not.toBeDisabled();
	});
});
