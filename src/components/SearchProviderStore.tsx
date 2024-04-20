import { Provider } from "react-redux";
import { store } from "@/redux"
import SearchForm from "./SearchForm";

export const SearchProvider: React.FC = () => {
    return (
        <Provider store={store}>
            <SearchForm />
        </Provider>
    );
};
