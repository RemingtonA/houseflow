import { motion } from "framer-motion";
import HouseIcon from "./HouseIcon";
import ChainLink from "./ChainLink";

interface HouseChainProps {
  houseCount?: number;
}

export default function HouseChain({ houseCount = 5 }: HouseChainProps) {
  const houses = Array.from({ length: houseCount }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-8 flex-wrap">
      {houses.map((index) => (
        <div key={index} className="flex items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="transition-shadow duration-200 hover:drop-shadow-lg"
            data-testid={`house-${index}`}
          >
            <HouseIcon className="w-20 h-20" />
          </motion.div>
          {index < houseCount - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
            >
              <ChainLink className="w-16 h-10 mx-2" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
