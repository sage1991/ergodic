import React, { FC, useState } from "react";
import { createUseStyles } from "react-jss";

interface RandomFoodRouletteProps {
    title?: string
}

export const RandomFoodRoulette: FC<RandomFoodRouletteProps> = ({title}) => {

    const { root } = useStyle();
    return (
        <div className={root}>
            <div>{title}</div>
            <div>룰렛</div>
        </div>

    )
}


const useStyle = createUseStyles({
    root: {
        padding: 20,
        backgroundColor: "#cee9e7"
    }
})
