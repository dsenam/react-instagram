import React from 'react';

import { Container, PostList, UserInfo, Actions, PhotoFeed, Interactions } from './styles';

import more from '../../assets/more.svg'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import send from '../../assets/send.svg'

function Feed() {
  return (
    <Container>
        <PostList>
            <article>
                <UserInfo>
                    <div>
                        <span>Douglas Sena</span>
                        <p>Diadema</p>
                    </div>
                    <img src={more} alt="Mais" />
                </UserInfo>
                <PhotoFeed>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEVOnDBLddSPw/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=78qetKn-1Nnx6590cXUBxkVLnvIzI0N1-GiR6e_suhE" alt="" />
                </PhotoFeed>
                <Actions>
                    <img src={like} alt="" />
                    <img src={comment} alt="" />
                    <img src={send} alt="" />
                </Actions>
                
                <Interactions>
                    <strong>900 curtidas</strong>
                    <p>Um post do Douglas Sena
                        <span>#react #paixão</span>
                    </p>
                </Interactions>
            </article>
        </PostList>
    </Container>
  );
}

export default Feed;