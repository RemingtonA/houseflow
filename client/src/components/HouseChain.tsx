import { motion } from "framer-motion";
import HouseCard from "./HouseCard";
import SteelChainLink from "./SteelChainLink";
import type { Chain } from "@shared/schema";

interface HouseChainProps {
  chain: Chain;
}

export default function HouseChain({ chain }: HouseChainProps) {
  const houses = chain.houses;

  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-light text-center mb-12 text-foreground"
      >
        {chain.name}
      </motion.h2>

      {/* MOBILE: horizontal scroll, snap to sdfs card */}
      <div
        className="
          md:hidden
          -mx-4 px-4
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          flex items-stretch gap-3
          pb-4
          [scrollbar-width:none] [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
        aria-label="House chain (horizontal on mobile)"
      >
        {houses.map((house, index) => (
          <div key={house.id} className="flex items-center snap-center shrink-0">
            {/* Card */}
            <div className="shrink-0 min-w-[260px] max-w-[85vw]">
              <HouseCard house={house} index={index} />
            </div>

            {/* Connector */}
            {index < houses.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                className="mx-2 shrink-0 self-center"
              >
                <SteelChainLink className="w-16 h-10" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* DESKTOP/TABLET: your existing centered, wrapping layout */}
      <div className="hidden md:flex items-center justify-center gap-4 flex-wrap">
        {houses.map((house, index) => (
          <div key={house.id} className="flex items-center">
            <HouseCard house={house} index={index} />
            {index < houses.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                className="mx-2"
              >
                <SteelChainLink className="w-20 h-12" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
