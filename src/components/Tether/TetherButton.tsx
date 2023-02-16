import styled from "styled-components";

export interface TetherButtonProps {
    onClick: () => void;
}

export const TetherButtonWrapper = styled.button`
    cursor: pointer;

    width: 100%;
    height: 3.5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: var(--secondary50);
    transition: 0.7s opacity ease-in-out;

    text-align: center;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--white);

    &:hover {
        opacity: 0.8;
    }
`;

export const TetherButton = ({ onClick }: TetherButtonProps) => {
    return (
        <TetherButtonWrapper
            type="button"
            onClick={onClick}
        >
            Resetar
        </TetherButtonWrapper>
    );
}
