import React from 'react';
import Head from 'next/head'
import Utility from '../helpers/Utility'
import YouTube from 'react-youtube';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialMediaShare from '../components/SocialMediaShare';
import indexStyles from '../public/styles/modules/index.module.css';
import Cookies from 'js-cookie';

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      available_states: [],
      videoId: '86xWVb4XIyE',
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
    const utility = new Utility;
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        modestbranding: true,
      },
    };
    return(
      <>
        <Head>
          <title key="page-title">NextJS Starter</title>
          <meta charSet="utf-8"/>
        </Head>
        <Header />
        <div className={indexStyles.contentWrap}>
          <h1>Hello, World!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          {/* <label>
            <span>State Picker</span>
            <select value={this.state.state} onChange={this.handleChange} autoComplete={utility.generateRandomString()} name="state">
              <option value="0">Select Your State</option>
              {this.state.available_states.map(state =>
                <option key={state} value={state}>{decodeHTML(state)}</option>
              )}
            </select>
          </label> */}
          <div className="responsive-embed widescreen">
            <YouTube videoId={this.state.videoId} opts={videoOptions} />
          </div>
            <p>Laoreet commodo ut inceptos. Feugiat cursus felis varius sagittis mattis felis vehicula senectus ad felis proin. Convallis sapien ullamcorper semper phasellus id scelerisque sagittis. Vivamus feugiat accumsan elementum taciti. Metus lacus potenti pellentesque! Fringilla condimentum egestas libero sapien pretium. Sed fermentum tincidunt turpis imperdiet sit sapien lorem vel? Dui volutpat commodo dictum sit habitant eleifend! Netus interdum lobortis, donec sem mauris commodo vestibulum aliquet auctor? Mus convallis ultrices facilisis quam dignissim mollis urna magna tempor proin. Justo donec sagittis.</p>

            <p>Ultricies laoreet sapien vehicula ipsum leo fames. Nec magnis sociosqu sollicitudin curabitur conubia lectus blandit. Risus cras cursus amet nascetur dolor ridiculus nec litora nostra facilisis vitae dictumst. Tristique fames nulla magnis tempus dolor nec ac a lacus ridiculus diam enim. A leo massa habitasse nascetur facilisis fames ullamcorper id arcu quam? Dis inceptos cras eros suscipit faucibus felis sapien nullam dictumst integer himenaeos. Conubia odio vivamus himenaeos mattis per habitant? Montes, sociosqu vitae orci venenatis litora nascetur adipiscing morbi sociis vitae felis dignissim. Consectetur consectetur proin iaculis imperdiet!</p>

            <p>Laoreet commodo ut inceptos. Feugiat cursus felis varius sagittis mattis felis vehicula senectus ad felis proin. Convallis sapien ullamcorper semper phasellus id scelerisque sagittis. Vivamus feugiat accumsan elementum taciti. Metus lacus potenti pellentesque! Fringilla condimentum egestas libero sapien pretium. Sed fermentum tincidunt turpis imperdiet sit sapien lorem vel? Dui volutpat commodo dictum sit habitant eleifend! Netus interdum lobortis, donec sem mauris commodo vestibulum aliquet auctor? Mus convallis ultrices facilisis quam dignissim mollis urna magna tempor proin. Justo donec sagittis.</p>

            <p>Ultricies laoreet sapien vehicula ipsum leo fames. Nec magnis sociosqu sollicitudin curabitur conubia lectus blandit. Risus cras cursus amet nascetur dolor ridiculus nec litora nostra facilisis vitae dictumst. Tristique fames nulla magnis tempus dolor nec ac a lacus ridiculus diam enim. A leo massa habitasse nascetur facilisis fames ullamcorper id arcu quam? Dis inceptos cras eros suscipit faucibus felis sapien nullam dictumst integer himenaeos. Conubia odio vivamus himenaeos mattis per habitant? Montes, sociosqu vitae orci venenatis litora nascetur adipiscing morbi sociis vitae felis dignissim. Consectetur consectetur proin iaculis imperdiet!</p>

            <p>Laoreet commodo ut inceptos. Feugiat cursus felis varius sagittis mattis felis vehicula senectus ad felis proin. Convallis sapien ullamcorper semper phasellus id scelerisque sagittis. Vivamus feugiat accumsan elementum taciti. Metus lacus potenti pellentesque! Fringilla condimentum egestas libero sapien pretium. Sed fermentum tincidunt turpis imperdiet sit sapien lorem vel? Dui volutpat commodo dictum sit habitant eleifend! Netus interdum lobortis, donec sem mauris commodo vestibulum aliquet auctor? Mus convallis ultrices facilisis quam dignissim mollis urna magna tempor proin. Justo donec sagittis.</p>

            <p>Ultricies laoreet sapien vehicula ipsum leo fames. Nec magnis sociosqu sollicitudin curabitur conubia lectus blandit. Risus cras cursus amet nascetur dolor ridiculus nec litora nostra facilisis vitae dictumst. Tristique fames nulla magnis tempus dolor nec ac a lacus ridiculus diam enim. A leo massa habitasse nascetur facilisis fames ullamcorper id arcu quam? Dis inceptos cras eros suscipit faucibus felis sapien nullam dictumst integer himenaeos. Conubia odio vivamus himenaeos mattis per habitant? Montes, sociosqu vitae orci venenatis litora nascetur adipiscing morbi sociis vitae felis dignissim. Consectetur consectetur proin iaculis imperdiet!</p>

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

          <SocialMediaShare url="" />
        </div>
        <Footer />
      </>
    );
  }
}

export default Index
