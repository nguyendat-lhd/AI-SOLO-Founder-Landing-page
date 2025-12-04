import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ className, label, error, id, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-gray-300 text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "flex h-12 w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2 text-base text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
          error && "border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ className, label, error, id, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-gray-300 text-sm font-medium">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-3 text-base text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-y",
          error && "border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
};