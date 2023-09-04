import { createContext, useContext } from "react";


const ApiDataContext = createContext();

export const useApiData= ()=>{
    return useContext(ApiDataContext);
};

export const ApiDataContextProvider = ({children}) => {
    const [apiData, setApiData] = useState([]);
    return (
        <ApiDataContext.Provider value={{apiData, setApiData}}>
            {children}
        </ApiDataContext.Provider>
    );
}; 