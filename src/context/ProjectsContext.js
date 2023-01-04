import { createContext, useState } from "react";

const ProjectContext = createContext()


export const ProjectContextProvider = ({ children }) => {
    const [projectArr, setProjectArr] = useState([])


    return (
        <ProjectContext.Provider value={{projectArr}}>
            {children}
        </ProjectContext.Provider>
    )
}