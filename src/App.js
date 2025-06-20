import React, { useState } from "react";
import AddUserForm from "../src/Components/AddUserForm";
import UserTable from "../src/Components/UserTable";

function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addUser = (user) => {
    setUsers([...users, user]);
    setShowForm(false);
  };

  const downloadCSV = () => {
    if (users.length === 0) return;

    const headers = ['Name', 'Age', 'Email', 'Phone', 'Department'];
    const csv = [
      headers.join(','),
      ...users.map(user => [user.name, user.age, user.email, user.phone, user.department].join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">User Management</h1>

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Add User"}
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full md:w-auto"
            onClick={downloadCSV}
          >
            Download CSV
          </button>
        </div>

        {showForm && <AddUserForm onAddUser={addUser} />}
        <UserTable users={users} />
      </div>
    </div>
  );
}

export default App;
