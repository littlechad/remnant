import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { namespaceConfig } from 'fast-redux'
import About from './component'

const DEFAULT_STATE = {
  title: 'About title',
  description: 'About description',
}

const {
  getState: getAboutState,
} = namespaceConfig('about', DEFAULT_STATE)

const mapStateToProps = state => ({
  title: getAboutState(state, 'title'),
  description: getAboutState(state, 'description'),
})

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)
