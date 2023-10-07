import React from 'react';
import Head from 'next/head'
import API from '../../services/Api'
import Router from 'next/router'
import {decodeHTML} from 'entities'
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoCard from '../../components/VideoCard';
import videosStyles from '../../public/styles/modules/videos.module.css';
import Cookies from 'js-cookie';

class Videos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      reached_end: false
    }
  }

  componentDidMount() {
    this.setState({
      videos: this.props.videos,
    })

    if( this.props.videos.length < 21 ) {
      this.setState({
        reached_end: true,
      })
    }
  }

  componentDidUpdate() {
    // console.log('update');
    // console.log(this.state);
  }

  async _showMore() {
    this.setState({
      working: true
    });
    const apiService = new API
    let items = 21;
    let offset = this.state.videos.length;
    const videos = await apiService.fetchVideos(items, offset);
    if( videos.length < items ) {
      this.setState({
        reached_end: true,
      })
    }

    this.setState({
      videos: [...this.state.videos, ...videos],
      working: false
    })
  }

  _renderShowMoreClass = () => {
    if( this.state.reached_end == true ) {
      return `${videosStyles.showMore} hide`;
    } else {
      return `${videosStyles.showMore}`
    }
  }

  render() {
    const {videos} = this.state;
    return(
      <>
        <Head>
          <title key="page-title">Videos</title>
          <meta charSet="utf-8"/>
        </Head>
        <Header />

        <div className={videosStyles.contentWrap}>
          <h2 className={videosStyles.pageTitle}>Videos</h2>
          {videos.map(video =>
            <div key={video.id} className={`column column-block`}>
              <VideoCard
                id={video.id}
                title={video.title}
                image={video.image}
                video_id={video.video_id}
              />
            </div>
          )}
          <div className={this._renderShowMoreClass()}>
            <button
              onClick={() => {
                this._showMore()
              }}
              className={`button ${videosStyles.button}`}>Show More
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Videos

// Server-side rendering data
export async function getStaticProps(context) {
  const apiService = new API
  const videos = await apiService.fetchVideos(10);
  return {
    props: {
      videos
    },
    revalidate: 1800
  }
}
