import React from 'react'
import { use } from 'react'
import { Spinner } from "@material-tailwind/react";
import { MyCard } from './MyCard'

export const ToursData = ({dataPromise}) => {
    const data=use(dataPromise)
  return (
    <main className="flex-1 overflow-y-auto p-5 flex flex-wrap gap-5 justify-center bg-indigo-900">
        {data.map(obj=><MyCard key={obj.id} {...obj}/>)}

    </main>
  )
}


