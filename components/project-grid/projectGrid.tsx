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
    const formattedData: Array<any> = data.realisations
    const [items, set] = useState(formattedData)
    let tagsArray = ["Randomize"];
    data.realisations.forEach((real)=>{
        real.tags && real.tags.forEach((tag)=>{
            tagsArray.push(tag)
        })
    })
    tagsArray = tagsArray.filter((tag,i) => tagsArray.indexOf(tag) === i)
    const [selectedTags, setSelectedTags] = useState(['']);

    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
        let gridItems = items.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
            const left = (width / columns) * column // x = container width / number of columns * column index,
            const top = (heights[column] += projectHeight + 25) - projectHeight + 25 // y = it's just the height of the current column
            return { ...child, left, top, width: width / columns, height: projectHeight + 25 }
        })
        console.log(heights)
        return [heights, gridItems]
    }, [columns, items, width, projectHeight])

    const transitions = useTransition(
        gridItems,
        (item: { projectName: string; height: number; width: number; left: number; top: number; }) => item.projectName,
        {
            from: ({ left = 0, top, width, height = 0 }) => ({ left, top, width, height, opacity: 0 }),
            enter: ({ left = 0, top, width, height = 0 }) => ({ left, top, width, height, opacity: 1 }),
            update: ({ left = 0, top, width, height = 0 }) => ({ left, top, width, height }),
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
                set(shuffle(formattedData))
                setSelectedTags([''])
                break;
            default :
                if(selectedTags.includes(tag)) {
                    selectedTags.splice(selectedTags.indexOf(tag),1)
                    if(selectedTags.length === 1) {
                        set(formattedData)
                    } else {
                        set((prevState)=>([...prevState.filter((real)=>!real.tags.includes(tag) || selectedTags.some(selectedTag => real.tags.includes(selectedTag)))]))
                    }
                    setSelectedTags([...selectedTags])

                } else {
                    selectedTags.length === 1 ?
                        set(data.realisations.filter(real=>real.tags.includes(tag)))
                        :
                        set((prevState)=>(formattedData
                                            .filter(real=>real.tags.includes(tag) && !selectedTags.some(selectedTag => real.tags.includes(selectedTag)))
                                            .concat(prevState)))
                    setSelectedTags((prevState)=>([...prevState, tag]))
                    
                }
                break;
        }
    }

    const handleProject = (project) => {
        properties.selectedProject(project)
    }

    if(!isFinite(Math.max(...heights))) { return null } else {

        return (
            <>
                <div className="tags-section">
                    {tagsArray && tagsArray.map((tag, i)=>{
                        return <GridTag key={i+tag} index={i} selected={selectedTags.includes(tag)} tag={tag} onTagClick={()=>(toggle(tag))} />
                    })}
                </div>
                <div ref={ref} className="grid" style={{ height: Math.max(...heights) || 0 }}>
                    {transitions.map(({ item, key, props },i) => {
                        return (
                            <a.div
                                key={key + '-' + i}
                                className="animated-item-wrapper"
                                style={{ ...props }}
                            >
                                <Project onClick={handleProject} project={item} />
                            </a.div>
                        )
                    })}
                </div>
            </>
        );
    }

};

export default ProjectGrid;