import styled from "styled-components";
import JobCategory from "./JobCategory";

export const RemoveFilterIcon = styled.img``;

export const RemoveFilterBox = styled.div``;

export const FilterBox = styled.div``;

const JobFilter = ({ className, text }) => {
  return (
    <FilterBox className={className}>
      <JobCategory text={text} />
      <RemoveFilterBox>
        <RemoveFilterIcon />
      </RemoveFilterBox>
    </FilterBox>
  );
};

export default JobFilter;
