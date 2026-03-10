export const aboutQuery = `*[_type == "about"][0]{
  title,
  tagline,
  heroImage,
  aboutText,
  mission,
  vision,
  problems,
  services,
  stats,
  stories,
  trustPoints,
  faqs
}`;
export const kathaQuery = `{
  "events": *[_type=="kathaEvents"]{
    _id,
    place,
    year,
    devotees
  },
  "timeline": *[_type=="kathaTimeline"]{
    year,
    place
  },
  "gallery": *[_type=="kathaGallery"]{
    image
  }
}`;