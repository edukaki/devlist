import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import InputGeneric from "../../components/InputGeneric";
import ButtonGeneric from "../../components/ButtonGeneric";

const SignIn = () => {

    const { googleSignIn, user } = UserAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/dashboard')
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user !== null) {
            navigate(`/dashboard/user?:${user.uid}`)
        }
    }, [navigate, user])

    return (
        <main className="bg-signinImg bg-[length:400px_400px]">
            <div className="text-center text-3xl font-bold py-8">SignIn</div>

            <div className="flex flex-col max-w-[240px] m-auto space-y-4">
                <InputGeneric type="email" placeholder="Enter email" />
                <InputGeneric type="password" placeholder="Enter password" />
                <ButtonGeneric bgColor="bg-green" width="w-full" textColor="text-white" buttonName="Login" />
            </div>

            <div className="max-w-[240px] m-auto space-y-4 py-4">
                <p className="text-center py-4">Or</p>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </main>
    )
}

export default SignIn