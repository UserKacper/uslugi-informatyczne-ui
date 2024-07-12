'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const ServicesOptions = ({ query }: { query: string | null }) => {
  const [selectedOption, setSelectedOption] = useState<null | string>(query)
  const { push } = useRouter()

  const plans = [
    { name: 'SEO', id: 0, route: "seo" },
    { name: 'Strony Statyczne', id: 1, route: "static" },
    { name: 'Oprogramowanie', id: 2, route: "software" },
    { name: 'Aplikacje Mobilne', id: 3, route: "mobile" }
  ]

  useEffect(() => {
    setSelectedOption(query)
  }, [query])

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
              push(`/pricing?plan=${plan.route}`)
            }} >
            {plan.name}
          </Button>
        ))}
      </div>
    </section>
  </>)
}

export default ServicesOptions