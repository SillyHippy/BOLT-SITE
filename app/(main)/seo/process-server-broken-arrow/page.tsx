import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Broken Arrow Process Server - Just Legal Solutions',
  description: 'Professional process server in Broken Arrow, Oklahoma. Licensed, bonded, and insured for reliable legal document delivery.',
};
export default function ProcessServerBrokenArrowPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Process Server in Broken Arrow, Oklahoma</h1>
        <p className="text-xl mb-8">Fast, Reliable, and Professional Service in Broken Arrow.</p>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Serving the Broken Arrow Area (ZIP: 74012)</h2>
          <p className="mb-4">Our experienced process servers are familiar with Broken Arrow and provide legally compliant service for all document types.</p>
          <a href="tel:5393676832" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block font-bold">
            Call for a Quote: (539) 367-6832
          </a>
        </div>
      </div>
    </div>
  );
}
