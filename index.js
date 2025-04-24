import { writeFileSync } from "node:fs";
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# Hi there 👋

## 이런 환경에 익숙해요✍🏼

## 언어

<p>
  <img alt="" src= "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> 
  <img alt="" src= "https://img.shields.io/badge/TypeScript-black?logo=typescript&logoColor=blue"/>
</p>

## Contact me

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
  headers: {
    Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
  },
});

(async () => {
  try {
    const feed = await parser.parseURL("https://yeburry.tistory.com/rss");

    if (!feed.items || feed.items.length === 0) {
      console.log("피드에 글이 없습니다.");
      return;
    }

    const postCount = Math.min(feed.items.length, 5);

    for (let i = 0; i < postCount; i++) {
      const item = feed.items[i];
      if (!item || !item.title || !item.link) {
        console.warn(`${i + 1}번째 항목이 비어있거나 필드가 없음`);
        continue;
      }

      const { title, link } = item;
      console.log(`${i + 1}번째 게시물`);
      console.log(`추가될 제목: ${title}`);
      console.log(`추가될 링크: ${link}`);
      text += `- [${title}](${link})\n`;  // 마크다운 스타일이 더 깔끔!
    }

    writeFileSync("README.md", text, "utf8");
    console.log("README.md 업데이트 완료");
  } catch (err) {
    console.error("오류 발생:", err.message);
  }
})();
