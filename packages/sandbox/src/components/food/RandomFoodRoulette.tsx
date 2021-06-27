import React, {
    FC,
    useEffect,
    useRef,
    useState
} from "react";
import { createUseStyles } from "react-jss";
import Pie from "../common/Pie";
import styled from "styled-components";

const Button = styled.button`
    padding: 5px;
    font-size: 26px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid black;
    color: black;
    background-color: #2B79FC;
    color: white;
    &:hover {
      background-color: #2260c9;
      color: #efefef;
    }
    margin: 20px 0 20px;
    width: 30%  
`

interface RandomFoodRouletteProps {
    title?: string
}

export const RandomFoodRoulette: FC<RandomFoodRouletteProps> = ({title}) => {
    const { root, titleLabel } = useStyle();
    const elementRef = useRef<HTMLCanvasElement>(null);
    const [ isClick, setClick ] = useState<boolean>(false);
    const [ deg, setDeg ] = useState<number>(0)
    const topMenuList = [
        { title: "피자", color: "#F25E6B"},
        { title: "삼겹살", color: "#A62182"},
        { title: "감바스", color: "#BF2CA7"},
        { title: "탕수육", color: "#97D955"},
        { title: "스테이크", color: "#F2F2F2"},
        { title: "닭강정", color: "#BF0449"},
        { title: "햄버거", color: "#07288C"},
        { title: "라면", color: "#055BA6"},
        { title: "파스타", color: "#F2C12E"},
        { title: "치킨", color: "#F28907"},
    ];

    useEffect(()=>{
        const canvas = elementRef.current;
        const ctx = canvas?.getContext("2d");
    })

    const onHandleRoulette = () => {
        const value = Math.floor((Math.random() * 360) + (365 * 5));
        setDeg(value + deg)
        setClick(true);
    }


    return (
        <div className={root}>
            <div className={titleLabel}>{title}</div>
            <Button onClick={onHandleRoulette}>{"룰렛 돌리기"}</Button>
            <Pie infos={topMenuList} degree={deg} />
        </div>

    )
}


const useStyle = createUseStyles({
    root: {
        padding: 20,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    titleLabel: {
        color: "black",
        fontWeight: 500,
        fontSize: 28
    }
})
