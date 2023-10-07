import React from 'react';
import Head from 'next/head'
import API from '../../services/Api'
import {decodeHTML} from 'entities'
import Utility from '../../helpers/Utility'
import {HTML} from '../../helpers/Utility'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import blogStyles from '../../public/styles/modules/blog.module.css';
import SocialMediaShare from '../../components/SocialMediaShare';
import Cookies from 'js-cookie';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal_open: false
    }
  }

  static async getInitialProps(ctx) {
    const apiService = new API
    const post = await apiService.fetchPost(ctx.query.post);
    if (ctx.res) {
      if( post.hasOwnProperty('code') ) {
        if( post.code == 'error' ) {
          ctx.res.writeHead(302, { Location: '/404' });
          ctx.res.end();
          return {}
        }
      }
    }

    return {
      data: post
    }
  }

  componentDidMount() {
    //
  }

  componentDidUpdate() {
    //
  }

  _renderAuthor = () => {
    const post = this.props.data;
    if( post.author ) {
      return(
        <span className={blogStyles.author}>By {post.author}</span>
      )
    }
  }

  _renderDate = () => {
    const post = this.props.data;
    let milliseconds = post.publication_date * 1000,
        dateObject = new Date(milliseconds),
        fullDate = dateObject.toLocaleDateString();
    if( post.publication_date ) {
      return(
        <span className={blogStyles.date}>Published: {fullDate}</span>
      )
    }
  }

  _renderMetaInfo = () => {
    const post = this.props.data;
    if( post.date || post.author ) {
      return(
        <div className={blogStyles.meta}>
          {this._renderAuthor()}
          {this._renderDate()}
        </div>
      )
    }
  }

  render() {
    const utility = new Utility
    const post = this.props.data;
    return(
      <>
        <Head>
          <title key="page-title">{decodeHTML(post.title)}</title>
          <meta charSet="utf-8"/>
        </Head>
        <Header />

        <div className={blogStyles.breadcrumbRow}>
          <Breadcrumbs
            base_path={'/posts'}
            base_name={'Posts'}
            name={utility.trimString(48, decodeHTML(post.title))}
          />
        </div>

        <div className={blogStyles.contentWrap}>
          <h2 className={blogStyles.pageTitle}>{decodeHTML(post.title)}</h2>
          <div className={blogStyles.description}>
            {this._renderMetaInfo()}
            <div className={blogStyles.shareBox}>
              <SocialMediaShare
                url=""
                title={post.title}
              />
            </div>
            <HTML html={post.content}/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Post
