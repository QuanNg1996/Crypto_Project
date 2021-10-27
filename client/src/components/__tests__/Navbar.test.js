import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act, render } from "@testing-library/react";
import Navbar from "../Navbar";
import '../../__mock__/matchMedia';

describe("Navbar Component", () => {
  it("Should render Navbar", () => {
    act(() => {
      const { getByTestId } = render(<Router><Navbar /></Router>);
      const navbar = getByTestId("navbar");
      expect(navbar).toBeTruthy();
    });
  });
});