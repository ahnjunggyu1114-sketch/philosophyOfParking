import BotNavbar from "../components/layout/BotNavbar";
import TopNavbar from "../components/layout/TopNavbar";

const Community = () => {
    return (
        <div className="flex flex-col ">
            <TopNavbar />
            <div className="px-[30px]">
                <section className="pl-[10px] pt-[21px] pb-[20px]">
                    <h1 className="text-[24px] font-bold">Community</h1>
                    <h1 className="text-[24px] font-bold">기능 미구현</h1>
                </section>
            </div>
            <BotNavbar />
        </div>
    );
}

export default Community;