export type InitialStateType = {
    loading: boolean;
    error: boolean; 
    data: string[] | undefined;
};

export type SearchRepo = {
    type: "search";
};

export type SearchSuccess = {
    type: "search_success";
    payload: string[];
};

export type SearchError = {
    type: "search_error";
    payload: string;
};

export type Action = SearchRepo | SearchSuccess | SearchError;

export enum ActionType {
    SEARCH_REPO = "search",
    SEARCH_SUCCESS = "search_success",
    SEARCH_ERROR = "search_error",
}

