import { useRef, useState } from "react";

const ParkingAreaMarkStep = ({ imagePreview, onBack, onSave }) => {
    const imageRef = useRef(null);
    const [points, setPoints] = useState([]);

    const handleImageClick = (event) => {
        if (points.length >= 4) return;

        const image = imageRef.current;
        const rect = image.getBoundingClientRect();

        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;

        const xRatio = clickX / rect.width;
        const yRatio = clickY / rect.height;

        const newPoint = {
            x: clickX,
            y: clickY,
            xRatio,
            yRatio,
        };

        setPoints((prev) => [...prev, newPoint]);
    };

    const handleUndoPoint = () => {
        setPoints((prev) => prev.slice(0, -1));
    };

    const handleResetPoints = () => {
        setPoints([]);
    };

    const handleSave = () => {
        if (points.length !== 4) {
            alert("주차구역 꼭짓점 4개를 모두 선택해주세요.");
            return;
        }

        const ratioPoints = points.map((point) => ({
            xRatio: point.xRatio,
            yRatio: point.yRatio,
        }));

        onSave(ratioPoints);
    };

    const polygonPoints = points
        .map((point) => `${point.x},${point.y}`)
        .join(" ");

    return (
        <>
            <section className="pt-[40px] pb-[24px]">
                <h1 className="text-[20px] font-bold text-[#131314]">
                    주차구역 표시
                </h1>
                <p className="mt-[6px] text-[14px] font-medium text-[#76787C]">
                    주차하고 싶은 공간의 꼭짓점 4개를 순서대로 눌러주세요.
                </p>
            </section>

            <section className="flex flex-1 flex-col">
                <div
                    className="relative h-[430px] w-full overflow-hidden rounded-[10px] bg-white"
                    onClick={handleImageClick}
                >
                    <img
                        ref={imageRef}
                        src={imagePreview}
                        alt="주차구역 선택"
                        className="h-full w-full object-cover"
                    />

                    <svg className="pointer-events-none absolute left-0 top-0 h-full w-full">
                        {points.length >= 2 && (
                            <polyline
                                points={polygonPoints}
                                fill="none"
                                stroke="#3B82F6"
                                strokeWidth="3"
                            />
                        )}

                        {points.length === 4 && (
                            <polygon
                                points={polygonPoints}
                                fill="rgba(59, 130, 246, 0.25)"
                                stroke="#3B82F6"
                                strokeWidth="3"
                            />
                        )}
                    </svg>

                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="absolute flex h-[24px] w-[24px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3B82F6] text-[12px] font-bold text-white"
                            style={{
                                left: `${point.x}px`,
                                top: `${point.y}px`,
                            }}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>

                <div className="mt-[16px] flex gap-[10px]">
                    <button
                        type="button"
                        onClick={onBack}
                        className="h-[44px] flex-1 rounded-[8px] bg-white text-[14px] font-bold text-[#76787C]"
                    >
                        이전
                    </button>

                    <button
                        type="button"
                        onClick={handleUndoPoint}
                        className="h-[44px] flex-1 rounded-[8px] bg-white text-[14px] font-bold text-[#76787C]"
                    >
                        되돌리기
                    </button>

                    <button
                        type="button"
                        onClick={handleResetPoints}
                        className="h-[44px] flex-1 rounded-[8px] bg-white text-[14px] font-bold text-[#76787C]"
                    >
                        다시 선택
                    </button>
                </div>

                <button
                    type="button"
                    onClick={handleSave}
                    className="mt-auto h-[52px] rounded-[8px] bg-[#3B82F6] text-[18px] font-bold text-white"
                >
                    저장하기
                </button>
            </section>
        </>
    );
};

export default ParkingAreaMarkStep;