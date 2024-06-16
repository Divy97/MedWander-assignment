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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl mb-4">Excel Data</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline"
        onClick={fetchData}
      >
        Refresh
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Form Type</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Country Code</th>
                <th className="border border-gray-300 px-4 py-2">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry) => (
                <tr key={entry.id} className="border border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{entry.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.formType}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.countryCode}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Excel;
