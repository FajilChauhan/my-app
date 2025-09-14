import React from 'react'

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-200 opacity-20 blur-[100px]">
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
          <input placeholder='Enter Website URL' className='rounded-full border border-green-900 w-full p-4 py-1' type="text" name="" id="" />
          <div className="flex w-full justify-between gap-8">
            <input placeholder='Enter Username' className='rounded-full border border-green-900 w-full p-4 py-1' type="text" name="" id="" />
            <input placeholder='Enter Password' className='rounded-full border border-green-900 w-full p-4 py-1' type="text" name="" id="" />
          </div>
          <button className='flex justify-center items-center bg-green-500 
          hover:bg-green-300 rounded-full px-15 py-2 mx-auto my-6 font-bold border-2 border-green-900'>
          {/* <lord-icon
            src="https://cdn.lordicon.com/jgnfzqg.json"
            trigger="hover">
          </lord-icon> */}
          Add Password</button>
        </div>
      </div>
    </>
  )
}

export default Manager
