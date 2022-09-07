import { useSelector } from "react-redux";
import styled from "styled-components";
import JobListing from "./JobListing";

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 1200px) {
    gap: 4.5rem;
  }
`;

const JobList = ({ className, jobListings }) => {
  const filters = useSelector((state) => state.jobFilter.filters);

  const displayJob = (listing, filters) => {
    const categories = [
      listing.role,
      listing.level,
      ...listing.languages,
      ...listing.tools,
    ];
    return (
      filters.length === 0 || filters.every((text) => categories.includes(text))
    );
  };

  return (
    <ListBox className={className}>
      {jobListings.map((listing) => {
        if (displayJob(listing, filters))
          return <JobListing key={listing.id} data={listing} />;
        else return <></>;
      })}
    </ListBox>
  );
};

export default JobList;
