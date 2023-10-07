import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import headerStyles from '../public/styles/modules/components/header.module.css';

export default ({ href, children }) => {
	const router = useRouter()

	let className = children.props.className || ''
	if (router.pathname === href) {
		className = `${className} ${headerStyles.active}`
	}

	return <Link legacyBehavior href={href}>{React.cloneElement(children, { className })}</Link>
}
