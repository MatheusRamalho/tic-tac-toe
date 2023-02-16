import styled from "styled-components";

export interface TetherWinnerProps {
    message: string;
}

export const TetherWinnerWrapper = styled.div`
    flex: 1;

    .winner-title {
        margin-bottom: 0.5rem;
        text-align: center;
    }

    .winner-content {
        text-align: center;
        font-weight: 500;
        color: var(--secondary50);
    }
`;

export const TetherWinner = ({ message }: TetherWinnerProps) => {
    return (
        <TetherWinnerWrapper>
            <div className="winner-title"> Vencedor: </div>
            <div className="winner-content"> {message} </div>
        </TetherWinnerWrapper>
    )
}
