export default function ContactPage() {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h1>
        
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-left bg-white">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4">Category</th>
                <th className="p-4">Information</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-4 font-bold">Physical Address</td><td className="p-4">Plot 12, Engineering Sector, Dhaka-1212, Bangladesh</td></tr>
              <tr><td className="p-4 font-bold">Primary Email</td><td className="p-4 text-blue-600">registrar@cmsil-edu.ac.bd</td></tr>
              <tr><td className="p-4 font-bold">Admissions</td><td className="p-4 text-blue-600">admissions.help@cmsil-edu.ac.bd</td></tr>
              <tr><td className="p-4 font-bold">Phone (PABX)</td><td className="p-4">+880-2-5566-6000</td></tr>
            </tbody>
          </table>
        </div>
  
        <div className="mt-10 p-6 bg-gray-50 border-l-4 border-blue-900">
          <h3 className="font-bold text-lg mb-2">Administrative Dashboard (Group-D)</h3>
          <p><strong>Md. Faisal Rahman:</strong> Head of System Administration </p>
          <p><strong>Md. Aminur Rahman Bhuiyan Tahsin:</strong> Lead Developer </p>
          <p><strong>MD. Mahfuzur Rahman Nihad:</strong> Database Coordinator </p>
        </div>
      </div>
    );
  }