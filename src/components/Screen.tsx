import React, {
  Children,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import thai_amphures from "../assets/thai_amphures.json";
import thai_tambons from "../assets/thai_tambons.json";
import thai_provinces from "../assets/thai_provinces.json";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TimeListbox } from "./TimeListbox";
import { RoundedButton } from "./RoundedButton";
import { UpDownCounter } from "./UpDownCounter";
import { RadioButton } from "./RadioButton";
import { DestinationMap } from "./DestinationMap";
import { AutocompleteLocation } from "./AutocompleteLocation";

const ChooseProvices = () => {
  return (
    <div className="flex flex-col grow gap-4 w-full h-full p-4">
      <h2 className="flex justify-center text-xl py-4">
        คุณต้องการบริการคนขับรถในพื้นที่
      </h2>
      <div className="flex w-full justify-evenly gap-2">
        <RoundedButton>กรุงเทพมหานคร</RoundedButton>
        <RoundedButton>นนทุบรี</RoundedButton>
      </div>
      <div className="flex w-full justify-evenly gap-2">
        <RoundedButton>สมุทรปราการ</RoundedButton>
        <RoundedButton>ปทุมธานี</RoundedButton>
      </div>
      <div className="flex w-full justify-evenly gap-2">
        <RoundedButton>สมุทรสาคร</RoundedButton>
        <RoundedButton>นครปฐม</RoundedButton>
      </div>
    </div>
  );
};

const BookDate = () => {
  return (
    <div>
      <h2>Book with date</h2>
    </div>
  );
};

const BookNow = () => {
  return (
    <div className="flex flex-col grow gap-4 w-full h-full p-4">
      <h2 className="flex justify-center text-xl py-4">
        ระบุวัน และ เวลาเริ่มงาน
      </h2>
      <TimeListbox />
    </div>
  );
};

const HireDuration = () => {
  const [perDay, setPerDay] = useState(false);
  const [perHour, setPerHour] = useState(false);
  const [count, setCount] = useState(1);
  const PER_HOUR_PRICE = 2400;
  return (
    <div className="flex flex-col grow gap-2 w-full h-full p-4">
      <h2 className="flex justify-center text-xl py-4">
        ระยะเวลาที่คุณต้องการบริการคนขับรถ
      </h2>
      <div className="flex w-full justify-evenly gap-2 h-56 items-start">
        <div className="flex flex-col w-full justify-center">
          <RoundedButton
            onClick={() => {
              setPerDay(() => true);
              setPerHour(() => false);
            }}
            className={perDay ? " bg-green-500 text-white" : ""}
          >
            รายวัน
          </RoundedButton>
          <div className={`${perDay ? "visible" : "invisible"}`}>
            <UpDownCounter count={count} setCount={setCount} />
            <div className="flex justify-around">
              <span className=" text-green-600 text-sm font-medium px-2.5 py-0.5 rounded border border-green-700">
                วันละ {PER_HOUR_PRICE} บาท
              </span>
              <span className=" text-green-600 text-sm font-medium px-2.5 py-0.5 rounded border border-green-700">
                วันละ {PER_HOUR_PRICE * count} บาท
              </span>
            </div>
            <div className="text-sm text-slate-500 pt-2">
              * ระยะเวลาการให้บริการ 8 ชั่วโมง (ไม่รวมเวลาพัก)
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <RoundedButton
            onClick={() => {
              setPerHour(() => true);
              setPerDay(() => false);
            }}
            className={perHour ? " bg-green-500 text-white" : ""}
          >
            รายชั่วโมง
          </RoundedButton>
          <fieldset className={`${perHour ? "visible" : "invisible"} pt-4`}>
            <legend className="sr-only">Countries</legend>
            <RadioButton name="rate" value="1" key={1}>
              คนขับรถส่วนตัว 3 ชั่วโมง 900 บาท
            </RadioButton>
            <RadioButton name="rate" value="2" key={2}>
              คนขับรถส่วนตัว 4 ชั่วโมง 1200 บาท
            </RadioButton>
            <RadioButton name="rate" value="3" key={3}>
              คนขับรถส่วนตัว 5 ชั่วโมง 1500 บาท
            </RadioButton>
            <div className="text-slate-500 text-sm">
              คุ้มค่ากว่าเมื่อเลือกบริการคนขับรถรายวัน หากใช้บริการมากกว่า 5
              ชั่วโมง
            </div>
          </fieldset>
        </div>
      </div>
      <hr className="w-full h-0.5 my-1" />
      <div className="flex flex-col justify-start w-full px-4">
        <h5 className="font-bold text-start text-slate-500">
          เงื่อนไขการให้บริการ
        </h5>
        <ul className="list-disc text-sm text-slate-500">
          <li>
            ผู้ให้บริการคนขับรถบนแพลตฟอร์ม SAIJAI เป็นผู้ให้บริการอิสระ
            ไม่ได้เป็นพนักงาน หรือลูกจ้างของบริษัทแต่อย่างใด
          </li>
          <li>
            ค่าบริการนี้เป็นค่าบริการคนขับรถระหว่างเวลา 6.00-20.00 น.
            ค่าบริการอาจเปลี่ยนแปลงสำหรับการให้บริการนอกเหนือเวลาดังกล่าว
            กรุณาติดต่อเจ้าหน้าที่ SAIJAI สำหรับรายละเอียดเพิ่มเติม
          </li>
          <li>
            ค่าบริการนี้เป็นราคาเหมาสำหรับบริการคนขับรถเท่านั้น ไม่รวมยานพาหนะ
            ไม่จำกัดเส้นทาง
          </li>
          <li>
            ค่าบริการนี้ไม่ครอบคลุม ค่าน้ำมัน ค่าที่จอดรถ ค่าทางด่วน ค่าที่พัก
          </li>
          <li>อาจมีค่าใช้จ่ายเพิ่มเติมในกรณีรับรถ-คืนรถคนละจุด</li>
          <li>
            ไม่รับบริการขับรถที่อยู่ในสภาพไม่สมบูรณ์ รถที่ผิดกฎหมาย สวมทะเบียน
            แผ่นป้ายทะเบียนไม่ครบ รถที่ถูกโจรกรรมมา
          </li>
          <li>ไม่รับบริการขนส่งและขับรถที่มีสิ่งผิดกฎหมายอยู่บนรถ</li>
        </ul>
      </div>
    </div>
  );
};

const DestinationAddress = () => {
  const [byManual, setByManual] = useState(false);
  const [byMap, setByMap] = useState(false);
  const [province, setProvince] = useState("");
  const [amphur, setAmphur] = useState("");
  const [tambon, setTambon] = useState("");
  return (
    <div className="flex flex-col grow gap-4 w-full h-full p-4">
      <h2 className="flex justify-center text-xl py-4">
        ระบุสถานที่สำหรับรับบริการ
      </h2>
      <div className="flex w-full justify-evenly gap-2 items-start">
        <div className="flex flex-col w-full justify-center">
          <RoundedButton
            onClick={() => {
              setByManual(() => true);
              setByMap(() => false);
            }}
            className={byManual ? " bg-green-500 text-white" : ""}
          >
            ระบุที่อยู่ด้วยต้นเอง
          </RoundedButton>
        </div>
        <div className="flex flex-col w-full">
          <RoundedButton
            onClick={() => {
              setByManual(() => false);
              setByMap(() => true);
            }}
            className={byMap ? " bg-green-500 text-white" : ""}
          >
            ค้นหาด้วยแผนที่
          </RoundedButton>
        </div>
      </div>

      <div className={(byManual ? "visible" : "hidden") + " w-full"}>
        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ที่อยู่ - ห้องเลขที่, บ้านเลขที่, ตึก, หมู่บ้าน, ถนน
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="province"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            จังหวัด
          </label>
          <div className="mt-2">
            <select
              id="province"
              name="province"
              autoComplete="province-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              onChange={(e) => {
                setProvince(() => e.target.value);
              }}
            >
              <option value="">เลือกจังหวัด</option>
              {thai_provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name_th}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex col-span-12 gap-4">
          <div className="col-span-6 grow">
            <label
              htmlFor="amphur"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              อำเภอ / เขต
            </label>
            <div className="mt-2">
              <select
                id="amphur"
                name="amphur"
                autoComplete="amphur-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setAmphur(() => e.target.value);
                }}
              >
                <option value="">เลือกอำเภอ / เขต</option>
                {thai_amphures
                  .filter((amphur) => amphur.province_id === Number(province))
                  .map((amphur) => (
                    <option key={amphur.id} value={amphur.id}>
                      {amphur.name_th}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-span-6 grow">
            <label
              htmlFor="tambon"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              แขวง/ตำบล (ระบุหรือไม่ก็ได้)
            </label>
            <div className="mt-2">
              <select
                id="tambon"
                name="tambon"
                autoComplete="tambon-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  setTambon(() => e.target.value);
                }}
              >
                <option value="">เลือกตำบล</option>
                {thai_tambons
                  .filter((tambon) => tambon.amphure_id === Number(amphur))
                  .map((tambon) => (
                    <option key={tambon.id} value={tambon.id}>
                      {tambon.name_th}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="return-location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            ระบุสถานที่รับ-ส่งรถ รุ่นรถ
          </label>
          <div className="mt-2">
            <textarea
              id="return-location"
              name="return-location"
              rows={3}
              className="block rounded-md w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-green-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div className={(byMap ? "visible" : "hidden") + " w-full"}>
        <div className="flex flex-col gap-2">
          <AutocompleteLocation />
          <DestinationMap />
        </div>
      </div>
    </div>
  );
};

interface NavigatorProps {
  screenIndex: number;
  totalScreen: number;
  onPrevClick: () => void;
  onNextClick: () => void;
}
const Navigator = ({
  screenIndex,
  totalScreen,
  children,
  onPrevClick,
  onNextClick,
}: PropsWithChildren<NavigatorProps>) => {
  return (
    <div className="flex flex-col h-full p-4 justify-start">
      {children}
      <div className="flex justify-between">
        {screenIndex > 1 ? (
          <button
            className="px-8 py-2 bg-green-800 text-white"
            onClick={onPrevClick}
          >
            ก่อนหน้า
          </button>
        ) : (
          <div></div>
        )}
        {totalScreen > 0 && screenIndex + 1 <= totalScreen ? (
          <button
            className="px-8 py-2 bg-green-800 text-white"
            onClick={onNextClick}
          >
            ถัดไป
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

interface ScreensProps {
  screenIndex: number;
  setTotalScreen: React.Dispatch<React.SetStateAction<number>>;
}
const Screens = ({
  children,
  screenIndex,
  setTotalScreen,
}: PropsWithChildren<ScreensProps>) => {
  const arrayChildren = Children.toArray(children);
  useEffect(() => {
    setTotalScreen(() => arrayChildren.length);
  }, [arrayChildren.length]);
  if (screenIndex - 1 < arrayChildren.length && screenIndex > 0) {
    return arrayChildren[screenIndex - 1];
  }
  return null;
};

export const ScreenBookDate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const [totalScreen, setTotalScreen] = useState(0);
  const { id } = useParams();
  if (id !== undefined) {
    return (
      <Navigator
        screenIndex={Number(id)}
        totalScreen={totalScreen}
        onNextClick={() => {
          navigate("/bookdate/" + (Number(id) + 1), {
            state: { background },
          });
        }}
        onPrevClick={() => {}}
      >
        <Screens screenIndex={Number(id)} setTotalScreen={setTotalScreen}>
          <ChooseProvices />
          <BookDate />
          <HireDuration />
          <DestinationAddress />
        </Screens>
      </Navigator>
    );
  }
  return null;
};
export const ScreenBookNow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const [totalScreen, setTotalScreen] = useState(0);
  const { id } = useParams();
  if (id !== undefined) {
    return (
      <Navigator
        screenIndex={Number(id)}
        totalScreen={totalScreen}
        onNextClick={() => {
          navigate("/booknow/" + (Number(id) + 1), {
            state: { background },
          });
        }}
        onPrevClick={() => {
          navigate(-1);
        }}
      >
        <Screens screenIndex={Number(id)} setTotalScreen={setTotalScreen}>
          <ChooseProvices />
          <BookNow />
          <HireDuration />
          <DestinationAddress />
        </Screens>
      </Navigator>
    );
  }
  return null;
};
