import '../public/styles/global.css';
import Cookies from 'js-cookie'
import App from 'next/app';
import Head from 'next/head'

class NextJsApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      access_token: this._fetchToken(),
      is_server: (typeof window === 'undefined'),
    }

    this.checkIE();
  }

  _fetchToken = () => {
    return '';
  }

  checkIE() {
    if( !this.state.is_server ) {
      let ua = window.navigator.userAgent,
          isIE = /MSIE/.test(ua),
          isIE11 = /Trident/.test(ua);

      if ( isIE || isIE11) {
        document.querySelector('#ie-block').classList.add('show');
        document.querySelector('html').classList.add('ie-block');
      }
    }
  }

  componentDidUpdate() {
    //
  }

  componentDidMount() {
    //
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
      <Head>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} {...this.state} />
      </>
    );
  }
}

export default NextJsApp;
