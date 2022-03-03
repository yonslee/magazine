import axios from "axios";

export default axios.create({
  baseURL: ''
})

// const api = axios.create({
//   baseURL: '',
// });

// export const getPostList = () => {
//   axios.get(api + '/posts').then(res => {
//     console.log(res.data.content)
//   }).catch(err => {
//     console.log(err)
//   })
// }

// export const newPost = () => {
//   console.log('임시')
// }

// export const login = () => {
//   axios.post(api + '/users/signup').then(res => {
//     console.log(res.data.content)
//   }).catch(err => {

//   })
// }


  // const newPost = async () => {
  //   let res = await api.post('/posts', {
  //     header: {
  //       Authorization: `Bearer ${Token}`,
  //     },
  //     body: {
  //       images: Array,
  //       desc: String,
  //     }
  //   })
  //   console.log(res)
  // }
