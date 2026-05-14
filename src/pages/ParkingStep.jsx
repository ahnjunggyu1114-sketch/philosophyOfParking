import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ParkingResult = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const result = location.state?.result;

    const guideSteps = result?.guideSteps || [];
    const warnings = result?.warnings || [];

    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const currentGuide = guideSteps[currentStepIndex];

    const handleNext = () => {
        if (currentStepIndex < guideSteps.length - 1) {
            setCurrentStepIndex((prev) => prev + 1);
            return;
        }

        navigate("/ParkingComplete");
    };

    if (!result || guideSteps.length === 0) {
        return (
            <div className="flex min-h-screen flex-col px-[30px] py-[40px]">
                <h1 className="text-[24px] font-bold text-[#131314]">
                    분석 결과가 없습니다.
                </h1>

                <button
                    type="button"
                    onClick={() => navigate("/ParkingHelper")}
                    className="mt-[24px] h-[52px] rounded-[8px] bg-[#3B82F6] text-[18px] font-bold text-white"
                >
                    다시 분석하기
                </button>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col px-[30px] pb-[60px] pt-[40px]">
            <section className="pb-[40px]">
                <h1 className="text-[20px] font-bold text-[#131314]">
                    {currentStepIndex + 1}. {currentGuide}
                </h1>
            </section>

            <section className="mb-[40px]">
                <div className="flex items-start justify-between">
                    {guideSteps.map((_, index) => {
                        const isActive = index === currentStepIndex;
                        const isPassed = index < currentStepIndex;

                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div
                                    className={`h-[14px] w-[14px] rounded-full ${
                                        isActive || isPassed
                                            ? "bg-[#3B82F6]"
                                            : "bg-[#C8CBD2]"
                                    }`}
                                />

                                <p
                                    className={`mt-[8px] text-center text-[13px] font-bold ${
                                        isActive
                                            ? "text-[#3B82F6]"
                                            : "text-[#C8CBD2]"
                                    }`}
                                >
                                    단계 {index + 1}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="mb-[40px]">
                <div className="flex h-[220px] w-full items-center justify-center rounded-[10px] border border-[#D5E4FF] bg-white">
                    <p className="text-[16px] font-bold text-[#B8BBC2]">
                        이미지/영상 영역 미구현
                    </p>
                </div>
            </section>

            <section className="mb-[40px]">
                <h2 className="text-[20px] font-bold text-[#131314]">
                    체크 포인트!
                </h2>

                <ul className="mt-[24px] flex flex-col gap-[14px]">
                    {warnings.map((warning, index) => (
                        <li
                            key={index}
                            className="flex gap-[10px] text-[16px] font-medium leading-[150%] text-[#76787C]"
                        >
                            <span className="text-[24px] font-bold text-[#3B82F6]">
                                ✓
                            </span>
                            <span>{warning}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <button
                type="button"
                onClick={handleNext}
                className="mt-auto h-[52px] rounded-[8px] bg-[#3B82F6] text-[18px] font-bold text-white"
            >
                다음
            </button>
        </div>
    );
};

export default ParkingResult;