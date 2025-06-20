import React, { useState } from 'react';
function AddUserForm({onAddUser}){
   const [form,setForm]=useState({
    name:"",
    age:"",
    email:"",
    phone:"",
    dapartment:"",
   });

   const handleChange=(e)=>{
    setForm(prev=>({
        ...prev,
        [e.target.name]:e.target.value,
    }))
   }
   
   const handleSubmit=(e)=>{
    e.preventDefault();
    onAddUser(form);
    setForm({name:"",age:"",email:"",phon:"",department:""});
   }
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {['name', 'age', 'email', 'phone', 'department'].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      ))}
      <button ype="submit" className="md:col-span-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> Submit</button>
    </form>
  );
     
}
export default AddUserForm;