import styled from "styled-components";

export const TagText = styled.h3`
  color: var(--White);
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0;
`;

export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem 0.75rem;
`;

const ListingTag = ({ className, text }) => {
  return (
    <TagBox className={className}>
      <TagText>{text}</TagText>
    </TagBox>
  );
};

export const NewTag = styled(ListingTag).attrs({ text: "NEW!" })`
  background-color: var(--Desaturated-Dark-Cyan);
`;

export const FeaturedTag = styled(ListingTag).attrs({ text: "FEATURED" })`
  background-color: var(--Black);
`;

export default ListingTag;
