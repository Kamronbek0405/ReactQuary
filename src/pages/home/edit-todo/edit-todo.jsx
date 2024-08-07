import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSibgleData } from '../../user/service/useSibgleData'
import { UserForm } from './user-form'
import { useEditTodo } from './service/useEditTodo'

export const EditTodo = () => {
    const {id} = useParams()
    const {mutate, }  = useEditTodo(id) 
     const {data, isLoading} = useSibgleData(id)
     const navigate = useNavigate()

    const submit = (value) =>{
        mutate(value, {
            onSuccess: ()=>{
                navigate("/")
            }
        })
    }

   
  return (
    <div>
        {isLoading ? <h1>Loading...</h1> : <div>
        <UserForm  submit={submit} {...data}/>
            </div>}
    </div>
  )
}
