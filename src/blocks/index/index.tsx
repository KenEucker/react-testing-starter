import * as React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

class Index extends React.Component {
    render = () => {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Header heading="This is the header" />

                <Button aria-controls="simple-menu" aria-haspopup="true">
                    Open Menu
                </Button>
                <Footer />
            </Grid>
        )
    }
}

export default Index
