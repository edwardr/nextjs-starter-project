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

  async processForm(
    endpoint,
    first_name,
    last_name,
    email_address,
    state,
    phone_number,
    message
  ) {
    const url = `${this.api_url}/${endpoint}/`
    const json = JSON.stringify({
      "first_name": first_name,
      "last_name": last_name,
      "email_address": email_address,
      "state": state,
      "phone_number": phone_number,
      "message": message
    });

    const res = await fetch(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      },
    });

    const ret = await res.json()

    return ret;
  }

  async fetchPosts(items = 20, offset = 0, orderby = 'date') {
    const url = `${this.api_url}/posts/?items=${items}&offset=${offset}&orderby=${orderby}`

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

  async fetchVideos(items = 20) {
    const url = `${this.api_url}/videos/?items=${items}`

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

}
