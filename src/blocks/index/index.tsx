import * as React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hello from '../Hello'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class Index extends React.Component {
    render = () => {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Header heading="This is the header" />
				<Hello title="Hello, world!" subheader="you are here" text="how now brown cow?" image="https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home.jpg"/>
				<Button aria-controls="simple-menu" aria-haspopup="true">
                    Open Menu
                </Button>
                <Footer />
            </Grid>
        )
    }
}

export default Index
