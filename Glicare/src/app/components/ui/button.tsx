import ButtonProps from '@/app/models/button.interface';
import React from 'react';


export function Button({ children, classAttributes, onClick, type = "button"}: ButtonProps) {

  const classMain = "lg:bg-blue-500 lg:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

  return (
    <button className={`${classAttributes} ${classMain} `} onClick={onClick} type={type} >
      {children}
    </button>
  );
}

export default Button;
