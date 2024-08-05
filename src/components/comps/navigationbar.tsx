import { useState } from "react"
import { Button } from "../ui/button"
import Hamburger from "hamburger-react"
import { Outlet } from "react-router-dom"


export const NavigationBar = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false)


    return (<>
        <main className="h-[80px] sm:h-[110px] bg-slate-300">
            <section className="flex h-full w-full p-5 xl:justify-evenly sm:justify-between">
                <div className="self-center">
                    <img src='' alt="Company Logo" />
                </div>
                <div className="self-center hidden sm:flex gap-3">
                    <Button variant={"ghost"} onClick={() => window.location.assign('/')
                    }>O nas</Button>
                    <Button variant={"ghost"} onClick={() => window.location.assign('/price/smarthome')}>Cennik</Button>
                    <Button variant={"ghost"} onClick={() => window.location.assign('/contact')}>Kontakt</Button>
                </div>
                <div className="self-center flex justify-end w-full sm:hidden">
                    <Hamburger onToggle={setIsToggled} />
                </div>
            </section>
        </main>
        {isToggled && <div className="flex justify-center flex-col sm:hidden">
            <Button variant={"ghost"} onClick={() => window.location.assign('/')}>O nas</Button>
            <Button variant={"ghost"} onClick={() => window.location.assign('/price/smart')}>Cennik</Button>
            <Button variant={"ghost"} onClick={() => window.location.assign('/contact')}>Kontakt</Button>
        </div>}
        <Outlet />
    </>)
}
