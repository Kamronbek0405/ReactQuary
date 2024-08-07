import React from 'react'
import { useParams } from 'react-router-dom'
import { useSibgleData } from './service/useSibgleData'

export const User = () => {
    const {id} = useParams()
    const {data, isLoading} = useSibgleData(id)
    console.log(data);
  return (
    <div>
        {isLoading ? <h1>loading...</h1> : <h1>{data?.title}</h1>}
    </div>
  )
}
