
import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../ui/button';

export const PlanSelection = () => {
    const [selectedOption, setSelectedOption] = useState<null | string>()
    const navigate = useNavigate();
    const plans = [
        { name: 'Smart Home', id: 0, route: "smarthome" },
        { name: 'Strony Statyczne', id: 1, route: "static" },
        { name: 'Strony Dynamiczne', id: 3, route: "dynamic" },
        { name: 'Oprogramowanie', id: 2, route: "software" }
    ]

    const selectedPath = useParams()

    
    useEffect(() => {
        setSelectedOption(selectedPath.plan)
    }, [selectedPath])

    return (<>
        <section className='w-full sm:h-[100px]'>
            <div className='self-center flex flex-col sm:flex-row justify-evenly h-full'>
                {plans.map(plan => (
                    <Button
                        variant={"outline"}
                        key={plan.name}
                        className={`${selectedOption === plan.route ? 'w-full h-full self-center rounded-none border-none max-sm:scale-110 sm:-translate-y-5 duration-500 transition-transform rounded-t-md bg-accent text-accent-foreground' : 'flex justify-center w-full h-full self-center rounded-none border-none'} `}
                        onClick={() => {
                            setSelectedOption(plan.route)
                            navigate(`/price/${plan.route}`)
                        }} >
                        {plan.name}
                    </Button>
                ))}
            </div>
        </section>
        <Outlet />
    </>)
}