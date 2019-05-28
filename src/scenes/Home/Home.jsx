//@flow
import React, { Component } from 'react';
import { Link } from "react-router-dom";
//$FlowFixMe
import './home.css';

class Home extends Component {

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
            homeLinks,
        } = this.props;

        return isLoaded ? (	
            <div className="columns">
                <ul className="links">
                    {
                        [].map.call(homeLinks, ({name, image, id}, index) => (
                            <li className="links__element" key={id}>
                                <Link
                                    to={`/gallery/${id}`}
                                    className="link"
                                >
                                    <span className="link-default">00{index+1}</span>
                                    <span className="link-active">{name}</span>
                                </Link>
                                <img className="link__img" src={image} alt="Pom Pom Girls" />
                            </li>
                        ))
                    }                   
                </ul>
            </div>
        ) : (
            <div>Loading</div>
        )
    }
}

export default Home;