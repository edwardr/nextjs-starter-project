import fetch from 'isomorphic-unfetch'

export default class Api {

  constructor() {
    var api_url,
        fallback_api_url = 'http://localhost:5600/api';

    api_url = fallback_api_url;
    if( process.env.NEXT_PUBLIC_API_URL != undefined ) {
      api_url = process.env.NEXT_PUBLIC_API_URL
    }

    this.api_url = api_url;
  }

  async fetchPosts(limit = 10, offset = 0) {
    const url = `${this.api_url}/posts/?limit=${limit}&offset=${offset}`

    const res = await fetch(url, {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      },
    });

    const blogs = await res.json()

    return blogs;
  }

  async fetchPost(id) {
    const res = await fetch(`${this.api_url}/posts/${id}`)
    const blog = await res.json()
    return blog;
  }

  async fetchVideos(limit = 10, offset = 0) {
    const url = `${this.api_url}/videos/?limit=${limit}&offset=${offset}`

    const res = await fetch(url, {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      },
    });

    const blogs = await res.json()

    return blogs;
  }

  async fetchVideo(id) {
    const res = await fetch(`${this.api_url}/videos/${id}`)
    const blog = await res.json()
    return blog;
  }

  async fetchPage(id) {
    const res = await fetch(`${this.api_url}/pages/${id}`)
    const page = await res.json()
    return page;
  }

}
