/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import { Invitation } from "../routes/api/invitations/index.ts";

export default function Invitations({ id }: { id?: string }) {
  const [data, setData] = useState<Invitation | null>(null);
  useEffect(() => {
    firstLoad();
  }, []);

  const firstLoad = () => {
    if (id) {
      fetch(`/api/invitations?id=${id}`, { method: "GET" }).then((response) =>
        response.json()
      )
        .then((data) => {
          setData(data);
        });
    } 
  };

  const handlerAttendance = () => {
    if (data) {
      fetch(`/api/invitations`, { method: "PUT", body: JSON.stringify({id:data.id,isAttended: !data.isAttended}) }).then((response) =>
        response.json()
      ).catch((error) => {
          console.log(error);
        }).finally(() => {
          firstLoad();
        }
        );
    }
  }

  return (
    <div class={tw`flex gap-2 w-full`}>
      {JSON.stringify(data)}
      <button onClick={handlerAttendance}>{data && data.isAttended ? 'Attended' : 'Still thinking'}</button>
    </div>
  );
}
