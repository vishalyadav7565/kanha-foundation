export const aboutQuery = `
  *[_type == "about"][0]{
    title,
    description,
    content,
    mission,
    vision,
    values,
    stats,
    "heroImage": heroImage.asset->url
  }
`;