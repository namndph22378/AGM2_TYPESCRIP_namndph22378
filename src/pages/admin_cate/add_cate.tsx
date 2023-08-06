import React, { useState } from 'react';
import { ICategory } from '../../interfaces/auth';
import { useNavigate } from 'react-router-dom';
import { create } from '../../api/categorys';



const AddCategoryForm: React.FC = () => {
//   const [cate, setCate] = useState<ICategory[]>([])
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState<ICategory>({
    id: 0,
    name: ''
    
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCategoryData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await create(categoryData);
      navigate("/admin/category")
    } catch (error) {
      console.error('Error creating cate:', error);
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={categoryData.name} onChange={handleChange} />
      </div>

      <button type="submit" onClick={handleSubmit}>Add Category</button>
    </form>
  );
};

export default AddCategoryForm;


