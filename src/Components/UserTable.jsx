import React from "react";

function UserTable({ users }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 rounded">
        <thead className="bg-gray-200 text-left">
          <tr>
            {['Name', 'Age', 'Email', 'Phone', 'Department'].map((heading, index) => (
              <th key={index} className="py-2 px-4">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">No users added yet.</td>
            </tr>
          ) : (
            users.map((user, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.age}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.phone}</td>
                <td className="py-2 px-4">{user.department}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
