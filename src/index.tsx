import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Index from './blocks/Index'
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'

window.onload = () => {
    ReactDOM.render(
        <>
            <CssBaseline />
            <StylesProvider>
                <MuiThemeProvider theme={theme}>
                    <Index />
                </MuiThemeProvider>
            </StylesProvider>
        </>,
        document.getElementById('root'),
    )
}
