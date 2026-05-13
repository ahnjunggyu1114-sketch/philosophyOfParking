import { useState } from "react";
import ImageUploadStep from "../components/ImageUploadStep";
import ParkingAreaMarkStep from "../components/ParkingAreaMarkStep";

const ParkingHelper = () => {
    const [step, setStep] = useState("upload");
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [parkingPoints, setParkingPoints] = useState([]);

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

        const saveData = {
            imageFile,
            imagePreview,
            parkingPoints: points,
        };

        console.log("최종 저장 데이터:", saveData);
        alert("주차구역이 저장되었습니다.");
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