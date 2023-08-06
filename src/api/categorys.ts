import * as Yup from 'yup'
import { updateForm } from '../interfaces/auth';
import instance from "../api/insntace";
import { ICategory } from '../interfaces/auth'
import axios from "axios";



export const getAll = () => {
    const uri = "/categorys"
    return instance.get(uri)
}

export const getById = (id: number|string) => {
    const uri = "/categorys/" + id
    return instance.get(uri)
}

export const update = (id: string, body: updateForm) => {
    const uri = "/categorys/" + id
    return instance.put(uri, body)
}

const API_URL = "https://example.com/api";
export const deleteCategory = async (categoyId: number) => {
    const url = `${API_URL}/categorys/${categoyId}`;
    await axios.delete(url);
  };