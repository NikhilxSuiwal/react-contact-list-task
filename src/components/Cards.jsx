import React from 'react'

const Cards = (props) => {
    return (
        <div className='px-6 flex justify-center mt-5'>
          <div className='lg:h-25 w-lg bg-gray-300 shadow-2xl rounded-2xl flex flex-wrap items-center justify-between gap-6 px-8'>
            <img className='active:scale-95 cursor-pointer shadow-2xl h-20 w-20 rounded-full object-cover' src={props.elem.profile} alt="" />
            <div className='flex flex-col items-center'>
              <h1 className='text-3xl font-bold'>{props.elem.name}</h1>
              <h1 className='text-xl text-gray-600'>{props.elem.number}</h1>
            </div>
            <i className="active:scale-95 shadow-lg cursor-pointer ri-phone-line w-10 h-10 bg-gray-300 flex items-center justify-center text-xl rounded-full"></i>
          </div>
          <button
          onClick={()=>{
            props.deleteHandler(props.idx);
          }} 
          className='shadow-2xl ml-8 px-5 bg-red-400 rounded-2xl active:scale-90 cursor-pointer text-white font-semibold'>Remove Contact</button>
        </div>
    )
}

export default Cards

