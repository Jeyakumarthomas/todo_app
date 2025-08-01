import React,{useState,useRef,useEffect} from 'react';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todoList,setTodoList] = useState(localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]);

//updating localStorage
useEffect(()=>{localStorage.setItem('todos',JSON.stringify(todoList))},[todoList])

// Add new tasks
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

//Updating task status
const toggleTask = (id) => {
  setTodoList((prev)=>{
    return prev.map((todo)=>
    {
      if(id==todo.id){
        return {...todo,isComplete:!todo.isComplete}
      }
      return todo;
    })
  })
}

// Deleting Tasks

const deleteTodo = (id) => {
  setTodoList((prev)=>{
    return prev.filter((todo)=>todo.id!==id)
  })
}


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
        
        {todoList.length === 0?(<p classList="text-gray-500 text-sm">No task found</p>):(todoList.map((todo,index)=>{return <TodoItem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} deleteTodo={deleteTodo}/>}))}
        
        {/* list items */}
      </fieldset>
    </div>
  </>
  
  )
}
export default Todo
