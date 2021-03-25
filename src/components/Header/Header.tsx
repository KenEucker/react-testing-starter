// Header.js
import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core'

const styles = (theme: Theme) =>
    createStyles({
        root: {
            /* ... */
        },
        heading: {
            color: 'red',
        },
    })

interface HeaderProps extends WithStyles<typeof styles> {
    heading?: string
}

class Header extends React.Component<HeaderProps, {}> {
    constructor(props: HeaderProps) {
        super(props)
    }
    render = () => {
        const { classes, heading } = this.props

        return (
            <header className={classes.root}>
                <h1 className={classes.heading}>{heading}</h1>
            </header>
        )
    }
}

export default withStyles(styles)(Header)
