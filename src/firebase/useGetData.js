import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import sortArr from '../common/utils/Functions/sortArr';
import { db } from './firebase'

function useGetData(user, setProjectArr, project, setSortedArr) {
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, 'users', user.uid, 'projects'));
            
            const arr = sortArr(data.docs.map((doc) => ({
                ...doc.data(),
                key: doc.data().key
            })),"creation")

            setProjectArr(arr);
            setSortedArr(arr);
        };
        user.uid && getData();
    }, [user,setProjectArr, setSortedArr, project]);
}

export default useGetData