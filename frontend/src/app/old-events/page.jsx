'use client';

import { useRouter } from 'next/navigation';
import FullGalleryPage from '@/components/FullGalleryPage';

export default function OldEventsPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('should_restore_scroll', 'true');
    }
    if (typeof window !== 'undefined' && window.history.length > 2) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return <FullGalleryPage onBackToHome={handleBackToHome} />;
}
