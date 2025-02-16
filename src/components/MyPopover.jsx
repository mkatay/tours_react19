import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
   
  export const MyPopover=({name,info,price})=> {
    return (
    <Popover>
        <PopoverHandler>
          <Button>read more...</Button>
        </PopoverHandler>
        <PopoverContent className="max-w-[600px] ">
          <h1 className="text-3xl underline">{name}</h1>
          <p className="text-justify text-gray-700">{info}</p>
          <p className="text-right">Price: {price}$</p>
        </PopoverContent>
      </Popover>
    );
  }