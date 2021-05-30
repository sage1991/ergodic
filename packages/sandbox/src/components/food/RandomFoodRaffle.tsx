import React, { FC, useState } from "react";
import TextTransition from "react-text-transition";
import { createUseStyles } from "react-jss";
import clsx from "clsx";
import styled from "styled-components";

const Button  = styled.button`
    padding: 5px;
    width: 100px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #cecece;
    border-color: #ffc2d0;
    color: #ffffff;
    background-color: #ffc3d0;
    &:hover {
      background-color: #ff8fa9;
      color: #ffffff;
    }
`

export const RandomFoodRaffle: FC = () => {

    const { root, container, btnContainer, btn, menu } = useStyle();
    const menuList_01 = ["백반", "부대찌개", "김치찌개", "돈까스", "짜장면", "순두부찌개", "불고기", "해장국", "치킨", "스테이크"];
    const menuList_02 = ["닭볶음", "불고기백반", "닭갈비", "쌈밥", "비빔밥", "생선구이", "낙지볶음", "게장", "떡갈비", "청국장"];
    const menuList_03 = ["짜장면", "간짜장", "짬뽕", "볶음밥", "탕수육", "마파두부", "양장피", "깐풍기", "유린기", "고추잡채"];
    const menuList_04 = ["초밥", "라멘", "낫또", "우동", "덮밥", "카레", "오니기리", "연어덮밥", "돈부리", "메밀소바"];
    const menuList_05 = ["피자", "파스타", "스테이크", "리조또", "빠에야", "오므라이스", "에그베네딕트", "햄버거", "고르곤졸라 피자", "치킨"];

    const [ randomMenu, setRandomMenu ] = useState<string>(menuList_01[0])
    const onHandleRandomMenu = (num: number) => {
        const value = Math.floor(Math.random() * 10);
        if (num === 1) setRandomMenu(menuList_01[value]);
        else if (num === 2) setRandomMenu(menuList_02[value]);
        else if (num === 3) setRandomMenu(menuList_03[value]);
        else if (num === 4) setRandomMenu(menuList_04[value]);
        else setRandomMenu(menuList_05[value]);
    }


    return (
        <div className={root}>
            <div className={clsx(container)}>
                {"오늘 뭐 먹지?😜"}
            </div>
            <div className={clsx(container)}>
                {"오늘 "} <TextTransition text={randomMenu} inline noOverflow className={menu}/> {" 어때요?"}
            </div>
            <div className={clsx(btnContainer)}>
                <Button className={btn} onClick={() => onHandleRandomMenu(1)}>{"아무거나"}</Button>
                <Button className={btn} onClick={() => onHandleRandomMenu(2)}>{"한식"}</Button>
                <Button className={btn} onClick={() => onHandleRandomMenu(3)}>{"중식"}</Button>
                <Button className={btn} onClick={() => onHandleRandomMenu(4)}>{"일식"}</Button>
                <Button className={btn} onClick={() => onHandleRandomMenu(5)}>{"양식"}</Button>
            </div>
        </div>

    )
}

const useStyle = createUseStyles({
    root: {
        padding: 20,
        backgroundColor: "#cee9e7"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
        alignItems: "flex-end"
    },
    btnContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 20,
    },
    btn: {
        marginBottom: 5
    },
    menu: {
        fontSize: 26,
        fontWeight: "bold",
        marginLeft: "10px",
        marginRight: "10px",
    }

})
