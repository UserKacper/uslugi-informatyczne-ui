'use client'
import { useSearchParams } from 'next/navigation'

export default function Page() {
    const query = useSearchParams()
    const param = query.get('plan');
    
    return <p>Post: {param}</p>
}