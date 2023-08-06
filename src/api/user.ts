import * as Yup from 'yup'
import {  createFormUser,  updateFormUser } from '../interfaces/auth';
import instance from "../api/insntace";
import { ICategory } from '../interfaces/auth'
import axios from "axios";



export const getAll = () => {
    const uri = "/users"
    return instance.get(uri)
}

export const getById = (id: string) => {
    const uri = "/users/" + id
    return instance.get(uri)
}
export const create = (body: createFormUser) => {
    const uri = "/users/" 
    return instance.post(uri, body)
}
export const update = (id: string, body: updateFormUser) => {
    const uri = "/users/" + id
    return instance.put(uri, body)
}

const API_URL = "http://localhost:3000";
export const deleteUser = async (userId: number) => {
    const url = `${API_URL}/users/${userId}`;
    await axios.delete(url);
  };