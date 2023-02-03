import { createContext, useState, useContext } from "react";
import { UserAuth } from "./AuthContext";
import useSetData from "../firebase/useSetData";
import useGetData from "../firebase/useGetData";
import useDeleteData from "../firebase/useDeleteData";

const ProjectContext = createContext()

export const ProjectContextProvider = ({ children }) => {
    const { user } = UserAuth()
    const [project, setProject] = useState(null)
    const [projectArr, setProjectArr] = useState(null)
    const [sortedArr, setSortedArr] = useState(null)
    const [checkedItems, setCheckedItems] = useState([])
    const [deleteItem, setDeleteItem] = useState(false)

    useSetData(project, user)

    useGetData(user, setProjectArr, project, setSortedArr)

    useDeleteData(user, checkedItems, sortedArr, deleteItem, setDeleteItem)

    function handleDelete() {
        setDeleteItem(true)
    }

    return (
        <ProjectContext.Provider value={{ setProject, projectArr, sortedArr, setSortedArr, checkedItems, setCheckedItems, handleDelete }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const UserProject = () => {
    return useContext(ProjectContext)
}