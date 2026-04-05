'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle2, XCircle, ChevronRight, Info, AlertTriangle } from 'lucide-react';

export default function AdmissionCalculator() {
  const [sscGpa, setSscGpa] = useState('');
  const [hscGpa, setHscGpa] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [math, setMath] = useState('');
  
  const [result, setResult] = useState<{ status: 'pass' | 'fail' | 'error' | null; message: string }>({ status: null, message: '' });

  const checkEligibility = () => {
    const ssc = parseFloat(sscGpa);
    const hsc = parseFloat(hscGpa);
    const phy = parseFloat(physics);
    const chem = parseFloat(chemistry);
    const mth = parseFloat(math);

    if (ssc > 5 || hsc > 5 || ssc < 0 || hsc < 0) {
      setResult({ status: 'error', message: 'INVALID GPA: Maximum allowed value is 5.00.' });
      return;
    }
    if (phy > 100 || chem > 100 || mth > 100) {
      setResult({ status: 'error', message: 'INVALID MARKS: Subject scores cannot exceed 100.' });
      return;
    }
    if ([ssc, hsc, phy, chem, mth].some(val => isNaN(val))) {
      setResult({ status: 'error', message: 'INPUT REQUIRED: Please fill all engineering parameters.' });
      return;
    }

    const avgGpa = (ssc + hsc) / 2;
    const minMarks = 70; 

    if (avgGpa >= 4.5 && phy >= minMarks && chem >= minMarks && mth >= minMarks) {
      setResult({ status: 'pass', message: `ELIGIBLE: Average GPA ${avgGpa.toFixed(2)} meets CMSIL 2026 standards.` });
    } else {
      setResult({ status: 'fail', message: 'NOT ELIGIBLE: Requires Avg GPA 4.50+ and 70+ in all Science subjects.' });
    }
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* FIXED: Increased PT-32 to prevent text cutoff */}
      <section className="bg-slate-900 text-white pt-32 pb-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Eligibility Check</h1>
          <p className="text-blue-400 font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">
            Engineering Admission Diagnostic v2.0
          </p>
        </motion.div>
      </section>

      {/* FIXED: -mt-24 is now safer because of the pb-40 above */}
      <div className="max-w-6xl mx-auto -mt-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
              <Calculator className="text-blue-600" size={28} />
              <h2 className="font-black text-slate-900 uppercase tracking-tight text-xl">Academic Diagnostics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">SSC GPA</label>
                <input type="number" placeholder="5.00" value={sscGpa} onChange={(e) => setSscGpa(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-900" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">HSC GPA</label>
                <input type="number" placeholder="5.00" value={hscGpa} onChange={(e) => setHscGpa(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-900" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Physics</label>
                <input type="number" placeholder="0-100" value={physics} onChange={(e) => setPhysics(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl font-bold text-slate-900" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Chemistry</label>
                <input type="number" placeholder="0-100" value={chemistry} onChange={(e) => setChemistry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl font-bold text-slate-900" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Higher Math</label>
                <input type="number" placeholder="0-100" value={math} onChange={(e) => setMath(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl font-bold text-slate-900" />
              </div>
            </div>

            <button onClick={checkEligibility} className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 rounded-2xl font-black uppercase tracking-[0.25em] text-xs transition-all shadow-xl">
              Execute Analysis &rarr;
            </button>
          </motion.div>

          {/* Result Panel remains the same */}
          <div className="lg:col-span-5 h-full">
            <AnimatePresence mode="wait">
              {result.status ? (
                <motion.div 
                  key={result.status}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`h-full min-h-[400px] p-12 rounded-[2.5rem] border flex flex-col items-center justify-center text-center shadow-2xl ${
                    result.status === 'pass' ? 'bg-emerald-50 border-emerald-100' : 
                    result.status === 'error' ? 'bg-amber-50 border-amber-100' : 'bg-rose-50 border-rose-100'
                  }`}
                >
                  {result.status === 'pass' && <CheckCircle2 size={64} className="text-emerald-600 mb-6 animate-bounce" />}
                  {result.status === 'fail' && <XCircle size={64} className="text-rose-600 mb-6" />}
                  {result.status === 'error' && <AlertTriangle size={64} className="text-amber-600 mb-6" />}
                  <h3 className="font-black text-2xl uppercase mb-4 tracking-tighter">Diagnostic Result</h3>
                  <p className="text-sm font-bold text-slate-600 px-4">{result.message}</p>
                </motion.div>
              ) : (
                <div className="h-full min-h-[400px] bg-slate-950 p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center text-white/20">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-black">System Ready</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}