import styled from "styled-components";

export const CategoryText = styled.p``;

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const JobCategory = ({ className, text }) => {
  return (
    <CategoryBox className={className}>
      <CategoryText>{text}</CategoryText>
    </CategoryBox>
  );
};

export default JobCategory;
