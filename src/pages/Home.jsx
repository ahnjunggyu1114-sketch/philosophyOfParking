import BotNavbar from "../components/layout/BotNavbar";
import TopNavbar from "../components/layout/TopNavbar";
import parkingCar from "../assets/parkingCar.png";
import search from "../assets/search.svg";
import simulation from "../assets/simulation.png";
import parkingdifficulty from "../assets/parkingdifficulty.png";
import CarCard from "../components/CarCard";
import CarRecommendCard from "../components/CarRecommendCard";
import { vehicleList } from "../data/VehicleData";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const lawItems = [
    "교차로 우회전 일시정지 및 집중 단속 예정",
    "음주운전 방지 장치 의무화(2026.10.24) 시행 예정",
    "약물 운전 처벌 기준 강화 시행 예정",
    ];
    const navigate = useNavigate();
    const selectedVehicle = vehicleList[0];
    
    return (
        <div>
            <TopNavbar />

            <section className="flex flex-col gap-[4px] px-[20px] pb-[20px]">
                <p className="text-[14px] text-[#76787C] font-semibold">아반떼 하이브리드</p>
                <h4 className="text-[24px] text-[#131314] font-bold leading-[120%] ">
                    내 차폭에 맞는 주차장을
                    <br />
                    찾아보세요
                </h4>
            </section>

            {/* 서치바 */}
            <section className="px-[20px] pb-[20px]">
                <div className="flex h-[44px] items-center gap-[10px] rounded-[10px] border border-[#7BA7FF] bg-white px-[14px]">
                    <img src={search} alt="검색" />
                    <p className="text-[16px] font-semibold text-[#C8CBD2]">
                        주차장 찾기 /* 기능 미구현 */
                    </p>
                </div>
            </section>

            <section className="mb-[20px] px-[20px] pb-[20px]">
                <div className="rounded-[10px] border border-[#D5E4FF] bg-white p-[16px]">
                    <div className="flex items-center px-[20px] pt-[10px] justify-between">
                        <h2 className="text-[14px] font-bold text-[#131314]">
                            내 차량
                        </h2>

                        <button
                            type="button"
                            className="text-[12px] font-semibold text-[#B8BBC2]"
                        >
                            차량 변경하기(작동X)
                        </button>
                    </div>

                    <div className="mt-[3px]">
                        <CarCard vehicle={selectedVehicle} />
                    </div>
                </div>
            </section>

            <section className="mb-[20px] px-[20px] pb-[20px]">
                <div className="rounded-[10px] bg-white p-[16px]">
                    <h2 className="text-[18px] font-bold text-[#131314]">
                        AI 주차 도우미
                    </h2>
                    <div className="mt-[16px] grid grid-cols-2 gap-[8px]">
                        <button 
                            type="button"
                            onClick={() => navigate("/ParkingHelper")}
                            className="cursor-pointer flex flex-col items-center  h-[240px] rounded-[8px] bg-[#3B82F6] p-[14px] "
                        >   
                            <img
                                src={parkingCar}
                                alt="주차 도우미"
                                className="mt-[12px] h-[100px] w-[100px] object-contain"
                            />
                            <div className="mt-[48px] flex flex-col items-center gap-[2px]">
                                <span className="text-[12px] font-bold leading-none text-[#D8E6FD]">
                                    주차하러 가기
                                </span>
                                <span className="text-[16px] font-bold leading-none text-white">
                                    주차 도우미
                                </span>
                            </div>
                        </button>

                        <div className="flex flex-col gap-[8px]">
                            <button className="relative h-[116px] overflow-hidden rounded-[8px] border border-[#D5E4FF] bg-white text-left">
                                <div className="absolute left-[12px] top-[10px] z-0">
                                    <p className="text-[11px] font-semibold leading-none text-[#9CA0A8]">
                                        내 차 기준 주차연습
                                    </p>
                                    <h3 className="mt-[6px] text-[15px] font-bold leading-none text-[#131314]">
                                        연습 시뮬레이션(작동X)
                                    </h3>
                                </div>

                                <img
                                    src={simulation}
                                    alt="연습 시뮬레이션"
                                    className="absolute bottom-0 right-0 z-0 h-[70px] w-[100px] object-contain opacity-80"
                                />
                            </button>

                            <button className="relative h-[116px] overflow-hidden rounded-[8px] border border-[#D5E4FF] bg-white text-left">
                                <div className="absolute left-[12px] top-[10px] z-0">
                                    <p className="text-[11px] font-semibold leading-none text-[#9CA0A8]">
                                        주차 공간 결정
                                    </p>
                                    <h3 className="mt-[6px] text-[15px] font-bold leading-none text-[#131314]">
                                        주차 난이도 판단(작동X)
                                    </h3>
                                </div>

                                <img
                                    src={parkingdifficulty}
                                    alt="주차 난이도 판단"
                                    className="absolute bottom-0 right-0 z-0 h-[70px] w-[100px] object-contain opacity-80"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-[20px] px-[20px] pb-[20px]">
                <div className="rounded-[10px] bg-white p-[16px]">
                    <h2 className="text-[18px] font-bold text-[#131314]">
                        차량 구매 (작동X)
                    </h2>

                    <p className="mt-[4px] text-[14px] font-semibold text-[#9CA0A8]">
                        차폭과 전장이 좁은 초보자용 자동차를 추천해드려요
                    </p>

                    <div className="mt-[20px] flex gap-[16px] overflow-x-auto">
                        {[1, 2].map((item) => (
                            <div key={item} className="min-w-[220px]">
                                <CarRecommendCard />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mb-[20px] px-[20px] pb-[120px]">
                <div className="rounded-[10px] bg-white px-[24px] py-[24px]">
                    <div className="flex items-center justify-between">
                        <span className="text-[22px] font-bold text-[#131314]">
                            새롭게 바뀐 법률(작동X)
                        </span>

                        <button
                            type="button"
                            className="text-[16px] font-bold text-[#3B82F6]"
                        >
                            자세히 알아보기
                        </button>
                    </div>

                    <div className="mt-[36px] flex flex-col">
                        <span className="text-[18px] font-bold text-[#5F6369]">
                            2026년 새롭게 바뀌는 법
                        </span>
                        <div className="mt-[20px] flex flex-col gap-[12px]">
                            {lawItems.map((item) => (
                                <div key={item} className="flex gap-[10px]">
                                    <span className="text-[14px] font-semibold text-[#9CA0A8]">
                                        •
                                    </span>
                                    <span className="text-[14px] font-semibold leading-[140%] text-[#9CA0A8]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div> 
                    </div>
                </div>
            </section>

            <BotNavbar />
        </div>
        
    );
}

export default Home;