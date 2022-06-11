import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Form2 from "./Form2";
// const getcountry = ()=>{
//     axios.get(' http://localhost:8080/countries')
//     .then(function (response) {
//       // handle success
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
// }

const Form1 = () => {
  const [country, setcountry] = useState([]);
  const [cname, setname] = useState([]);

  // const handlechange = (e)=>{
  //     let {value} = e.target
  //     setname([
  //         ...cname,
  //         value
  //     ]);
  //   };

  const handleadd = () => {
    axios
      .post("http://localhost:8080/countries", {
        name: cname,
      })
      .then((r) => console.log(r.data));
  };

  useEffect(() => {
    const getcountry = () => {
      axios
        .get("http://localhost:8080/countries")
        .then((r) => setcountry(r.data));
    };
    getcountry();
  }, []);

  return (
    <div>
      <h1>country</h1>
      <h1>form1</h1>
      <br />
      {/* <input type="text" placeholder='addcountry...' onChange={handlechange} value={cname} /> */}
      {/* <button onClick={getcountry}>+</button> */}

      <select>
        {country.map((country) => (
          <option value={country.name} id={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        placeholder="add country"
        value={cname}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={handleadd}>Add</button>
      <br />
      <br />
      <h2>form2</h2>
      <Form2 country={country} />
    </div>
  );
};

export default Form1;
