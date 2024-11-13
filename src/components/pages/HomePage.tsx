
const HomePage = () => {
    return (<>
        <main className="flex flex-col md:grid md:grid-cols-2">
            <section className="flex justify-center h-full">
                <div className="self-center p-10 md:p-8">
                    <h1 className="pb-10 font-extrabold text-2xl max-md:text-center">Usługi Programistyczne</h1>
                    <p className="max-md:text-center">
                        Oferujemy kompleksowe usługi programistyczne, dostosowane do indywidualnych potrzeb klienta.
                        Nasz zespół specjalizuje się w tworzeniu nowoczesnych aplikacji webowych i mobilnych,
                        automatyzacji procesów biznesowych oraz integracji z zewnętrznymi systemami.
                        Zapewniamy profesjonalne podejście, pełne wsparcie techniczne oraz elastyczność
                        w realizacji projektów – od fazy koncepcyjnej aż po wdrożenie i utrzymanie.
                    </p>
                </div>
            </section>
            <section className="flex justify-center h-full bg-transparent">
                <div className="self-center">
                    <img src={"/src/assets/software-engineer.png"} alt="3d image" width={0} height={0} className="lg:w-[500px] w-[300px]" />
                </div>
            </section>
        </main>
    </>)
}

export default HomePage