// dùng hook from
import { useForm, SubmitHandler } from "react-hook-form"
import { signup } from "../../api/auth"
import { IUserSignup } from "../../interfaces/auth"
import * as Yup from 'yup'
import { Link } from "react-router-dom"
type Props = {}

const Signup = (props: Props) => {
  // sử dụng các hook form  destructuring  lấy ra 
  const { register, handleSubmit, formState: { errors } } = useForm<IUserSignup>()
  // hàm sử lý form 
  const onSubmit: SubmitHandler<IUserSignup> = (inputData: any) => {
    console.log(inputData);

    (async () => {
      const { data } = await signup(inputData)
      localStorage.setItem("users", JSON.stringify(data))

    })()


  }
  return (
   
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div className=" flex  bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#F8F8F8] dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
              Đăng kí tài khoản
            </h1>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Tên đăng ký</label>
                <input {...register('name', {
                  required: true, minLength: {
                    value: 6,
                    message: "Tên phải có ít nhất 6 ký tự"
                  }
                })} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tên đăng ký" />
                {errors.name?.type === "required" && <small id="namelHelp" className="form-text text-muted">Trường  name là bắt buộc</small>}
                {errors.name?.type === "minLength" && <small id="namelHelp" className="form-text text-muted">{errors.name.message}</small>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email</label>
                <input {...register('email', {
                  required: true, pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Địa chỉ email không đúng định dạng cần"
                  }
                })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                {errors.email?.type === "required" && <small id="emailHelp" className="form-text text-muted">Trường email là bắt buộc</small>}
                {errors.email?.type === "pattern" && <small id="emailHelp" className="form-text text-muted">{errors.email.message}</small>}
              </div>



              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                <input {...register('password', {
                  required: true, minLength: {
                    value: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự"
                  }
                })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.password?.type === "required" && <small id="passlHelp" className="form-text text-muted">Trường  Password là bắt buộc</small>}
                {errors.password?.type === "minLength" && <small id="passlHelp" className="form-text text-muted">{errors.password.message}</small>}
              </div>
              
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">confirmPassword</label>
                <input {...register('confirmPassword', {
                  required: true, minLength: {
                    value: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự"
                  }
                })} type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {errors.confirmPassword?.type === "required" && <small id="passlHelp" className="form-text text-muted">Trường  Password là bắt buộc</small>}
                {errors.confirmPassword?.type === "minLength" && <small id="passlHelp" className="form-text text-muted">{errors.confirmPassword.message}</small>}
              </div>

              <button type="submit" className="w-full text-gray-900 bg-primary-600 bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đăng Ký</button>
              <div>
                <p className="text-center">Hoặc đăng nhập bằng</p>
                <div className="flex justify-center mt-4 gap-5">
                  <a href=""><img src="./logo1.png" alt="" /></a>
                  <a href=""><img src="./logo2.png" alt="" /></a>
                </div>
              <button className="btn btn-red"><Link to={`/login`}>Đăng Nhập</Link></button>

              </div>
            </form>
          </div>
          <div className="bg-[#F8F8F8] flex justify-center items-center mx-16">
            <a href="http://localhost:5173/"><img src="" alt="" /></a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Signup