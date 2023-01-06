import { createContext, useState, useEffect, useContext } from "react";
import { db } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { UserAuth } from "./AuthContext";
import useGetData from "../firebase/useGetData";

const ProjectContext = createContext()


export const ProjectContextProvider = ({ children }) => {
    const { user } = UserAuth()
    const [project, setProject] = useState(null)
    const [projectArr, setProjectArr] = useState([])


    useEffect(() => {
        if (project) {
            setDoc(doc(db, 'users', user.uid, 'projects', project.key), project)
        }
    }, [project, user.uid])

    useGetData(user, setProjectArr, project);

    return (
        <ProjectContext.Provider value={{ setProject, projectArr }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const UserProject = () => {
    return useContext(ProjectContext)
}