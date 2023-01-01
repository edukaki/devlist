import { createContext, useState, useMemo } from "react";

export const ProjectContext = createContext(null)


export const ProjectContextProvider = ({ children }) => {
    const [projectArr, setProjectArr] = useState([])

    const projectMemo = useMemo(() => ({projectArr, setProjectArr}), [projectArr, setProjectArr])

    return (
        <ProjectContext.Provider value={projectMemo}>
            {children}
        </ProjectContext.Provider>
    )
}