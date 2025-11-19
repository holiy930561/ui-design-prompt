import React from 'react';
import { X, Zap, Star, ShieldCheck, AlertCircle, Brain } from 'lucide-react';
import { Language, AIModel } from '../types';
import { UI_TEXT } from '../constants';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currentModel: AIModel;
  onModelChange: (model: AIModel) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  currentModel,
  onModelChange
}) => {
  if (!isOpen) return null;

  const hasApiKey = !!process.env.API_KEY;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-900">{UI_TEXT.settingsTitle[language]}</h3>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* API Key Status */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              {UI_TEXT.apiKeyLabel[language]}
            </label>
            <div className={`
              flex items-center gap-3 px-4 py-3 rounded-xl border 
              ${hasApiKey 
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                : 'bg-red-50 border-red-200 text-red-800'}
            `}>
              {hasApiKey ? (
                <ShieldCheck className="w-5 h-5 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <span className="text-sm font-medium">
                {hasApiKey ? UI_TEXT.apiKeyConnected[language] : UI_TEXT.apiKeyMissing[language]}
              </span>
            </div>
          </div>

          {/* Model Selection */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              {UI_TEXT.modelLabel[language]}
            </label>
            
            <div className="grid gap-3">
              {/* FLASH */}
              <button
                onClick={() => onModelChange('gemini-2.5-flash')}
                className={`
                  relative flex items-center gap-4 px-4 py-3 rounded-xl border transition-all text-left
                  ${currentModel === 'gemini-2.5-flash' 
                    ? 'bg-violet-50 border-violet-500 ring-1 ring-violet-500 shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-violet-300 hover:bg-slate-50'}
                `}
              >
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                  ${currentModel === 'gemini-2.5-flash' ? 'bg-violet-100 text-violet-600' : 'bg-slate-100 text-slate-500'}
                `}>
                  <Zap size={20} fill={currentModel === 'gemini-2.5-flash' ? "currentColor" : "none"} />
                </div>
                <div>
                  <div className={`text-sm font-bold ${currentModel === 'gemini-2.5-flash' ? 'text-violet-900' : 'text-slate-900'}`}>
                    {language === 'en' ? 'Gemini 2.5 Flash' : 'Gemini 2.5 Flash (标准)'}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {language === 'en' ? 'Fastest response, good for most tasks' : '响应最快，适合大多数任务'}
                  </div>
                </div>
                {currentModel === 'gemini-2.5-flash' && (
                  <div className="absolute right-4 w-2 h-2 rounded-full bg-violet-500"></div>
                )}
              </button>

              {/* 2.5 PRO */}
              <button
                onClick={() => onModelChange('gemini-2.5-pro')}
                className={`
                  relative flex items-center gap-4 px-4 py-3 rounded-xl border transition-all text-left
                  ${currentModel === 'gemini-2.5-pro' 
                    ? 'bg-violet-50 border-violet-500 ring-1 ring-violet-500 shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-violet-300 hover:bg-slate-50'}
                `}
              >
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                  ${currentModel === 'gemini-2.5-pro' ? 'bg-violet-100 text-violet-600' : 'bg-slate-100 text-slate-500'}
                `}>
                  <Brain size={20} strokeWidth={2} />
                </div>
                <div>
                  <div className={`text-sm font-bold ${currentModel === 'gemini-2.5-pro' ? 'text-violet-900' : 'text-slate-900'}`}>
                    {language === 'en' ? 'Gemini 2.5 Pro' : 'Gemini 2.5 Pro (进阶)'}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {language === 'en' ? 'Balanced performance & reasoning' : '性能均衡，适合复杂指令'}
                  </div>
                </div>
                {currentModel === 'gemini-2.5-pro' && (
                  <div className="absolute right-4 w-2 h-2 rounded-full bg-violet-500"></div>
                )}
              </button>

              {/* 3 PRO */}
              <button
                onClick={() => onModelChange('gemini-3-pro-preview')}
                className={`
                  relative flex items-center gap-4 px-4 py-3 rounded-xl border transition-all text-left
                  ${currentModel === 'gemini-3-pro-preview' 
                    ? 'bg-violet-50 border-violet-500 ring-1 ring-violet-500 shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-violet-300 hover:bg-slate-50'}
                `}
              >
                <div className={`
                  w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                  ${currentModel === 'gemini-3-pro-preview' ? 'bg-violet-100 text-violet-600' : 'bg-slate-100 text-slate-500'}
                `}>
                  <Star size={20} fill={currentModel === 'gemini-3-pro-preview' ? "currentColor" : "none"} />
                </div>
                <div>
                  <div className={`text-sm font-bold ${currentModel === 'gemini-3-pro-preview' ? 'text-violet-900' : 'text-slate-900'}`}>
                    {language === 'en' ? 'Gemini 3 Pro' : 'Gemini 3 Pro (专业)'}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {language === 'en' ? 'High intelligence, complex reasoning' : '高智商模型，适合复杂推理'}
                  </div>
                </div>
                {currentModel === 'gemini-3-pro-preview' && (
                  <div className="absolute right-4 w-2 h-2 rounded-full bg-violet-500"></div>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
          >
            {UI_TEXT.close[language]}
          </button>
        </div>
      </div>
    </div>
  );
};