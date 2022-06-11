import React from "react";

const Table = ({ data }) => {
  return (
    <div>
      Table
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>cityname</th>
            <th>population</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td> {data.id}</td>
              <td> {data.cityname} </td>
              <td> {data.population}</td>
              <td>{data.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
