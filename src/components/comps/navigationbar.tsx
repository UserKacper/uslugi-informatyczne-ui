import { useState } from "react"
import { Button } from "../ui/button"
import Hamburger from "hamburger-react"
import { Outlet } from "react-router-dom"


export const NavigationBar = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false)


    return (<>
        <main className="h-[80px] sm:h-[110px] bg-[#AD93FF] shadow-2xl">
            <section className="flex h-full w-full p-5 xl:justify-evenly sm:justify-between">
                <div className="self-center">
                    <img src='https://th.bing.com/th/id/R.26f917f11670decde7eb10ed9293a3a2?rik=9xV9E9hk0EsiLg&pid=ImgRaw&r=0' alt="Company Logo" width={150} height={150} />
                </div>
                <div className="self-center hidden sm:flex gap-3">
                    <Button variant={"ghost"} className='text-sm tracking-tight ' onClick={() => window.location.assign('/')
                    }>O nas</Button>
                    <Button variant={"ghost"} className='text-sm tracking-tight' onClick={() => window.location.assign('/price/smarthome')}>Cennik</Button>
                    <Button variant={"ghost"} className='text-sm tracking-tight' onClick={() => window.location.assign('/contact')}>Kontakt</Button>
                </div>
                <div className="self-center flex justify-end w-full sm:hidden">
                    <Hamburger onToggle={setIsToggled} />
                </div>
            </section>
        </main>
        {isToggled && <div className="flex justify-center flex-col sm:hidden bg-[#CFC0FF]">
            <Button variant={"ghost"} className="hover:bg-[#8F6CFF]" onClick={() => window.location.assign('/')}>O nas</Button>
            <Button variant={"ghost"} className="hover:bg-[#8F6CFF]" onClick={() => window.location.assign('/price/smart')}>Cennik</Button>
            <Button variant={"ghost"} className="hover:bg-[#8F6CFF]" onClick={() => window.location.assign('/contact')}>Kontakt</Button>
        </div>}
        <Outlet />
    </>)
}
