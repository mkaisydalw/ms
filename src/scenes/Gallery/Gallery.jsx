//@flow
import React, { Component } from 'react';
import GalleryContainer from '../../containers/GalleryContainer';
//$FlowFixMe
import './gallery.css';

class Gallery extends Component {

    componentDidMount() {
        const {
            initAPI,
            isLoaded,
        } = this.props;

        if (!isLoaded) {
            initAPI();
        }
    }

    render() {
        const {
            isLoaded,
            galleryItems,
        } = this.props;

        return isLoaded ? (
            <GalleryContainer galleryItems={galleryItems} className="gallery" galleryType="images"/>
        ) : (
            <div>Loading</div>
        )
    }
}

export default Gallery;