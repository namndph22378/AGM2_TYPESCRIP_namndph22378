import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from '../../interfaces/auth';
import { create } from '../../api/products';
import { getAll } from '../../api/categorys';
import { useNavigate } from 'react-router-dom';



const AddProductForm: React.FC = () => {
  const [cate, setCate] = useState<ICategory[]>([])
  const navigate = useNavigate();
  const [productData, setProductData] = useState<IProduct>({
    id: 0,
    name: '',
    price: 0,
    original_price: 0,
    images: '',
    description: '',
    cate_id: 0
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProductData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await create(productData);
      navigate("/admin")
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response2 = await getAll()
      setCate(response2.data)
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">

    <form  className="space-y-4" onSubmit={handleSubmit}>
      <div >
        <label>Name:</label>
        <input type="text" name="name" value={productData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={productData.price} onChange={handleChange} />
      </div>
      <div>
        <label>Original Price:</label>
        <input type="number" name="original_price" value={productData.original_price} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={productData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" name="images" onChange={handleChange} />
      </div>
      <div>
        <label>Cate Id:</label>
        <select
          name='cate_id'
          value={productData.cate_id}
          onChange={handleChange}
        >

          {cate.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>


      <button type="submit" onClick={handleSubmit}>Add Product</button>
    </form>
    </div>
  );
};

export default AddProductForm;


