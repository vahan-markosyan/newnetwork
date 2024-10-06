
import { IPost } from '../helpers/types';
import { BASE } from '../helpers/default'
import { handlePostReaction } from '../helpers/api';
import { Post } from './Post';
import { useState } from 'react';

interface Props {
    posts: IPost[]
    onUpdatePost?: (id:number) => void
}

export function Gallery({ posts, onUpdatePost }: Props) {
    const [currentPost, setCurrentPost] =useState<number>(-1)
    const reactPost = (id:number) => {
        handlePostReaction(id)
        .then(response => {
            if(onUpdatePost) {
                onUpdatePost(id)
            }
        })
    }

    const selectedPost = posts.find(post => post.id == currentPost)

    return <>
        <div className='list'>
            {
                posts.map(post => {
                    return <div key={post.id} className='post'>
                        <img
                            src={BASE + post.picture}
                            className='post-img'
                        />
                        <div onClick={() => setCurrentPost(post.id)} className='cover'></div>
                        <img
                        onClick={() => reactPost(post.id)}
                        className='like-btn'
                        src={
                            post.isLiked? "https://cdn0.iconfinder.com/data/icons/sweets/128/heart_love_pink.png"
                            : "https://cdn0.iconfinder.com/data/icons/sweets/119/heart_love_white.png"}

                        />
                    </div>

                })
            }
        </div>
        {currentPost != -1 && <Post 
        postId={currentPost}
        handleClose={() => setCurrentPost(-1)} 
        picture={BASE + selectedPost?.picture}
        title = {selectedPost?.title}
        likedBy={selectedPost?.likes}
        />}
        </>
    
}