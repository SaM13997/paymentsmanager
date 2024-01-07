'use client'

// !TODO Install react-awesome-reveal for it to work

import React from 'react'
import { Slide } from 'react-awesome-reveal'

function FadeComponent({ children, options = {} }) {
	return <Slide {...options}>{children}</Slide>
}

export default FadeComponent
