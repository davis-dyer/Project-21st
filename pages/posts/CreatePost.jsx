import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const CreatePost = () => {

  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/uploads", formData)
      return res.data
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const imgUrl = await upload()
    try {
        state ? await axios.put(`/posts/${state.id}`, {
        title, desc: value, cat, img: file ? imgUrl : ""
      })
      :
        await axios.post(`/posts/`, {
          title, desc: value, cat, img: file ? imgUrl : "", date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex mt-32 gap-5'>
      <div className="flex flex-5 flex-col gap-5">
        <input
          type="text"
          className='p-2 border border-gray-300'
          placeholder='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className="h-32 overflow-scroll border border-gray-300">
          <ReactQuill className='h-full border-none' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between text-xs text-headingColor border border-gray-300 p-4 flex-1 ">
          <h1 className='font-sm'>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id='file'
            onChange={e => setFile(e.target.files[0])}
          />
          <label htmlFor="file" className='underline-offset-2 cursor-pointer'>Upload Image</label>
          <div className="flex justify-between">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" checked={cat === "jesus"} name="cat" value="jesus" id="jesus" onChange={e => setCat(e.target.value)} />
            <label htmlFor="jesus">Jesus</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "tech"} name='cat' value='tech' onChange={e => setCat(e.target.value)} />
            <label htmlFor="tech">Tech</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "societyculture"} name='cat' value='societycultere' onChange={e => setCat(e.target.value)} />
            <label htmlFor="societyculture">Society/Culture</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "life"} name='cat' value='life' onChange={e => setCat(e.target.value)} />
            <label htmlFor="life">Life</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "podcast"} name='cat' value='podcast' onChange={e => setCat(e.target.value)} />
            <label htmlFor="podcast">Podcast</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost