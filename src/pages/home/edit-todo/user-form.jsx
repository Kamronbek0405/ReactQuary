import React from 'react'
import { useForm } from 'react-hook-form'
export const UserForm = ({title, description, submit}) => {
  const {handleSubmit, register} = useForm({ defaultValues: {title, description}, })
  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center flex-col gap-4 '>
      <form className='flex items-center justify-center flex-col w-[500px] h-[220px] shadow-lg shadow-gray-400 border-2 border-gray-200 rounded-xl'  onSubmit={handleSubmit(submit)}>
            <input  className='w-[220px] h-[50px] shadow-lg shadow-gray-400 border-2 border-gray-200 px-3 rounded-xl' {...register("title")} type="text" />
            <input  className='w-[220px] h-[50px] mt-5 shadow-lg shadow-gray-400 border-2 border-gray-200 px-3 rounded-xl' {...register("description")} type="text" />
            <button className='w-[120px] h-[50px] bg-gray-400 text-white font-medium rounded-xl mt-3' type='submit'>send</button>
        </form>
    </div>
  )
}
