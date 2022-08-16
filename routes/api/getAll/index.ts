import { Handlers } from "$fresh/server.ts";
import { sbInivations } from "../../../utils/api.ts";

export interface Invitation {
  deps: number;
  name: string;
  id: string;
  isAttended: boolean | null;
}

export const handler: Handlers = {
  async GET() {
    const invitations: Invitation[] =
    await sbInivations.all() || [];
    return new Response(JSON.stringify(invitations), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
