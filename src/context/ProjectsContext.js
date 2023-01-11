import { createContext, useState, useContext } from "react";
import { UserAuth } from "./AuthContext";
import useSetData from "../firebase/useSetData";
import useGetData from "../firebase/useGetData";

const ProjectContext = createContext()


export const ProjectContextProvider = ({ children }) => {
    const { user } = UserAuth()
    const [project, setProject] = useState(null)
    const [projectArr, setProjectArr] = useState([])

    useSetData(project, user)

    useGetData(user, setProjectArr, project)

    return (
        <ProjectContext.Provider value={{ setProject, projectArr }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const UserProject = () => {
    return useContext(ProjectContext)
}