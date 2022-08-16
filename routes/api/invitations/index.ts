import { Handlers } from "$fresh/server.ts";
import { sbInivations } from "../../../utils/api.ts";

export interface Invitation {
  deps: number;
  name: string;
  id: string;
  isAttended: boolean | null;
}

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const id = url.searchParams.get("id") || "";
    const invitations: Invitation[] =
    await sbInivations.get('id',id) || null;
    return new Response(JSON.stringify(invitations[0]), {
      headers: { "Content-Type": "application/json" },
    });
  },

  async PUT(req) {
    const body = await req.json();
    const invitation =
    await sbInivations.edit('id',body.id,body.data) || null;
    return new Response(JSON.stringify(invitation), {
      headers: { "Content-Type": "application/json" },
    });
  }
};
