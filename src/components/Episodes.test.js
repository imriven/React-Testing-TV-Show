import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";
import { testEpisodesList } from "../testData"

//test takes in string (name of the test ) and a callback function
test("Images render correctly", () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);
  expect(queryAllByTestId(/episode/i)).toHaveLength(0);
  
  rerender(<Episodes episodes={testEpisodesList} />);
  expect(queryAllByTestId(/episode/i)).toHaveLength(testEpisodesList.length);
});
