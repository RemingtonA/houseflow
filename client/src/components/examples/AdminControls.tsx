import AdminControls from '../AdminControls';
import { mockChains } from '@/lib/mockData';

export default function AdminControlsExample() {
  return (
    <div className="flex items-center justify-center p-12 bg-background">
      <AdminControls
        houses={mockChains.admin.houses}
        onStatusChange={(id, status) => console.log('Status change:', id, status)}
        onAddHouse={(address, agent) => console.log('Add house:', address, agent)}
      />
    </div>
  );
}
