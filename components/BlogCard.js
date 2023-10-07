import React from 'react';
import blogCardStyles from '../public/styles/modules/components/blogcard.module.css';
import Router from 'next/router'
import Utility from '../helpers/Utility'
import {decodeHTML} from 'entities'
import Link from 'next/link'
import API from '../services/Api'

class BlogCard extends React.Component {

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

  _renderAuthor = (author) => {
    if( author ) {
      return(
        <span className={blogCardStyles.author}>
          By {author}
        </span>
      )
    }
  }

  render() {
    const {title} = this.props;
    const {permalink} = this.props;
    const {excerpt} = this.props;
    const {featured_media} = this.props;
    const {slug} = this.props;
    const {id} = this.props;
    const {date} = this.props;
    const {author} = this.props;
    const utility = new Utility;
    return(
      <div className={blogCardStyles.card}>
        <div className={blogCardStyles.thumbnail}>
        </div>
        <div className={blogCardStyles.content}>
          <Link href="/posts/[post]" as={`/posts/${slug}`}>
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
