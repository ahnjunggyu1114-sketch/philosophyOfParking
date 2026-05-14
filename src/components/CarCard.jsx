import carImage from "../assets/VehicleImage.png";

const CarCard = ({ vehicle }) => {
    if (!vehicle) {
        return null;
    }
    return (
        <div className="relative h-[200px] w-full overflow-hidden rounded-[10px] bg-white px-[20px] py-[10px]">
            <div className="relative z-0">
                <h2 className="text-[24px] font-bold text-[#131314]">
                    {vehicle.vehicleName}
                </h2>

                <div className="mt-[12px] flex items-center gap-[14px]">
                    <p className="text-[16px] font-semibold text-[#8A8D94]">
                        추가된 날짜
                    </p>
                    <p className="text-[16px] font-semibold text-[#76787C]">
                        {vehicle.addedDate}
                    </p>
                </div>

                <div className="mt-[22px] flex flex-col gap-[6px]">
                    <p className="text-[18px] font-bold text-[#8A8D94]">
                        차폭 <span className="mx-[6px] text-[#C8CBD2]">|</span>
                        <span className="text-[#3B82F6]">
                            {vehicle.vehicleWidthText}
                        </span>
                    </p>

                    <p className="text-[18px] font-bold text-[#8A8D94]">
                        전장 <span className="mx-[6px] text-[#C8CBD2]">|</span>
                        <span className="text-[#3B82F6]">
                            {vehicle.vehicleLengthText}
                        </span>
                    </p>
                </div>
            </div>

            <img
                src={carImage}
                alt="차량 이미지"
                className="absolute bottom-[12px] right-[12px] w-[260px] max-w-[58%] object-contain"
            />
        </div>
    );
};

export default CarCard;