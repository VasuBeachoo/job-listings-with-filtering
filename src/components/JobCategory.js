import styled from "styled-components";

export const CategoryText = styled.h3`
  color: var(--Desaturated-Dark-Cyan);
  font-size: 1.05rem;
  font-weight: 700;
  transition: 0.25s;
  margin: 0;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: var(--Light-Grayish-Cyan-Filter);
  border-radius: 0.35rem;
  padding: 0.65rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    background-color: var(--Desaturated-Dark-Cyan);

    ${CategoryText} {
      color: var(--White);
    }
  }
`;

const JobCategory = ({ className, text }) => {
  return (
    <CategoryBox className={className}>
      <CategoryText>{text}</CategoryText>
    </CategoryBox>
  );
};

export default JobCategory;
