import React from 'react';
import adBlockCheckStyles from '../public/styles/modules/components/adblockcheck.module.css';
import Link from 'next/link';
import Cookies from 'js-cookie'

class AdBlockCheck extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false,
		}
	}

	async componentDidMount() {
		let comp = this;
		setTimeout( function(e) {
			var checkEl = document.querySelector('#ad-zone-check');
			if( checkEl ) {
				if (checkEl.offsetHeight === 0 ) {
					var shownAdBlockWarning = Cookies.get('shown_adblock_warning');
					if( shownAdBlockWarning ) {
						return false;
					} else {
						comp.setState(state => ({
							open: true
						}));
					}
				}
			}
		}, 3000);
	}

	componentDidUpdate() {
		const {open} = this.state;
		let html = document.querySelector('html');
		if( open ) {
			window.addEventListener('keydown', this._handleEscape );
			window.addEventListener('click', this._handleClick );
			//html.classList.add('active-modal');
		} else {
			window.removeEventListener('keydown', this._handleEscape );
			window.removeEventListener('click', this._handleClick );
			//html.classList.remove('active-modal');
		}
	}

	_toggleRegistrationPrompt = () => {
		this.setState(state => ({
			open: !state.open
		}));
		Cookies.set('shown_adblock_warning', true, { expires: 7 });
	}

	_handleEscape = (e) => {
		if (e.which == 27) {
			this._toggleRegistrationPrompt();
		}
	}

	_handleClick = (e) => {
		e.preventDefault();
		if( e.target.hasAttribute('data-close-modal') ) {
			this._toggleRegistrationPrompt();
		}
	}

	render() {
		const {open} = this.state;
		if( !open ) {
			return <div id="ad-zone-check" className="adszone" style={{position: 'absolute', left: '-9999px' }}>ad</div>;
		}
		return(
			<>
			<div className={adBlockCheckStyles.wrap}>
				<button
					className={adBlockCheckStyles.close}
					onClick={e => {
						this._toggleRegistrationPrompt()
					}}
				>
					<img src="/images/close-white.svg" alt="" />
				</button>
				<div className={adBlockCheckStyles.content}>
					<h5>For the best user experience, we encourage you to disable your ad blocker on your browser or to whitelist https://govwhitepapers.com.</h5>
				</div>
			</div>
			</>
		);
	}

}

export default AdBlockCheck;
