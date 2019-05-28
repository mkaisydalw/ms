//@flow
import React, { Component } from 'react';
import GalleryContainer from '../../containers/GalleryContainer';
//$FlowFixMe
import './about.css';

class About extends Component {

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
            aboutPage,
        } = this.props;

        return isLoaded ? (
            <GalleryContainer
                title={aboutPage.title}
                galleryItems={aboutPage.page}
                className="gallery page"
                galleryType="page"
            />
        ) : (
            <div>Loading</div>
        )
    }
}

export default About;

