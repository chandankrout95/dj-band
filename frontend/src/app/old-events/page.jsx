'use client';

import { useRouter } from 'next/navigation';
import FullGalleryPage from '@/components/FullGalleryPage';

export default function OldEventsPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/#gallery');
  };

  return <FullGalleryPage onBackToHome={handleBackToHome} />;
}
