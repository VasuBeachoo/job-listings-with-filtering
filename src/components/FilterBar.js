import styled from "styled-components";

export const ClearFiltersBtn = styled.p`
  user-select: none;
  color: var(--Dark-Grayish-Cyan);
  font-weight: 700;
  margin: 0 0 0 auto;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--Desaturated-Dark-Cyan);
    text-decoration: underline;
  }
`;

export const FilterBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: var(--White);
`;

const FilterBar = ({ className }) => {
  return (
    <FilterBarBox className={className}>
      <ClearFiltersBtn>Clear</ClearFiltersBtn>
    </FilterBarBox>
  );
};

export default FilterBar;
