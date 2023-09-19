import { MetadataRoute } from "next";
import { cache } from "react";

const getFacts = cache(() =>
  fetch("https://cat-fact.herokuapp.com/facts").then((response) =>
    response.json()
  )
);

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const facts = await getFacts();

  return [];
};

export default sitemap;
