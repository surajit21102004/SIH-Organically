import React, { useEffect, useState } from 'react';

const ConsumersTable = () => {
  const [consumers, setConsumers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchConsumers();
  }, []);

  const fetchConsumers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/admin/consumers');
      if (!response.ok) {
        throw new Error('Failed to fetch consumers');
      }
      const data = await response.json();
      setConsumers(data.data);
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
      <h1 className="text-2xl font-bold mb-4">Consumers List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Consumer ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {consumers.map((consumer) => (
            <tr key={consumer.consumer_id}>
              <td className="py-2 px-4 border">{consumer.consumer_id}</td>
              <td className="py-2 px-4 border">{consumer.name}</td>
              <td className="py-2 px-4 border">{consumer.phone}</td>
              <td className="py-2 px-4 border">{consumer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumersTable;
