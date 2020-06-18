import axios from 'axios';


const mainInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});

mainInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  const newResponse = {...response, data: [{id: '0', title: 'Yolo'}, ...response.data] }
  return newResponse;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export function getPosts() {
  return mainInstance({
    url: '/items',
    method: 'get'
  });
};

export function deletePost(postNumber = 1) {
  // return axios.delete(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
  return mainInstance({
    url: `/items/${postNumber}`,
    method: 'delete',
  });
}


