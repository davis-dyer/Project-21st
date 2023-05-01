import React, { useState } from 'react'
import CommunityEventList from './CommunityEventList'
import CommunityInfo from './CommunityInfo'
import CommunityIntro from './CommunityIntro'
import EventMap from './EventMap'

const Communities = () => {

  return (
    <>
      <section>
        <CommunityIntro />
      </section>
      <section>
        <EventMap />
      </section>
      <section>
        <CommunityEventList />
      </section>
      <section>
        <CommunityInfo />
      </section>
    </>
  )
}

export default Communities