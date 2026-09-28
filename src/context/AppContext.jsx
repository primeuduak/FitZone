/*
 * Context API logic should be implemented here.
 *
 * Create your context and provider in this file
 * when your project requires shared/global state.
 */


import { AppContext } from "./AppContextValue";

export function AppProvider({ children }) {

    /* Add your shared/global state and logic here */

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
}

