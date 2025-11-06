import ContactList from '../ContactList';
import { mockChains } from '@/lib/mockData';

export default function ContactListExample() {
  return (
    <div className="flex items-center justify-center p-12 bg-background">
      <div className="w-full max-w-2xl">
        <ContactList houses={mockChains.admin.houses} />
      </div>
    </div>
  );
}
