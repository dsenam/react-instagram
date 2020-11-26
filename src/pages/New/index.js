import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import api from '../../services/api'
import { Container } from './styles';



function New() {
let history = useHistory();


 const [postData, setPostData] = useState({
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
 })

 async function handleSubmit(e) {
    e.preventDefault()

    //Envio de arquivos multiplataforma
    const data = new FormData()

    data.append('image', postData.image)
    data.append('author', postData.author)
    data.append('place', postData.place)
    data.append('description', postData.description)
    data.append('hashtags', postData.hashtags)

    try {
        await api.post('posts', data)
        history.push('/')
    } catch (error) {
        console.log(error)
    }
    
 }

 function handleImageChange(e) {
    setPostData({image: e.target.files[0]})
 }

  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange}/>
            <input type="text" placeholder="Autor" value={postData.author} onChange={(e) => setPostData({ ...postData,author: e.target.value})}/>
            <input type="text" placeholder="Local" value={postData.place} onChange={(e) => setPostData({ ...postData, place: e.target.value})}/>
            <input type="text" placeholder="Descrição" value={postData.description} onChange={(e) => setPostData({ ...postData ,description: e.target.value})}/>
            <input type="text" placeholder="Hashtags" value ={postData.hashtags} onChange={(e) => setPostData({ ...postData, hashtags: e.target.value})}/>

            <button type="submit">Enviar</button>
        </form>
    </Container>
  );
}

export default New;