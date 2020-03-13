import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByTestId, fireEvent } from "@testing-library/react"
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("my app render test", () => {
  render(<App />);
})

test("app test", () => {
  const { getByText } = render(<App />);

  getByText(/player list app/i);
  getByText(/player list:/i);

})

test("toggles", () => {
  const { getByTestId } = render(<App />);

  const toggle = getByTestId(/toggle/i);
  fireEvent.click(toggle);
})
