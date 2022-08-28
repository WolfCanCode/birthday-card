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

  const dataHandler = (isAttended?: boolean, deps?: number) => {
    if (data) {
      fetch(`/api/invitations`, {
        method: "PUT",
        body: JSON.stringify({
          id: data.id,
          data: {
            ...data,
            isAttended: isAttended ? !data.isAttended : data.isAttended,
            deps: deps,
          },
        }),
      }).then((response) => response.json()).catch((error) => {
        console.log(error);
      }).finally(() => {
        firstLoad();
      });
    }
  };

  return (
    <div className={tw`flex flex-col items-center justify-center h-screen`}>
      <div
        class={tw`p-5 lg:p-10 left-[50%] translate-x-[-50%] w-screen  max-w-[600px] max-h-[100px]  ${
          !isLoading ? "max-h-[600px]" : ""
        } lg:max-w-20 ${
          (data?.isAttended === null || !data)
            ? "bg-white"
            : data?.isAttended
            ? "bg-green-300"
            : "bg-red-300"
        } bg-opacity-80 bottom-0 fixed text-black rounded-t-2xl transition-all duration-500 ease-in-out`}
      >
        {!isLoading
          ? (
            <div className={tw`flex flex-col`}>
              <h1 className={tw`text-md lg:text-2xl mb-4`}>
                Thân gửi <strong className={tw`text-xl`}>{data?.name}</strong> 🥰
              </h1>
              <h2 className={tw`text-md lg:text-lg`}>
                Vào ngày <strong>02/09/2021</strong> mình đã bắt đầu cuộc đời,
              </h2>
              <h2 className={tw`text-md lg:text-lg mb-4`}>
                với danh phận là{"  "}<strong>Lê Ngọc Hải An</strong> aka{" "}
                <strong>Ngọt</strong> 😎
              </h2>
              <h2 className={tw`text-md lg:text-lg`}>
                Đến giờ cũng đã được 1 năm, thời gian trôi đủ nhanh để ba mẹ
                mình kiếm "xiền" 💰💰
              </h2>
              <h2 className={tw`text-md lg:text-lg mb-2`}>
                và tổ chức một bữa thôi nôi tại nhà hàng
              </h2>{" "}
              <div className={tw`mb-2 text-center`}>
                <a
                  href="https://g.co/kgs/u6D9SP"
                  className={tw`text-blue-600 font-bold text-lg text-center`}
                >
                  🗺 SunShine Antique 🗺
                </a>
              </div>
              <h2 className={tw`text-md lg:text-lg`}>
                Địa chỉ:{" "}
                <strong>
                  549 Đ. Trần Hưng Đạo, Cầu Kho, Quận 1, Thành phố Hồ Chí Minh
                </strong>
              </h2>
              <h2 className={tw`text-md lg:text-lg mb-2`}>
                Thời gian: <strong>Chủ nhật 04/09/2022 18:00</strong>
              </h2>
              <a
                className={tw`text-red-500 font-medium mb-4`}
                href={`http://www.google.com/calendar/event?action=TEMPLATE&text=Sinh nhật của Ngọt nè ${data?.name} ơi&details=Mời ${data?.name} tới tham dự tiệc thôi nôi của Ngọt <3&location=SunShine 549 Đ. Trần Hưng Đạo, Cầu Kho, Quận 1, Thành phố Hồ Chí MinhAntique&dates=20220904T110000000Z/20220904T140000000Z`}
              >
                📆 Thêm vào lịch
              </a>
              <h2 className={tw`text-md lg:text-lg mb-4`}>
                Thân mời{" "}
                <strong>
                  {data?.name}
                </strong>{" "}
                tham gia tiệc nha 🎉🎉
              </h2>
              {data?.isAttended
                ? (
                  <div>
                    <h2>
                      Tổng số người tham gia:{" "}
                      <input
                        className={tw`h-10 mb-2 px-4 bg-green-900 placeholder:text-white text-white w-16 rounded-xl text-center`}
                        placeholder="1"
                        defaultValue={data?.deps}
                        type="number"
                        min={1}
                        onChange={(e) => {
                          dataHandler(false, e.target.value);
                        }}
                      />
                    </h2>
                  </div>
                )
                : ""}
              <div
                className={tw`text-white flex flex-row gap-4 justify-center w-full`}
              >
                <div className={tw`w-full`}>
                  <button
                    className={tw`w-full px-4 py-2 rounded-lg text-lg ${
                      !data?.isAttended
                        ? "bg-green-700"
                        : "bg-gray-700 opacity-50"
                    }`}
                    onClick={() => !data?.isAttended ? dataHandler(true) : {}}
                  >
                    Tham gia ✅
                  </button>
                </div>
                <div className={tw`w-full`}>
                  <button
                    className={tw`w-full px-4 py-2 rounded-lg text-lg ${(data
                        ?.isAttended || data?.isAttended === null
                      ? "bg-red-700"
                      : "bg-gray-700 opacity-50")}`}
                    onClick={() =>
                      dataHandler(true)}
                  >
                    Mình kẹt rồi 😭
                  </button>
                </div>
              </div>
            </div>
          )
          : "Đang tìm thư mời..."}
      </div>
    </div>
  );
}
