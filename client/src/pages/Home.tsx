import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import AnimatedLogo from "@/components/AnimatedLogo";
import DashboardLayout from "@/components/DashboardLayout";
import HouseChain from "@/components/HouseChain";
import AdminControls from "@/components/AdminControls";
import { getChainForUser } from "@/lib/mockData";
import type { Chain, House, HouseStatus } from "@shared/schema";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [chain, setChain] = useState<Chain | null>(null);

  const handleLogin = (username: string) => {
    setShowAnimation(true);
    setTimeout(() => {
      setCurrentUser(username);
      setChain(getChainForUser(username));
      setShowAnimation(false);
    }, 1700);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setChain(null);
  };

  const handleStatusChange = (houseId: string, newStatus: HouseStatus) => {
    if (!chain) return;
    
    const updatedChain = {
      ...chain,
      houses: chain.houses.map(house =>
        house.id === houseId ? { ...house, status: newStatus } : house
      )
    };
    setChain(updatedChain);
  };

  const handleAddHouse = (address: string, estateAgent: "Foxton" | "Black Cat" | "Ellis & Co") => {
    if (!chain) return;
    
    const newHouse: House = {
      id: `house-new-${Date.now()}`,
      address,
      status: "pending",
      estateAgent,
      isUserProperty: false,
      contacts: [
        {
          id: `contact-new-${Date.now()}`,
          name: "New Contact",
          phone: "+44 20 7946 0000",
          email: "contact@example.com",
          role: "buyer"
        }
      ]
    };
    
    const updatedChain = {
      ...chain,
      houses: [...chain.houses, newHouse]
    };
    setChain(updatedChain);
  };

  if (showAnimation) {
    return <AnimatedLogo onComplete={() => {}} />;
  }

  if (!currentUser || !chain) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const isAdmin = currentUser === "admin";

  return (
    <DashboardLayout
      username={currentUser}
      houseCount={chain.houses.length}
      onLogout={handleLogout}
      isAdmin={isAdmin}
      houses={chain.houses}
      adminControls={
        isAdmin ? (
          <AdminControls
            houses={chain.houses}
            onStatusChange={handleStatusChange}
            onAddHouse={handleAddHouse}
          />
        ) : undefined
      }
    >
      <HouseChain chain={chain} />
    </DashboardLayout>
  );
}
