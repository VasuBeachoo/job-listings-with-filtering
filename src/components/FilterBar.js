import styled from "styled-components";

export const ClearFiltersBtn = styled.p``;

export const FilterBarBox = styled.div``;

const FilterBar = ({ className }) => {
  return (
    <FilterBarBox className={className}>
      <ClearFiltersBtn>Clear</ClearFiltersBtn>
    </FilterBarBox>
  );
};

export default FilterBar;
