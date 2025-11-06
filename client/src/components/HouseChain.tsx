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
      
      <div className="flex items-center justify-center gap-4 flex-wrap">
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
