import React from 'react';
import { MCQResult, User, SystemSettings } from '../types';
import { X, CheckCircle, XCircle, Clock, Award, Share2 } from 'lucide-react';

interface Props {
  result: MCQResult;
  user: User;
  settings?: SystemSettings;
  onClose: () => void;
}

export const MarksheetCard: React.FC<Props> = ({ result, user, settings, onClose }) => {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const appName = settings?.appName || 'Ideal Inspiration Classes';
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
        <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative border-4 border-white">
            {/* CLOSE BUTTON */}
            <button onClick={onClose} className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full">
                <X size={20} />
            </button>

            {/* CARD CONTENT - DESIGNED TO LOOK LIKE A PHYSICAL CARD */}
            <div className="bg-slate-50 relative pb-6">
                {/* HEADER */}
                <div className="bg-slate-900 text-white p-6 text-center rounded-b-[2rem] shadow-lg mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <h2 className="text-xl font-black uppercase tracking-wider relative z-10">{appName}</h2>
                    <p className="text-[10px] text-slate-400 font-bold tracking-[0.2em] mt-1 relative z-10">RESULT CARD</p>
                    <div className="mt-4 flex justify-center">
                        <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center font-black text-2xl border-4 shadow-xl relative z-10 ${percentage >= 50 ? 'text-green-600 border-green-500' : 'text-red-600 border-red-500'}`}>
                            {percentage}%
                        </div>
                    </div>
                </div>

                {/* STUDENT INFO */}
                <div className="text-center px-6 mb-6">
                    <h3 className="text-2xl font-black text-slate-800">{user.name}</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase">{user.id}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">
                        {result.subjectName} • {result.chapterTitle}
                    </div>
                </div>

                {/* STATS GRID */}
                <div className="grid grid-cols-2 gap-3 px-6 mb-6">
                    <div className="bg-green-50 border border-green-200 p-3 rounded-xl flex flex-col items-center">
                        <CheckCircle size={20} className="text-green-600 mb-1" />
                        <span className="text-2xl font-black text-green-700">{result.correctCount}</span>
                        <span className="text-[10px] font-bold text-green-600 uppercase">Right</span>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-3 rounded-xl flex flex-col items-center">
                        <XCircle size={20} className="text-red-600 mb-1" />
                        <span className="text-2xl font-black text-red-700">{result.wrongCount}</span>
                        <span className="text-[10px] font-bold text-red-600 uppercase">Wrong</span>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-3 rounded-xl flex flex-col items-center">
                        <Award size={20} className="text-blue-600 mb-1" />
                        <span className="text-2xl font-black text-blue-700">{result.score}</span>
                        <span className="text-[10px] font-bold text-blue-600 uppercase">Score</span>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 p-3 rounded-xl flex flex-col items-center">
                        <Clock size={20} className="text-purple-600 mb-1" />
                        <span className="text-2xl font-black text-purple-700">{result.totalQuestions}</span>
                        <span className="text-[10px] font-bold text-purple-600 uppercase">Attempted</span>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="text-center">
                    <p className="text-[10px] text-slate-400 font-bold mb-1">
                        Date: {new Date(result.date).toLocaleDateString()}
                    </p>
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                        Developed by Nadim
                    </p>
                </div>
            </div>
            
            {/* ACTION BAR */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                <button onClick={onClose} className="flex-1 bg-slate-100 text-slate-600 py-3 rounded-xl font-bold text-sm">Close</button>
                <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                    <Share2 size={16} /> Share Card
                </button>
            </div>
        </div>
    </div>
  );
};
