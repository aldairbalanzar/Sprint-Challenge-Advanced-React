import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react"
import Card from './Card';
import "jest-dom/extend-expect";
import { fetchPosts } from 'http://localhost:5000/api/players';

jest.mock('http://localhost:5000/api/players');

test("list of players", async () => {
    expect(fetchPosts).toHaveBeenCalled(1);
})

// test("my app render test", () => {
//     render(<Card />);
//   })