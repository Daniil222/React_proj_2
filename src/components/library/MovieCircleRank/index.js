import React from 'react';
import PropTypes from "prop-types";

import './style.scss';

export const MovieCircleRank = (props) => {

    return(
        <div className="circle-rank">
            <svg viewBox="0 0 36 36" className={`circle-rank-${props.percent}`}>
                <path className="circle"
                      strokeDasharray={`${props.percent}, 100`}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
            </svg>
            <span className="circle-rank__number">
                {props.percent}
                <span className="circle-rank__percent">%</span>
            </span>
        </div>
    )
}

MovieCircleRank.propTypes = {
    percent: PropTypes.number.isRequired,
};