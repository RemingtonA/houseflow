import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import AnimatedLogo from "@/components/AnimatedLogo";
import DashboardLayout from "@/components/DashboardLayout";
import HouseChain from "@/components/HouseChain";
import AdminControls from "@/components/AdminControls";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getChainForUser } from "@/lib/mockData";
import type { Chain, House, HouseStatus } from "@shared/schema";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  // Non-admin single chain (used when logged in as a normal user)
  const [chain, setChain] = useState<Chain | null>(null);

  // Admin-only: currently selected user tab (user1 | user2)
  const [activeUserForAdmin, setActiveUserForAdmin] = useState<"user1" | "user2">("user1");

  // Admin-only: keep both users' chains in local state
  const [adminChains, setAdminChains] = useState<Record<"user1" | "user2", Chain>>({
    user1: getChainForUser("user1"),
    user2: getChainForUser("user2"),
  });

  const isAdmin = currentUser === "admin";

  const MIN_SPLASH_MS = 1200; // tweak to taste (e.g., 1400–1600 on slow phones)

  const handleLogin = (username: string) => {
    const start = Date.now();
    setShowAnimation(true);
  
    // Do any init (load chains) synchronously
    setCurrentUser(username);
    if (username !== "admin") {
      setChain(getChainForUser(username));
    }
  
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);
  
    setTimeout(() => {
      setShowAnimation(false);
    }, remaining);
  };
  

  const handleLogout = () => {
    setCurrentUser(null);
    setChain(null);
  };

  // Helpers to read/write the "active" chain depending on admin vs user
  const activeChain: Chain | null = isAdmin ? adminChains[activeUserForAdmin] : chain;

  const updateActiveAdminChain = (updater: (c: Chain) => Chain) => {
    setAdminChains((prev) => {
      const curr = prev[activeUserForAdmin];
      const updated = updater(curr);
      return { ...prev, [activeUserForAdmin]: updated };
    });
  };

  const handleStatusChange = (houseId: string, newStatus: HouseStatus) => {
    if (isAdmin) {
      updateActiveAdminChain((c) => ({
        ...c,
        houses: c.houses.map((h) => (h.id === houseId ? { ...h, status: newStatus } : h)),
      }));
      return;
    }
    if (!chain) return;
    setChain({
      ...chain,
      houses: chain.houses.map((h) => (h.id === houseId ? { ...h, status: newStatus } : h)),
    });
  };

  const handleAddHouse = (address: string, estateAgent: "Foxton" | "Black Cat" | "Ellis & Co") => {
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
          phone: "+44 20 0000 0000",
          email: "contact@example.com",
          role: "agent",
        },
      ],
    };

    if (isAdmin) {
      updateActiveAdminChain((c) => ({ ...c, houses: [...c.houses, newHouse] }));
      return;
    }
    if (!chain) return;
    setChain({ ...chain, houses: [...chain.houses, newHouse] });
  };

  // NEW: Admin-only "New chain" action — clears the current tab's chain
  const handleNewChain = () => {
    if (!isAdmin) return;
    updateActiveAdminChain((c) => ({
      ...c,
      // preserve any required top-level fields; just reset the houses array
      houses: [],
    }));
  };

  // Gate: login / splash animation
  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }
  if (showAnimation) {
    return <AnimatedLogo />;
  }

  // Safety: if somehow we have no chain loaded yet
  if (!activeChain) {
    return (
      <DashboardLayout
        username={currentUser}
        houseCount={0}
        onLogout={handleLogout}
        isAdmin={isAdmin}
        onNewChain={isAdmin ? handleNewChain : undefined}  // NEW
      >
        <div className="text-center text-muted-foreground">No chain data available.</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      username={currentUser}
      houseCount={activeChain.houses.length}
      onLogout={handleLogout}
      isAdmin={isAdmin}
      houses={activeChain.houses}
      onNewChain={isAdmin ? handleNewChain : undefined}  // NEW
      adminControls={
        isAdmin ? (
          <AdminControls
            houses={activeChain.houses}
            onStatusChange={handleStatusChange}
            onAddHouse={handleAddHouse}
          />
        ) : undefined
      }
    >
      {isAdmin && (
        <div className="mb-6">
          <Tabs value={activeUserForAdmin} onValueChange={(v) => setActiveUserForAdmin(v as "user1" | "user2")}>
            <TabsList>
              <TabsTrigger value="user1">user1 chain</TabsTrigger>
              <TabsTrigger value="user2">user2 chain</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      )}

      <HouseChain chain={activeChain} />
    </DashboardLayout>
  );
}
