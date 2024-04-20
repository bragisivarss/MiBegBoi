import axios from "axios";
import { ActionType, Action } from "@/types";
import { Dispatch } from "@reduxjs/toolkit";

export const searchRepos = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPO,
        });

        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-/v1/search",
                {
                    params: {
                        text: term,
                    },
                }
            );

            const searchResults = data.Objects.map((result: any) => {
                return [
                    result.package.name,
                    result.package.description,
                    result.package.links.npm,
                ];
            });

            dispatch({
                type: ActionType.SEARCH_SUCCESS,
                payload: searchResults,
            });

        } catch (err) {
            if (err instanceof Error) {
                dispatch({
                    type: ActionType.SEARCH_REPO,
                    payload: err.message,
                });
            }
        }
    };
};
