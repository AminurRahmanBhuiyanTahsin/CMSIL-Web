export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">About CMSIL Institute</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 mb-4">Our Profile</h2>
          <p className="leading-relaxed">
            CMSIL Institute is a premier technical institution dedicated to the fusion of academic knowledge 
            with practical purpose—mens et manus (mind and hand). We bridge the gap between 
            students and administration through a fully digitized, SEO-friendly ecosystem.
          </p>
        </section>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Mission</h2>
            <p className="text-sm">To educate students in engineering through rigorous study and the excitement of discovery.</p>
          </section>
  
          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Vision</h2>
            <p className="text-sm">To become a center of excellence where research flourishes and graduates become innovators.</p>
          </section>
        </div>
  
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Institute Policies</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Identity Security:</strong> 100% user verification through pre-provisioned accounts[cite: 9, 10].</li>
            <li><strong>Academic Standing:</strong> 75% minimum attendance required[cite: 10].</li>
            <li><strong>Resource Responsibility:</strong> The 7-Day Return Rule for library assets[cite: 9, 13].</li>
          </ul>
        </section>
      </div>
    );
  }