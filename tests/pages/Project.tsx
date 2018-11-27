import * as React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import { MemoryRouter } from "react-router";
import { mount, ReactWrapper } from "enzyme";

import { Error } from "../../src/components/Error";
import { Loading } from "../../src/components/Loading";
import { Routes } from "../../src/components/Routes";
import { PROJECT_QUERY } from "../../src/pages/Project";

import wait from "../utils/wait";

const mocks = [
  {
    request: {
      query: PROJECT_QUERY,
      variables: { id: 1 },
    },
    result: {
      data: {
        project: {
          id: 1,
          name: "First Project",
          createdAt: "2018-11-20T16:03:52.223Z",
          user: {
            id: 1,
            fullName: "Łukasz Jagodziński",
          },
        },
      },
    },
  },
];

describe("Project page", () => {
  let component: ReactWrapper;

  beforeEach(() => {
    component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={["/projects/1"]}>
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
