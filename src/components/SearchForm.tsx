import { useSelector, useDispatch } from "react-redux";
import fetchPackages from "@/redux/searchSlice";
import { useState } from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { UnknownAction } from "@reduxjs/toolkit";

export const SearchForm = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    };

    return (
        <form onSubmit={handleSubmit}>
            <label id="search">Search</label>
            <input
                id="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />
        </form>
    );
};
