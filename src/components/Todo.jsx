import React,{useState,useRef} from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todoList,setTodoList] = useState([
  {
    id:123,
    text:'readBooks',
    isComplete:true
  },
  {
    id:456,
    text:'writingBooks',
    isComplete:false
  }
]);

const inputRef = useRef();
const addTask = () => {
  const inputText = inputRef.current.value.trim();
  if(inputText===""){
    return null;
  }
  const newTodo = {
    id:Date.now(),
    text:inputText,
    isCompleted:false
  }

  setTodoList((prev)=>[...prev,newTodo])
  inputRef.current.value = ""
};

  return (
  <>
    <div className="w-[30-rem]">
      <h1 className = "text-lg my-2 font-medium text-amber-500">Todo list</h1>
      <div className="flex gap-2">
      <div className="flex-1">
        <input ref={inputRef} type="text" name='' id='' placeholder='Add Your Task'
        className="bg-white py-3 px-4 w-full border focus:outline-none focus:border-blue-500"/>
      </div>
      <button className='py-3 px-4 bg-blue-500 text-white hover:bg-blue-700 text-sm font-medium rounded-sm border-none' onClick={addTask}>Add Task</button>
      </div>
      <p className='my-3 text-sm text-zinc-400 px-1'>Fill Task Details</p>
    </div>
    <div className="w-[30-rem] bg-white shadow py-6 px-4">
      <fieldset className='space-y-3'>
        <legend className='text-pink-600 font-medium '>List of tasks</legend>
        {/* list items */}
        {/* <TodoItem text='Reading Books'/>*/}
        {todoList.length === 0?(<p classList="text-gray-500 text-sm">No task found</p>):(todoList.map((todo,index)=>{return <TodoItem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id}/>}))}
        {/* list items */}
      </fieldset>
    </div>
  </>
  
  )
}
export default Todo
