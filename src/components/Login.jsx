import React, { useState } from 'react'
import { BellIcon, Cross, X } from "lucide-react";

export default function Login({ pageDisplay }) {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const loginHandle = async (e) => {
    e.preventDefault();
    
  }

  return (
    <>
      <section >
        <div className='flex justify-end' onClick={(e) => pageDisplay(false)}><X></X></div>
        <article className='flex justify-center'>
          <form action="" className='border p-10' onSubmit={loginHandle}>
            <div className='flex gap-3'>
              <label htmlFor="">Username</label>
              <input type="text" placeholder='enter username' className='border p-1 ' onChange={(e) => setUserName(e.target.value)} />
            </div>
            {/* <div className='flex justify-center'>
              <small className='text-red-900 font-bold'>
                {usernameError}
              </small>
            </div> */}

            <div className='flex gap-4 mt-5'>
              <label htmlFor="">Password</label>
              <input type={showPassword ? "text" : "password"} placeholder='enter password' className='border p-1' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='flex gap-2 mt-2'>
              <input type="checkbox" onChange={() => setShowPassword(!showPassword)} /> show password
            </div>

            {/* <div className='flex justify-center'>
              <small className='text-red-900 font-bold'>
                {passError}
              </small>
            </div> */}

            <div >
              <button className='bg-blue-900 w-full rounded text-white mt-5 p-1' type='submit'>Login</button>
            </div>


          </form>
        </article>

      </section>
    </>
  )
}
