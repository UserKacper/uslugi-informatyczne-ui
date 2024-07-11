'use client'
import { useState } from "react"
import { Button } from "./ui/button"
import Hamburger from "hamburger-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const NavigationBar = () => {
    const [isToggled, setIsToggled] = useState<Boolean>(false)

    const { push } = useRouter()

    return (<>
        <main className="h-[80px] sm:h-[110px] bg-slate-300">
            <section className="flex h-full w-full p-5 xl:justify-evenly sm:justify-between">
                <div className="self-center">
                    <Image src={''} alt="Company Logo" height={100} width={100} />
                </div>
                <div className="self-center hidden sm:flex gap-3">
                    <Button variant={"ghost"} onClick={() => push("/")}>O nas</Button>
                    <Button variant={"ghost"} onClick={() => push("/pricing")}>Cennik</Button>
                    <Button variant={"ghost"} onClick={() => push("/contact")}>Kontakt</Button>
                </div>
                <div className="self-center flex justify-end w-full sm:hidden">
                    <Hamburger onToggle={setIsToggled} />
                </div>
            </section>
        </main>
        {isToggled && <div className="flex justify-center flex-col sm:hidden">
            <Button variant={"ghost"}>Kontakt</Button>
            <Button variant={"ghost"}>Cennik</Button>
            <Button variant={"ghost"}>Kontakt</Button>
        </div>}
    </>)
}
