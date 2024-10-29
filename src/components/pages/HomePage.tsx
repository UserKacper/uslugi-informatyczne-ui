import { Outlet } from "react-router-dom"



const HomePage = () => {
    return (<>
        <Outlet />
        <main className="flex flex-col md:grid md:grid-cols-2 h-screen">
            <section className="flex justify-center h-full ">
                <div className="self-center p-10 md:p-8">
                    <h1 className="pb-10 font-extrabold text-2xl">Usługi Programistyczne</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus minus eaque labore adipisci rerum eius nisi iure ratione maiores? Labore, voluptatum sit. Hic labore reprehenderit corrupti maiores est autem sit!
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