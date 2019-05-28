//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import Home from './Home';
import {
    isLoaded,
    getHomeLinks,
} from '../../services/api/selectors';
import {
    initAPI,
} from '../../services/api/actions';

const mapDispatchToProps = (dispatch) => ({
    initAPI: () => dispatch(initAPI()),
})

const mapStateToProps = (state) => ({
    isLoaded: isLoaded(state),
    homeLinks: getHomeLinks(state),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);