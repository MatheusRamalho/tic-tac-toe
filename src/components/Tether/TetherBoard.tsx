import { ReactNode } from "react";
import styled from "styled-components";

export interface TetherBoardProps {
    children: ReactNode;
}

export const TetherWinnerWrapper = styled.div`
    width: 18.75rem;
    margin-top: 2.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export const TetherBoard = ({ children }: TetherBoardProps) => {
    return (
        <TetherWinnerWrapper className="tether-board">
            {children}
        </TetherWinnerWrapper>
    );
}
