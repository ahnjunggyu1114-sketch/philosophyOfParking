const ImageUploadStep = ({ imagePreview, onImageUpload, onNext }) => {
    const handleChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        console.log("file:", file);
        console.log("file type:", file.type);
        console.log("file name:", file.name);

        if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
            alert("JPG 또는 PNG 이미지만 업로드해주세요.");
            return;
        }

        onImageUpload(file);
    };

    return (
        <>
            <section className="pt-[40px] pb-[24px]">
                <h1 className="text-[20px] font-bold text-[#131314]">
                    사진 촬영 
                </h1>
            </section>

            <section className="flex flex-1 flex-col">
                <label className="flex h-[430px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-[10px] bg-white">
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="업로드한 주차장"
                            className="h-full w-full object-cover"
                            onLoad={() => console.log("이미지 로드 성공")}
                            onError={() => console.log("이미지 로드 실패:", imagePreview)}
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#F1F3F7]">
                            <p className="text-[16px] font-bold text-[#76787C]">
                                사진을 업로드해주세요 (jpg/png/jpeg 만!!)
                            </p>
                        </div>
                    )}

                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleChange}
                        className="hidden"
                    />
                </label>

                <button
                    type="button"
                    onClick={onNext}
                    className="mt-auto h-[52px] rounded-[8px] bg-[#3B82F6] text-[18px] font-bold text-white"
                >
                    다음으로
                </button>
            </section>
        </>
    );
};

export default ImageUploadStep;