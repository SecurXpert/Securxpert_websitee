import React from 'react';
import { Calendar, User, Eye, CheckCircle, Clock, FileText } from 'lucide-react';
import { Button } from './ui/Button';

export function PublishingPanel({ blogData, onSaveDraft, onPreview, onPublish }) {
  const stats = [
    { icon: Eye, label: 'Views', value: '0' },
    { icon: FileText, label: 'Read Time', value: `${blogData?.readTime || 0} min` },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
        <h3 className="font-semibold text-[#1e293b] mb-4">Publishing</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
              <User className="w-4 h-4 text-[#2B0A5A]" />
            </div>
            <div>
              <p className="text-[#64748b]">Author</p>
              <p className="font-medium text-[#1e293b]">{blogData?.authorName || 'Admin'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#2B0A5A]" />
            </div>
            <div>
              <p className="text-[#64748b]">Publish Date</p>
              <p className="font-medium text-[#1e293b]">{blogData?.publishDate || new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#2B0A5A]" />
            </div>
            <div>
              <p className="text-[#64748b]">Last Updated</p>
              <p className="font-medium text-[#1e293b]">Just now</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#e2e8f0]">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className={`w-5 h-5 text-[#cbd5e1]`} />
              <span className={`text-sm font-medium text-[#64748b]`}>
                Draft
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#e2e8f0] rounded-lg p-6">
        <h3 className="font-semibold text-[#1e293b] mb-4">Statistics</h3>
        <div className="space-y-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-[#2B0A5A]" />
                </div>
                <span className="text-sm text-[#64748b]">{stat.label}</span>
              </div>
              <span className="font-semibold text-[#1e293b]">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-6 space-y-3">
        <Button variant="outline" className="w-full" onClick={onSaveDraft}>
          Save Draft
        </Button>
        <Button variant="secondary" className="w-full" onClick={onPreview}>
          Preview
        </Button>
        <Button variant="primary" className="w-full" onClick={onPublish}>
          Publish Blog
        </Button>
      </div>
    </div>
  );
}
