import React from "react";
import videoCardStyles from '../public/styles/modules/components/videocard.module.css';
import Router from 'next/router'
import Utility from '../helpers/Utility'
import {decodeHTML} from 'entities'
import Link from 'next/link'
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

  _renderVideoThumbnail = (featured_media) => {
    return(
      <Link href="/videos/[video]" as={`/videos/${this.props.id}`}>
        <img src={this.props.image} alt={this.props.image} />
      </Link>
    )
  }

  render() {
    const {title} = this.props;
    const {permalink} = this.props;
    const {featured_media} = this.props;
    const {slug} = this.props;
    const {id} = this.props;
    const utility = new Utility;
    return(
      <div className={videoCardStyles.card}>
        <div className={videoCardStyles.thumbnail}>
          {this._renderVideoThumbnail(featured_media)}
        </div>
        <div className={videoCardStyles.content}>
          <Link href="/videos/[video]" as={`/videos/${id}`}>
            <h3>{decodeHTML(title)}</h3>
          </Link>
        </div>
      </div>
    )
  }

}

export default VideoCard;
