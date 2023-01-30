import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const useDeleteData = (user, checkedItems, projectArr, deleteItem) => {
    function handleDelete() {
        checkedItems.map((id) => {
            const deleteData = async () => {
                const data = await doc(db, 'users', user.uid, 'projects', id);
                deleteDoc(data)
            }
            projectArr.map((item, index) => (
                item.key === id && projectArr.splice(index, 1)
            ))
            return deleteData()
        })
    }
    deleteItem && handleDelete()
}

export default useDeleteData