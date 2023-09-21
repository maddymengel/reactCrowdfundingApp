import { createContext, useState } from "react";

// Here we create the context
export const AuthContext = createContext();

// Here we create the componenet that will wrap out app, this means all its children can access the context using the hook.
export const AuthProvider = (props) => {
    // Using an object for the state here, this way we can add more properties to the state later on like user id
    const [auth, setAuth] = useState({
        // here we initialise the context with the token from local storage, this way if the user refreshes the page we can still the token in memory
        token: window.localStorage.getItem("token"),
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}
