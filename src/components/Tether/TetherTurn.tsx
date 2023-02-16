import styled from "styled-components";

export interface TetherTurnProps {
    message: string;
}

export const TetherTurnWrapper = styled.div`
    flex: 1;

    .turn-title {
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .turn-content {
        text-align: center;
        font-weight: 500;
        color: var(--primary50);
    }
`;

export const TetherTurn = ({ message }: TetherTurnProps) => {
    return (
        <TetherTurnWrapper>
            <div className="turn-title"> A vez é: </div>
            <div className="turn-content"> {message} </div>
        </TetherTurnWrapper>
    )
}
