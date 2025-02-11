interface FilterOptionProps  {
    text:string,
    setFilterCriteria: React.Dispatch<React.SetStateAction<string>>
}
export function FilterOption({text,setFilterCriteria}:FilterOptionProps){
    return (
        <div
        className="font-bold  hover:text-[#494C6B]  cursor-pointer dark:hover:text-[#FFFFFF]"
        onClick={() => {
          setFilterCriteria(text);
        }}
      >
        {text}
      </div>
    )
}