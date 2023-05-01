import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const LastestPost = () => {

    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    return (
        <div className='mt-20'>
            <h2 className='text-[2.5rem]'>Lastest Posts</h2>
            <div className="mt-10 flex flex-col gap-10">
                {posts.map(post => (
                    <div className="flex gap-4 even:flex-row-reverse" key={post.id}>
                        <div className="flex-2 relative after:w-full after:h-full after:bg-blue-100 after:absolute after:top-5 after:-left-4 after:-z-10">
                            <img src={post.img} alt="post image" className='w-full object-cover' />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.desc)}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LastestPost