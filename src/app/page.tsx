"use client";
import { Header } from "@/components";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const LandingPage: React.FC = () => {
    return (
        <>
            <Provider store={store}>
                <Header />
            </Provider>
        </>
    );
};
export default LandingPage;
