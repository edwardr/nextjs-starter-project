import React from 'react';
import Header from '../components/Header';
import Head from 'next/head'
import errorStyles from '../public/styles/modules/error.module.css';

class Error extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <>
      <Head>
        <title key="page-title">404 - Page Not Found</title>
        <meta charSet="utf-8"/>
      </Head>
      <Header />
      <div className={errorStyles.errorPage}>
        <div className={errorStyles.inner}>
          <h1>404 - Page Not Found</h1>
          <p>Oops, something has gone terribly wrong!</p>
        </div>
      </div>
      </>
    );
  }
}

export default Error;
