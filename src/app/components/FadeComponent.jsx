'use client'

// !TODO Install react-awesome-reveal for it to work

import React from 'react'
import { Fade } from 'react-awesome-reveal'

function FadeComponent({ children, options = {} }) {
	return <Fade {...options}>{children}</Fade>
}

export default FadeComponent
