import DashboardLayout from '../DashboardLayout';
import HouseChain from '../HouseChain';
import { mockChains } from '@/lib/mockData';

export default function DashboardLayoutExample() {
  return (
    <DashboardLayout
      username="user1"
      houseCount={5}
      onLogout={() => console.log('Logout clicked')}
    >
      <HouseChain chain={mockChains.user1} />
    </DashboardLayout>
  );
}
