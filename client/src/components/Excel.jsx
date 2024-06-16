import { useEffect, useState } from "react";
import axios from "axios";

const Excel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/api/forms");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Excel Data</h1>
      <button onClick={fetchData}>Refresh</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Form Type</th>
              <th>Name</th>
              <th>Country Code</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.formType}</td>
                <td>{entry.name}</td>
                <td>{entry.countryCode}</td>
                <td>{entry.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Excel;
