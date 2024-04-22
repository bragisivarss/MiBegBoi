import { useDispatch } from "react-redux";
import { fetchPackages } from "@/redux/searchSlice";
import { useState } from "react";

export const SearchForm = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(fetchPackages(term) as any);
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
