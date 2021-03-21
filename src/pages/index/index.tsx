import './index.scss'
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

class Index extends React.Component {
    render = () => {
        return (
            <div>
                <Header />
                <h1>Hello, world!</h1>
                <Footer />
            </div>
        )
    }
}

export default Index
