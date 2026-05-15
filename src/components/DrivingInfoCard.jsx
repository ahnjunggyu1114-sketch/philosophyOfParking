import pen from '../assets/pen.svg'

const DrivingInfoCard = ({ variant = "default" }) => {
    const isModal = variant === "modal";

    return (
        <section className="mt-[24px]">
            <div className="grid grid-cols-2 gap-[12px]">
                <div className="h-[92px] bg-[#F9FAFB] rounded-[10px] border border-[#D5E4FF] px-[16px] py-[14px]">
                    <div className="flex items-center justify-between">
                        <span
                            className={`font-bold text-[#3B82F6] ${
                                isModal ? "text-[11px]" : "text-[13px]"
                            }`}
                        >
                            운전 경력
                        </span>

                        <button
                            type="button"
                            className="h-[16px] w-[16px]"
                        >
                            <img
                                src={pen}
                                alt="편집"
                                className="h-full w-full"
                            />
                        </button>
                    </div>

                    <span
                        className={`mt-[18px] block font-bold text-[#131314] ${
                            isModal ? "text-[13px]" : "text-[16px]"
                        }`}
                    >
                        3개월
                    </span>
                </div>

                <div className="h-[92px] bg-[#F9FAFB] rounded-[10px] border border-[#D5E4FF] px-[16px] py-[14px]">
                    <span
                        className={`block font-bold text-[#3B82F6] ${
                            isModal ? "text-[11px]" : "text-[13px]"
                        }`}
                    >
                        운전 실력
                    </span>

                    <span
                        className={`mt-[18px] block whitespace-nowrap font-bold text-[#131314] ${
                            isModal ? "text-[13px]" : "text-[16px]"
                        }`}
                    >
                        Lv 2. 새싹 운전자
                    </span>
                </div>
            </div>

            <div className="mt-[28px]">
                <span
                    className={`block text-center font-bold text-[#3B82F6] ${
                        isModal ? "text-[14px]" : "text-[17px]"
                    }`}
                >
                    3개월차 평균
                </span>

                <div className="mt-[10px] h-[8px] w-full overflow-hidden rounded-full bg-[#EEF1F6]">
                    <div className="h-full w-[28%] rounded-full bg-[#3B82F6]" />
                </div>

                <div className="mt-[8px] flex items-center justify-between">
                    <span
                        className={`font-semibold text-[#76787C] ${
                            isModal ? "text-[12px]" : "text-[14px]"
                        }`}
                    >
                        초보자
                    </span>

                    <span
                        className={`font-semibold text-[#76787C] ${
                            isModal ? "text-[12px]" : "text-[14px]"
                        }`}
                    >
                        실력자
                    </span>
                </div>
            </div>
        </section>
    );
};

export default DrivingInfoCard;