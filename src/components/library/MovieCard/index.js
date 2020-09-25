import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

import { MovieMenu, MovieCircleRank, MovieDate, MovieTitle, MovieSubtitle, CardType } from "../../library/";

export const MovieCard = (props) => {

    const cardType = useContext(CardType);

    if ( cardType === 'movie') {
        return(
            <div className={`card card-${cardType}`}>
                <div className="card__image">
                    <Link to='/'>
                        <img src="https://image.tmdb.org/t/p/w220_and_h330_face/o8M28wIAJHfiVl1QMmZID5ZyZZ1.jpg" alt={props.title} />
                    </Link>
                    <MovieMenu />
                </div>
                <div className='card__content'>
                    <MovieCircleRank percent={68} />
                    <MovieTitle title={props.title}/>
                    <MovieDate />
                </div>
            </div>
        )
    }

    return(
        <div className={`card card-${cardType}`}>
            <div className="card__image">
                <Link to='/'>
                    <img src="https://image.tmdb.org/t/p/w355_and_h200_multi_faces/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg" alt={props.title} />
                </Link>
                <MovieMenu />
            </div>
            <div className='card__content'>
                <MovieTitle title={props.title} className='card__title--center'/>
                <MovieSubtitle subtitle={props.subtitle}/>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    url: PropTypes.string,
    img: PropTypes.string,
    rank: PropTypes.number,
};