import { createContext, useState } from "react";

import Header from "./components/Header";
import ContainerApi from "./components/ContainerApi";
import { UserAuthorizedContextType } from "./types/UserAuthorizedContextType";

export const UserAuthorizedContext = createContext<
    UserAuthorizedContextType | undefined
>(undefined);

function App() {
    const [authorize, setAuthorize] = useState<string>(
        localStorage.getItem("token") || ""
    );

    const contextValue: UserAuthorizedContextType = {
        authorize,
        setAuthorize,
    };

    return (
        <div className="App">
            <UserAuthorizedContext.Provider value={contextValue}>
                <Header />
                <ContainerApi />
            </UserAuthorizedContext.Provider>
        </div>
    );
}

export default App;
