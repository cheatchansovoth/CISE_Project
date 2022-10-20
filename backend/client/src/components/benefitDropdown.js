import React from "react";
import axios, * as others from "axios";
import SEPractices from "../dummydata/SEPractices";

const optionItems = SEPractices.map((SEPractice) => (
  <option key={SEPractice.practice}>{SEPractice.practice}</option>
));
const benefitDropdown = () => {
  return (
    <div>
      <select>{'optionItems'}</select>
    </div>
  );
};
export default benefitDropdown;
