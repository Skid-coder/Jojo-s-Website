import { useState } from 'react';

// Renders an image with a graceful placeholder shown only when the
// image is missing or fails to load.
export default function Photo({
  src,
  alt = '',
  placeholder,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  loading = 'lazy',
}) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'

  return (
    <div className={`relative ${className}`}>
      {src && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`${imgClassName} transition-opacity duration-300 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
      {status !== 'loaded' && placeholder && (
        <div className="absolute inset-0 flex items-center justify-center text-brand-700/60 text-sm font-semibold pointer-events-none select-none px-6 text-center">
          {placeholder}
        </div>
      )}
    </div>
  );
}
