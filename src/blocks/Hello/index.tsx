import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = (theme: Theme) =>
    createStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
	},
})

interface HelloProps extends WithStyles<typeof styles> {
    image?: string,
	imageTitle?: string,
	title?: string,
	blurb?: string,
	text?: string,
	subheader?: string,
}

class Hello extends React.Component<HelloProps, {}> {
	state = {
		expanded: false,
	}

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render = () => {
	  const { expanded } = this.state
	  const { classes, image, title, subheader, imageTitle, blurb, text } = this.props

	  return (
		<Card className={classes.root}>
		<CardHeader
			avatar={
			<Avatar className={classes.avatar}>
				H
			</Avatar>
			}
			// action={
			// <IconButton aria-label="settings">
			// 	<MoreVertIcon />
			// </IconButton>
			// }
			title={title}
			subheader={subheader}
		/>
		<CardMedia
			className={classes.media}
			image={image}
			title={imageTitle}
		/>
		<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
				{blurb}
			</Typography>
		</CardContent>
		<CardActions disableSpacing>
			<IconButton
			className={clsx(classes.expand, {
				[classes.expandOpen]: expanded,
			})}
			onClick={this.handleExpandClick}
			aria-expanded={expanded}
			aria-label="show more"
			>
			<ExpandMoreIcon />
			</IconButton>
		</CardActions>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
			<CardContent>
			<Typography paragraph>
				{text}
			</Typography>
			</CardContent>
		</Collapse>
		</Card>
	  )
  	}
}

export default withStyles(styles)(Hello)
