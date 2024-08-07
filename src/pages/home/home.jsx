import React from 'react'
import { useGetTodo } from './service/query/useGetTodo'
import { Card } from './components/card'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useCreateTodo } from './service/mutation/useCreateTodo'
import { useNavigate } from 'react-router-dom'
import { useDeleteTodo } from './edit-todo/service/useDeleteTodo'

export const Home = () => {

    const {data, isLoading} = useGetTodo()
    const {handleSubmit, register, reset} = useForm()
    const {mutate, isPending} = useCreateTodo()
    const navigate = useNavigate()
    const {mutate:isMutate} = useDeleteTodo()

    const submit = (data) =>{
        mutate(data, {
            onSuccess: ()=> {
                console.log("done");
            }
        })
        reset()
    }
    const deleteItem = () =>{
        isMutate( id, {
            onSuccess: ()=> {
                console.log("delete");
            }
        })
        console.log(id);
    }

  return (
    <div className='flex items-center justify-center flex-col w-[100%] h-auto'>
        <form className='w-[500px] h-[200px] border-2 shadow-lg rounded-xl shadow-gray-400 flex items-center justify-center flex-col mt-10 gap-3 ' onSubmit={handleSubmit(submit)}>
            <input className='w-[220px] h-[50px] shadow-lg shadow-gray-400 border-2 border-gray-200 px-3 rounded-xl' {...register("title")} type="text" placeholder='ismingizni kiriting'/>
            <input className='w-[220px] h-[50px] shadow-lg shadow-gray-400 border-2 border-gray-200 px-3 rounded-xl' {...register("description")} type="text" placeholder='familyangizni kiriting' />
            <button  className='w-[120px] h-[50px] bg-gray-400 rounded-lg text-white font-medium' type='submit'>send</button>
        </form>
        {isLoading ? <h1>loading...</h1> : <div>
            {data?.map((item) => (
                <div key={item.id} className=' flex items-center justify-center flex-col w-[500px] h-[150px] shadow-lg mt-10 border-2 border-gray-200 shadow-gray-400 rounded-xl'>
                    <Link  to={`/user/${item.id}`}>
                    <h1 className='font-bold'>{item.title}</h1>
                    <p>{item.description}</p>
                    </Link>
                    <div className='mt-5 '>
                    <button className='w-[120px] h-[50px] bg-green-600 rounded-lg text-white font-medium' onClick={() => navigate(`/edit-todo/${item.id}`)}>edit</button>
                    <button className='w-[120px] h-[50px] bg-red-600 rounded-lg ml-5 text-white font-medium' onClick={()=> deleteItem(item.id)}>delete</button>
                    </div>
                </div>
            )  )}
            
            </div>}
    </div>
  )
}
