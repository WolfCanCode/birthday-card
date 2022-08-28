/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import { Invitation } from "../routes/api/invitations/index.ts";

export default function InvitationList({ id }: { id?: string }) {
  const [data, setData] = useState<Invitation[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState<string[]>([]);

  useEffect(() => {
    firstLoad();
  }, []);

  const firstLoad = () => {
    fetch(`/api/getAll`, { method: "GET" }).then((response) => response.json())
      .then((data) => {
        setData(data);
      }).finally(() => {
        setLoading(false);
      });
  };

  const copyLink = (id: string) => {
    if (data.find((item) => item.id !== id)) {
      setActive([...active, id]);
    }
  };

  return (
    <div
      class={tw`p-5 lg:p-10 w-screen  max-h-[100px]  ${
        !isLoading ? "max-h-screen" : ""
      } lg:max-w-20 bg-gray-600 bottom-0 absolute text-white transition-all duration-500 ease-in-out overflow-y-auto`}
    >
      {!isLoading
        ? (
          <>
            <table class={tw`table-auto `}>
              <thead>
                <tr class={tw`p-4`}>
                  <th>Tên</th>
                  <th>Số người</th>
                  <th>Có tham gia không</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data && data.length && data.map((item) => {
                  return (
                    <tr class={tw`p-4`}>
                      <td class={tw`p-4`}>{item.name}</td>
                      <td class={tw`p-4`}>{item.deps}</td>
                      <td class={tw`p-4`}>{item.isAttended ? "✅" : "❌"}</td>
                      <td class={tw`p-4 nowrap`}>
                        <button
                          class={tw`${
                            active.includes(item.id) ? "text-green-500" : ""
                          }`}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              `https://sweetbirthday.deno.dev/${item.id}`,
                            );
                            copyLink(item.id);
                          }}
                        >
                          Copy Link {active.includes(item.id) ? "✅" : "❌"}
                        </button>
                      </td>
                      <td>
                        #{item.id}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            Số người tham gia: {data?.length && data.filter((item) =>
                  item.isAttended
                ).map((item) => item.deps).reduce((a, b) => a + b, 0) || ""}
          </>
        )
        : "Đang tải thư mời..."}
    </div>
  );
}
