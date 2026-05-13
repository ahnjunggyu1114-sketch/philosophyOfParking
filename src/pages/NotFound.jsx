import BotNavbar from "../components/layout/BotNavbar";
import TopNavbar from "../components/layout/TopNavbar";

const NotFound = () => {
    return (
        <div className="flex flex-col ">
            <TopNavbar />
            <div className="px-[30px]">
                <section className="pl-[10px] pt-[21px] pb-[20px]">
                    <h1 className="text-[24px] font-bold">Page Not Found</h1>
                    <p className="text-[16px]">The page you are looking for does not exist.</p>
                </section>
            </div>
            <BotNavbar />
        </div> 
    );
}

export default NotFound;