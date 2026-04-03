import React from 'react'

const RightCardContent = (props) => {
  return (

        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between p-5'>
           <h2 className='text-3xl font-bold bg-white rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>

            <div>
              <p className='text-shadow-2xs  text-lg leading-relaxed text-white'>
                {props.intro}
              </p>

              <div className='flex justify-between items-center'>
                <button className='bg-white px-4 py-2 rounded-full'>
                  {props.tag}
                </button>

                <button className='text-2xl bg-white px-5 py-2 rounded-full'>
                  <i className="ri-arrow-right-long-line"></i>
                </button>
              </div>
            </div> 
    </div>
  )
}

export default RightCardContent