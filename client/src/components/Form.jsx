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
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-4">Form {formType}</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Country Code:
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
