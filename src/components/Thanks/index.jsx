import thanksImg from '../../img/contact/thanks.jpg'

const Thanks = () => {
    return (
        <div className='flex flex-row justify-center min-h-[calc(100vh-440px)] md:min-h-[calc(100vh-270px)] py-20'>
            <div className='row-start-2 w-11/12 h-fit p-6 m-auto space-y-6 md:w-fit md:py-28 md:px-14 md:space-y-10 bg-white rounded-xl shadow-md'>
                <img src={thanksImg} alt="mail confirmation" className='w-72 pl-8 m-auto' />
                <p className='font-courier text-center leading-8 md:text-xl md:leading-[57px]'><span className='font-bold'>Message sent successfully!</span><br />
                    Thank you for reaching out!<br />
                    We received your message and will reply to you soon!
                </p>
            </div>
        </div>
    )
}

export default Thanks