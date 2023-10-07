import React from 'react';
import modalStyles from '../public/styles/modules/components/modal.module.css';
import API from '../services/Api'
import Link from 'next/link';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      working: false,
      error: false
    }
  }

  async componentDidMount() {
    //
  }

  _handleEscape = (e) => {
    if (e.which == 27) {
      this.props.toggle();
    }
  }

  componentDidUpdate() {
    const {open} = this.props;
    const {working} = this.state;
    let html = document.querySelector('html');
    if( open ) {
      window.addEventListener('keydown', this._handleEscape );
      html.classList.add('view-modal');
    } else {
      window.removeEventListener('keydown', this._handleEscape );
      html.classList.remove('view-modal');
    }

    if( working ) {
      html.classList.add('working');
    } else {
      html.classList.remove('working');
    }
  }

  _renderModalClass = () => {
    const {open} = this.props;
    if( open ) {
      return `${modalStyles.wrap}`;
    } else {
      return `${modalStyles.wrap}`
    }
  }

  render() {
    const {open} = this.props;
    if( this.props.open ) {
      return(
        <>
        <div onClick={() => { this.props.toggle()}} className={modalStyles.openModalBackground}></div>
        <div className={modalStyles.wrap}>
          <button
            className={modalStyles.close}
            onClick={e => {
              this.props.toggle();
            }}
          >
            <img src="/images/close.svg" alt="" />
          </button>
          <h4 className={modalStyles.heading}>Heading</h4>
          <div className={`${modalStyles.form}`}>
            <p>Modal</p>
          </div>
        </div>
        </>
      );
    } else {
      return null;
    }
  }

}

export default Modal;
