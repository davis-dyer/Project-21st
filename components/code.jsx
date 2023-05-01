import React from 'react'

const code = () => {
    return (
        <>
        {/* mobile & tablet */}
            <section className='lg:hidden rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10 bg-purple-100'>
                <div className="m-2 flex items-start justify-center">
                    <img src={''} alt="" className='w-1/2 md:w-3/4' />
                </div>
                <div className='w-full h-full lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                    <div className="">
                        <p className="text-center">Connect with Christians in a professional environment</p>
                    </div>
                    <button
                        className='p-4 m-4 bg-gradient-to-br from-purple-400 to-purple-700 text-white rounded-xl hover:shadow-lg transition ease-in-out duration-100 font-semibold' type='button'
                        onClick={() => {
                            navigate('/service')
                        }}
                    >Professional Community</button>
                </div>
            </section>

            <section className='lg:hidden rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10 bg-yellow-100'>
                <div className="m-2 flex items-start justify-center">
                    <img src={''} alt="" className='w-1/2 md:w-3/4' />
                </div>
                <div className='w-full h-full lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                    <div className="">
                        <p className="text-center">Find personal Christian community in your area!</p>
                    </div>
                    <button
                        className='p-4 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 m-4 text-black hover:shadow-lg transition ease-in-out duration-100 font-semibold'
                        type='button'
                        onClick={() => {
                            navigate('/service')
                        }}
                    >Personal Community</button>
                </div>
            </section>

            {/* large screens */}
            <section className='hidden rounded-3xl lg:grid  gap-4 w-full mt-10'>
                <div className="gap-4 m-4 bg-blue-100 rounded-lg">
                    <div className="p-5 m-4 flex gap-4 items-center justify-center">
                        <img src={davis} className='w-48 rounded-xl' alt="" />
                    </div>
                    <div className='lg:px-19 gap-4 grid grid-cols-1 items-center justify-center'>
                        <button
                            className='p-4 m-4 bg-gradient-to-br from-purple-400 to-purple-700 text-white hover:shadow-lg transition ease-in-out duration-100 font-semibold rounded-xl' type='button'
                            onClick={() => {
                                navigate('/service')
                            }}
                        >More About Me</button>
                        <button
                            className='p-4 m-4 bg-gradient-to-br from-purple-400 to-purple-700 text-white hover:shadow-lg transition ease-in-out duration-100 font-semibold rounded-xl' type='button'
                            onClick={() => {
                                navigate('/service')
                            }}
                        >Professional Portfolio</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default code
