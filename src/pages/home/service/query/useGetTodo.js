import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../../../config/request'

export const useGetTodo = () => {
  return useQuery({
    queryKey: ["get-todo"],
    queryFn: ()=> request.get("/todos").then((res) => res.data),
  })
}
