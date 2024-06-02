import { ChildrenProps } from "../../Interfaces"

export const Layout: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="w-4/5 mx-auto flex flex-col items-center justify-center min-h-screen">
            {children}
        </div>
    )
}

