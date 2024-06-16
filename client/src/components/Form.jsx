/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

const Form = ({ formType }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [countryCode, setCountryCode] = useState(
    localStorage.getItem("countryCode") || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber") || ""
  );

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("countryCode", countryCode);
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [name, countryCode, phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/form", {
        formType,
        name,
        countryCode,
        phoneNumber,
      })
      .then(() => {
        alert("Form submitted");
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form {formType}</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Country Code:
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          required
        >
          <option value="">Select Country Code</option>
          <option value="IN">IN</option>
          <option value="US">US</option>
          <option value="CA">CA</option>
        </select>
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
