import React, { useState, useEffect } from 'react';
import { ArrowLeft, Gift, X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const ImageWithFallback = ({ src, alt, className, onClick }: { src: string, alt: string, className?: string, onClick?: () => void }) => {
  const [error, setError] = useState(false);
  
  // Extract filename for fallback display
  const filename = src.split('/').pop()?.split('.')[0] || 'Image';

  if (error) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-zinc-100 text-zinc-400 p-8 text-center aspect-square ${className}`}
        onClick={onClick}
      >
        <ImageOff className="w-8 h-8 mb-2 opacity-50" />
        <span className="text-xs font-medium px-2 break-all">{filename}</span>
        <span className="text-[10px] opacity-70 mt-1">無法預覽</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
      onClick={onClick}
    />
  );
};

const SortableImage = ({ id, imageUrl, index, onClick }: { id: string, imageUrl: string, index: number, onClick: () => void }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 1,
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`group cursor-pointer break-inside-avoid relative h-full ${isDragging ? 'shadow-2xl scale-105' : ''}`}
      {...attributes}
      {...listeners}
    >
      <div 
        className="relative overflow-hidden bg-zinc-50 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow h-full flex items-center justify-center"
      >
        <div 
          className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/5 transition-colors z-10 duration-500 cursor-pointer"
          onClick={(e) => {
             if (!isDragging) {
               onClick();
             }
          }}
        ></div>
        <ImageWithFallback 
          src={imageUrl} 
          alt={`Corporate Gift ${index + 1}`}
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 pointer-events-none"
        />
      </div>
    </div>
  );
};

const INITIAL_GIFTS = [
  '/厚片壓克力鑰匙圈 (2).jpg',
  '/厚片壓克力鑰匙圈 (3).jpg',
  '/扛夢山丘_帽T與短T組.png',
  '/扛夢山丘_紙膠帶A2.jpg',
  '/扛夢山丘_紙膠帶A3.jpg',
  '/扛夢木片鑰匙圈套組A01.png',
  '/桃園象展_新春織帶鑰匙圈.png',
  '/桃園象展_零錢包.png',
  '/海小同樂會_入場手環.png',
  '/海小家長會_相框紙.png',
  '/象棋協會_吸水杯墊.jpg',
  '/象棋協會_抱枕.png',
  '/漁夫帽PO_C.jpg',
  '/聯名_咖啡單包.png',
  '/NZXT_IP皮革證件套.png',
  '/NZXT_IP抱枕.png',
  '/NZXT_IP長T設計.jpg',
  '/NZXT_IP紙袋.jpg',
  '/NZXT_IP造型吸鐵.png',
  '/NZXT_品牌紙袋.jpg',
  '/WAKUWAKU小怪獸_厚片壓克力鑰匙圈.png',
  '/台中活動帽.jpg',
  '/布包PO_A.jpg',
  '/布包PO_B.jpg',
  '/皮革杯墊_Q1.jpg',
  '/皮革杯墊_Q2.jpg',
  '/扛夢山丘_小籠貓絨毛毯02.png',
  '/扛夢山丘_帆布包_奶茶.jpg',
  '/扛夢山丘_帆布包_栗棕.jpg',
  '/扛夢山丘_帆布包_藕灰.jpg',
  '/扛夢山丘_吸水杯墊套組.png',
  '/扛夢山丘_紙膠帶A1.jpg',
  '/WAKUWAKU小怪獸_絨毛胸章.png'
].sort((a, b) => b.localeCompare(a, 'zh-TW')).map((url, index) => ({ id: `gift-${index}`, url }));

const Gifts: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [giftImages, setGiftImages] = useState(INITIAL_GIFTS);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setGiftImages((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : giftImages.length - 1));
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev! < giftImages.length - 1 ? prev! + 1 : 0));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, giftImages.length]);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : giftImages.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! < giftImages.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-orange-500" />
              <p className="text-gradient inline-block text-xs font-black tracking-[0.5em] uppercase">禮贈品</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter uppercase">
              CORPORATE GIFTS
            </h1>
            <p className="text-sm text-zinc-500 font-medium">💡 提示：您可以拖曳圖片來重新排序</p>
          </div>
          <Link 
            to="/" 
            className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors uppercase group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={giftImages.map(img => img.id)}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {giftImages.map((image, index) => (
                <SortableImage
                  key={image.id}
                  id={image.id}
                  imageUrl={image.url}
                  index={index}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        <div className="mt-16 md:hidden">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors uppercase py-4 border border-zinc-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-zinc-900/90 backdrop-blur-sm" onClick={() => setSelectedIndex(null)}>
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-[60]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-[60]"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <ImageWithFallback 
            src={giftImages[selectedIndex].url} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl relative z-50"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />
          
          <button 
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors z-[60]"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gifts;