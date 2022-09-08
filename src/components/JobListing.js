import { useDispatch } from "react-redux";
import { addFilter } from "../jobFilterSlice";
import styled, { css } from "styled-components";
import { NewTag, FeaturedTag } from "./ListingTag";
import JobCategory, { CategoryText } from "./JobCategory";

export const ListingCategory = styled(JobCategory)`
  &:hover {
    cursor: pointer;
    background-color: var(--Desaturated-Dark-Cyan);

    ${CategoryText} {
      color: var(--White);
    }
  }
`;

export const CategoriesBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-left: auto;

  @media (max-width: 1200px) {
    justify-content: flex-start;
    margin-left: 0;
  }
`;

export const CategoriesDivider = styled.hr`
  display: none;
  width: 100%;
  opacity: 0.5;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const InfoDivider = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 0.25rem;
  height: 0.25rem;
  background-color: var(--Dark-Grayish-Cyan);
  border-radius: 100%;
  opacity: 0.75;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const InfoText = styled.p`
  text-align: center;
  color: var(--Dark-Grayish-Cyan);
  font-size: 1.075rem;
  font-weight: 500;
  line-height: 1.75ch;
  margin: 0;
`;

export const InfoFooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const JobPosition = styled.h2`
  user-select: none;
  color: var(--Black);
  font-weight: 700;
  line-height: 1.75ch;
  margin: 0;
  transition: 0.175s;

  &:hover {
    cursor: pointer;
    color: var(--Desaturated-Dark-Cyan);
  }
`;

export const CompanyName = styled.h3`
  color: var(--Desaturated-Dark-Cyan);
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.75ch;
  margin: 0;
`;

export const InfoHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
  width: 100%;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;

  @media (max-width: 450px) {
    gap: 2rem;
  }
`;

export const Logo = styled.img``;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    position: absolute;
    top: -2.5rem;
  }
`;

export const ListingBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  background-color: var(--White);
  border-radius: 0.5rem;
  ${(props) =>
    props.data.featured &&
    css`
      border-left: 0.4rem solid var(--Desaturated-Dark-Cyan);
    `};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 4rem;
  }

  @media (max-width: 450px) {
    padding-top: 5rem;
  }
`;

const JobListing = ({ className, data }) => {
  const dispatch = useDispatch();

  const categories = [data.role, data.level, ...data.languages, ...data.tools];
  let categoryId = 1000;

  return (
    <ListingBox className={className} data={data}>
      <LogoBox>
        <Logo src={data.logo} alt="company-logo" />
      </LogoBox>
      <InfoBox>
        <InfoHeaderBox>
          <CompanyName>{data.company}</CompanyName>
          {data.new && <NewTag />}
          {data.featured && <FeaturedTag />}
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
      <CategoriesDivider />
      <CategoriesBox>
        {categories.map((category) => (
          <ListingCategory
            key={categoryId++}
            text={category}
            onClick={() => dispatch(addFilter(category))}
          />
        ))}
      </CategoriesBox>
    </ListingBox>
  );
};

export default JobListing;
