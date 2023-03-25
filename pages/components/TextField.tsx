import React, { HTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface ITextField extends HTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<any>;
  type: "text" | "number";
  renderError?:()=> ReactNode;
}

const TextField = ({renderError, register, type, ...props }: ITextField) => {
  return (
    <>
      <input type={type} {...register} {...props} />
      <div>
        {
          renderError?.()
        }
      </div>
    </>
  );
};

export default TextField;
