import { ReactNode } from "react";

export interface TetherRootProps {
    children: ReactNode;
}

export const TetherRoot = ({ children }: TetherRootProps) => {
    return (
        <>
            {children}
        </>
    )
}
