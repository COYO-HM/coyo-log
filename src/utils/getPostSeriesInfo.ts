import SeriesTable from "public/static/table/seriesTable.json";
import PostsTable from "public/static/table/postsTable.json";

import { SeriesAttributeWithPostType, SeriesTableNode } from "@models/series";
import { PostAttributeType, PostTableNode } from "@models/post";

const NUMBER_OF_POST = 5;

const getPostSeriesInfo = async (
  selectedPostKey: string,
  seriesKeyList: string[]
): Promise<Array<SeriesAttributeWithPostType>> => {
  const seriesAttributeTable: { [key: string]: SeriesTableNode } =
    process.env.NODE_ENV === "development"
      ? SeriesTable.unpublished
      : SeriesTable.published;

  const postsAttributesTable: {
    [key: string]: PostTableNode;
  } = PostsTable;

  const seriesAttributeList: SeriesAttributeWithPostType[] =
    seriesKeyList.reduce((arr: SeriesAttributeWithPostType[], seriesKey) => {
      const seriesAttribute = seriesAttributeTable[seriesKey];
      if (seriesAttribute) {
        const postIdx = seriesAttribute.posts.indexOf(selectedPostKey);
        let startIdx = Math.max(0, postIdx - 2);
        let endIdx = Math.min(seriesAttribute.posts.length, postIdx + 3);

        const posts =
          seriesAttribute?.posts.slice(startIdx, endIdx).map((postKey) => ({
            ...postsAttributesTable[postKey],
            key: postKey,
          })) || [];

        return [...arr, { ...seriesAttribute, key: seriesKey, posts }];
      }
      return arr;
    }, []);

  return seriesAttributeList;
};
export default getPostSeriesInfo;
