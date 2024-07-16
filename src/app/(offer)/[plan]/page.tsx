'use client'
import { SelectedCardOption } from '@/components/selected-card';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation'

export type dataRes = {
    full_name: string;
}

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
    return <SelectedCardOption data={data} />
}