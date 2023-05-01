import { motion } from 'framer-motion'
import React from 'react'
import dyernotes from '../assets/dyernotes.png'
import { BsUnlock } from 'react-icons/bs'
import { BiLock } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const PodcastContainer = () => {
    return (
        <>
            <div className='w-screen mt-20 mb-10 flex flex-col items-center bg-slate-800'>
                <h2 className='text-[2.5rem] text-white mb-12'>DyerNotes Podcast</h2>
                <div className='flex flex-row item-center justify-between m-10 gap-5 rounded-xl bg-cardOverlay shadow-lg'>
                    <div className='border border-yellow-500 rounded-xl w-1/2 h-'>
                        <img src={dyernotes} alt="" className='rounded-xl' />
                    </div>
                    <div className='flex flex-col items-center justify-center w-1/2'>
                        <div className="w-full flex flex-col items-start justify-start -mt-8">
                            <p className="text-textColor font-bold text-base md:text-lg">TITLE</p>
                            <p className="mt-1 text-sm text-gray-500">
                                date
                            </p>
                            <div className="flex items-center gap-8">
                                <p className="text-lg text-headingColor font-semibold">category</p>
                            </div>
                        </div>
                        <div className='border border-black'>
                            <audio id="player" preload='none' controls >
                                <source />
                            </audio>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PodcastContainer