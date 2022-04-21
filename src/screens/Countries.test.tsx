/** @format */

import { render, screen } from "@testing-library/react";
import Countries from "./Countries";

jest.mock("react-router-dom", () => {
	return {
		useLocation: () => {
			return {
				state: {
					country: "india",
				},
			};
		},
	};
});

describe("Countries", () => {
	jest.setTimeout(10000);

	it("renders", () => {
		render(<Countries />);
	});

	it("matches snapshot", () => {
		const view = render(<Countries />);
		expect(view).toMatchSnapshot();
	});

	it("has the back button", async () => {
		render(<Countries />);
		const backButton = await screen.findByTestId("backButton");
		backButton.click();
		expect(backButton).toBeInTheDocument();
	});

	it("has progress circle shown", () => {
		render(<Countries />);
		const progress = screen.getByTestId("countriesProgress");
		expect(progress).toBeInTheDocument();
	});

	it("has countries list", async () => {
		render(<Countries />);
		await new Promise((r) => setTimeout(r, 5000));
		const countriesList = screen.getByTestId("countriesList");
		expect(countriesList).toBeInTheDocument();

		const weatherButton = screen.getByTestId("weatherButton");
		weatherButton.click();
		await new Promise((r) => setTimeout(r, 4000));
		const weatherModal = screen.getByTestId("weatherModal");
		expect(weatherModal).toBeInTheDocument();
	});
});
