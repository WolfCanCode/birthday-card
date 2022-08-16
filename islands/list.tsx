/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import { Invitation } from "../routes/api/invitations/index.ts";

export default function InvitationList({ id }: { id?: string }) {
  const [data, setData] = useState<Invitation[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

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

  return (
    <div
      class={tw`p-5 lg:p-10 w-screen  max-h-[100px]  ${
        !isLoading ? "max-h-[600px]" : ""
      } lg:max-w-20 bg-gray-600 bottom-0 absolute text-white rounded-t-2xl transition-all duration-500 ease-in-out overflow-y-auto`}
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
                      <td class={tw`p-4`}>
                        https://sweetbirthday.deno.dev/{item.id}
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
