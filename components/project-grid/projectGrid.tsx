import React, { useEffect, useState, useMemo } from "react";
import useMeasure from 'react-use-measure';
import { animated as a, useTransition } from "react-spring";
import data from '../../data/realisations.json';
import "./projectGrid.scss";

import shuffle from 'lodash.shuffle'

import Project from '../project/project'
import GridTag from './tag'


const ProjectGrid = (properties) => {
    const { containerBounds } = properties
    const [projectHeight, setProjectHeight] = useState(containerBounds.height / 2);
    const [columns, setColumns] = useState(2)
    const [ref, { width }] = useMeasure()
    const [items, set] = useState(data.realisations)
    let tagsArray = ["Randomize"];
    data.realisations.forEach((real)=>{
        real.tags && real.tags.forEach((tag)=>{
            tagsArray.push(tag)
        })
    })
    tagsArray = tagsArray.filter((tag,i) => tagsArray.indexOf(tag) === i)
    const [selectedTag, setSelectedTag] = useState('');

    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
        let gridItems = items.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
            const left = (width / columns) * column // x = container width / number of columns * column index,
            const top = (heights[column] += projectHeight + 25) - projectHeight + 25 // y = it's just the height of the current column
            return { ...child, left, top, width: width / columns, height: projectHeight + 25 }
        })
        return [heights, gridItems]
    }, [columns, items, width, projectHeight])

    const transitions = useTransition(
        gridItems,
        (item: { projectName: string; height: number; width: number; left: number; top: number; }) => item.projectName,
        {
            from: ({ left, top, width, height }) => ({ left, top, width, height, opacity: 0 }),
            enter: ({ left, top, width, height }) => ({ left, top, width, height, opacity: 1 }),
            update: ({ left, top, width, height }) => ({ left, top, width, height }),
            leave: { height: 0, opacity: 0 },
            config: { mass: 5, tension: 500, friction: 100 },
            trail: 25
        }
    )

    useEffect(() => {
        setProjectHeight(containerBounds.height / 2)
        setColumns(Math.floor(containerBounds.width / 420))
    }, [containerBounds, projectHeight])

    const toggle = (tag: string) => {
        switch(tag) {
            case 'Randomize':
                set(shuffle(data.realisations))
                setSelectedTag('')
                break;
            default :
                selectedTag !== tag ? 
                    (set(data.realisations.filter(real=>real.tags.includes(tag))) , setSelectedTag(tag)) 
                    :
                    (set(data.realisations), setSelectedTag(''))
                break;
        }
    }

    return (
        <>
            <div className="tags-section">
                {tagsArray && tagsArray.map((tag, i)=>{
                    return <GridTag key={i+tag} index={i} selected={tag === selectedTag} tag={tag} onTagClick={()=>(toggle(tag))} />
                })}
            </div>
            <div ref={ref} className="grid" style={{ height: Math.max(...heights) }}>
                {transitions.map(({ item, key, props }) => {
                    return (
                        <a.div
                            key={key}
                            className="animated-item-wrapper"
                            style={{ ...props }}
                        >
                            <Project project={item} />
                        </a.div>
                    )
                })}
            </div>
        </>
    );
};

export default ProjectGrid;