import React, { useEffect, useState, useRef } from "react";
import useMeasure from 'react-use-measure';
import { animated as a, useSpring } from "react-spring";
import CancelIcon from '@material-ui/icons/Cancel';

import "./projectGrid.scss";

const GridTag = ({selected, tag, onTagClick, index}) => {
    const [ref, bounds] = useMeasure();
    const style = useSpring({maxWidth: selected ? 500 : 0, opacity: selected ? 1 : 0})
    return (
        <div ref={ref} key={tag + '-' + index} 
            className={`tag-button ${tag}`} 
            onClick={onTagClick} 
            style={tag ==='Randomize' ? {backgroundImage: 'linear-gradient(135deg, #3B2667 10%, #EC7878 100%)'}: null}>
            <span className='tag-button-content'>{tag}</span>
            {tag!=='Randomize' && (<a.span style={style} className='tag-button-remove' onClick={onTagClick}><CancelIcon /></a.span>) }
        </div>
    );
};

export default GridTag;