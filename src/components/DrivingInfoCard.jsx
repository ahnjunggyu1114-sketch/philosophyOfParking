import pen from '../assets/pen.svg'

const DrivingInfoCard = () => {
    return (
        <section className="mt-[24px]">
            <div className="grid grid-cols-2 gap-[10px]">
                <div className="rounded-[10px] border border-[#D5E4FF] px-[14px] py-[14px]">
                    <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold text-[#3B82F6]">
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

                    <span className="mt-[10px] block text-[16px] font-bold text-[#131314]">
                        3개월
                    </span>
                </div>

                <div className="rounded-[10px] border border-[#D5E4FF] px-[14px] py-[14px]">
                    <span className="text-[13px] font-bold text-[#3B82F6]">
                        운전 실력
                    </span>

                    <span className="mt-[10px] block text-[16px] font-bold text-[#131314]">
                        Lv 2. 새싹 운전자
                    </span>
                </div>
            </div>

            <div className="mt-[22px]">
                <span className="block text-center text-[16px] font-bold text-[#3B82F6]">
                    3개월차 평균
                </span>

                <div className="mt-[10px] h-[8px] w-full overflow-hidden rounded-full bg-[#EEF1F6]">
                    <div className="h-full w-[24%] rounded-full bg-[#3B82F6]" />
                </div>

                <div className="mt-[8px] flex items-center justify-between">
                    <span className="text-[14px] font-semibold text-[#76787C]">
                        초보자
                    </span>
                    <span className="text-[14px] font-semibold text-[#76787C]">
                        실력자
                    </span>
                </div>
            </div>
        </section>
    );
};

export default DrivingInfoCard;