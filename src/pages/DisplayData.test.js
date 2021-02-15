import { shallow } from "enzyme";
import React from "react";
import DisplayData from "./DisplayData";

const example = [
  {
    id: 2,
    name: "Name",
    username: "Username",
    email: "Email",
    address: {
      street: "Street",
      suite: "Suite",
      city: "City",
      zipcode: "Zip",
      geo: {
        lat: "0",
        lng: "0",
      },
    },
    phone: "Fon",
    website: "Web",
    company: {
      name: "CName",
      catchPhrase: "Phrase",
      bs: "BS",
    },
  },
];

describe("DisplayData", () => {
  it("should render the component with no data", () => {
    const component = shallow(<DisplayData data={[]} />);

    expect(component.text()).toEqual("Filter:No Matching Data!");
  });

  it("should render the data", () => {
    const component = shallow(<DisplayData data={example} />);

    expect(component.text()).toEqual(
      "Filter:NameContact DetailsUsername: UsernameWebsite: WebPhone:  FonEmail: EmailAddress InformationStreet: StreetSuite: SuiteCity: City Zipcode: ZipCompany InformationCompany Name: CNameCatch Phrase: PhraseBs: BS"
    );
  });
});
