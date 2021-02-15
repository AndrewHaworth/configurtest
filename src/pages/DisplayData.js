import React, { useState } from "react";
import styled from "styled-components";

const Person = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 2rem;
  background-color: lightgrey;
  border-radius: 4px;
`;

const PersonBox = styled.div`
  width: 100%;
`;

const PeopleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const DataPoint = styled.div`
  width: 25%;
`;

const DisplayData = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);

  // Yes I know this looks horrible and trust me I'd rather be using Object.keys().forEach() but the data structure made it a little annoying to deal with
  const checkFilter = (filter, person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()) ||
    person.username.toLowerCase().includes(filter.toLowerCase()) ||
    person.website.toLowerCase().includes(filter.toLowerCase()) ||
    person.email.toLowerCase().includes(filter.toLowerCase()) ||
    person.phone.toLowerCase().includes(filter.toLowerCase()) ||
    person.company.name.toLowerCase().includes(filter.toLowerCase()) ||
    person.company.catchPhrase.toLowerCase().includes(filter.toLowerCase()) ||
    person.company.bs.toLowerCase().includes(filter.toLowerCase()) ||
    person.address.suite.toLowerCase().includes(filter.toLowerCase()) ||
    person.address.street.toLowerCase().includes(filter.toLowerCase()) ||
    person.address.zipcode.toLowerCase().includes(filter.toLowerCase()) ||
    person.address.city.toLowerCase().includes(filter.toLowerCase());

  const getFilteredData = (filter) => {
    const filteredData = [];
    data.forEach(
      (person) => checkFilter(filter, person) && filteredData.push(person)
    );
    setFilteredData(filteredData);
  };
  return (
    <>
      <div>Filter:</div>
      <input type="text" onChange={(e) => getFilteredData(e.target.value)} />
      <PeopleContainer>
        {filteredData && filteredData.length > 0
          ? filteredData.map((item) => (
              <PersonBox key={item.id}>
                <Person>
                  <h2>{item.name}</h2>
                  <DataPoint>
                    <h4>Contact Details</h4>
                    <div>Username: {item.username}</div>
                    <div>
                      Website:{" "}
                      <a
                        href={`https://${item.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.website}
                      </a>
                    </div>
                    <div>
                      Phone: <a href={`tel:${item.phone}`}> {item.phone}</a>
                    </div>
                    <div>
                      Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                    </div>
                  </DataPoint>
                  <DataPoint>
                    <h4>Address Information</h4>
                    <div>Street: {item.address.street}</div>
                    <div>Suite: {item.address.suite}</div>
                    <div>City: {item.address.city} </div>
                    <div>Zipcode: {item.address.zipcode}</div>
                  </DataPoint>
                  <DataPoint>
                    <h4>Company Information</h4>
                    <div>Company Name: {item.company.name}</div>
                    <div>Catch Phrase: {item.company.catchPhrase}</div>
                    <div>Bs: {item.company.bs}</div>
                  </DataPoint>
                </Person>
              </PersonBox>
            ))
          : "No Matching Data!"}
      </PeopleContainer>
    </>
  );
};

export default DisplayData;
