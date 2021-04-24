import React, { useEffect, useState, useMemo } from "react";
import useMeasure from 'react-use-measure';
import { animated as a , useTransition } from "react-spring";
import useMedia from '../../custom-hooks/useMedia'
import "./projectGrid.scss";
import data from '../../data/realisations.json';

import shuffle from 'lodash.shuffle'

import Project from '../project/project'


const ProjectGrid = (props) => {
    const { containerBounds } = props
    const [projectHeight, setProjectHeight] = useState(containerBounds.height / 2);

    const columns = useMedia(['(min-width: 1800px)', '(min-width: 1000px)', '(min-width: 600px)'], [3, 2, 1], 2)
    const [ref, { width }] = useMeasure()
    const [items, set] = useState(data.realisations)

    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
        let gridItems = items.map((child, i) => {
          const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
          const x = (width / columns) * column // x = container width / number of columns * column index,
          const y = (heights[column] += projectHeight + 50) - projectHeight + 50 // y = it's just the height of the current column
          return { ...child, x, y, width: width / columns, height: projectHeight + 50 }
        })
        return [heights, gridItems]
      }, [columns, items, width, projectHeight])

    const transitions = useTransition(
        gridItems,
        (item: { projectName: string; height:number; width:number; x:number; y:number; }) => item.projectName,
        {
            from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
            enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
            update: ({ x, y, width, height }) => ({ x, y, width, height }),
            leave: { height: 0, opacity: 0 },
            config: { mass: 5, tension: 500, friction: 100 },
            trail: 25
        }
    )

    useEffect(()=>{
        setProjectHeight(containerBounds.height / 2)
    }, [containerBounds,projectHeight])

    return (
        <>
            <div>
                <button onClick={()=>{set(shuffle)}}>Click me</button>
            </div>
            <div ref={ref} className="grid" style={{ height: Math.max(...heights) }}>
                {transitions.map(({ item, key, props:object}) => {
                let {x, y} = props
                    return (
                        <a.div
                            key={key}
                            className="animated-item-wrapper"
                            style={{left: x, top: y, ...props}}
                        >
                            <Project project={item}/>
                        </a.div>
                    )
                })}
            </div>
        </>
    );
};

export default ProjectGrid;