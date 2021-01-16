import React from "react";
import styled from "@emotion/styled/macro";

export const BlogEntryListItem = (props) => {
  if (props.loading === true) {
    return <div>Loading...</div>;
  }
  return (
    <NoColorLink to={props.slug}>
      <BlogListItemWrapper>
        <Description>
          <Title>{props.title}</Title>
          <span>
            Published: {props.date}
            <br />
            Last Updated: {props.lastUpdatedAt}
          </span>
          <Excerpt>{props.excerpt}</Excerpt>
        </Description>
      </BlogListItemWrapper>
    </NoColorLink>
  );
};

const NoColorLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Title = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

export const BlogListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  &:last-child {
    margin-bottom: 0;
  }
  :hover {
    ${Title} {
      color: #a96b5d;
    }
  }
`;

export const Description = styled.div`
  flex: 1;
  padding: 12px;
`;

export const Excerpt = styled.div`
  margin: 0;
  width: 250px;
  max-height: 75px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
