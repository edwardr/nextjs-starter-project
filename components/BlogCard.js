import React from 'react';
import blogCardStyles from '../public/styles/modules/components/blogcard.module.css';
import Router from 'next/router'
import Utility from '../helpers/Utility'
import {decodeHTML} from 'entities'
import Link from 'next/link'
import Image from 'next/image'
import API from '../services/Api'

class BlogCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //
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

  _renderAuthor = (author) => {
    if( author ) {
      return(
        <span className={blogCardStyles.author}>
          By {author}
        </span>
      )
    }
  }

  _renderImage = (image) => {
    if (!image) return null;
    return(
      <Image
        src={image}
        width={400}
        height={300}
        alt=""
    />
    )
  }

  render() {
    const { id, title, permalink, excerpt, image, date, author } = this.props;
    const utility = new Utility;
    return(
      <div className={blogCardStyles.card}>
        <div className={blogCardStyles.thumbnail}>
          {this._renderImage(this.props.image)}
        </div>
        <div className={blogCardStyles.content}>
          <Link href="/posts/[post]" as={`/posts/${id}`}>
            <h3>{decodeHTML(title)}</h3>
          </Link>
          {this._renderAuthor(author)}
          <span className={blogCardStyles.excerpt}>{decodeHTML(excerpt)}</span>
        </div>
      </div>
    )
  }

}

export default BlogCard;
