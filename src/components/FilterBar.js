import styled from "styled-components";

export const ClearFiltersBtn = styled.p`
  margin: 0 0 0 auto;
`;

export const FilterBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const FilterBar = ({ className }) => {
  return (
    <FilterBarBox className={className}>
      <ClearFiltersBtn>Clear</ClearFiltersBtn>
    </FilterBarBox>
  );
};

export default FilterBar;
