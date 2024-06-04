import { useContext } from "react";
import { AsideProps } from "../../Interfaces"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ContextApp } from "../../Context";


export const LayoutAside: React.FC<AsideProps> = ({title, children}) => {
    const {handleCloseAside, openedAside} = useContext(ContextApp);
    return(
        <aside className={`${openedAside ? 'fixed' : 'hidden' } top-16 right-0 w-1/5 h-screen bg-white shadow-lg p-4 border-l-2 border-gray-300`}>
            <div className="flex justify-between p-3">
                <h1 className="text-xl font-bold mb-4">{title}</h1>
                <IoIosCloseCircleOutline className="text-xl hover:bg-white rounded-full transition: ease-out duration-1000 cursor-pointer"
                onClick={handleCloseAside}
                 />
            </div>
            {children}
        </aside>
    )
} 
