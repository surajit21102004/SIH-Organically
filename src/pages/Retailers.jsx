import React, { useEffect, useState } from 'react';

const RetailersTable = () => {
  const [retailers, setRetailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRetailers();
  }, []);

  const fetchRetailers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/admin/retailers');
      if (!response.ok) {
        throw new Error('Failed to fetch retailers');
      }
      const data = await response.json();
      setRetailers(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Retailers List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Retailer ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">PAN Number</th>
            <th className="py-2 px-4 border">UPI ID</th>
          </tr>
        </thead>
        <tbody>
          {retailers.map((retailer) => (
            <tr key={retailer.retailer_id}>
              <td className="py-2 px-4 border">{retailer.retailer_id}</td>
              <td className="py-2 px-4 border">{retailer.name}</td>
              <td className="py-2 px-4 border">{retailer.phone}</td>
              <td className="py-2 px-4 border">{retailer.email}</td>
              <td className="py-2 px-4 border">{retailer.pan_number}</td>
              <td className="py-2 px-4 border">{retailer.upi_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RetailersTable;
