import React from "react";
import { render, screen, waitFor, act} from "@testing-library/react"; 
import ListTopics from './ListTopics';
import { getData } from '../../Api/Api';

jest.mock("../../Api/Api");

const mockData = {id:2, name:'react', relatedTopics: [{ id: 1, name: "Angular", stargazerCount: 5 }, { id: 3, name: "Vue", stargazerCount: 10 }]};

test("Should display a list of Topics", async () => {
  const topics = mockData;
  getData.mockResolvedValueOnce(topics);
  await act(async() => {render(<ListTopics />)});
  expect(getData).toHaveBeenCalledTimes(1);
  await waitFor(() => expect(screen.getByText("Angular")).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText("Vue")).toBeInTheDocument());
});

test("Should display react as current Topic", async () => {
    const topics = mockData;
    getData.mockResolvedValueOnce(topics);
    await act(async() => {render(<ListTopics />)});
    await waitFor(() => expect(screen.getByText("react")).toBeInTheDocument());
});