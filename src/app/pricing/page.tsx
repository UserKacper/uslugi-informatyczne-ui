'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const PricingPage = () => {
    const [selectedOption, setSelectedOption] = useState('free')
    console.log(selectedOption);

    const plans = [
        { name: 'SEO', },
        { name: 'Strony Statyczne', },
        { name: 'Oprogramowanie', },
        { name: 'Aplikacje Mobilne', }
    ]

    return (<>
        <section className='w-full h-[100px]'>
            <div className='self-center flex justify-evenly h-full bg-accent text-accent-foreground'>
                {plans.map(plan => (
                    <Button
                        variant={"outline"}
                        key={plan.name}
                        className={`${selectedOption === plan.name ? 'w-full h-full self-center rounded-none border-none -translate-y-5 duration-200 transition-transform rounded-t-md bg-accent text-accent-foreground' : 'w-full h-full self-center rounded-none border-none'} `}
                        onClick={() => setSelectedOption(plan.name)}
                    >
                        {plan.name}
                    </Button>
                ))}
            </div>
        </section>
        <div className='h-screen bg-purple-400'>where am i</div>
    </>)
}

export default PricingPage
