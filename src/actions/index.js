import axios from 'axios';
import _ from 'lodash';

export const FETCH_POSTS  = 'FETCH_POSTS';
export const DELETE_POST  = 'DELETE_POST';
export const FETCH_POST  = 'FETCH_POST';
export const CREATE_POSTS  = 'CREATE_POSTS';
export const GET_ANSWER ='GET_ANSWER';
export const POST_QUESTION='POST_QUESTION';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY ='?key=03974567391';

let conversation={};
export function fetchPosts(){

    const response = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return{
        type: FETCH_POSTS,
        payload: response
    }

}

export function createPost(values, callback){

    const response = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    .then(()=>callback());
    return{
        type: CREATE_POSTS,
        payload: response
    }

}

export function fetchPost(id){
      
    const response= axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`); 
   
    return{
        type: FETCH_POST,
        payload: response
    };

}

export function deletePost(id, callback){
      
    const response= axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=>callback()); 
   
    return{
        type: DELETE_POST,
        payload: id
    };

}

export function getAnswer(conv){

    conversation.answer=`I have an answer ${_.random([0], [1], [0.5])}`;

    //const response= axios.post(`${BOT_URL}`,conv);
    //const response = axios.get(`${ROOT_URL}/posts${API_KEY}`); 
   // const conversation={"answer"} ;  
    return{
        type: GET_ANSWER,
        payload: conversation
    };
}

export function postQuestion(conv){
    conversation.question=`I have a question ${_.random([0], [1], [0.5])}`;
    //const response= axios.post(`${BOT_URL}`,conv);
    //const response = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    //const conversation:'question' ;
    return{
        type: POST_QUESTION,
        payload: conversation
    };
}