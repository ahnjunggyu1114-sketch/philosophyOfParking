import { useNavigate } from "react-router-dom";

const ParkingComplete = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen flex-col px-[30px] pb-[60px] pt-[120px]">
            {/* 축하 이미지 영역 미구현 */}
            <section className="h-[260px] w-full" />

            <section className="text-center">
                <h1 className="text-[28px] font-bold text-[#131314]">
                    주차를 완료했어요!
                </h1>

                <p className="mt-[20px] text-[20px] font-semibold leading-[150%] text-[#8A8D94]">
                    여러번 반복하면 더 익숙해질거에요
                    <br />
                    이번 경험을 추가할까요?
                </p>

                <button
                    type="button"
                    className="mt-[36px] h-[52px] rounded-[10px] border border-[#C8CBD2] px-[24px] text-[18px] font-semibold text-[#8A8D94]"
                >
                    + 연습 시뮬레이션에 추가
                </button>
            </section>

            <button
                type="button"
                onClick={() => navigate("/")}
                className="mt-auto h-[56px] rounded-[10px] bg-[#3B82F6] text-[20px] font-bold text-white"
            >
                홈으로
            </button>
        </div>
    );
};

export default ParkingComplete;