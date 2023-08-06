import * as Yup from 'yup'
export interface IuserSignin {
    email: string;
    password: string;
}
export interface IUserSignup {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;


}
export interface IProduct {
    id: number,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: string,
    cate_id: number
}
export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    confirmPassword: string

}
export interface ICategory {
    id: number,
    name: string
}
export interface ISpecification {
    name: string,
    attributes: { code: string, name: string, value: string }[]
}

export const signupSchema = Yup.object({
    firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
    lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    phone: Yup.string().min(10).required("Số điện thoại phải là 10 số"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})

export type SigninForm1 = Yup.InferType<typeof signinSchema>

export const updateSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type updateForm = Yup.InferType<typeof updateSchema>

export const updateCate = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),

})

export type updateFormCate = Yup.InferType<typeof updateCate>

export const updateUser = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().required("Trường dữ liệu bắt buộc"),
    password: Yup.string().required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().required("Trường dữ liệu bắt buộc"),

})

export type updateFormUser = Yup.InferType<typeof updateUser>

export const createSchema = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    price: Yup.number().required("Trường dữ liệu bắt buộc"),
    images: Yup.string().required("Trường dữ liệu bắt buộc"),

    original_price: Yup.number().required("Trường dữ liệu bắt buộc"),
    description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
})

export type createForm = Yup.InferType<typeof createSchema>

export const createCate = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),

})

export type createFormCate = Yup.InferType<typeof createCate>

export const createUser = Yup.object({
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().required("Trường dữ liệu bắt buộc"),
    password: Yup.string().required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().required("Trường dữ liệu bắt buộc"),


})

export type createFormUser = Yup.InferType<typeof createUser>
