import { collection, getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import sortArr from '../common/utils/Functions/sortArr';
import { db } from './firebase'

function useGetData(user, setProjectArr, project) {
    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(collection(db, 'users', user.uid, 'projects'));
            setProjectArr(sortArr(data.docs.map((doc) => ({
                ...doc.data(),
                key: doc.data().key
            })),"creation"));
        };
        user.uid && getData();
    }, [user,setProjectArr,project]);
}

export default useGetData