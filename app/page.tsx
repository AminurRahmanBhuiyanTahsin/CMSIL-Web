import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 dark:bg-black text-center">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to CMSIL</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
        Digitizing the academic lifecycle. Use the navigation above to access the 
        Admission Calculator or the Faculty Directory.
      </p>
    </main>
  );
}