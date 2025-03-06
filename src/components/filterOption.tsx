import { Dispatch } from "react";
interface FilterOptionProps  {
    text:string,
    dispatch:Dispatch<{ type: string; }>
}
export function FilterOption({text,dispatch}:FilterOptionProps){
    return (
        <div
        className="font-bold  hover:text-[#494C6B]  cursor-pointer dark:hover:text-[#FFFFFF]"
        onClick={() => dispatch({type:text})}
      >
        {text}
      </div>
    )
}