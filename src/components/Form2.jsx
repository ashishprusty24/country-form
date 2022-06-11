import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Table from "./Table";
const Form2 = ({ country }) => {
  const [city, setcity] = useState({});
  const [data, setdata] = useState([]);
  const handlechange = (e) => {
    let { name, value } = e.target;
    setcity({
      ...city,
      [name]: value,
    });
  };
  //   console.log(city)

  const handlesubmit = () => {
    axios.post("http://localhost:8080/cities", {
      cityname: city.cityname,
      population: city.population,
      country: city.country,
    });
  };

  useEffect(() => {
    const getdata = () => {
      axios.get("http://localhost:8080/cities").then((r) => setdata(r.data));
    };
    getdata();
  }, []);

  return (
    <div>
      
      <input
        value={city.name}
        type="text"
        name="cityname"
        id=""
        placeholder="enter city name"
        onChange={handlechange}
      />
      <br />
      <input
        value={city.name}
        type="text"
        name="population"
        id=""
        placeholder="enter population"
        onChange={handlechange}
      />
      <br />
      <select name="country" id="" onChange={handlechange}>
        {country.map((country) => (
          <option value={country.name} id={country.id}>
            {" "}
            {country.name}{" "}
          </option>
        ))}
      </select>
      <button onClick={handlesubmit}>Add</button>
      <Table data={data} />
    </div>
  );
};

export default Form2;
