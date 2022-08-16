/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { tw } from "@twind";
import { Invitation } from "../routes/api/invitations/index.ts";

export default function Invitations({ id }: { id?: string }) {
  const [data, setData] = useState<Invitation | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

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
        }).finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (!isLoading && !data?.id) {
      window.location.href = "/";
    }
  }, [data, isLoading]);

  const dataHandler = (isAttended?:boolean,deps?:number) => {
    if (data) {
      fetch(`/api/invitations`, {
        method: "PUT",
        body: JSON.stringify({
          id: data.id,
          data: { ...data, isAttended: isAttended ? !data.isAttended : data.isAttended , deps: deps},
        }),
      }).then((response) => response.json()).catch((error) => {
        console.log(error);
      }).finally(() => {
        firstLoad();
      });
    }
  };

  return (
    <div
      class={tw`p-5 lg:p-10 w-screen  max-w-[600px] max-h-[100px]  ${!isLoading ? 'max-h-[600px]':''} lg:max-w-20 bg-green-600 bottom-0 absolute text-white rounded-t-2xl transition-all duration-500 ease-in-out`}
    >
      {!isLoading
        ? (
          <div className={tw`flex flex-col`}>
            <h1 className={tw`text-xl lg:text-2xl mb-4`}>
              Thân gửi <strong>{data?.name}</strong> 🥰
            </h1>
            <h2 className={tw`text-md lg:text-lg`}>
              Vào ngày <strong>02/09/2021</strong>{" "}
              mình đã bắt đầu cuộc đời,
            </h2>
            <h2 className={tw`text-md lg:text-lg mb-2`}>
              với danh phận là {" "}
              <strong>Lê Ngọc Hải An</strong> aka <strong>Ngọt</strong> 😎
            </h2>
            <h2 className={tw`text-md lg:text-lg`}>
              Đến giờ cũng đã được 1 năm, thời gian trôi đủ nhanh để ba mẹ mình
              kiếm "xiền" 💰💰
            </h2>
            <h2 className={tw`text-md lg:text-lg mb-4`}>
              và tổ chức một bữa thôi nôi mời gia đình 🏠 {" "}
              <strong>
                {data?.name}
              </strong>{" "}
              tham gia 🎉🎉
            </h2>
            <h2 className={tw`text-md lg:text-lg mb-4`}>
              Thời gian: <strong>03/09/2022 17:00</strong>
            </h2>
            {data?.isAttended
              ? (
                <div><h2>Số người bạn dẫn theo: <input
                  className={tw`h-10 mb-2 px-4 bg-green-900 placeholder:text-white text-white w-16 rounded-xl text-center`}
                  placeholder="1"
                  defaultValue={data?.deps}
                  type="number"
                  onChange={(e)=>{
                    dataHandler(false,e.target.value)
                  }} 
                /></h2>
                </div>
              )
              : ""}
            <button
              className={tw`px-4 py-2 rounded-lg text-lg ${
                data && data.isAttended !== null && (data.isAttended
                  ? "bg-green-700"
                  : "bg-red-700") || "bg-blue-600"
              }`}
              onClick={()=>dataHandler(true)}
            >
              {data && data.isAttended !== null &&
                  (data.isAttended ? "Sẽ tham gia đó ✅" : "Mình kẹt rồi 😭") ||
                "Ấn vào đây để tham gia... 🤔"}
            </button>
          </div>
        )
        : "Đang tìm thư mời..."}
    </div>
  );
}
