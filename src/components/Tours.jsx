import React from 'react'
import { getData } from '../util'
import { Suspense } from 'react'
import { ToursData } from './ToursData'
import { Loading } from './Loading'
import { ErrorBoundary } from 'react-error-boundary'


export const Tours = () => {
    const dataPromise=getData()//asszink.fg.promise-t ad vissza
  return (
    <ErrorBoundary fallbackRender={({error})=><div>Error:{JSON.stringify(error)}</div>}>
        <Suspense fallback={<Loading/>}>
            <ToursData dataPromise={dataPromise}/>
        </Suspense>
    </ErrorBoundary>
  )
}

