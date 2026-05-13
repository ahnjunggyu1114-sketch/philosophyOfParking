import BotNavbar from "../components/layout/BotNavbar";
import TopNavbar from "../components/layout/TopNavbar";
import CarCard from "../components/CarCard";
import { vehicleList } from "../data/VehicleData";
import { useNavigate } from "react-router-dom";

const AiHelper = () => {
    const navigate = useNavigate();
    const selectedVehicle = vehicleList[0];

    return (
        <div className="flex flex-col ">
            <TopNavbar />
            <div className="px-[30px]" >
                <section className="pl-[10px] pt-[21px] pb-[20px]">
                    <h1 className="text-[24px] font-bold">AI 운전 도우미</h1>
                </section>


                <section className="mb-[20px] pb-[20px]">
                    <div className="rounded-[10px] border border-[#D5E4FF] bg-white p-[16px]">
                        <div className="flex items-center justify-between">
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


                <section className="grid grid-cols-2 gap-[13px] pt-[30px] pb-[30px]">
                    <button className="cursor-pointer flex h-[126px] items-end rounded-[10px] bg-[#3B82F6] p-[20px] ">
                        <span className="text-[18px] font-bold text-[#131314]">
                            사고시 도움 /* 기능 미구현 */
                        </span>
                    </button>

                    <button 
                        type="button"
                        onClick={() => navigate("/ParkingHelper")}
                        className="cursor-pointer flex h-[126px] items-end rounded-[10px] bg-[#3B82F6] p-[20px] "
                    >
                        <div className="flex flex-col items-start gap-[2px]">
                            <span className="block text-[16px] text-[#D8E6FD] font-medium ">
                                주차하러 가기
                            </span>
                            <span className="block text-[22px] font-bold text-white">
                                주차 도우미
                            </span>
                        </div>
                    </button>

                    <button className="flex h-[126px] items-end rounded-[10px] bg-[#3B82F6] p-[20px] ">
                        <span className="text-[18px] font-bold text-[#131314]">
                            연습 시뮬레이션 /* 기능 미구현 */
                        </span>
                    </button>

                    <button className="flex h-[126px] items-end rounded-[10px] bg-[#3B82F6] p-[20px] ">
                        <span className="text-[18px] font-bold text-[#131314]">
                            공터 찾기 /* 기능 미구현 */
                        </span>
                    </button>
                </section>


                <section className="  h-[154px] rounded-[10px] bg-white">
                    <p className="text-[14px] p-[16px] font-semibold text-[#131314]">
                        최근 사용 이력 /* 기능 미구현 */
                    </p>
                    <h2 className="mt-[36px] p-[16px] text-[18px] font-bold text-[#131314]">
                        차선 유지 연습 시뮬레이션
                    </h2>
                </section>
            </div>

            <BotNavbar />
        </div>
    );
};

export default AiHelper;