import React,{useEffect, useState} from 'react';

import { Container, PostList, UserInfo, Actions, PhotoFeed, Interactions } from './styles';
import api from '../../services/api'
import io from 'socket.io-client'

import more from '../../assets/more.svg'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import send from '../../assets/send.svg'

function Feed() {
    const [feed, setFeed] = useState([])

  useEffect(()=> {
      
      async function loadFeed() {
          const response = await api.get('posts')

          setFeed(response.data)  
      }
      loadFeed()
  }, [])

  useEffect(()=> {
    function registerToSocket() {
        const socket = io('http://localhost:3333/')
  
        socket.on('post', newPost => {
            setFeed([newPost, ...feed])
        })
  
        socket.on('like', likedPost => {
            setFeed(feed.map(post => post._id === likedPost.id ? likedPost : post ))
        })
    }

    registerToSocket()
    
  },[feed] )
  
 
  async function handleLike(id) {
    await api.post(`/posts/${id}/like`)
  }
    
  return (
    <Container>
        <PostList>
            {feed.map(post => (
            <article key={post._id}>
                <UserInfo>
                    <div>
                        <span>{post.author}</span>
                        <p>{post.place}</p>
                    </div>
                    <img src={more} alt="Mais" />
                </UserInfo>
                <PhotoFeed>
                    <img src={`http://localhost:3333/files/${post.image}`} alt="" />
                </PhotoFeed>
                <Actions>
                    <button onClick={() => handleLike(post._id)}>
                        <img src={like} alt="" />
                    </button>
                    <img src={comment} alt="" />
                    <img src={send} alt="" />
                </Actions>
                
                <Interactions>
                    <strong>{post.likes} curtidas</strong>
                    <p>{post.description}
                        <span>{post.hashtags}</span>
                    </p>
                </Interactions>
            </article>
            ))}
        </PostList>
    </Container>
  );
}

export default Feed;