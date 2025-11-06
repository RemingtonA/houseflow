import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginPageProps {
  onLogin: (username: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim().toLowerCase());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5F5F7] to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center mb-8"
          >
            <h1 
              className="text-5xl font-light tracking-tight text-foreground mb-2"
              style={{ fontFamily: "var(--font-cursive)" }}
            >
              houseflow
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign in to continue
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-0 border-b border-input rounded-none px-0 py-3 text-base focus-visible:ring-0 focus-visible:border-primary transition-colors"
                data-testid="input-username"
                autoFocus
              />
              <p className="text-xs text-muted-foreground mt-2">
                Try: admin, user1, or user2
              </p>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full py-6 text-base font-medium"
              data-testid="button-login"
            >
              Sign In
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
