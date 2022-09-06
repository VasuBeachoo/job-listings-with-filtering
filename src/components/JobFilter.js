import styled from "styled-components";
import JobCategory from "./JobCategory";

export const RemoveFilterIcon = styled.img``;

export const RemoveFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

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
