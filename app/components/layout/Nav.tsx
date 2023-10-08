import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between items-center p-4 fixed w-screen box-border z-10 backdrop-blur-xl'>
        <div>
        <h1 className='text-xl font-bold'>Say Foundation</h1>
        </div>
        <div className='flex gap-4 items-center'>
            <div>Home</div>
            <div>About</div>
            <div>Portfolio</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Nav