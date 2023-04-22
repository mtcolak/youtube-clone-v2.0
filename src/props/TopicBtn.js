import React from 'react'

function TopicBtn({topic}) {
  return (
    <div className="cursor-pointer bg-neutral-800 hover:bg-neutral-600 duration-500 p-2 rounded-md text-white">
        {topic}
    </div>
  )
}

export default TopicBtn