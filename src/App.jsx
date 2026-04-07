import React, { useState } from 'react'
import Cards from "./components/Cards"

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

  const deleteHandler= (idx)=>{
    const deleteUser= [...allUsers];
    deleteUser.splice(idx,1)
    
    setAllUsers(deleteUser)
    
  }

  return (
    <div className='p-6 relative'>
      <h1 className='absolute left-1/2 -translate-x-1/2 mt-3 text-3xl font-bold font-Avenir'>Contact List</h1>
      <form onSubmit={changed} className='text-lg rounded-2xl shadow-2xl h-40 w-full pt-12 bg-gray-300 bg-cover flex flex-wrap items-center justify-around gap-2'>
        <input type="url" placeholder='Paste Image URL'
          value={profile} // two way binding
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
          className='active:scale-90 cursor-pointer shadow-xl text-white font-semibold bg-green-400 rounded-lg h-10 w-60 px-3'>Add Contact</button>
      </form>
      {allUsers.map((elem, idx) => {
        return <Cards idx={idx} elem={elem} deleteHandler={deleteHandler}/>
      })}
    </div>
  )
}

export default App

