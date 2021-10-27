import React from 'react';
import { render } from "@testing-library/react";
import Loader from "../Loader";
import './__mock__/matchMedia';

describe("Loader Component", () => {
  it("Should render the Loader", () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId("loader");
    expect(loader).toBeTruthy();
  });
});