import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("should render the component", () => {
    const component = shallow(<Header />);

    expect(component.text()).toBe("HomeData");
  });
});
