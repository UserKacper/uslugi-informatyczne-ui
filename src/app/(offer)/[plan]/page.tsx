'use client'
import { ServicePricingCard } from '@/components/service-pricing-card';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation'

export type dataRes = {
    full_name: string;
    pricing_min: number;
    pricing_currency: string;
    panel_admin_desc: string;
    mobile_access_control: string;
    is_supported: boolean;
    help_with_integration: string;
    documentation: string;
    emergency:string;
}

export const DATA_MOCK: dataRes[] = [
    {
        full_name: "Pakiet Full",
        pricing_min: 20000,
        panel_admin_desc: "Aplikacja Internetowa do zarzadzania rolami oraz dodawanie nowych urzadzen",
        mobile_access_control: "Aplikacja Mobilna umozliwiajaca sterowanie zdalne",
        pricing_currency: "PLN",
        is_supported: true,
        help_with_integration: "pelna pomoc w wdrozeniu systemu do twojego domu",
        documentation: "posiadamy dokumentacje pomagajaca w sprawnym korzystaniu z systemu",
        emergency:"zabezpieczamy na wypadek naglej starty internetu/pradu"
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