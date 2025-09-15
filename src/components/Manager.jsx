import React from 'react'
import { useState, useEffect } from 'react'

const Manager = () => {
  const [show, setShow] = useState(true);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, [])

  const showdown = () => {
    setShow(!show);
  }

  const savePassword = () => {
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-200 opacity-20 blur-[100px]">
        </div>
      </div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-600"> &lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">Your own Password Manager</p>
        <div className="flex flex-col p-4 text-black gap-6">
          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-900 w-full p-4 py-1' type="text" name="site" id="" />
          <div className="flex w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-900 w-1/2 p-4 py-1' type="text" name="username" id="" />
            <div className='relative w-1/2'>
              <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-900 w-full p-4 py-1' type="text" name="password" id="" />
              <span className='absolute right-3 top-1'>
                {show ? (
                  <img onClick={showdown} width={24} src="icons/eye.png" alt="eye" />
                ) : (
                  <img onClick={showdown} width={24} src="icons/eyecross.png" alt="hidden" />
                )}
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center items-center bg-green-500 
          hover:bg-green-300 rounded-full px-15 py-2 mx-auto my-6 font-bold border-2 border-green-900'>
            {/* <lord-icon
            src="https://cdn.lordicon.com/jgnfzqg.json"
            trigger="hover">
          </lord-icon> */}
            Add Password</button>
        </div>
        <div className="passwords">
          <h2>Your Passwords</h2>
          {passwordArray.length === 0 ? (<div>
            No Password To Show
          </div>) : (<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs bg-green-900 uppercase text-white font-bold">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Site
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Password
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-100 border-b  border-green-900 font-medium text-black whitespace-nowrap">
                    <td className="px-6 py-4">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default Manager
