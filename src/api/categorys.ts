import * as Yup from 'yup'
import { createFormCate, updateForm, updateFormCate } from '../interfaces/auth';
import instance from "../api/insntace";
import { ICategory } from '../interfaces/auth'
import axios from "axios";



export const getAll = () => {
    const uri = "/categorys"
    return instance.get(uri)
}

export const getById = (id: string) => {
    const uri = "/categorys/" + id
    return instance.get(uri)
}
export const create = (body: createFormCate) => {
    const uri = "/categorys/" 
    return instance.post(uri, body)
}
export const update = (id: string, body: updateFormCate) => {
    const uri = "/categorys/" + id
    return instance.put(uri, body)
}

const API_URL = "http://localhost:3000";
export const deleteCategory = async (categoyId: number) => {
    const url = `${API_URL}/categorys/${categoyId}`;
    await axios.delete(url);
  };