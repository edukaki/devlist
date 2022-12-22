import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {

    const { googleSignIn } = UserAuth();

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn()
        }
        catch(error){
            console.log(error)
        }
    }

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