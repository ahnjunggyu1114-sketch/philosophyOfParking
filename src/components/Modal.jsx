import profile from "../assets/profile.svg";
import DrivingInfoCard from "./DrivingInfoCard";
import bell from "../assets/bell.svg";
import settings from "../assets/setting.svg";

const menuItems = [
    "차량 정보 관리",
    "이용 안내",
    "공지사항",
    "계정 설정",
];

const Modal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex">
            <aside className="h-full w-[75%] max-w-[430px] overflow-y-auto bg-white px-[30px] py-[60px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[20px]">
                        <img
                            src={profile}
                            alt="프로필"
                            className="h-[70px] w-[70px]"
                        />

                        <div>
                            <span className="block text-[24px] font-bold text-[#131314]">
                                홍길동
                            </span>
                            <span className="mt-[4px] block text-[16px] font-semibold text-[#9CA0A8]">
                                더 뉴 아반떼 HEV
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-[16px]">
                        <button
                            type="button"
                            className="text-[28px] text-[#B8BBC2]"
                        >
                            <img src={bell} alt="종" />
                        </button>

                        <button
                            type="button"
                            className="text-[28px] text-[#B8BBC2]"
                        >
                            <img src={settings} alt="설정" />
                        </button>
                    </div>
                </div>

                <DrivingInfoCard />

                <div className="mt-[48px]">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            type="button"
                            className="flex h-[72px] w-full items-center border-t border-[#EEF1F6] text-left text-[20px] font-bold text-[#131314] last:border-b"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="mt-[60px] -mx-[30px] bg-[#F6F8FC] px-[30px] py-[32px]">
                    <span className="block text-[18px] font-bold text-[#9CA0A8]">
                        1:1 문의하기
                    </span>

                    <span className="mt-[10px] block text-[26px] font-bold text-[#76787C]">
                        02-345-2345
                    </span>

                    <span className="mt-[10px] block text-[16px] font-bold text-[#9CA0A8]">
                        (평일 오후 00:00~00:00)
                    </span>
                </div>
            </aside>

            <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-black/30"
                aria-label="메뉴 닫기"
            />
        </div>
    );
};

export default Modal;