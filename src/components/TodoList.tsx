import TodoInput from "./Todo-List/TodoInput";
import TodoContainer from "./Todo-List/TodoContainer";
export default function TodoList(){
    return (
        <div className="flex flex-col justify-center relative bottom-[100px] left-[25%] w-[50%] gap-[20px]">
            <TodoInput />
            <TodoContainer />
        </div>
    )
}