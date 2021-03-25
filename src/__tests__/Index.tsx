import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Index from '../blocks/Index'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

describe('Header Component Is Correct', () => {
    test('Header content is correct', () => {
		const title = 'header title'
        const { getByText } = render(<Header heading={title}/>)
        expect(getByText(title)).toBeInTheDocument()
    })
})

describe('Content Is Correct', () => {
    test('renders a message', () => {
        const { getByText } = render(<Index />)
        expect(getByText('Hello, world!')).toBeInTheDocument()
    })
})

describe('Footer Component Is Correct', () => {
    test('Footer content is correct', () => {
        const { getByText } = render(<Footer />)
        expect(getByText('This is the Footer')).toBeInTheDocument()
    })
})
