import FaceBookCallback from '@/components/FaceBookCallback/FaceBookCallback';
import { Suspense } from 'react';

export default function FaceBook() {
    return (
        <Suspense>
            <FaceBookCallback />
        </Suspense>
    );
} 