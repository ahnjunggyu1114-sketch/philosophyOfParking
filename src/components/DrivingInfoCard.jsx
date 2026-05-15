import pen from '../assets/pen.svg'

const DrivingInfoCard = () => {
    return (
        <section className="mt-[32px]">
            <div className="grid grid-cols-2 gap-[12px]">
                <div className="rounded-[10px] border border-[#D5E4FF] px-[18px] py-[18px]">
                    <div className="flex items-center justify-between">
                        <span className="text-[14px] font-bold text-[#3B82F6]">
                            운전 경력
                        </span>

                        <button
                            type="button"
                            className="text-[16px] text-[#3B82F6]"
                        >
                            <img src={pen} alt="편집" />
                        </button>
                    </div>

                    <span className="mt-[14px] block text-[18px] font-bold text-[#131314]">
                        3개월
                    </span>
                </div>

                <div className="rounded-[10px] border border-[#D5E4FF] px-[18px] py-[18px]">
                    <span className="text-[14px] font-bold text-[#3B82F6]">
                        운전 실력
                    </span>

                    <span className="mt-[14px] block text-[18px] font-bold text-[#131314]">
                        Lv 2. 새싹 운전자
                    </span>
                </div>
            </div>

            <div className="mt-[28px]">
                <span className="block text-center text-[18px] font-bold text-[#3B82F6]">
                    3개월차 평균
                </span>

                <div className="mt-[14px] h-[10px] w-full overflow-hidden rounded-full bg-[#EEF1F6]">
                    <div className="h-full w-[24%] rounded-full bg-[#3B82F6]" />
                </div>

                <div className="mt-[10px] flex items-center justify-between">
                    <span className="text-[16px] font-semibold text-[#76787C]">
                        초보자
                    </span>
                    <span className="text-[16px] font-semibold text-[#76787C]">
                        실력자
                    </span>
                </div>
            </div>
        </section>
    );
};

export default DrivingInfoCard;