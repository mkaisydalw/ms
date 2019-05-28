//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import About from './About';

import {
    isLoaded,
    getAboutPage,
} from '../../services/api/selectors';
import {
    initAPI,
} from '../../services/api/actions';

const mapDispatchToProps = (dispatch) => ({
    initAPI: () => dispatch(initAPI()),
})

const mapStateToProps = (state) => ({
    isLoaded: isLoaded(state),
    aboutPage: getAboutPage(state),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(About);
