import React from 'react'
import Element from '../props/Element'
import { AiFillHome, AiOutlineTrophy } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import { MdVideoLibrary, MdLibraryBooks } from 'react-icons/md';
import { VscHistory } from 'react-icons/vsc';
import { RiVideoLine } from 'react-icons/ri';
import { BsClock } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { GiSoundWaves,GiConsoleController } from 'react-icons/gi';
import { TfiVideoCamera } from 'react-icons/tfi';
import { ImFire } from 'react-icons/im';
import { RiMusicLine } from 'react-icons/ri';
import Vole from '../assets/profile.jpg';
import Dmax from '../assets/dmax.jpg';
import Galatasaray from '../assets/galatasaray.jpg';
import Mabed2 from '../assets/mabed2.jpg';

function Left() {
    return (
        <div className="w-[224px] p-[12px] text-white inset-0">

            <div className="w-[180px]">
                <Element
                    Icon={<AiFillHome className='w-5 h-5' />}
                    text={'Ana Sayfa'}
                />
                <Element
                    Icon={<BsCameraVideo className='w-5 h-5' />}
                    text={'Shorts'}
                />
                <Element
                    Icon={<MdVideoLibrary className='w-5 h-5' />}
                    text={'Abonelikler'}
                />
            </div>
            <div className="w-[180px] border-t mt-[12px] pt-[12px] border-stone-800">
                <Element
                    Icon={<MdLibraryBooks className='w-5 h-5' />}
                    text={'Kitaplık'}
                />
                <Element
                    Icon={<VscHistory className='w-5 h-5' />}
                    text={'Geçmiş'}
                />
                <Element
                    Icon={<RiVideoLine className='w-5 h-5' />}
                    text={'Videos'}
                />
                <Element
                    Icon={<BsClock className='w-5 h-5' />}
                    text={'Daha sonra izle'}
                />
                <Element
                    Icon={<AiOutlineLike className='w-5 h-5' />}
                    text={'Liked Videos'}
                />
                <Element
                    Icon={<GiSoundWaves className='w-5 h-5' />}
                    text={'Mixed'}
                />

            </div>
            <div className='mt-5 border-b border-stone-800'>

            </div>
            <div className="mt-3">
                <span className='font-semibold ml-4'>Abonelikler</span>
                <Element
                    avatar={Vole}
                    text={'Vole'}
                />
                <Element
                    avatar={Dmax}
                    text={'Dmax Türkiye'}
                />
                <Element
                    avatar={Galatasaray}
                    text={'Galatasaray'}
                />
                <Element
                    avatar={Mabed2}
                    text={'Mabed2'}
                />
            </div>
            <div className='mt-5 border-b border-stone-800'></div>
            <div className="mt-3">
                <span className='font-semibold ml-4'>Keşfet</span>
                <Element
                    Icon={<ImFire className='w-5 h-5' />}
                    text={'Trendler'}
                />
                <Element
                    Icon={<RiMusicLine className='w-5 h-5' />}
                    text={'Music'}
                />
                <Element
                    Icon={<TfiVideoCamera className='w-5 h-5' />}
                    text={'Canlı'}
                />
                <Element
                    Icon={<GiConsoleController className='w-5 h-5' />}
                    text={'Oyun'}
                />
                <Element
                    Icon={<AiOutlineTrophy className='w-5 h-5' />}
                    text={'Spor'}
                />
            </div>
        
        </div>
    )
}

export default Left