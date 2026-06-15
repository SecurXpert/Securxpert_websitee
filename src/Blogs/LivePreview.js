import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Eye } from 'lucide-react';
import { cn } from '../lib/utils';

export function LivePreview({ blogData }) {
  const [device, setDevice] = useState('desktop');

  const devices = [
    { id: 'desktop', icon: Monitor, width: '100%' },
    { id: 'tablet', icon: Tablet, width: '768px' },
    { id: 'mobile', icon: Smartphone, width: '375px' },
  ];

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden">
      <div className="p-4 border-b border-[#e2e8f0] bg-[#F8FAFC]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#2B0A5A]" />
            <h3 className="font-semibold text-[#1e293b]">Live Preview</h3>
          </div>
          <div className="flex items-center gap-1 bg-white rounded-lg p-1">
            {devices.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDevice(d.id)}
                className={cn(
                  'p-2 rounded transition-colors',
                  device === d.id
                    ? 'bg-[#2B0A5A] text-white'
                    : 'text-[#64748b] hover:bg-[#F8FAFC]'
                )}
              >
                <d.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#f1f5f9] min-h-[600px] overflow-auto">
        <div
          className="bg-white mx-auto transition-all duration-300 shadow-lg relative"
          style={{ width: devices.find(d => d.id === device)?.width, minHeight: '500px' }}
        >
          {/* Hero Preview */}
          <div 
            className="w-full h-48 md:h-64 flex flex-col items-center justify-center p-6 text-center text-white"
            style={{ backgroundColor: blogData?.gradientBg || '#3F5BF6' }}
          >
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{blogData?.heroTitle || 'Blog Hero Title'}</h1>
            <p className="text-sm md:text-base opacity-90 max-w-2xl">{blogData?.heroSubtitle || 'Hero subtitle'}</p>
          </div>

          <div className="p-8">
            <div className="mb-8 border-b pb-6">
              <h1 className="text-3xl font-bold text-[#2B0A5A] mb-4">
                {blogData?.title || 'Blog Title'}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-[#64748b] mb-4">
                <span className="bg-[#F8FAFC] px-3 py-1 rounded-full text-[#5A73FF] font-medium">{blogData?.category || 'Category'}</span>
                <span>{blogData?.publishDate || 'Date'}</span>
                <span>•</span>
                <span>{blogData?.readTime || '5'} min read</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="font-semibold text-[#1e293b]">{blogData?.authorName || 'Author Name'}</p>
                  <p className="text-xs text-[#64748b]">{blogData?.authorDesignation || 'Designation'}</p>
                </div>
              </div>
            </div>

            {blogData?.shortDescription && (
              <div className="mb-6 text-xl text-gray-600 font-medium leading-relaxed">
                {blogData.shortDescription}
              </div>
            )}

            {blogData?.contentBlocks?.map((block, idx) => (
              <div key={idx} className="mb-6 text-gray-700 leading-relaxed whitespace-pre-wrap">
                {block.content || 'Content block placeholder...'}
              </div>
            ))}
            
            {blogData?.tags?.length > 0 && (
              <div className="mt-8 pt-6 border-t">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {blogData.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm">#{tag}</span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
