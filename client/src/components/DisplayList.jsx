import React, { useEffect, useState } from "react";
import SearchList from "./common/SearchList";
import axios from "axios";

const DisplayList = ({ words, getTags }) => {
  const [data, setData] = useState([]);
  const getdata = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4001/trips?keywords=${words}`
      );
      console.log(res);
      setData(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getdata();
  }, [words]);

  return (
    <ul className="flex flex-col justify-center items-center">
      {data &&
        data.map((item, index) => {
          return (
            <li key={index}>
              <SearchList data={item} getTags={getTags} />
            </li>
          );
        })}
    </ul>
  );
};

export default DisplayList;
