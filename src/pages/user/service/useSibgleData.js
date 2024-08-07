import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { request } from '../../../config/request'

export const useSibgleData = (id) => {
  return useQuery({
    queryKey: ["get-single", id],
    queryFn: ()=> request.get(`/todos/${id}`).then((res) => res.data)
  })
}
