import GoogleCallback from '@/components/GoogleCallback/GoogleCallback';
import { Suspense } from 'react';

export default function Google() {
    return (
        <Suspense>
            <GoogleCallback />
        </Suspense>
    );
} 