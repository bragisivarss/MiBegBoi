import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";

export const useActions = useDispatch.withTypes<AppDispatch>();
