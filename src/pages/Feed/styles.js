import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostList = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  article {
      background: #fff;
      border: 1px solid #ddd;
      margin-top: 30px;
  }
`;

export const UserInfo = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
      span {
          font-size: 13px;
      }

      p {
          font-size: 11px;
          color: #666;
          margin-top: 3px;
      }
  }

`

export const PhotoFeed = styled.div`
    img {
        width: 100%;
    }
`

export const Actions = styled.div`
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  img {
      height: 20px;
      margin-right: 10px;

  }
`
  export const Interactions = styled.footer`
    padding-left: 20px;
    p {
        font-size: 13px;
        margin-top: 2px;
        line-height: 18px;

        span {
            color: #dcdcdc;
            display: block;
        }
    }
`;
