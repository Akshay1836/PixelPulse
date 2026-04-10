'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MasonryGallery({ images: imageUrls }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageDetails = imageUrls.map(url => {
    const detail = PlaceHolderImages.find(p => p.imageUrl === url);
    if (!detail) {
      return null;
    }
    
    // Extract width and height from picsum URL e.g. https://picsum.photos/seed/1/600/400
    const urlParts = detail.imageUrl.split('/');
    const originalWidth = parseInt(urlParts[urlParts.length - 2], 10);
    const originalHeight = parseInt(urlParts[urlParts.length - 1], 10);

    return {
      ...detail,
      width: originalWidth,
      height: originalHeight
    };
  });

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imageDetails.map((imgDetail, idx) =>
          imgDetail && imgDetail.width && imgDetail.height ? (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(imgDetail.imageUrl)}
              className="overflow-hidden rounded-lg break-inside-avoid cursor-pointer group"
            >
                <Image
                  src={imgDetail.imageUrl}
                  alt={imgDetail.description}
                  width={500}
                  height={(500 / imgDetail.width) * imgDetail.height}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={imgDetail.imageHint}
                />
            </div>
          ) : null
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 border-0">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
