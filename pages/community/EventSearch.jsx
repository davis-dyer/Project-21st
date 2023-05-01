import React from 'react'

const EventSearch = ({setterFunction}) => {
  return (
    <article>
        <div className='mt-10 text-center'>
            <input
                className='mt-4'
                placeholder='Search Communities'
                onChange={
                  (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                  }
                }
            />
            <button
                className='ml-2 p-1 rounded-xl border border-black bg-purple-500 text-white'
            >Search</button>
        </div>
    </article>
  )
}

export default EventSearch