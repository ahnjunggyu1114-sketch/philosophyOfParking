import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploadStep from "../components/ImageUploadStep";
import ParkingAreaMarkStep from "../components/ParkingAreaMarkStep";
import { vehicleList } from "../data/VehicleData";
import { mockdata } from "../data/mockdata";

const ParkingHelper = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState("upload");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [parkingPoints, setParkingPoints] = useState([]);
    const selectedVehicle = vehicleList[0];

    const handleImageUpload = (file) => {
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            setImageFile(file);
            setImagePreview(reader.result);
            setParkingPoints([]);
        };

        reader.onerror = () => {
            alert("이미지를 불러오지 못했습니다.");
        };

        reader.readAsDataURL(file);
    };

    const handleNextStep = () => {
        if (!imagePreview) {
            alert("사진을 먼저 업로드해주세요.");
            return;
        }

        setStep("mark");
    };

    const handleSaveParkingArea = (points) => {
        setParkingPoints(points);

        if (!imageFile) {
            alert("이미지 파일이 없습니다.");
            return;
        }

        if (!selectedVehicle) {
            alert("차량 정보가 없습니다.");
            return;
        }

        const formData = new FormData();

        formData.append("vehicleName", selectedVehicle.vehicleName);
        formData.append("vehicleLength", selectedVehicle.vehicleLength);
        formData.append("vehicleWidth", selectedVehicle.vehicleWidth);
        formData.append("image", imageFile);

        console.log("FormData 확인");
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }

        alert("FormData 생성 완료! 콘솔을 확인하세요.");
        console.log("주차구역 좌표:", points);
        console.log("응답:", mockdata);
        navigate("/ParkingStep", {
            state: {
                /* 여기 mock data */
                result: mockdata,
                imagePreview,
                parkingPoints: points,
                vehicle: selectedVehicle,
            },
        });
    };
    

    return (
        <div className="flex min-h-screen flex-col px-[30px] pb-[60px]">
            {step === "upload" && (
                <ImageUploadStep
                    imagePreview={imagePreview}
                    onImageUpload={handleImageUpload}
                    onNext={handleNextStep}
                />
            )}

            {step === "mark" && (
                <ParkingAreaMarkStep
                    imagePreview={imagePreview}
                    onBack={() => setStep("upload")}
                    onSave={handleSaveParkingArea}
                />
            )}
        </div>
    );
};

export default ParkingHelper;