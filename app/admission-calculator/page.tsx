"use client";
import React, { useState } from 'react';

export default function AdmissionCalculator() {
  const [gpa, setGpa] = useState("");
  const [physics, setPhysics] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const checkEligibility = () => {
    const gpaNum = parseFloat(gpa);
    const physicsNum = parseInt(physics);

    // Logic based on your proposal's criteria
    if (gpaNum >= 5.0 && physicsNum >= 80) {
      setResult("✅ Eligible for Science Department!");
    } else {
      setResult("❌ Not Eligible. Requirements: GPA 5.0 & Physics 80+");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Admission Eligibility</h2>
      <div className="space-y-4">
        <input 
          type="number" placeholder="Enter GPA (e.g. 5.0)" 
          className="w-full p-2 border rounded"
          onChange={(e) => setGpa(e.target.value)}
        />
        <input 
          type="number" placeholder="Physics Marks (e.g. 85)" 
          className="w-full p-2 border rounded"
          onChange={(e) => setPhysics(e.target.value)}
        />
        <button 
          onClick={checkEligibility}
          className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700"
        >
          Check Eligibility
        </button>
        {result && <p className="mt-4 font-semibold text-center">{result}</p>}
      </div>
    </div>
  );
}