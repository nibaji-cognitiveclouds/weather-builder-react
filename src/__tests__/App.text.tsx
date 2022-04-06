/** @format */

import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
	it("renders", () => {
		render(<App />);
	});

	it("matches snapshot", () => {
		const view = render(<App />);
		expect(view).toMatchSnapshot();
	});
});
