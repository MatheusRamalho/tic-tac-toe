import { ReactNode } from "react";
import styled from "styled-components";

export interface TetherScoreboardProps {
    children: ReactNode;
}

export const TetherScoreboardWrapper = styled.div`
    width: 18.75rem;
    height: auto;
    margin: 1rem 0;
    padding: 1.5rem;
    border-radius: 0.7rem;
    background-color: var(--primary300);

    display: flex;
`;

export const TetherScoreboard = ({ children }: TetherScoreboardProps) => {
    return (
        <TetherScoreboardWrapper>
            {children}
        </TetherScoreboardWrapper>
    )
}
