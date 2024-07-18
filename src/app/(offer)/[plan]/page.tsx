'use client'
import { ServicePricingCard } from '@/components/service-pricing-card';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation'

export type dataRes = {
    full_name: string;
    pricing_min: number;
    pricing_currency: string;

}

export const DATA_MOCK: dataRes[] = [
    {
        full_name: "Pakiet dom",
        pricing_min: 5000,
        pricing_currency: "$"

    },
    {
        full_name: "Pakiet okna",
        pricing_min: 8000,
        pricing_currency: "$"
    },
    {
        full_name: "Pakiet Home",
        pricing_min: 15000,
        pricing_currency: "$"
    }
]
export default function Page() {
    const query = useSearchParams()
    const param = query.get('plan');
    const { error, isLoading, data, isError } = useQuery({
        queryKey: ['planData'],
        queryFn: async () => {
            // const res = await fetch("")
            // return await res.json();
            // TODO create api to send request to recieve card data
        }
    });
    return (
        <>
            <ServicePricingCard SelectedOptionData={DATA_MOCK} />
        </>
    )
}