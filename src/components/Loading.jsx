import { Spinner } from '@material-tailwind/react'
import React from 'react'

export const Loading = () => {
  return (
    <div className='flex-1 bg-indigo-900 flex justify-center items-center'>
    <Spinner className="h-16 w-16"/>
  </div>
  )
}

