/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
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

  const dataHandler = (
    isAttended?: boolean,
    deps?: number,
    forceCancel?: boolean,
  ) => {
    if (data) {
      const newAttended = !forceCancel
        ? isAttended ? !data.isAttended : data.isAttended
        : false;
      if (newAttended && !deps) {
        alert("Bạn nhớ nhập số lượng người tham gia nha");
      }
      fetch(`/api/invitations`, {
        method: "PUT",
        body: JSON.stringify({
          id: data.id,
          data: {
            ...data,
            isAttended: newAttended,
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
        class={tw`flex flex-col left-[50%] translate-x-[-50%] w-screen  max-w-[600px] max-h-[350px] ${
          !isLoading ? "max-h-screen" : ""
        } lg:max-w-20 bottom-0 fixed transition-all duration-500 ease-in-out `}
      >
        <div
          className={tw`flex flex-col items-center justify-center  mb-4 relative`}
        >
          <div
            style={{ backgroundImage: "url('/images/avatar.png')" }}
            className={tw`h-24 w-24 lg:h-36 lg:w-36 rounded-full  bg-no-repeat bg-cover`}
          />
          {data?.isAttended !== null && !isLoading
            ? (
              <div
                className={tw`absolute zIndex-99 bottom-[-14px] w-24 lg:w-32 text-xs lg:text-sm text-center p-2 font-bold rounded-md b ${(data
                    ?.isAttended
                  ? "bg-green-700"
                  : "bg-red-700")} text-white`}
              >
                {data
                    ?.isAttended
                  ? "Tham gia"
                  : "Không tham gia"}
              </div>
            )
            : ""}
        </div>
        <div
          class={tw`p-5 lg:p-10  ${
            (data?.isAttended === null || !data)
              ? "bg-white"
              : data?.isAttended
              ? "bg-green-300"
              : "bg-red-300"
          } bg-opacity-90 bottom-0 text-black rounded-t-2xl transition-all duration-500 ease-in-out `}
        >
          {!isLoading
            ? (
              <div className={tw`flex flex-col relative`}>
                <h1 className={tw`text-md lg:text-xl mb-2 lg:mb-4`}>
                  Thân gửi{" "}
                  <strong className={tw`text-lg lg:text-xl`}>
                    {data?.name}
                  </strong>{" "}
                  🥰
                </h1>
                <h2 className={tw`text-md lg:text-lg`}>
                  Vào ngày <strong>02/09/2021</strong> mình đã bắt đầu cuộc đời,
                </h2>
                <h2 className={tw`text-md lg:text-lg mb-2 lg:mb-4`}>
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
                    className={tw`text-blue-600 font-bold text-lg lg:text-xl text-center`}
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
                  Thời gian:{" "}
                  <strong className={tw`text-blue-600`}>
                    18:00, Chủ nhật 04/09/2022
                  </strong>
                </h2>
                <a
                  className={tw`text-red-800 font-medium mb-4`}
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
                {data?.isAttended || data?.isAttended === null
                  ? (
                    <div>
                      <h2
                        className={tw`text-md lg:text-lg text-blue-700 font-bold`}
                      >
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
                  className={tw`text-white flex flex-row gap-4 justify-center w-full mt-2`}
                >
                  <div
                    className={tw`${
                      !data?.isAttended || data?.isAttended === null
                        ? "flex-2"
                        : "flex-1"
                    } w-full transition-all ease-in-out transition-duration-200`}
                  >
                    <button
                      className={tw`w-full px-4 py-2 rounded-lg text-lg ${
                        !data?.isAttended
                          ? "bg-green-700"
                          : "bg-gray-700 opacity-50"
                      } transition-all ease-in-out transition-duration-200`}
                      onClick={() => !data?.isAttended ? dataHandler(true) : {}}
                    >
                      {!data?.isAttended || data?.isAttended === null
                        ? "Tham gia ✅"
                        : "✅"}
                    </button>
                  </div>
                  <div
                    className={tw`w-full ${
                      data?.isAttended || data?.isAttended === null
                        ? "flex-2"
                        : "flex-1"
                    } transition-all ease-in-out transition-duration-200`}
                  >
                    <button
                      className={tw`w-full px-4 py-2 rounded-lg text-lg ${(data
                          ?.isAttended || data?.isAttended === null
                        ? "bg-red-700"
                        : "bg-gray-700 opacity-50")} transition-all ease-in-out transition-duration-200`}
                      onClick={() =>
                        data?.isAttended
                          ? dataHandler(true)
                          : data?.isAttended === null
                          ? dataHandler(true, 0, true)
                          : {}}
                    >
                      {data?.isAttended || data?.isAttended === null
                        ? "Mình kẹt rồi 😭"
                        : "❌"}
                    </button>
                  </div>
                </div>
              </div>
            )
            : "Đang tìm thư mời..."}
        </div>
      </div>
    </div>
  );
}
