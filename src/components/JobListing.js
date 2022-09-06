import styled from "styled-components";
import JobCategory from "./JobCategory";

export const CategoriesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
`;

export const InfoDivider = styled.div``;

export const InfoText = styled.p``;

export const InfoFooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const JobPosition = styled.h2``;

export const CompanyName = styled.h3``;

export const InfoHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Logo = styled.img``;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const JobListing = ({ className, data }) => {
  const categories = [data.role, data.level, ...data.languages, ...data.tools];
  let categoryId = 1000;

  return (
    <ListingBox className={className}>
      <LogoBox>
        <Logo src={data.logo} alt="company-logo" />
      </LogoBox>
      <InfoBox>
        <InfoHeaderBox>
          <CompanyName>{data.company}</CompanyName>
        </InfoHeaderBox>
        <JobPosition>{data.position}</JobPosition>
        <InfoFooterBox>
          <InfoText>{data.postedAt}</InfoText>
          <InfoDivider />
          <InfoText>{data.contract}</InfoText>
          <InfoDivider />
          <InfoText>{data.location}</InfoText>
        </InfoFooterBox>
      </InfoBox>
      <CategoriesBox>
        {categories.map((category) => (
          <JobCategory key={categoryId++} text={category} />
        ))}
      </CategoriesBox>
    </ListingBox>
  );
};

export default JobListing;
