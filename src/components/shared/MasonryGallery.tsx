'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export default function MasonryGallery({ images: imageUrls }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  const imageDetails = imageUrls.map(url => {
    return PlaceHolderImages.find(p => p.imageUrl === url);
  }).filter((p): p is ImagePlaceholder => !!p);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imageDetails.map((imgDetail, idx) =>
          imgDetail && imgDetail.width && imgDetail.height ? (
            <div 
              key={idx} 
              onClick={() => setSelectedImage(imgDetail)}
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
          {selectedImage && selectedImage.width && selectedImage.height && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedImage.description}</DialogTitle>
                <DialogDescription>A larger, full-screen view of the image: {selectedImage.description}.</DialogDescription>
              </DialogHeader>
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.description}
                width={1600}
                height={(1600 / selectedImage.width) * selectedImage.height}
                className="w-full h-auto object-contain rounded-lg"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
