import React from 'react'

function Videos({ Icon, avatar, title, author, review, date }) {
    return (
        <div className="flex flex-col cursor-pointer gap-3">
            <img src={Icon} alt='video' className='rounded-xl w-[360px] h-[200px]' />
            <div className="flex gap-2">
                <img src={avatar} alt='video' className='ml-1 rounded-full w-8 h-8' />
                <div className="text-white font-medium">
                    {title}
                    <p className='text-[#8f8f8f] hover:text-[#d1d1d1] text-sm'>{author}</p>
                    <p className='flex gap-2 text-[#8f8f8f] text-sm'>
                        {review}görüntülenme
                        <li>{date}</li>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Videos