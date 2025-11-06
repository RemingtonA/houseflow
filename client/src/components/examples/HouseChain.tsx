import HouseChain from '../HouseChain';
import { mockChains } from '@/lib/mockData';

export default function HouseChainExample() {
  return (
    <div className="flex items-center justify-center p-12 bg-background">
      <HouseChain chain={mockChains.user1} />
    </div>
  );
}
