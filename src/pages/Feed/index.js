import React,{useEffect, useState} from 'react';

import { Container, PostList, UserInfo, Actions, PhotoFeed, Interactions } from './styles';
import api from '../../services/api'

import more from '../../assets/more.svg'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import send from '../../assets/send.svg'

function Feed() {
    const [feed, setFeed] = useState([])

  useEffect(()=> {
      async function loadFeed() {
          const response = await api.get('Feed')

          setFeed(response.data)  
      }
      loadFeed()
  }, [])
    
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
                    <img src={like} alt="" />
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