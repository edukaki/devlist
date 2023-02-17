import { doc, setDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { db } from './firebase';

function useSetData(project, user) {
  useEffect(() => {
    if (project) {
      setDoc(doc(db, 'users', user.uid, 'projects', project.key), project);
    }
  }, [project, user.uid]);
}

export default useSetData;
