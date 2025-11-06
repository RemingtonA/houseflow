import DashboardLayout from '../DashboardLayout';
import HouseChain from '../HouseChain';

export default function DashboardLayoutExample() {
  return (
    <DashboardLayout
      username="user1"
      houseCount={5}
      onLogout={() => console.log('Logout clicked')}
    >
      <HouseChain houseCount={5} />
    </DashboardLayout>
  );
}
