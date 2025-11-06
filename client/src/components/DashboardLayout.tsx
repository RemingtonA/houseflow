import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface DashboardLayoutProps {
  username: string;
  houseCount: number;
  onLogout: () => void;
  children: React.ReactNode;
}

export default function DashboardLayout({
  username,
  houseCount,
  onLogout,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-white">
      <motion.aside
        initial={{ x: -280, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-[280px] bg-[#FAFAFA] border-r border-[#F0F0F0] flex flex-col shadow-[4px_0_12px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(to bottom, #FAFAFA 0%, #FCFCFC 100%)",
        }}
      >
        <div className="p-8">
          <h2 className="text-xl font-light text-[#86868B] tracking-wide lowercase">
            my chains
          </h2>
        </div>

        <div className="flex-1 px-6">
          <div className="space-y-2">
            <div className="bg-white/50 rounded-md p-4 border border-[#F0F0F0]">
              <p className="text-sm text-muted-foreground">Properties</p>
              <p className="text-2xl font-semibold text-foreground mt-1" data-testid="text-property-count">
                {houseCount}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-[#F0F0F0]">
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-1">Signed in as</p>
            <p className="text-sm font-medium text-foreground" data-testid="text-username">
              {username}
            </p>
          </div>
          <Button
            variant="outline"
            className="w-full rounded-full"
            onClick={onLogout}
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </motion.aside>

      <main className="flex-1 overflow-auto">
        <div
          className="min-h-full flex items-center justify-center p-12"
          style={{
            background: `
              linear-gradient(0deg, rgba(0,0,0,0.01) 1px, transparent 1px),
              radial-gradient(ellipse at center, #FFFFFF 0%, #FAFAFA 100%)
            `,
            backgroundSize: "100% 2px, 100% 100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-4xl"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
