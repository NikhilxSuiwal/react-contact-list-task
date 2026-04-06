import React, { useState } from 'react'

const App = () => {

  const [profile, setProfile] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const changed = (e) => {
    e.preventDefault();

    const newAllUsers = [...allUsers]; // Destructuring
    newAllUsers.push({ profile, name, number })

    console.log(newAllUsers);

    setAllUsers(newAllUsers);

    setProfile('')
    setName('')
    setNumber('')
  }

  return (
    <div className='p-6 relative'>
      <h1 className='absolute left-1/2 -translate-x-1/2 mt-3 text-3xl font-bold font-Avenir'>Contact List</h1>
      <form onSubmit={changed} className='text-lg rounded-2xl shadow-2xl h-40 w-full pt-10 bg-gray-300 bg-cover flex items-center justify-around gap-3'>
        <input type="url" placeholder='Paste Image URL'
          value={profile}
          onChange={(e) => {
            setProfile(e.target.value);
          }}
          className='border-2 border-gray-600 rounded-lg h-10 w-60 px-3'
        />
        <input
          type="text" placeholder='Enter contact name' required
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          className='border-2 border-gray-600 rounded-lg h-10 w-60 px-3'
        />

        <input
          type="tel" pattern='[0-9]{10}' required placeholder='Enter Phone Number'
          value={number}
          onChange={(e) => {
            setNumber(e.target.value)
          }}
          className='border-2 border-gray-600 rounded-lg h-10 w-60 px-3'
        />

        <button
          className='border-2 border-gray-600 rounded-lg h-10 w-60 px-3'>Add Contact</button>
      </form>
      {allUsers.map((elem, idx) => {
        return <div className='px-6 flex justify-center mt-5'>
          <div key={idx} className='h-30 w-lg bg-gray-300 shadow-2xl rounded-2xl flex items-center justify-between gap-6 px-8'>
            <img className=' cursor-pointer shadow-2xl h-20 w-20 rounded-full object-cover' src={elem.profile} alt="" />
            <div className='flex flex-col items-center'>
              <h1 className='text-3xl font-bold'>{elem.name}</h1>
              <h1 className='text-xl text-gray-600'>{elem.number}</h1>
            </div>
          <i className=" shadow-lg cursor-pointer ri-phone-line w-10 h-10 bg-gray-300 flex items-center justify-center text-xl rounded-full"></i>
          </div>
        </div>
      })}
    </div>
  )
}

export default App

