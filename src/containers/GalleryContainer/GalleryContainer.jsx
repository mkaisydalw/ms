//@flow
import React, { Component } from 'react';
import Footer from '../../components/Footer';

class GalleryContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentIndex: 1,
        }
    }

    nextButton = (e) => {
        e.preventDefault();

        this.setState((state, { galleryItems }) => {
            if (state.currentIndex === galleryItems.length) {
                return {
                    currentIndex: 1
                }
            } 

            return {
                currentIndex: state.currentIndex + 1
            }
        });
    }

    prevButton = (e) => {
        e.preventDefault();

        this.setState((state, { galleryItems }) => {
            if (state.currentIndex === 1) {
                return {
                    currentIndex: galleryItems.length
                }
            } 

            return {
                currentIndex: state.currentIndex - 1
            }
        });
    }

    render() {
        const {
            galleryType,
            galleryItems,
            className,
            footerTitle,
        } = this.props;

        const {
            currentIndex
        } = this.state;

        return(
            <div className={`columns ${className}`}>
                {galleryType === 'images' ? 
                    galleryItems.map(({name, type, src}, index) => (                    
                        <div key={index} className={`gallery-item ${type} ${index === currentIndex-1 ? 'active' : ''}`}>
                            {
                                typeof src  === 'object' ?
                                    src.map((src, index) => (
                                        <div key={index} className="image">
                                            <img src={`${window.location.origin}/${src}`} alt={name} />
                                        </div>
                                    ))
                                : (
                                    <img src={`${window.location.origin}/${src}`} alt={name} />
                                )
                            }
                        </div>
                    )) : 
                    galleryItems.map((page, index) => (                    
                        <div key={index} className={`gallery-item ${index === currentIndex-1 ? 'active' : ''}`}>
                            <h1>{galleryItems.title}</h1>
                            <div className="page-columns">
                            {
                                page.map(({place, title, text}, index) => (
                                    <div key={index} className={place}>
                                        {title && (
                                            <p><strong>{title}</strong></p>
                                        )} 
                                        <div dangerouslySetInnerHTML={{ __html: text }} />;
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
                <Footer
                    footerTitle={footerTitle}
                    currentIndex={currentIndex}
                    amount={galleryItems.length}
                    nextButton={this.nextButton}
                    prevButton={this.prevButton}
                />
            </div>
        )
    }
}

export default GalleryContainer;