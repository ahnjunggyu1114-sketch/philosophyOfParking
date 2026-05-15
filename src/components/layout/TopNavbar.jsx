import profile from '../../assets/profile.svg'
import topnav from '../../assets/topnav.svg'
import { useState } from "react";
import Modal from '../Modal';

const TopNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <div className="flex w-full justify-between items-center py-[20px] px-[20px]">
                <div className="flex items-center gap-[12px]">
                    <button 
                        type="button"
                        onClick={() => setIsMenuOpen(true)} 
                    >
                        <img src={topnav} alt="햄버거" />
                    </button>

                    <h1 className=" font-bold text-[18px] text-[#3B82F6]">주차의 철학</h1>
                </div>
            

                <img className="" src={profile} alt="프로필" />

            </div>
            {isMenuOpen && (
                <Modal onClose={() => setIsMenuOpen(false)} />
            )}
        </>
    );

}

export default TopNavbar;

