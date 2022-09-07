import styled from "styled-components";
import JobCategory from "./JobCategory";
import iconRemove from "../assets/icon-remove.svg";

export const RemoveFilterIcon = styled.img.attrs({
  src: iconRemove,
  alt: "remove-icon",
})``;

export const RemoveFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: var(--Desaturated-Dark-Cyan);
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  padding: 0.65rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    background-color: var(--Black);
  }
`;

export const FilterCategory = styled(JobCategory)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

const JobFilter = ({ className, text }) => {
  return (
    <FilterBox className={className}>
      <FilterCategory text={text} />
      <RemoveFilterBox>
        <RemoveFilterIcon />
      </RemoveFilterBox>
    </FilterBox>
  );
};

export default JobFilter;
