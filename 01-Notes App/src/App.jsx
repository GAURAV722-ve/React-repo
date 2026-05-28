import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [Task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copy_task = [...Task];

    copy_task.push({title,details})

    setTask(copy_task)
    console.log(Task)

    setTitle('')
    setDetails('')
  }

  return (
    <div className='h-screen lg:flex bg-black text-white min-h-screen'>
      <form 
        onSubmit={submitHandler}
        className='flex justify-between lg:w-1/2 flex-col items-center p-10 gap-10'
      >
        <h1 className='text-3xl font-bold'>ADD NOTES</h1>

        <input 
          type='text'
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='px-5 py-2 w-full border-2 rounded border-white text-white bg-transparent'
        />

        <textarea 
          placeholder='Enter details'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className='px-5 py-2 w-full border-2 rounded border-white text-white bg-transparent h-40 font-medium'
        />

        <button 
          className='bg-white active:bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-300'>
          Add Note
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l p-10'>
        <h1 className='text-3xl font-bold py-1'>RECENT NOTES</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-full overflow-auto'>
          {Task.map(function(elem,idx){
            return <div key={idx} className='h-52 w-40 rounded-xl text-black p-4 bg-white'>
              <h3 className='text-center leading-tight text-xl font-bold'>{elem.title}</h3>
              <p>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App