export default async function getData(url) {
  const request = await fetch(`https://noembed.com/embed?url=${url}`);
  const bookmark = await request.json();
  return bookmark;
}
