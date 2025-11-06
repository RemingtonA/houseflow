import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import AnimatedLogo from "@/components/AnimatedLogo";
import DashboardLayout from "@/components/DashboardLayout";
import HouseChain from "@/components/HouseChain";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleLogin = (username: string) => {
    setShowAnimation(true);
  };

  const handleAnimationComplete = () => {
    const username = showAnimation ? "user" : "";
    setCurrentUser(username);
    setShowAnimation(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const getHouseCount = (username: string) => {
    switch (username) {
      case "admin":
        return 7;
      case "user1":
        return 5;
      case "user2":
        return 3;
      default:
        return 5;
    }
  };

  if (showAnimation) {
    return <AnimatedLogo onComplete={handleAnimationComplete} />;
  }

  if (!currentUser) {
    return <LoginPage onLogin={(username) => {
      setShowAnimation(true);
      setTimeout(() => {
        setCurrentUser(username);
        setShowAnimation(false);
      }, 1700);
    }} />;
  }

  const houseCount = getHouseCount(currentUser);

  return (
    <DashboardLayout
      username={currentUser}
      houseCount={houseCount}
      onLogout={handleLogout}
    >
      <HouseChain houseCount={houseCount} />
    </DashboardLayout>
  );
}
