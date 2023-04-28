export default function truncateURL(link) {
  const regex =
    /\.(com|org|net|edu|gov|mil|io|co|info|biz|me|tv|us|ca|uk|fr|jp)/;
  const truncatedLink = link.match(regex)
    ? link.slice(0, link.search(regex) + regex.exec(link)[0].length)
    : link;
  return truncatedLink;
}
