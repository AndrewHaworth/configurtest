import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";
import LoadingData from "./LoadingData";

const Data = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? <LoadingData /> : <DisplayData data={data} />;
};

export default Data;
