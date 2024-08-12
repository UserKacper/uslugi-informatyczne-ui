import { Outlet } from "react-router-dom"

const HomePage = () => {
    return (<>
        <Outlet />
        <main className="flex flex-col md:grid md:grid-cols-2 h-screen">
            <section className="flex justify-center h-full bg-purple-400">
                <div className="self-center p-10 md:p-8">
                    <h1 className="pb-10 font-bold text-2xl">Usługi Programistyczne</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minus eaque labore adipisci rerum eius nisi iure ratione maiores? Labore, voluptatum sit. Hic labore reprehenderit corrupti maiores est autem sit!
                </div>
            </section>
            <section className="flex justify-center h-full bg-transparent">
                <div className="self-center">
                    <img src={""} alt="3d image" width={200} height={200} />
                </div>
            </section>
        </main>
    </>)
}

export default HomePage