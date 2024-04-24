"use client";

import { useState, useEffect } from "react";

import {
    searchAsync,
    selectValue,
    selectStatus,
} from "@/redux/features/searchSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const Landing: React.FC = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);
    const [size, setSize] = useState(5);
    const [term, setTerm] = useState("react");

    useEffect(() => {
        dispatch(searchAsync({ term, size }));
    }, []);

    console.log("value", value);

    return (
        <>
            <div>
                <ul>
                    {status === "loading" && <li>Loading</li>}
                    {status === "failed" && <li>Failed</li>}
                    {status === "idle" && value && (
                        <div>
                            {value.objects.map((item: any, index: number) => (
                                <li key={index}>{item.package.name}</li>
                            ))}
                        </div>
                    )}
                </ul>
            </div>
        </>
    );
};
