import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import CommunityContainer from '../pages/community/CommunityContainer'
import About from '../pages/about/About'
import Profile from '../pages/Profile'
import MainContainer from '../components/MainContainer'
import CreateRequest from '../pages/posts/CreateRequest';
import CreateCommunity from '../pages/community/CreateEvent';
import PostContainer from '../pages/posts/PostContainer';
import Post from '../pages/posts/Post';
import CommunityProfile from '../pages/community/EventDetails';
import ContactContainer from '../pages/contact/ContactContainer';
import PodcastContainer from '../pages/podcast/PodcastContainer';
import CreatePost from '../pages/posts/CreatePost';

const UserViews = () => {
  return (
    <AnimatePresence mode='wait'>
        <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />
          <div className="">
            <main className="mt-14 md:mt-20 w-full">
              <Routes>
                <Route path="/*" element={<MainContainer />} />
                <Route path="/posts" element={<PostContainer />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/podcast" element={<PodcastContainer />} />
                <Route path="/community" element={<CommunityContainer />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactContainer />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/create-community" element={<CreateCommunity />} />
                <Route path="/communities/:id" element={<CommunityProfile />} />
              </Routes>
            </main>
          </div>
        </div>
      </AnimatePresence>
    );
}

export default UserViews