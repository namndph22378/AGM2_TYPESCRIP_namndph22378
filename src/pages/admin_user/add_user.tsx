import React, { useState } from 'react';
import { IUser } from '../../interfaces/auth';
import { useNavigate } from 'react-router-dom';
import { create } from '../../api/categorys';



const AddUserFrom: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUser>({
    id: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await create(userData);
      navigate("/admin/user")
    } catch (error) {
      console.error('Error creating userr:', error);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={userData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" value={userData.password} onChange={handleChange} />
      </div>
      <div>
        <label>confirmPassword:</label>
        <input type="text" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
      </div>

      <button type="submit" onClick={handleSubmit}>Add User</button>
    </form>
  );
};

export default AddUserFrom;


