// modules/ Packages mport ke ahyn 
import React, {createContext, useEffect, useState} from "react";
import axios from "axios";


// context create ke a hy 
export const SearchContext = createContext();


// Start searchProvider
// searchProvider yahan sy start hota hy 
export const SearchProvider = ({children}) => {

    // useStaes for initail data
    const [query, SetQuery] = useState('');
    const [items, SetItems] = useState([]);
    const [filterResults, SetFilterResults] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const [error, SetError] = useState(null);

    // useEffect ka use kr ky API ko call krn & isLoading lo contrl krna hy 
    useEffect(()=>{
        // call API function
        const fetchApi = async ()=>{
            SetIsLoading(true);
            try {
                const res = await axios.get('https://raw.githubusercontent.com/GrowinFlow/json/main/data.json');
                SetItems(res.data);
                SetIsLoading(false);

            } catch (error) {
                SetError(error)
                SetIsLoading(false);                
            };
        };

        fetchApi(); 
    }, []);


    useEffect(()=>{
        const filteredData = items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));

        SetFilterResults(filteredData);

    }, [query, items])

    // set query 
    const search = (query)=> {
        SetQuery(query)
    };

    
    // all states and data ko dosr components ma use krny ky le a 1 object ma ektha krn a 
    const contextValue = {
        query,
        SetQuery,
        items,
        filterResults,
        isLoading,
        error,
        search
    }
    
    // return SearchContext and use Provider
    return(
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    )
};
// End of searchProvider




