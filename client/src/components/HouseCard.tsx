import { motion } from "framer-motion";
import HouseIcon from "./HouseIcon";
import type { House } from "@shared/schema";

interface HouseCardProps {
  house: House;
  index: number;
}

export default function HouseCard({ house, index }: HouseCardProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.15, duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center gap-3"
      data-testid={`house-card-${index}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="transition-shadow duration-200 hover:drop-shadow-lg"
      >
        <HouseIcon 
          className="w-20 h-20" 
          status={house.status}
          isUserProperty={house.isUserProperty}
        />
      </motion.div>
      
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">
          {house.estateAgent}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {house.address}
        </p>
      </div>
    </motion.div>
  );
}
