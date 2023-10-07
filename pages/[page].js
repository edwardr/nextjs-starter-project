import React from 'react';
import Head from 'next/head'
import API from '../services/Api'
import {decodeHTML} from 'entities'
import Utility from '../helpers/Utility'
import {HTML} from '../helpers/Utility'
import Header from '../components/Header';
import Footer from '../components/Footer';
import blogStyles from '../public/styles/modules/blog.module.css';
import Cookies from 'js-cookie';

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //
    }
  }

  static async getInitialProps(ctx) {
    const apiService = new API
    const page = await apiService.fetchPage(ctx.query.page);
    if (ctx.res) {
      if( page.hasOwnProperty('error') ) {
        ctx.res.writeHead(302, { Location: '/404' });
        ctx.res.end();
        return {}
      }
    }

    return {
      data: page
    }
  }

  componentDidMount() {
    //
  }

  componentDidUpdate() {
    //
  }

  render() {
    const utility = new Utility
    const page = this.props.data;
    return(
      <>
        <Head>
          <title key="page-title">{decodeHTML(page.title)}</title>
          <meta charSet="utf-8"/>
        </Head>
        <Header />

        <div className={blogStyles.contentWrap}>
          <h2 className={blogStyles.pageTitle}>{decodeHTML(page.title)}</h2>
          <div className={blogStyles.description}>
            <HTML html={page.content}/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Page
