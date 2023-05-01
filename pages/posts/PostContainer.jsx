import React, { useState } from 'react'
import PostCard from './PostCard'
import PostList from './PostList'
import PostSearch from './PostSearch'


const ServiceContainer = () => {

  /* const [searchTerms, setSearchTerms] = useState("") */

  return (
    <>
      <div className='w-full h-auto flex flex-col'>
        <section className="">
            <PostCard />
        </section>
        <section className="">
            <PostSearch /* setterFunction={setSearchTerms */ />
            <PostList /* searchTermState={searchTerms} */ />
        </section>
      </div>
    </>
  )
}

export default ServiceContainer