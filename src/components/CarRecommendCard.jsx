import car_ray from "../assets/car_ray.png";
import carlogo from "../assets/carlogo.png";

const CarRecommendCard = () => {
    return (
        <article className="w-full overflow-hidden rounded-[10px] border border-[#D5E4FF] bg-[#F4F7FC]">
            <div className="h-[120px] w-full overflow-hidden bg-white">
                <img
                    src={car_ray}
                    alt="추천 차량 이미지"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="px-[14px] pb-[16px] pt-[14px]">
                <p className="text-[14px] font-bold text-[#6EA0FF]">
                    초보 적합도 85%
                </p>

                <div className="mt-[10px] flex items-center">
                    <img
                        src={carlogo}
                        alt="로고"
                        className="h-[18px] w-[80px] object-contain"
                    />
                </div>

                <h2 className="mt-[10px] text-[20px] font-bold text-[#000000]">
                    기아 레이 2026
                </h2>

                <div className="mt-[22px] flex flex-col gap-[8px]">
                    <div className="flex items-center justify-between">
                        <p className="text-[14px] font-bold text-[#7A7D85]">
                            기본 가격
                        </p>
                        <p className="text-[17px] font-bold text-[#3B82F6]">
                            1,490만원~
                        </p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-[14px] font-bold text-[#7A7D85]">
                            중고 시세
                        </p>
                        <p className="text-[17px] font-bold text-[#3B82F6]">
                            1,080만원~
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CarRecommendCard;