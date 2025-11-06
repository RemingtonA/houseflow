import HouseCard from '../HouseCard';
import type { House } from '@shared/schema';

export default function HouseCardExample() {
  const mockHouse: House = {
    id: '1',
    address: '123 Main St',
    status: 'complete',
    estateAgent: 'Foxton',
    isUserProperty: false,
    contacts: []
  };

  return (
    <div className="flex items-center justify-center p-12 bg-background">
      <HouseCard house={mockHouse} index={0} />
    </div>
  );
}
