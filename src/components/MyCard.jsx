import React from 'react'
import { MyPopover } from './MyPopover';

export const MyCard = ({id,name,info,price,image}) => {
    console.log(name);
    
  return (
    <a className="bg-white p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src={image} className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-xl">{name}</h4>
        <div className="mt-5 text-center">
           <MyPopover name={name} info={info} price={price}/>
        </div>
    </div>
</a>
  )
}
