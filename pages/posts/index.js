import React from 'react';
import Head from 'next/head'
import API from '../../services/Api'
import Utility from '../../helpers/Utility'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';
import blogStyles from '../../public/styles/modules/blogs.module.css';
import Cookies from 'js-cookie';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      topic: '',
      sort: '',
      per: 10,
      search: '',
      reached_end: false,
      working: false
    }
  }

  componentDidMount() {
    this.setState({
      posts: this.props.posts,
    })

    if( this.props.posts.length < 20 ) {
      this.setState({
        reached_end: true,
      })
    }
  }

  componentDidUpdate() {
    //
  }

  async _showMore() {
    this.setState({
      working: true
    });
    const apiService = new API
    let items = this.state.per;
    let offset = this.state.posts.length;
    const posts = await apiService.fetchPosts(items, offset);
    if( posts.length < items ) {
      this.setState({
        reached_end: true,
      })
    }

    this.setState({
      posts: [...this.state.posts, ...posts],
      working: false
    })
  }

  _renderShowMoreClass = () => {
    if( this.state.reached_end == true ) {
      return `${blogStyles.showMore} hide`;
    } else {
      return `${blogStyles.showMore}`
    }
  }

  render() {
    const {posts} = this.state;
    const utility = new Utility;
    return(
      <>
        <Head>
          <title key="page-title">Posts</title>
          <meta charSet="utf-8"/>
        </Head>
        <Header />

        <div className={blogStyles.contentWrap}>
          <h2 className={blogStyles.pageTitle}>Posts</h2>
          {posts.map(post =>
            <div key={post.id} className={blogStyles.cardWrap}>
              <BlogCard
                id={post.id}
                title={post.title}
                author_byline={post.author}
                topics={post.category}
                publication_date={post.date}
                excerpt={post.content}
                permalink={post.id}
                image={post.image}
                slug={post.id}
              />
            </div>
          )}

          <div className={this._renderShowMoreClass()}>
            <button
              onClick={() => {
                this._showMore()
              }}
              className={`button ${blogStyles.button}`}>Show More
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Posts
//
export async function getStaticProps(context) {
  const apiService = new API
  const posts = await apiService.fetchPosts(10);
  return {
    props: {
      posts,
    },
    revalidate: 1800
  }
}
