import * as React from "react";
import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

describe("Test App component", () => {
  it("displays tabel correctly", () => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
    cy.get(".title")
    // cy.get("[data-testid=bulbasaur");
  })
})