import type { Chain, Contact, House } from "@shared/schema";

// TODO: remove mock functionality - this is temporary data for the POC

export const mockChains: Record<string, Chain> = {
  admin: {
    id: "chain-admin",
    name: "Admin Property Chain",
    houses: [
      {
        id: "house-1",
        address: "45 Oak Avenue, London SW1",
        status: "complete",
        estateAgent: "Foxton",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-1",
            name: "Sarah Mitchell",
            phone: "+44 20 7946 0958",
            email: "s.mitchell@email.com",
            role: "buyer"
          },
          {
            id: "contact-2",
            name: "James Foster",
            phone: "+44 20 7946 0321",
            email: "james.foster@foxton.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-2",
        address: "12 Park Lane, London W1",
        status: "complete",
        estateAgent: "Black Cat",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-3",
            name: "Emma Thompson",
            phone: "+44 20 7946 0445",
            email: "emma.t@email.com",
            role: "seller"
          },
          {
            id: "contact-4",
            name: "Oliver Barnes",
            phone: "+44 20 7946 0789",
            email: "o.barnes@blackcat.co.uk",
            role: "agent"
          }
        ]
      },
      {
        id: "house-3",
        address: "78 Victoria Street, London EC1",
        status: "incomplete",
        estateAgent: "Ellis & Co",
        isUserProperty: true,
        contacts: [
          {
            id: "contact-5",
            name: "Admin User",
            phone: "+44 20 7946 0123",
            email: "admin@houseflow.com",
            role: "buyer"
          },
          {
            id: "contact-6",
            name: "Sophie Ellis",
            phone: "+44 20 7946 0654",
            email: "s.ellis@ellisandco.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-4",
        address: "34 Regent Street, London W1",
        status: "complete",
        estateAgent: "Foxton",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-7",
            name: "Michael Chen",
            phone: "+44 20 7946 0876",
            email: "m.chen@email.com",
            role: "seller"
          },
          {
            id: "contact-8",
            name: "Rachel Green",
            phone: "+44 20 7946 0234",
            email: "r.green@foxton.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-5",
        address: "56 Bond Street, London W1",
        status: "incomplete",
        estateAgent: "Black Cat",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-9",
            name: "David Wilson",
            phone: "+44 20 7946 0567",
            email: "d.wilson@email.com",
            role: "buyer"
          },
          {
            id: "contact-10",
            name: "Lucy Morgan",
            phone: "+44 20 7946 0890",
            email: "l.morgan@blackcat.co.uk",
            role: "agent"
          }
        ]
      },
      {
        id: "house-6",
        address: "23 Piccadilly, London W1",
        status: "complete",
        estateAgent: "Ellis & Co",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-11",
            name: "Robert Taylor",
            phone: "+44 20 7946 0345",
            email: "r.taylor@email.com",
            role: "seller"
          },
          {
            id: "contact-12",
            name: "Hannah Ellis",
            phone: "+44 20 7946 0678",
            email: "h.ellis@ellisandco.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-7",
        address: "89 Oxford Street, London W1",
        status: "pending",
        estateAgent: "Foxton",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-13",
            name: "Alice Brown",
            phone: "+44 20 7946 0912",
            email: "a.brown@email.com",
            role: "buyer"
          },
          {
            id: "contact-14",
            name: "Tom Harris",
            phone: "+44 20 7946 0456",
            email: "t.harris@foxton.com",
            role: "agent"
          }
        ]
      }
    ]
  },
  user1: {
    id: "chain-user1",
    name: "User1 Property Chain",
    houses: [
      {
        id: "house-u1-1",
        address: "15 Grove Road, Brighton BN1",
        status: "complete",
        estateAgent: "Black Cat",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-u1-1",
            name: "George Parker",
            phone: "+44 1273 555 111",
            email: "g.parker@email.com",
            role: "buyer"
          },
          {
            id: "contact-u1-2",
            name: "Amy Johnson",
            phone: "+44 1273 555 222",
            email: "a.johnson@blackcat.co.uk",
            role: "agent"
          }
        ]
      },
      {
        id: "house-u1-2",
        address: "42 Marine Parade, Brighton BN2",
        status: "incomplete",
        estateAgent: "Foxton",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-u1-3",
            name: "Laura Davies",
            phone: "+44 1273 555 333",
            email: "l.davies@email.com",
            role: "seller"
          },
          {
            id: "contact-u1-4",
            name: "Mark Stevens",
            phone: "+44 1273 555 444",
            email: "m.stevens@foxton.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-u1-3",
        address: "67 Preston Road, Brighton BN1",
        status: "complete",
        estateAgent: "Ellis & Co",
        isUserProperty: true,
        contacts: [
          {
            id: "contact-u1-5",
            name: "User One",
            phone: "+44 1273 555 555",
            email: "user1@houseflow.com",
            role: "buyer"
          },
          {
            id: "contact-u1-6",
            name: "Charlotte Ellis",
            phone: "+44 1273 555 666",
            email: "c.ellis@ellisandco.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-u1-4",
        address: "89 Church Road, Brighton BN3",
        status: "complete",
        estateAgent: "Black Cat",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-u1-7",
            name: "Peter Walsh",
            phone: "+44 1273 555 777",
            email: "p.walsh@email.com",
            role: "seller"
          },
          {
            id: "contact-u1-8",
            name: "Jennifer Cole",
            phone: "+44 1273 555 888",
            email: "j.cole@blackcat.co.uk",
            role: "agent"
          }
        ]
      },
      {
        id: "house-u1-5",
        address: "23 Western Road, Brighton BN1",
        status: "complete",
        estateAgent: "Foxton",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-u1-9",
            name: "Rebecca White",
            phone: "+44 1273 555 999",
            email: "r.white@email.com",
            role: "buyer"
          },
          {
            id: "contact-u1-10",
            name: "Daniel Reed",
            phone: "+44 1273 555 000",
            email: "d.reed@foxton.com",
            role: "agent"
          }
        ]
      }
    ]
  },
  user2: {
    id: "chain-user2",
    name: "User2 Property Chain",
    houses: [
      {
        id: "house-u2-1",
        address: "8 High Street, Oxford OX1",
        status: "complete",
        estateAgent: "Ellis & Co",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-u2-1",
            name: "William Bell",
            phone: "+44 1865 444 111",
            email: "w.bell@email.com",
            role: "buyer"
          },
          {
            id: "contact-u2-2",
            name: "Victoria Ellis",
            phone: "+44 1865 444 222",
            email: "v.ellis@ellisandco.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-u2-2",
        address: "54 Banbury Road, Oxford OX2",
        status: "incomplete",
        estateAgent: "Foxton",
        isUserProperty: true,
        contacts: [
          {
            id: "contact-u2-3",
            name: "User Two",
            phone: "+44 1865 444 333",
            email: "user2@houseflow.com",
            role: "seller"
          },
          {
            id: "contact-u2-4",
            name: "Andrew Foster",
            phone: "+44 1865 444 444",
            email: "a.foster@foxton.com",
            role: "agent"
          }
        ]
      },
      {
        id: "house-u2-3",
        address: "31 Cowley Road, Oxford OX4",
        status: "pending",
        estateAgent: "Black Cat",
        isUserProperty: false,
        contacts: [
          {
            id: "contact-u2-5",
            name: "Catherine Moore",
            phone: "+44 1865 444 555",
            email: "c.moore@email.com",
            role: "buyer"
          },
          {
            id: "contact-u2-6",
            name: "Benjamin Black",
            phone: "+44 1865 444 666",
            email: "b.black@blackcat.co.uk",
            role: "agent"
          }
        ]
      }
    ]
  }
};

export function getChainForUser(username: string): Chain {
  return mockChains[username] || mockChains.user1;
}
