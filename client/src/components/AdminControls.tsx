import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { House, HouseStatus } from "@shared/schema";

interface AdminControlsProps {
  houses: House[];
  onStatusChange: (houseId: string, newStatus: HouseStatus) => void;
  onAddHouse: (address: string, estateAgent: "Foxton" | "Black Cat" | "Ellis & Co") => void;
}

export default function AdminControls({ 
  houses, 
  onStatusChange,
  onAddHouse 
}: AdminControlsProps) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [newAgent, setNewAgent] = useState<"Foxton" | "Black Cat" | "Ellis & Co">("Foxton");

  const handleStatusChange = (houseId: string, status: string) => {
    onStatusChange(houseId, status as HouseStatus);
    console.log(`Status changed for house ${houseId} to ${status}`);
  };

  const handleAddHouse = () => {
    if (newAddress.trim()) {
      onAddHouse(newAddress.trim(), newAgent);
      setNewAddress("");
      setNewAgent("Foxton");
      setIsAddOpen(false);
    }
  };

  return (
    <div className="flex gap-2">
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogTrigger asChild>
          <Button
            className="rounded-full"
            data-testid="button-add-house"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Property
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Property to Chain</DialogTitle>
            <DialogDescription>
              Add a new property to the current chain
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter property address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                data-testid="input-address"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="agent">Estate Agent</Label>
              <Select value={newAgent} onValueChange={(value: any) => setNewAgent(value)}>
                <SelectTrigger id="agent" data-testid="select-agent">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Foxton">Foxton</SelectItem>
                  <SelectItem value="Black Cat">Black Cat</SelectItem>
                  <SelectItem value="Ellis & Co">Ellis & Co</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddOpen(false)}
              data-testid="button-cancel-add"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddHouse}
              disabled={!newAddress.trim()}
              data-testid="button-confirm-add"
            >
              Add Property
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isStatusOpen} onOpenChange={setIsStatusOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full"
            data-testid="button-manage-status"
          >
            <Settings className="w-4 h-4 mr-2" />
            Manage Status
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Manage House Status</DialogTitle>
            <DialogDescription>
              Update the status of each property in the chain
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 mt-4">
            {houses.map((house) => (
              <div
                key={house.id}
                className="flex items-center justify-between p-4 border rounded-md"
                data-testid={`status-control-${house.id}`}
              >
                <div className="flex-1">
                  <p className="font-medium text-sm">{house.address}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {house.estateAgent} • {house.isUserProperty ? 'Your Property' : 'Other Party'}
                  </p>
                </div>
                
                <Select
                  value={house.status}
                  onValueChange={(value) => handleStatusChange(house.id, value)}
                >
                  <SelectTrigger className="w-40" data-testid={`select-status-${house.id}`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete">Complete</SelectItem>
                    <SelectItem value="incomplete">Incomplete</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
