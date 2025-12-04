import React, { useCallback, useState } from 'react';
import { cn } from '../../lib/utils';

interface FileUploadProps {
  id: string;
  label?: string;
  onChange: (file: File | null) => void;
  accept?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ id, label, onChange, accept }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
      onChange(file);
    }
  }, [onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      onChange(file);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-gray-300 text-sm font-medium">
          {label}
        </label>
      )}
      <label
        htmlFor={id}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
          isDragging 
            ? "border-primary bg-primary/10" 
            : "border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-gray-500"
        )}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
          <span className="material-symbols-outlined text-gray-400 text-3xl mb-3">
            cloud_upload
          </span>
          {fileName ? (
            <p className="text-sm text-primary font-medium truncate px-4">{fileName}</p>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold text-white">Nhấn để tải lên</span> hoặc kéo thả
              </p>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX (Tối đa 5MB)</p>
            </>
          )}
        </div>
        <input 
          id={id} 
          type="file" 
          className="hidden" 
          accept={accept}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};