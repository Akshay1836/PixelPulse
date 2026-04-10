'use client';

import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function MasonryGallery({ images: imageUrls }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageDetails = imageUrls.map(url => PlaceHolderImages.find(p => p.imageUrl === url));

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imageDetails.map((imgDetail, idx) =>
          imgDetail ? (
            <DialogTrigger asChild key={idx} onClick={() => setSelectedImage(imgDetail.imageUrl)}>
              <div className="overflow-hidden rounded-lg break-inside-avoid cursor-pointer group">
                <Image
                  src={imgDetail.imageUrl}
                  alt={imgDetail.description}
                  width={500}
                  height={Math.floor(Math.random() * (800 - 400 + 1)) + 400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={imgDetail.imageHint}
                />
              </div>
            </DialogTrigger>
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
