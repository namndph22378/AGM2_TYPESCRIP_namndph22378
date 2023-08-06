import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {useParams, useNavigate} from 'react-router-dom'
import { getById, update } from '../../api/categorys';
import { updateFormCate, updateCate } from '../../interfaces/auth';

const CategoryUpdate =()=>{
    const {id} = useParams()
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm<updateFormCate>({
        resolver: yupResolver(updateCate),
        defaultValues: async () => {
            if (id) {
                return await fetchProductById(id)
            }
        }

    })


    const onSubmit = async (data: updateFormCate) => {
        try {
            if (id) {
                const response = await update(id, data)
                console.log(response);
                navigate('/admin/category')
            }
        }catch(err) {
            console.log(err);
            
        }
        
    }

    const fetchProductById = async (id: string) => {
        const {data} = await getById(id)
        return data
        
    }
    return <section className="bg-gray-100">
    
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
        <div className="lg border:col-span-2 lg border:py-12">
          
        </div>
  
        <div className="rounded-lg border bg-white p-8 shadow-lg border lg border:col-span-3 lg border:p-12">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name</label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("name")}
              />
              <p className='text-red-600 text-[10px]'>
                {errors.name && errors.name.message}
              </p>
            </div>
  
            
  
            <div className="mt-4">
              <button
                type="submit"
                // onClick={onSubmit}
                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    </section>
    }
    export default CategoryUpdate