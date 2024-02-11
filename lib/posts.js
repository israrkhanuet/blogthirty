const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const config = require("../config/config.json");
const { blog_folder } = config.settings;

const readPostsFromMarkdown = () => {
  const files = fs.readdirSync(path.join(`content/${blog_folder}`));
  const markdownFiles = files.filter(
    (file) => file.endsWith(".md") && !file.startsWith("_")
  );
  const posts = markdownFiles.map((file) => {
    const postData = fs.readFileSync(
      path.join(`content/${blog_folder}`, file),
      "utf-8"
    );
    const { data, content } = matter(postData);
    const slug = file.replace(".md", "");
    return {
      frontmatter: data,
      content: content,
      slug: slug,
    };
  });
  return posts;
};
module.exports = {
  readPostsFromMarkdown,
};
