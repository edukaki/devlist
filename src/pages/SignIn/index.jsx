import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignIn = () => {

    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn()
            navigate('/')
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
    if(user !== null){
        navigate('/')
    }
},[navigate, user])

    return (
        <>
        <div className="text-center text-3xl font-bold py-8">SignIn</div>
        <div className="max-w-[240px] m-auto py-4">
            <GoogleButton onClick={handleGoogleSignIn} />
        </div>
        </>
    )
}

export default SignIn