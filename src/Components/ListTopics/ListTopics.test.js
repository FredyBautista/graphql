import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ListTopics from './ListTopics';
import { GET_TOPICS } from '../../Api/queries';

const mockData = {
  topic: { 
    id: 2,
    name:
    'react',
    stargazerCount: 10,
    relatedTopics: [{ id: 1, name: "Angular", stargazerCount: 5 }, { id: 3, name: "Vue", stargazerCount: 10 }] 
  }
};

const mocks = [
  {
    request: {
      query: GET_TOPICS,
      variables: { name: 'react' },
    },
    result: { data: mockData }
  }
];

it("Should display a list of Topics", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <ListTopics />
    </MockedProvider>);
  expect(await screen.findByText("Angular")).toBeInTheDocument();
  expect(await screen.findByText("Vue")).toBeInTheDocument();
});