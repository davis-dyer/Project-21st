import React, { useContext, useEffect, useState } from 'react'
import Edit from '../../assets/edit.png'
import Delete from '../../assets/delete.png'
import Avatar from '../../assets/avatar.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../../context/authContext'
import DOMPurify from 'dompurify';

const Post = () => {



  const [post, setPost] = useState({})

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split("/")[2]

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      }
      catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    }
    catch (err) {
      console.log(err)
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
      <div className="content">
        <img src={`../assets/${post?.img}`} />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p> 
      </div>
    </div>
  )
}

  /* const [user, setUserInfo] = useState([])
  const [requests, setUserRequest] = useState([])
  const [filtReq, setFilteredReq] = useState([])
  const [activeChange, setActiveChange] = useState([])

  const localAllmanosUser = localStorage.getItem("allmanos_user")
  const allmanosUserObject = JSON.parse(localAllmanosUser)



  let eventId = useParams()

  const {newId} = useParams()



  useEffect(
    () => {
      fetch(`http://localhost:8088/event`)
        .then(res => res.json())
        .then(
          (userData) => {
            setUserRequest(userData)
          }
        )
    },
    []
  )

  useEffect(
    () => {
      const newCard = requests.filter(list => {
        return list.id === parseInt(eventId.id)
      })
      setFilteredReq(newCard)
    },
    [requests]
  )

/////////////


  const handleEventSave = (evt, data) => {
    evt.preventDefault()
    fetch(`http://localhost:8088/event/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => {
        window.location.reload(false)
      })
  }


  return (
    <>
      <section className="mt-20">
        <h2 className='text-[2.25rem]'>Service Requested</h2>
        {
          filtReq
            .map((list) => {
              return (
                <>
                  <div className='p-4 border border-black flex flex-col lg:flex-row mx-10 md:mx-20 my-5 rounded-xl'>
                    <img src={Event1} alt="requested event" className='w-full lg:w-1/2 rounded-xl' />
                    <div className="mx-4 flex flex-col justify-between">
                      <div>
                        <h2 className='text-[1.5rem]'>{list.title}</h2>
                      </div>
                      <p>{list.desc}</p>
                      <div className='flex items-center justify-between lg:grid'>
                        <p className='font-semibold text-gray-500 '>{list.timestamp}</p>
                        <button
                          className='border border-black bg-gradient-to-br from-green-200 to-green-400 mt-4 rounded-lg p-1'
                          key={list.id}
                          onClick={(click) => {
                            list.active = true
                            list.volunteerId.userId = allmanosUserObject
                            handleEventSave(click, list)}}
                        >Serve Now!</button>
                      </div>
                    </div>
                  </div>
                  
                </>
              )
            })
          }
      </section>
      <section>
          {filtReq.map((item) => {
            return item.active ? (
              <>
                <h2>New Chat</h2>
              </>
            ) : (
              <></>
            );
          })}
      </section>
    </>
  )
} */

export default Post