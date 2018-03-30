import React from "react";
import namor from "namor";
import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    aerrt_flag: "Yes",
    req_code: "ER_2009",
    exam_code: "EX_"+ Math.floor(Math.random() * 30),
    reg_req_number: "Ravikanth Muliptle testing",
    description: "Some dummy description",
    status: "PENDING_REVIEW_RRL",
    due_date: "Mar 19, 2018",
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100)
  };
};

export function makeData(len = 100) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}

export const Logo = () => (
  <div
    style={{
      margin: "1rem auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    For more examples, visit {""}
    <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>
);

export const Tips = () => (
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>
);
