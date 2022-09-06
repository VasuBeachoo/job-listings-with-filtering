import styled from "styled-components";
import JobListing from "./JobListing";

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
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
