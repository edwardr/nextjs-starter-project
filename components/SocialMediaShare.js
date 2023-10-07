import React from 'react';
import Link from 'next/link';
import socialMediaShareStyles from '../public/styles/modules/components/socialmediashare.module.css';

class SocialMediaShare extends React.Component {

  constructor(props) {
    super(props);
  }

  openShareWindow = (title,url) => {
    var windowName,
        leftPosition,
        topPosition;
    leftPosition = (window.screen.width / 2) - ((500 / 2) + 10);
    topPosition = (window.screen.height / 2) - ((500 / 2) + 50);
    window.open(url, title, "height=500,width=500,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition);
    return false;
  }

  render() {
    const {url} = this.props;
    let linkedinUrl = url.replace(/\/$/, '');
    const {title} = this.props;
    return(
      <>
      <section className={socialMediaShareStyles.shareBar} role="region" aria-label="Social Media Sharing">
        <ul>
          <li>
            <a
            onClick={()=> {
              this.openShareWindow('Share on Facebook', `https://www.facebook.com/sharer/sharer.php?u=${url}`);
            }}
            title="Share on Facebook" aria-label="Share on Facebook" href="">
              <img src="/images/facebook-share.svg" alt="Share on Facebook" />
            </a>
          </li>
          <li>
            <a target="_blank" title="Share on Twitter" aria-label="Share on Twitter" href={`https://twitter.com/intent/tweet?text=${title}: ${url}`}>
              <img src="/images/twitter-share.svg" alt="Share on Twitter" />
            </a>
          </li>
          <li>
            <a target="_blank" title="Share via Email" aria-label="Share via Email" href={`mailto:?subject=${title}&body=${url}`}>
              <img src="/images/gmail-share.svg" alt="Share via Email" />
            </a>
          </li>
          <li>
            <a
            onClick={()=> {
              this.openShareWindow('Share on LinkedIn', `https://www.linkedin.com/shareArticle?mini=true&url=${linkedinUrl}`);
            }}
            title="Share on LinkedIn" aria-label="Share on LinkedIn" href="">
              <img src="/images/linkedin-share.svg" alt="Share on LinkedIn" />
            </a>
          </li>
        </ul>
      </section>
      </>
    );
  }

}

export default SocialMediaShare;
