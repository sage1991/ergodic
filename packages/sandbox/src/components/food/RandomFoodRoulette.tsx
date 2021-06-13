import React, { CanvasHTMLAttributes, FC, LegacyRef, MutableRefObject, useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import Pie from "../common/Pie";
import styled from "styled-components";
import "../../pages/food/index.module.css"



const Button = styled.button`
    padding: 5px;
    font-size: 26px;
    text-align: center;
    border-radius: 5px;
    border: 5px solid black;
    color: black;
    background-color: red;
    &:hover {
      background-color: red;
      color: white;
    }
    margin: 20px 0 20px;
    width: 30%
`

interface RandomFoodRouletteProps {
    title?: string
}

export const RandomFoodRoulette: FC<RandomFoodRouletteProps> = ({title}) => {
    const { root } = useStyle();
    const elementRef = useRef<HTMLCanvasElement>(null);
    const [ isClick, setClick ] = useState<boolean>(false);
    const topMenuList = [
        { title: "피자", color: "#F25E6B", x: 250, y: 250 },
        { title: "삼겹살", color: "#A62182", x: 0, y: 0 },
        { title: "감바스", color: "#BF2CA7", x: 50, y: 450 },
        { title: "탕수육", color: "#97D955", x: 10, y: 450 },
        { title: "스테이크", color: "#F2F2F2", x: 420, y: 450 },
        { title: "닭강정", color: "#BF0449", x: 350, y: 450 },
        { title: "햄버거", color: "#07288C", x: 350, y: 450 },
        { title: "라면", color: "#055BA6", x: 41, y: 450 },
        { title: "파스타", color: "#F2C12E", x: 150, y: 250 },
        { title: "치킨", color: "#F28907", x: 250, y: 450 },
    ];
    const customMenuList = [];

    useEffect(()=>{
        const canvas = elementRef.current;
        const ctx = canvas?.getContext("2d");
    })

    const onHandleRoulette = () => {
        setClick(true);
    }

    return (
        <div className={root}>
            <div>{title}</div>
            <Button onClick={onHandleRoulette} >룰렛돌리기</Button>
            <Pie infos={topMenuList} isTranslate={isClick}/>
        </div>

    )
}


const useStyle = createUseStyles({
    root: {
        padding: 20,
        backgroundColor: "#cee9e7",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }
})
