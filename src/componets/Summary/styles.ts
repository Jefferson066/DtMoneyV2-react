import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

interface SummaryCardprops {
    variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardprops>`
    background: ${(props) => props.theme["gray-600"]};
    padding: 2rem;
    border-radius: 6px;

    header {
        display: flex;
        margin-top: 1rem;
        font-size: 2rem;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${(props) =>
        props.variant === "green" &&
        css`
            background: ${(props) => props.theme["green-700"]};
        `}
`;
