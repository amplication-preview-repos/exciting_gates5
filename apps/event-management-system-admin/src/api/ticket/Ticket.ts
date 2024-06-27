export type Ticket = {
  createdAt: Date;
  id: string;
  qrCode: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
