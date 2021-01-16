import React from "react";

import { BlogEntryListItem } from "./ListItem";

export default {
  title: "ListItem",
  component: BlogEntryListItem,
};

export const BlogEntryListItemStates = () => [
  <BlogEntryListItem
    key={"1"}
    title={"A Fake Blog Post Title"}
    excerpt={"Lorem Khaled Ipsum is a major key to success."}
    date={"2019-01-01"}
    lastUpdatedAt={"2020-01-02"}
    slug={"/a-fake-blog-post-title"}
  />,
  <BlogEntryListItem
    key={"2"}
    title={"A Fake Blog Post Title"}
    excerpt={
      "Lorem Khaled Ipsum is a major key to success. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. The key to success is to be yourself."
    }
    date={"2019-01-01"}
    lastUpdatedAt={"2020-01-02"}
    slug={"/a-fake-blog-post-title"}
  />,
  <BlogEntryListItem key={"3"} loading />,
];
