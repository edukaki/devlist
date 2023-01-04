import { createContext, useState, useEffect } from "react";
import { db } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { UserAuth } from "./AuthContext";

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

    return (
        <ProjectContext.Provider value={{ setProject, projectArr }}>
            {children}
        </ProjectContext.Provider>
    )
}