import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge',
})
