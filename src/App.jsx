import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('')

  const getUser = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <div className='w-96 h-32 rounded justify-center items-center bg-slate-500 mb-1 p-4'>
        <p className='font-bold'>Busque por um nome:</p>
        <p className='text-slate-400 font-semibold text-sm'>(digite o nome de usuário)</p>
        <input 
          type="text" 
          onInput={(e) => setUsername(e.target.value)} 
          className='rounded bg-slate-50 text-zinc-950 text-center mb-2 p-2' 
          placeholder='Nome de usuário'
        />
        <button type="button" onClick={getUser} className='bg-blue-500 rounded px-4 py-2 absolute'>
          <img className='w-5 ' src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search button" />
        </button>
      </div>
      <div className='w-96 h-96 rounded justify-center items-center bg-slate-500 p-4'>
        {user.avatar_url && <img src={user.avatar_url} alt="Avatar" className='rounded-full w-24 h-24 place-self-center mx-auto' />}
        <p className='font-bold' ><a className='text-white' href="">{user.name}</a></p>
      </div>
    </>
  )
}

export default App
