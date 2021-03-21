import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../pages/index/index'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

describe('Header Component Is Correct', () => {
    test('Header content is correct', () => {
        const { getByText } = render(<Header />)
        expect(getByText('This is the header')).toBeInTheDocument()
    })
})

describe('Content Is Correct', () => {
    test('renders a message', () => {
        const { getByText } = render(<App />)
        expect(getByText('Hello, world!')).toBeInTheDocument()
    })
})

describe('Footer Component Is Correct', () => {
    test('Footer content is correct', () => {
        const { getByText } = render(<Footer />)
        expect(getByText('This is the Footer')).toBeInTheDocument()
    })
})
