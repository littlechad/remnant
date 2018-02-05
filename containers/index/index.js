import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { namespaceConfig } from 'fast-redux'
import Index from './component'

const DEFAULT_STATE = {
  name: '',
  open: false,
  title: 'Index title',
  description: 'Index description',
}

const {
  action,
  getState: getIndexState,
} = namespaceConfig('index', DEFAULT_STATE)

const setState = action('setState', (state, data) => ({
  ...state,
  open: data,
}))

const mapStateToProps = state => ({
  open: getIndexState(state, 'open'),
  title: getIndexState(state, 'title'),
  description: getIndexState(state, 'description'),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  handleOpen() {
    dispatch(setState(true))
  },
  handleClose() {
    dispatch(setState(false))
  },
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
