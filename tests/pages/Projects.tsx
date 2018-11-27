import * as React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router";
import { mount, ReactWrapper } from "enzyme";

import { Error } from "../../src/components/Error";
import { Loading } from "../../src/components/Loading";
import { Routes } from "../../src/components/Routes";
import { PROJECTS_QUERY } from "../../src/pages/Projects";

import wait from "../utils/wait";

const mocks = [
  {
    request: {
      query: PROJECTS_QUERY,
    },
    result: {
      data: {
        projects: [
          {
            id: 1,
            name: "First Project",
            createdAt: "2018-11-20T16:03:52.223Z",
            user: {
              id: 1,
              fullName: "Łukasz Jagodziński",
            },
          },
          {
            id: 2,
            name: "Second Project",
            createdAt: "2018-11-20T16:03:52.223Z",
            user: {
              id: 1,
              fullName: "Łukasz Jagodziński",
            },
          },
        ],
      },
    },
  },
];

describe("Projects page", () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={["/projects"]}>
          <Routes />
        </MemoryRouter>
      </MockedProvider>,
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("should render loading component on init", () => {
    expect(component.find(Loading)).toHaveLength(1);
  });

  it(`should render page without errors after loading`, async () => {
    await wait(0);
    component.update();

    expect(component.find(Loading)).toHaveLength(0);
    expect(component.find(Error)).toHaveLength(0);
  });
});
