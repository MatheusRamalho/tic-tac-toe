
import styled from "styled-components";

export const TetherItemWrapper = styled.div`
    cursor: pointer;
    width: 6.25rem;
    height: 6.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
    font-weight: 700;
    color: var(--white);

    &:hover {
        background-color: var(--primary200);
    }

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5) {
        border-right: 0.25rem solid var(--primary100);
        border-bottom: 0.25rem solid var(--primary100);
    }

    &:nth-child(3),
    &:nth-child(6) {
        border-bottom: 0.25rem solid var(--primary100);
    }

    &:nth-child(7),
    &:nth-child(8) {
        border-right: 0.25rem solid var(--primary100);
    }
`;

export interface TetherItemProps {
    itemCode: string;
}

export const TetherItem = ({ itemCode }: TetherItemProps) => {
    return (
        <TetherItemWrapper
            className="tether-item"
            data-item={itemCode}
        ></TetherItemWrapper>
    );
}
