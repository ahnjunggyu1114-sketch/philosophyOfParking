import BotNavbar from "../components/layout/BotNavbar";
import TopNavbar from "../components/layout/TopNavbar";
import CarCard from "../components/CarCard";
import { vehicleList } from "../data/VehicleData";

const MyCar = () => {
    return (
        <div className="flex min-h-screen flex-col pb-[180px]">
            <TopNavbar />
            <div className="px-[30px]">
                <section className="pt-[24px] pb-[20px]">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[24px] font-bold text-[#131314]">
                            My Car!!
                        </h1>

                        <button
                            type="button"
                            className="text-[16px] font-bold text-[#3B82F6]"
                        >
                            + 차량 추가
                        </button>
                    </div>

                    <p className="mt-[16px] text-right text-[16px] font-semibold text-[#76787C]">
                        총 {vehicleList.length}개
                    </p>
                </section>

                <section className="flex flex-col gap-[20px]">
                    {vehicleList.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            className="rounded-[10px] border border-[#D5E4FF] bg-white"
                        >
                            <CarCard vehicle={vehicle} />
                        </div>
                    ))}
                </section>
            </div>
            <BotNavbar />
        </div>
    );
};

export default MyCar;