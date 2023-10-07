import React from "react";
import videoCardStyles from '../public/styles/modules/components/videocard.module.css';
import Router from 'next/router'
import Utility from '../helpers/Utility'
import {decodeHTML} from 'entities'
import Link from 'next/link'
import Image from 'next/image'
import API from '../services/Api'

class VideoCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // console.log('prop mount');
    // console.log(this.prop);
  }

  componentDidUpdate() {
    // console.log('prop update');
    // console.log(this.prop);
  }

  _renderVideoThumbnail = (image) => {
    if (!image) return null;
    return(
      <Image
        src={image}
        //style={{objectFit: "contain"}}
        //fill={true}
        width={400}
        height={300}
        alt=""
      />
    );
  }

  render() {
    const {id, title, image} = this.props;
    const utility = new Utility;
    return(
      <div className={videoCardStyles.card}>
        <Link href="/videos/[video]" as={`/videos/${id}`}>
          <>
          <div className={videoCardStyles.thumbnail}>
            <img className={videoCardStyles.playButton} src="/images/video-play.svg" alt="" />
            {this._renderVideoThumbnail(image)}
          </div>
          </>
        </Link>
        <div className={videoCardStyles.content}>
          <Link href="/videos/[video]" as={`/videos/${id}`}>
            {decodeHTML(title)}
          </Link>
        </div>
      </div>
    )
  }

}

export default VideoCard;
