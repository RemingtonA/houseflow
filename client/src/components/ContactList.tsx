import { Mail, Phone, User } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { House } from "@shared/schema";

interface ContactListProps {
  houses: House[];
}

export default function ContactList({ houses }: ContactListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-foreground">Contact Information</h3>
      
      <Accordion type="single" collapsible className="w-full">
        {houses.map((house) => (
          <AccordionItem key={house.id} value={house.id} data-testid={`contact-accordion-${house.id}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <div className="flex-1">
                  <p className="text-sm font-medium">{house.address}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {house.estateAgent}
                  </p>
                </div>
                {house.isUserProperty && (
                  <Badge variant="secondary" className="text-xs">Your Property</Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {house.contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="p-3 bg-muted/50 rounded-md space-y-2"
                    data-testid={`contact-${contact.id}`}
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-sm">{contact.name}</span>
                      <Badge variant="outline" className="text-xs capitalize">
                        {contact.role}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-3.5 h-3.5" />
                      <a 
                        href={`tel:${contact.phone}`}
                        className="hover:text-foreground transition-colors"
                        data-testid={`phone-${contact.id}`}
                      >
                        {contact.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-3.5 h-3.5" />
                      <a 
                        href={`mailto:${contact.email}`}
                        className="hover:text-foreground transition-colors"
                        data-testid={`email-${contact.id}`}
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
