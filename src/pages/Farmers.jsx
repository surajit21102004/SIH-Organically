/* import React, { useEffect, useState } from 'react';

const FarmersTable = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await fetch('https://neon-logic-sih-backend.onrender.com/api/v1/farmer/all');
      if (!response.ok) {
        throw new Error('Failed to fetch farmers');
      }
      const data = await response.json();
      console.log(data)
      setFarmers(data.data);
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
      <h1 className="text-2xl font-bold mb-4">Farmers List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Farmer ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Aadhar Number</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer.farmer_id}>
              <td className="py-2 px-4 border">{farmer.farmer_id}</td>
              <td className="py-2 px-4 border">{farmer.name}</td>
              <td className="py-2 px-4 border">{farmer.phone}</td>
              <td className="py-2 px-4 border">{farmer.email}</td>
              <td className="py-2 px-4 border">{farmer.aadhar_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmersTable;
 */

import React, { useEffect, useState } from 'react';

const FarmersTable = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/v1/admin/farmers');
      if (!response.ok) {
        throw new Error('Failed to fetch farmers');
      }
      const data = await response.json();
      setFarmers(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchFarmerDetails = async (farmer_id,farmer) => {
    try {
        // https://neon-logic-sih-backend.onrender.com
      const response = await fetch(`http://localhost:5000/api/v1/admin/farmers/${farmer_id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch farmer details');
      }
      const data = await response.json();
      console.log(data.data)
      setSelectedFarmer({...farmer});
      setProducts(data.data || []);
      setShowModal(true);
    } catch (error) {
      setError(error.message);
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
      <h1 className="text-2xl font-bold mb-4">Farmers List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Farmer ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Aadhar Number</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer.farmer_id}>
              <td className="py-2 px-4 border">{farmer.farmer_id}</td>
              <td className="py-2 px-4 border">{farmer.name}</td>
              <td className="py-2 px-4 border">{farmer.phone}</td>
              <td className="py-2 px-4 border">{farmer.email}</td>
              <td className="py-2 px-4 border">{farmer.aadhar_number}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => fetchFarmerDetails(farmer.farmer_id, farmer)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Farmer Details</h2>
            <p><strong>Name:</strong> {selectedFarmer.name}</p>
            <p><strong>Phone:</strong> {selectedFarmer.phone}</p>
            <p><strong>Email:</strong> {selectedFarmer.email}</p>
            <p><strong>Aadhar Number:</strong> {selectedFarmer.aadhar_number}</p>
            <h3 className="text-lg font-bold mt-4">Products</h3>
            <ul>
              {products.map((product, index) => (
                <li key={index} className="border p-2 my-2">
                  <img src={product.image} alt={product.name} className="w-16 h-16 mr-4 inline-block" />
                  <p><strong>Name:</strong> {product.name}</p>
                  <p><strong>Quantity:</strong> {product.quantity}</p>
                  <p><strong>Price:</strong> {product.price}</p>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmersTable;
