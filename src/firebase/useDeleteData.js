import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const useDeleteData = (user, checkedItems, arr, deleteItem, setDeleteItem) => {
    function handleDelete() {
        checkedItems.map((id) => {
            const deleteData = async () => {
                const data = await doc(db, 'users', user.uid, 'projects', id);
                deleteDoc(data)
            }

            arr.map((item, index) => (
                item.key === id && arr.splice(index, 1)
            ))
            return deleteData()
        })
        setDeleteItem(false)
    }
    deleteItem && handleDelete()
}

export default useDeleteData