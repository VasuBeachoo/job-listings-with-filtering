import { useSelector, useDispatch } from "react-redux";
import { clearFilters } from "../jobFilterSlice";
import styled from "styled-components";
import JobFilter from "./JobFilter";

export const ClearFiltersBtn = styled.p`
  user-select: none;
  color: var(--Dark-Grayish-Cyan);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.05ch;
  margin: 0 0 0 auto;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--Desaturated-Dark-Cyan);
    text-decoration: underline;
    text-underline-offset: 0.35rem;
  }
`;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const FilterBarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  background-color: var(--White);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 2rem;
`;

const FilterBar = ({ className }) => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.jobFilter.filters);

  return (
    <FilterBarBox className={className}>
      <FiltersBox>
        {filters.map((filter, index) => (
          <JobFilter key={index} text={filter} />
        ))}
      </FiltersBox>
      <ClearFiltersBtn onClick={() => dispatch(clearFilters())}>
        Clear
      </ClearFiltersBtn>
    </FilterBarBox>
  );
};

export default FilterBar;
