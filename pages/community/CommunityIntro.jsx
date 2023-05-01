import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Nash from '../../assets/nashville.jpg'
import { useState } from 'react'
import { communityData } from '../../utils/data'



const CommunityIntro = () => {

    const [currentState, setCurrentState] = useState(0);
    const navigate = useNavigate()

    return (
        <section className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex flex-col flex-1 text-center align-center justify-center gap-2'>
                <motion.h2
                    className='font-extrabold text-purple-800 tracking-[.5em] text-[2.0rem] md:text-[2.5rem] lg:text-[2.6rem] text-center'
                    initial='hidden'
                    whileInView='show'
                >COMMUNITY</motion.h2>
                <div className='mt-4 flex items-center justify-center'>
                    <button
                        className='w-2/3 md:w-1/2 lg:w-2/3 mb-2 border bg-gradient-to-br from-purple-400 to-purple-600 px-4 py-2 rounded-lg hover:shadow-lg transition ease-in-out duration-100 font-semibold text-white'
                        onClick={() => navigate('/about')}
                    >Find Out More</button>
                </div>
            </div>
            <Swiper
                className='w-full h-full absolute flex items-center justify-center gap-8 flex-wrap'
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {communityData && communityData.map(n => (
                    <SwiperSlide key={n.id} className='w-full h-full backdrop-blur-lg rounded-xl drop-shadow-xl flex items-center justify-center'>
                        <img src={n.imgsrc} className='' alt='ice cream' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default CommunityIntro