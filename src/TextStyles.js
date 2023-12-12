import styled from "styled-components";

export const StyledText = styled.p`
  font-family: "Futura, sans-serif";
  margin: 0;
`;
export const StyledDINBoldText = styled.p`
  font-family: "DIN Bold", sans-serif;
  font-weight: bold;
  margin: 0;
`;
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
