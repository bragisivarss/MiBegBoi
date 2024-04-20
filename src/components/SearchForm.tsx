"use client";
import { useState } from "react";
import { useActions } from "@/hooks/useActions";

const SearchForm: React.FC = () => {
    const [term, setTerm] = useState("");
    const { searchRepos } = useActions()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search" id="search">
                Search
            </label>
            <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                id="search"
                name="search"
            />
            <button type="submit">Search</button>
        </form>
    );
};
export default SearchForm;
