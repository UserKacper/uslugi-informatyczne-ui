export const TermsPage = () => {
    return (
        <main>
                <h1 className='text-2xl font-bold text-center pt-8'>Regulamin</h1>
                <div id='text-information-terms-of-use' className='text-sm text-center py-8'>
                    <p> Niniejszy regulamin użytkowania strony przedstawia zasady i warunki korzystania z usług oferowanych przez naszą stronę internetową. <br />Korzystając z naszej strony, użytkownik akceptuje poniższe warunki: </p>
                </div>
                <div className='flex justify-center pb-8 m-10'>
                    <a href={'/termsandconditions.pdf'} className="self-center px-6 py-2 text-sm font-semibold rounded-full bg-white text-black hover:text-[#AD93FF] focus:ring-2 transition duration-500 hover:outline hover:outline-2 outline-[#CFC0FF]">
                        Zobacz Regulamin
                    </a>
                </div>
        </main>
    )
}
