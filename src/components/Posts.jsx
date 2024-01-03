import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, increaseCounter } from '../store/PostsReducer'

export const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const handlerBay = () => {
        dispatch(increaseCounter())
    }

    return (
        <div>
            {posts.map((post, index) => (
                <div key={index} className="post" 
                    style={{display: 'flex', alignItems: 'center', gap: '10px',
                        border: '1px solid black', padding: '10px'}}>
                    <h3>{post.title}</h3>
                    <div style={{height: '15px', width: '2px', backgroundColor: 'black'}} className="line"></div>
                    <span style={{color: 'green', fontSize: '24px'}}>
                        {post.price} usd</span>
                    <button className="bay__phone"
                        onClick={handlerBay}>BUY
                    </button>
                </div>
            ))}
        </div>
    )
}
