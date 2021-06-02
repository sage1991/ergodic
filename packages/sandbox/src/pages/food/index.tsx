import  React, { FC } from "react";
import { RandomFoodRaffle } from "../../components/food/RandomFoodRaffle";
import { RandomFoodRoulette } from "../../components/food";




export const Food = () => {
    return (
        <>
            <RandomFoodRaffle/>
            <RandomFoodRoulette title="베스트 메뉴 Top10 룰렛"/>
            <RandomFoodRoulette title="내가 만든 룰렛"/>
        </>
    )
}