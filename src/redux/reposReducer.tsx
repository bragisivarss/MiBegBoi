import { ActionType, RepoStateType, Action } from "@/types/ReduxSearchType"

export const initialState: RepoStateType = {
    loading: false,
    error: null,
    data: [],
}

const reducer = (
    state: RepoStateType = initialState,
    action: Action
): RepoStateType => {
    switch (action.type) {
        case ActionType.SEARCH_REPO:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};
