import React from 'react';
import Head from 'next/head'
import Utility from '../helpers/Utility'
import YouTube from 'react-youtube';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMediaShare from '../components/SocialMediaShare';
import indexStyles from '../public/styles/modules/index.module.css';
import {withRouter} from 'next/router'
import Cookies from 'js-cookie';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      working: false,
      error: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    //
  }

  async componentDidMount() {
    const utility = new Utility;
    const states = utility.getStates('United States');
    this.setState({
      'available_states': states
    })
  }

  componentDidUpdate() {
    //
  }

  render() {
    const {page} = this.props;

    return(
      <>
        <Head>
          <title key="page-title">Static Route Page</title>
          <meta charSet="utf-8"/>
        </Head>
        <Header />
        <div className={indexStyles.contentWrap}>
          <h1>Static Route Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Laoreet commodo ut inceptos. Feugiat cursus felis varius sagittis mattis felis vehicula senectus ad felis proin. Convallis sapien ullamcorper semper phasellus id scelerisque sagittis. Vivamus feugiat accumsan elementum taciti. Metus lacus potenti pellentesque! Fringilla condimentum egestas libero sapien pretium. Sed fermentum tincidunt turpis imperdiet sit sapien lorem vel? Dui volutpat commodo dictum sit habitant eleifend! Netus interdum lobortis, donec sem mauris commodo vestibulum aliquet auctor? Mus convallis ultrices facilisis quam dignissim mollis urna magna tempor proin. Justo donec sagittis.</p>
          <h1>Lorem Ipsum Presents</h1>
          <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

          <h2>Header Level 2</h2>

          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>

          <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

          <h3>Header Level 3</h3>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>

        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Index)
