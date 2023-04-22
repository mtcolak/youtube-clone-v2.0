import React from 'react'
import TopicBtn from '../props/TopicBtn';

function Topics() {
    const topics = [
        'Tümü',
        'Mixler',
        'Futbol',
        'Basketbol',
        'Müzik',
        'Son Yüklenenler',
        'İzlenenler',
        'Yeni öneriler',
        'Yayınlar',
        'Aksiyon-macera oyunları',
        'Haberler'
    ];
  return (
    <div className='flex items-center space-x-4 pl-4 text-sm font-normal'>
        {topics.map((topic) => <TopicBtn topic={topic}/>)}
    </div>
  )
}

export default Topics