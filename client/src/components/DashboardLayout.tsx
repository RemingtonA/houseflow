import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogOut, Users, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ContactList from "./ContactList";
import type { House } from "@shared/schema";

interface DashboardLayoutProps {
  username: string;
  houseCount: number;
  onLogout: () => void;
  children: React.ReactNode;
  isAdmin?: boolean;
  houses?: House[];
  adminControls?: React.ReactNode;
  onNewChain?: () => void; // optional; safe to ignore if unused
}

export default function DashboardLayout({
  username,
  houseCount,
  onLogout,
  children,
  isAdmin = false,
  houses = [],
  adminControls,
  onNewChain,
}: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = (
    <>
      <div className="p-8">
        <h2 className="text-xl font-light text-[#86868B] tracking-wide lowercase">
          my chains
        </h2>
      </div>

      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-4">
          <div className="bg-white/50 rounded-md p-4 border border-[#F0F0F0]">
            <p className="text-sm text-muted-foreground">Properties</p>
            <p
              className="text-2xl font-semibold text-foreground mt-1"
              data-testid="text-property-count"
            >
              {houseCount}
            </p>
          </div>

          {/* Optional: New chain button for admins (shown if handler provided) */}
          {isAdmin && onNewChain && (
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={() => {
                onNewChain();
                setMobileOpen(false);
              }}
              data-testid="button-new-chain"
            >
              + New chain
            </Button>
          )}

          {isAdmin && houses.length > 0 && (
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  data-testid="button-view-contacts"
                >
                  <Users className="w-4 h-4 mr-2" />
                  View Contacts
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Chain Contacts</SheetTitle>
                  <SheetDescription>
                    Contact information for all parties in this property chain
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <ContactList houses={houses} />
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>

      <div className="p-6 border-t border-[#F0F0F0]">
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-1">Signed in as</p>
          <p className="text-sm font-medium text-foreground" data-testid="text-username">
            {username}
          </p>
          {isAdmin && (
            <p className="text-xs text-primary mt-1" data-testid="text-admin-badge">
              Administrator
            </p>
          )}
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
    </>
  );

  return (
    <div className="flex h-screen bg-white">
      {/* Desktop sidebar */}
      <motion.aside
        initial={{ x: -280, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden md:flex w-[280px] bg-[#FAFAFA] border-r border-[#F0F0F0] flex-col shadow-[4px_0_12px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(to bottom, #FAFAFA 0%, #FCFCFC 100%)",
        }}
      >
        {SidebarContent}
      </motion.aside>

      {/* Mobile top bar + drawer */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur border-b border-[#F0F0F0]">
        <div className="h-14 px-3 flex items-center">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                data-testid="button-open-sidebar"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-[280px]">
              {/* Reuse the same sidebar content */}
              <div
                className="h-full bg-[#FAFAFA] flex flex-col"
                style={{
                  background:
                    "linear-gradient(to bottom, #FAFAFA 0%, #FCFCFC 100%)",
                }}
              >
                {SidebarContent}
              </div>
            </SheetContent>
          </Sheet>
          <div className="ml-2 text-sm text-muted-foreground">menu</div>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <div
          className="min-h-full p-12 pt-[4.5rem] md:pt-12" // push content below mobile top bar
          style={{
            background: `
              linear-gradient(0deg, rgba(0,0,0,0.01) 1px, transparent 1px),
              radial-gradient(ellipse at center, #FFFFFF 0%, #FAFAFA 100%)
            `,
            backgroundSize: "100% 2px, 100% 100%",
          }}
        >
          {isAdmin && adminControls && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              {adminControls}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
