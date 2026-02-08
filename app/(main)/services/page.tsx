import { redirect } from 'next/navigation';

export default function Page() {
  // Permanent redirect to consolidate /services into /pricing
  redirect('/pricing');
}
