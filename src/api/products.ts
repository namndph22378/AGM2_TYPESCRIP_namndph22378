import * as Yup from 'yup'
import { updateForm } from '../interfaces/auth';
import instance from "../api/insntace";
import { IProduct } from '../interfaces/auth'
import axios from "axios";



export const getAll = () => {
    const uri = "/products"
    return instance.get(uri)
}

export const getById = (id: number|string) => {
    const uri = "/products/" + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id
    return instance.put(uri, body)
}

const API_URL = "https://example.com/api";
export const deleteProduct = async (productId: number) => {
    const url = `${API_URL}/products/${productId}`;
    await axios.delete(url);
  };