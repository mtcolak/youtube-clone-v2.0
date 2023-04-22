import React from 'react'

function Element({Icon, text, avatar}) {
  return (
    <div className='rounded-lg cursor-pointer flex items-center gap-5 p-[12px] py-[8px] hover:bg-[#272727]'>
        {avatar ?
        <img src={avatar} alt='avatar' className='rounded-full w-6 h-6'/> 
        : <div>{Icon}</div>}
        <div className='pl-2'>{text}</div>
    </div>
  )
}

export default Element