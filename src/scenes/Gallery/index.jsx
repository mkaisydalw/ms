//@flow
//$FlowFixMe
import { connect } from 'react-redux';
import Gallery from './Gallery';

import {
    isLoaded,
    getGalleryItems,
} from '../../services/api/selectors';
import {
    initAPI,
} from '../../services/api/actions';

const mapDispatchToProps = (dispatch) => ({
    initAPI: () => dispatch(initAPI()),
})

const mapStateToProps = (state, ownProps) => ({
    isLoaded: isLoaded(state),
    galleryItems: getGalleryItems(state, ownProps.match.params.id),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
