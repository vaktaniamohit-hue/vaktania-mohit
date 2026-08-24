import React, { useState } from 'react';
import { X, Ruler, CheckCircle, HelpCircle } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const SizeGuideModal: React.FC = () => {
  const { isSizeGuideOpen, closeSizeGuide } = useShop();
  const [selectedGenderTab, setSelectedGenderTab] = useState<'Men' | 'Women' | 'Kids'>('Men');
  const [footLengthCm, setFootLengthCm] = useState<number>(26.5);

  if (!isSizeGuideOpen) return null;

  const menSizes = [
    { uk: 6, us: 7, eu: 40, cm: 25.0, in: 9.8 },
    { uk: 7, us: 8, eu: 41, cm: 25.8, in: 10.1 },
    { uk: 8, us: 9, eu: 42.5, cm: 26.5, in: 10.4 },
    { uk: 9, us: 10, eu: 44, cm: 27.5, in: 10.8 },
    { uk: 10, us: 11, eu: 45, cm: 28.3, in: 11.1 },
    { uk: 11, us: 12, eu: 46, cm: 29.2, in: 11.5 },
    { uk: 12, us: 13, eu: 47.5, cm: 30.0, in: 11.8 }
  ];

  const womenSizes = [
    { uk: 4, us: 5.5, eu: 36, cm: 22.5, in: 8.9 },
    { uk: 5, us: 6.5, eu: 37.5, cm: 23.5, in: 9.2 },
    { uk: 6, us: 7.5, eu: 38.5, cm: 24.5, in: 9.6 },
    { uk: 7, us: 8.5, eu: 40, cm: 25.5, in: 10.0 },
    { uk: 8, us: 9.5, eu: 41.5, cm: 26.5, in: 10.4 },
    { uk: 9, us: 10.5, eu: 42.5, cm: 27.5, in: 10.8 }
  ];

  const kidsSizes = [
    { uk: 5, us: 5.5, eu: 22, cm: 13.5, in: 5.3 },
    { uk: 6, us: 6.5, eu: 23.5, cm: 14.5, in: 5.7 },
    { uk: 7, us: 7.5, eu: 25, cm: 15.5, in: 6.1 },
    { uk: 8, us: 8.5, eu: 26, cm: 16.5, in: 6.5 }
  ];

  const activeTable = 
    selectedGenderTab === 'Men' 
      ? menSizes 
      : selectedGenderTab === 'Women' 
      ? womenSizes 
      : kidsSizes;

  // Calculate recommended size from cm
  const matchedSize = activeTable.reduce((prev, curr) => {
    return Math.abs(curr.cm - footLengthCm) < Math.abs(prev.cm - footLengthCm) ? curr : prev;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-black">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-black flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-black" />
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              VOLT FOOTWEAR SIZE GUIDE
            </h3>
          </div>
          <button
            onClick={closeSizeGuide}
            className="p-1.5 text-black hover:bg-black hover:text-white border border-black transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Sizing Note for India */}
          <div className="bg-zinc-50 p-4 border border-black flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-black shrink-0 mt-0.5" />
            <div className="text-xs text-black space-y-1">
              <p className="font-black uppercase tracking-wider">India Standard Sizing Note</p>
              <p className="text-zinc-600">In India, shoe sizes follow standard UK sizing conventions. If you usually wear UK 8, select UK 8 on VOLT. If you are between two sizes or have wider feet, we recommend sizing up half a size.</p>
            </div>
          </div>

          {/* Interactive Calculator */}
          <div className="p-4 bg-black text-white border border-black space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest text-[#ccff00]">
                RECOMMENDED SIZE CALCULATOR
              </span>
              <span className="text-xs font-bold text-zinc-300">
                Foot Length: <span className="text-white text-sm font-black">{footLengthCm} cm</span>
              </span>
            </div>

            <input
              type="range"
              min={selectedGenderTab === 'Kids' ? 12 : 21}
              max={selectedGenderTab === 'Kids' ? 18 : 31}
              step="0.5"
              value={footLengthCm}
              onChange={(e) => setFootLengthCm(parseFloat(e.target.value))}
              className="w-full accent-[#ccff00] cursor-pointer"
            />

            <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Your Recommended VOLT Size:</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black italic tracking-wider text-[#ccff00]">
                  UK {matchedSize.uk}
                </span>
                <span className="text-xs text-zinc-400 font-bold">
                  (US {matchedSize.us} / EU {matchedSize.eu})
                </span>
              </div>
            </div>
          </div>

          {/* Gender Selector Tabs */}
          <div className="flex border-b border-black">
            {(['Men', 'Women', 'Kids'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedGenderTab(tab)}
                className={`flex-1 py-2.5 text-xs font-black uppercase tracking-widest transition-colors border-b-2 cursor-pointer ${
                  selectedGenderTab === tab
                    ? 'border-black bg-black text-white'
                    : 'border-transparent text-zinc-500 hover:text-black'
                }`}
              >
                {tab}'s Chart
              </button>
            ))}
          </div>

          {/* Conversion Table */}
          <div className="overflow-x-auto border border-black">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-black text-white font-black uppercase text-[10px] tracking-widest border-b border-black">
                  <th className="py-2.5 px-3">UK / India</th>
                  <th className="py-2.5 px-3">US</th>
                  <th className="py-2.5 px-3">EU</th>
                  <th className="py-2.5 px-3">Heel-to-Toe (cm)</th>
                  <th className="py-2.5 px-3">Inches</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/20">
                {activeTable.map((row) => {
                  const isMatch = matchedSize.uk === row.uk;
                  return (
                    <tr
                      key={row.uk}
                      className={`transition-colors ${
                        isMatch ? 'bg-[#ccff00]/20 font-black text-black' : 'text-zinc-700 hover:bg-zinc-50'
                      }`}
                    >
                      <td className="py-2.5 px-3 flex items-center gap-1.5 font-bold">
                        <span>UK {row.uk}</span>
                        {isMatch && <span className="w-2 h-2 bg-black" />}
                      </td>
                      <td className="py-2.5 px-3">{row.us}</td>
                      <td className="py-2.5 px-3">{row.eu}</td>
                      <td className="py-2.5 px-3">{row.cm} cm</td>
                      <td className="py-2.5 px-3">{row.in}"</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Measuring Instructions */}
          <div className="space-y-3 pt-2 border-t border-black">
            <h4 className="text-xs font-black uppercase tracking-widest text-black">
              HOW TO MEASURE YOUR FOOT
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-black">
              <div className="p-3 border border-black space-y-1">
                <span className="font-black uppercase text-[10px] tracking-wider text-black block">1. Step on Paper</span>
                <p className="text-zinc-600">Stand up straight on a sheet of blank paper placed flat on a hard floor.</p>
              </div>
              <div className="p-3 border border-black space-y-1">
                <span className="font-black uppercase text-[10px] tracking-wider text-black block">2. Mark Extremities</span>
                <p className="text-zinc-600">Mark the furthest tip of your big toe and the back contour of your heel.</p>
              </div>
              <div className="p-3 border border-black space-y-1">
                <span className="font-black uppercase text-[10px] tracking-wider text-black block">3. Measure Length</span>
                <p className="text-zinc-600">Use a ruler to measure the distance in cm and compare against our chart.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white border-t border-black flex justify-end">
          <button
            onClick={closeSizeGuide}
            className="px-5 py-2.5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer border border-black"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
