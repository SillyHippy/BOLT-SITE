import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import {
  CountyNetworkPanel,
  LegalTrustSignalsPanel,
} from '@/components/seo/internal-link-trust-panels';

export default function CountiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <LegalTrustSignalsPanel compact />
      </div>
      <CountyNetworkPanel />
      <Footer />
    </>
  );
}
