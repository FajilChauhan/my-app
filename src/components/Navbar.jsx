import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontener flex justify-between items-center py-5 px-4 h-16">
                <div className="logo font-bold text-2xl">
                    <span className="text-green-600"> &lt;</span>
                    Pass
                    <span className="text-green-600">OP/&gt;</span>
                </div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold hover:text-green-400' href='/'>Home</a>
                        <a className='hover:font-bold hover:text-green-400' href='/about'>About</a>
                        <a className='hover:font-bold hover:text-green-400' href='/contact'>contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
