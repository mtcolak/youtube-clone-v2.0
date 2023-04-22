import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RxAvatar } from 'react-icons/rx';
import Youtube from '../assets/youtube.png'

function Navbar() {
    return (
        <div className='flex items-center py-2 px-3 bg-[#0f0f0f] text-white w-full hover:overflow-y-hidden'>
            <div className="flex items-center gap-6">
                <div className="cursor-pointer hover:bg-[#2a2a2a] p-2 rounded-full">
                    <AiOutlineMenu className='h-5 w-5 cursor-pointer' />
                </div>
                <div className="flex gap-[6px]">
                    <img src={Youtube} alt='youtube' className='w-7 h-7'/>
                    <span className='font-semibold'>Youtube</span>
                </div>
            </div>
            <div className="flex grow items-center justify-center gap-3">
                <div className="flex">
                    <input className='w-[500px] outline-none bg-transparent border border-[#2e2e2e] rounded-l-full px-5' placeholder='Ara'></input>
                    <div className="bg-[#222] cursor-pointer py-2 rounded-r-full px-4">
                        <AiOutlineSearch className='h-6 w-6 ' />
                    </div>
                </div>
                <div className="bg-[#181818] cursor-pointer hover:bg-[#2a2a2a] p-3 rounded-full">
                    <BsFillMicFill />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="cursor-pointer hover:bg-[#2a2a2a] p-2 rounded-full">
                    <AiOutlineVideoCameraAdd className='h-5 w-5' />
                </div>
                <div className="cursor-pointer hover:bg-[#2a2a2a] p-[6px] rounded-full">
                    <IoMdNotificationsOutline className='h-6 w-6' />
                </div>
                <div className="cursor-pointer p-3">
                    <RxAvatar className='h-6 w-6' />
                </div>
            </div>
        </div>
    )
}

export default Navbar