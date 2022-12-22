import GoogleButton from "react-google-button";

const SignIn = () => {
    return (
        <>
        <div className="text-center text-3xl font-bold py-8">SignIn</div>
        <div className="max-w-[240px] m-auto py-4">
            <GoogleButton />
        </div>
        </>
    )
}

export default SignIn