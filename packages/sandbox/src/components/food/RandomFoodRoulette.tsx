import React, { CanvasHTMLAttributes, FC, LegacyRef, MutableRefObject, useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import Pie from "../common/Pie";

interface RandomFoodRouletteProps {
    title?: string
}

export const RandomFoodRoulette: FC<RandomFoodRouletteProps> = ({title}) => {
    const { root } = useStyle();
    const elementRef = useRef<HTMLCanvasElement>(null);
    const topMenuList = [
        { title: "피자", color: "#F25E6B", x: 450, y: 450 },
        { title: "삼겹살", color: "#A62182", x: 450, y: 450 },
        { title: "감바스", color: "#BF2CA7", x: 450, y: 450 },
        { title: "탕수육", color: "#97D955", x: 450, y: 450 },
        { title: "스테이크", color: "#F2F2F2", x: 450, y: 450 },
        { title: "닭강정", color: "#BF0449", x: 450, y: 450 },
        { title: "햄버거", color: "#07288C", x: 450, y: 450 },
        { title: "라면", color: "#055BA6", x: 450, y: 450 },
        { title: "파스타", color: "#F2C12E", x: 450, y: 450 },
        { title: "치킨", color: "#F28907", x: 450, y: 450 },
    ];
    const customMenuList = [];

    useEffect(()=>{
        const canvas = elementRef.current;
        const ctx = canvas?.getContext("2d");
    })



    return (
        <div className={root}>
            <div>{title}</div>
            <Pie infos={topMenuList}/>
        </div>

    )
}


const useStyle = createUseStyles({
    root: {
        padding: 20,
        backgroundColor: "#cee9e7"
    }
})
