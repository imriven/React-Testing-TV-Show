//import libraries
import React from "react";
import { render, fireEvent, wait, waitFor, getByTestId } from "@testing-library/react";
import { fetchShow as mockFetchShow} from "./api/fetchShow";
import App from "./App";
import { showData } from "./testData"

//set up test
jest.mock("./api/fetchShow");

test("renders dog images from API", async () => {
  mockFetchShow.mockResolvedValueOnce({
    data:showData
  });

  const { getByTestId } = render(<App />)
  await waitFor(() => expect(getByTestId(/image/i)).toBeTruthy())

//   const fetchDoggosButton = getByText(/fetch doggos/i);
//   fireEvent.click(fetchDoggosButton);
});

test("dropdown", async () => {
    mockFetchShow.mockResolvedValueOnce({
      data:showData
    });
  
    const { getByText, queryAllByTestId } = render(<App />)
    await waitFor(() =>getByText(/select a season/i))
    fireEvent.mouseDown(getByText(/select a season/i))
    fireEvent.mouseDown(getByText(/season 2/i))
    await waitFor(() => expect(queryAllByTestId(/episode/i)).toHaveLength(9))
  
  //   const fetchDoggosButton = getByText(/fetch doggos/i);
  //   fireEvent.click(fetchDoggosButton);
  });