import React, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const NPRogress = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0); // State untuk mengontrol progress bar
  const router = useRouter();

  useEffect(() => {
    let timer: any;

    const handleStart = () => {
      setShow(true);
      setProgress(10); // Mulai progress dari 10%

      // Mengupdate lebar progress bar setiap 100ms
      timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress < 90) {
            return oldProgress + 10; // Naikkan lebar progress sampai 90%
          }
          return oldProgress;
        });
      }, 300);
    };

    const handleComplete = () => {
      setProgress(100); // Set progress ke 100% saat halaman sudah selesai dimuat
      setTimeout(() => {
        setShow(false);
      }, 500); // Delay sedikit untuk menunjukkan progress 100% selesai
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      clearInterval(timer);
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    show && (
      <div
        style={{
          background: '#29d',
          height: 4,
          left: 0,
          position: 'fixed',
          top: 0,
          transition: 'width 0.3s ease',
          width: `${progress}%`,
          zIndex: 99999999, // Transition animasi smooth
        }}
      />
    )
  );
};

export default NPRogress;
