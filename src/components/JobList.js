import styled from "styled-components";
import JobListing from "./JobListing";

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 900px) {
    gap: 4.5rem;
  }
`;

const JobList = ({ className, jobListings }) => {
  return (
    <ListBox className={className}>
      {jobListings.map((listing) => (
        <JobListing key={listing.id} data={listing} />
      ))}
    </ListBox>
  );
};

export default JobList;
