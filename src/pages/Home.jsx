import BotNavbar from "../components/layout/BotNavbar";
import TopNavbar from "../components/layout/TopNavbar";
import parkingCar from "../assets/parkingCar.png";
import search from "../assets/search.svg";
import CarCard from "../components/CarCard";
import { vehicleList } from "../data/VehicleData";
import { useNavigate } from "react-router-dom";


const Home = () => {
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
                    <div className="flex items-center px-[20px] pt-[10px]  justify-between">
                        <h2 className="text-[14px] font-bold text-[#131314]">
                            내 차량
                        </h2>

                        <button
                            type="button"
                            className="text-[12px] font-semibold text-[#B8BBC2]"
                        >
                            차량 변경하기
                        </button>
                    </div>

                    <div className="mt-[10px]">
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
                            className="cursor-pointer flex flex-col items-center justify-center h-[140px] rounded-[8px] bg-[#3B82F6] p-[14px] "
                        >   
                            <img
                                src={parkingCar}
                                alt="주차 도우미"
                                className="mx-auto h-[90px] w-[90px] object-contain"
                            />
                            <span className="text-[16px] font-bold text-white">
                                주차 도우미
                            </span>
                        </button>

                        <div className="flex flex-col gap-[8px]">
                            <button className="flex h-[66px] items-end rounded-[8px] border border-[#D5E4FF] bg-white p-[12px] text-left">
                                <span className="text-[15px] font-bold text-[#131314]">
                                    연습 시뮬레이션/* 기능 미구현 */
                                </span>
                            </button>

                            <button className="flex h-[66px] items-end rounded-[8px] border border-[#D5E4FF] bg-white p-[12px] text-left">
                                <span className="text-[15px] font-bold text-[#131314]">
                                    주차 난이도 판단/* 기능 미구현 */
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-[20px] px-[20px] pb-[20px]">
                <div className="h-[260px] rounded-[10px] bg-white p-[16px]">
                    <h2 className="text-[18px] font-bold text-[#131314]">
                        차량 구매 /* 기능 미구현 */
                    </h2>
                </div>
            </section>

            <section className="mb-[20px] px-[20px] pb-[20px]">
                <div className="h-[260px] rounded-[10px] bg-white p-[16px]">
                    <h2 className="text-[18px] font-bold text-[#131314]">
                        새롭게 바뀐 법률 /* 기능 미구현 */
                    </h2>
                </div>
            </section>

            <BotNavbar />
        </div>
        
    );
}

export default Home;