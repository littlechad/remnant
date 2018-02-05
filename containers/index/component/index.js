import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Link from 'next/link'
import Helmet from 'react-helmet'

import withRoot from '../../../src/withRoot'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const Index = (props) => {
  console.log(props)
  const {
    title, description, classes, open,
  } = props
  return (
    <div className={classes.root}>
      <Helmet
        title={`${title.title} | Hello next.js!`}
        meta={[
          { property: 'og:title', content: title.title },
          { property: 'og:description', content: description.description },
        ]}
      />
      <Dialog open={open.open} onClose={() => props.handleClose()}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => props.handleClose()}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="display1" gutterBottom>
        Material-UI
      </Typography>
      <Typography variant="subheading" gutterBottom>
        example project
      </Typography>
      <Button variant="raised" color="secondary" onClick={() => props.handleOpen()}>
        Super Secret Password
      </Button><br />
      <Link href={{ pathname: '/about' }}><a>About</a></Link>
    </div>
  )
}

Index.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  open: PropTypes.shape({
    open: PropTypes.bool.isRequired,
  }).isRequired,
  description: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default withRoot(withStyles(styles)(Index))
