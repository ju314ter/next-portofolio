import React, { useEffect, useState, useRef } from "react";
import { animated as a, useSpring } from "react-spring";
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';

import "./projectGrid.scss";

const GridTag = ({selected, tag, onTagClick, index}) => {
    const style = useSpring({maxWidth: selected ? 500 : 0, opacity: selected ? 1 : 0})
    return (
        <Button key={tag + '-' + index} 
            className={`tag-button ${tag}`} 
            onClick={onTagClick}
            endIcon={tag!=='Randomize' && (<a.span style={style} className='tag-button-remove' onClick={onTagClick}><CancelIcon /></a.span>) }
            style={tag ==='Randomize' ? {backgroundImage: 'linear-gradient(135deg, #3B2667 10%, #EC7878 100%)'}: null}>
            <span className='tag-button-content'>{tag}</span>
        </Button>
    );
};

export default GridTag;