import React from 'react'
import Topics from './Topics'
import { AiOutlineRight } from 'react-icons/ai';
import Videos from '../props/Videos';
import Icon from '../assets/hq720.webp';
import Vole from '../assets/profile.jpg';
import Dmax from '../assets/dmax.jpg';
import Galatasaray from '../assets/galatasaray.jpg';
import Mabed2 from '../assets/mabed2.jpg';

function Body() {
    return (
        <div className='w-full bg-[#0f0f0f] pl-5 pt-1'>
            <div className="flex justify-between items-center">
                <Topics />
                <div className="text-white cursor-pointer hover:bg-[#2a2a2a] p-3 rounded-full">
                    <AiOutlineRight />
                </div>
            </div>
            <div className="py-4 px-24 flex gap-4 justify-between">
                <Videos
                    Icon={Icon}
                    avatar={Galatasaray}
                    title={'Geniş Özet | Galatasaray 2-1 Toulouse FC'}
                    author = {'Galatasaray'}
                    review = {'4,3 B '}
                    date = {'1 saat önce'}
                />
                <Videos
                    Icon={Icon}
                    avatar={Galatasaray}
                    title={'Geniş Özet | Galatasaray 2-1 Toulouse FC'}
                    author = {'Galatasaray'}
                    review = {'4,3 B '}
                    date = {'1 saat önce'}
                />
                <Videos
                    Icon={Icon}
                    avatar={Galatasaray}
                    title={'Geniş Özet | Galatasaray 2-1 Toulouse FC'}
                    author = {'Galatasaray'}
                    review = {'4,3 B '}
                    date = {'1 saat önce'}
                />
                <Videos
                    Icon={Icon}
                    avatar={Galatasaray}
                    title={'Geniş Özet | Galatasaray 2-1 Toulouse FC'}
                    author = {'Galatasaray'}
                    review = {'4,3 B '}
                    date = {'1 saat önce'}
                />
            </div>

        </div>
    )
}

export default Body