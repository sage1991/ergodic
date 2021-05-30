import React, { FC } from "react";
import {
    Switch,
    Route, BrowserRouter,
} from "react-router-dom";
import { Food } from "../../pages/food";

export const ApplicationRoute: FC = ({ children }) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Food }/>
            </Switch>
        </BrowserRouter>

    )
}