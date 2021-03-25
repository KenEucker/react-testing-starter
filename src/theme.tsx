import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {
        [key: string]: any
    }
}

const themeOptions: ThemeOptions = {
    typography: {
        fontSize: 20,
    },
}

const theme = createMuiTheme(themeOptions)

export default theme
