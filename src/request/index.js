import axios from 'axios';


const mainInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});



export function getPosts() {
  return mainInstance({
    url: '/posts',
    method: 'get'
  });
};
export function getPostById(postId = 1) {
  return mainInstance({
    url: `/posts/${postId}`,
    method: 'get'
  });
};

export function deletePost(postNumber = 1) {
  // return axios.delete(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
  return mainInstance({
    url: `/posts/${postNumber}`,
    method: 'delete',
  });
}


