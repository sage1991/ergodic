import React, { CanvasHTMLAttributes, FC, LegacyRef, MutableRefObject, useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";

interface RandomFoodRouletteProps {
    title?: string
}

export const RandomFoodRoulette: FC<RandomFoodRouletteProps> = ({title}) => {
    const { root } = useStyle();
    // const elementRef = useRef<HTMLCanvasElement>(null);
    //
    //
    // useEffect(()=>{
    //     const canvas = elementRef.current;
    //     const ctx = canvas.getContext("2d");
    //
    // })

    return (
        <div className={root}>
            <div>{title}</div>
            {/*<canvas ref={elementRef} width="200" height="100" />*/}
        </div>

    )
}


const useStyle = createUseStyles({
    root: {
        padding: 20,
        backgroundColor: "#cee9e7"
    }
})
