import { ChildrenProps } from "../../Interfaces"

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="w-11/12 mx-auto mt-[100px] flex flex-col justify-center">
            {children}
        </div>
    )
}

