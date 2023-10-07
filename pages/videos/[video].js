import React from 'react';
import Head from 'next/head'
import API from '../../services/Api'
import {decodeHTML} from 'entities'
import Utility from '../../helpers/Utility'
import {HTML} from '../../helpers/Utility'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import YouTube from 'react-youtube';
import Breadcrumbs from '../../components/Breadcrumbs';
import videoStyles from '../../public/styles/modules/video.module.css';
import Cookies from 'js-cookie';

class Video extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal_open: false,
      related_videos: []
    }
  }

  componentDidMount() {
    //
  }

  componentDidUpdate() {
    //
  }

  _onReady(event) {
    //event.target.pauseVideo();
  }

  render() {
    const utility = new Utility
    const video = this.props.data;
    const opts = {
      playerVars: {
        autoplay: 1,
        modestbranding: true,
      },
    };
    return(
      <>
        <Head>
          <title key="page-title">{decodeHTML(video.title)}</title>
          <meta charSet="utf-8"/>
        </Head>
        <Header />
        <div className={videoStyles.breadcrumbRow}>
          <Breadcrumbs
            base_path={'/videos'}
            base_name={'Videos'}
            name={decodeHTML(video.title)}
          />
        </div>

        <div className={videoStyles.contentWrap}>
          <div className={videoStyles.row}>
            <div className="responsive-embed widescreen">
              <YouTube videoId={video.video_id} opts={opts} onReady={this._onReady} />
            </div>
            <h2 className={videoStyles.pageTitle}>{decodeHTML(video.title)}</h2>
            <HTML html={video.description}/>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  static async getInitialProps(ctx) {
    const apiService = new API
    const video = await apiService.fetchVideo(ctx.query.video);
    if (ctx.res) {
      if( video.hasOwnProperty('code') ) {
        if( video.code == 'error' ) {
          ctx.res.writeHead(302, { Location: '/404' });
          ctx.res.end();
          return {}
        }
      }
    }

    return {
      data: video
    }
  }
}

export default Video
