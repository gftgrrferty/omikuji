import { createServer } from "node:http";

type Fortune = {
  unsei: string;
  message: string;
};

const fortunes: Fortune[] = [
  { unsei: "大吉", message: "今日は無敵。何してもうまくいく気がする" },
  { unsei: "中吉", message: "いい日。でも調子に乗ると足元すくわれる" },
  { unsei: "小吉", message: "小さいラッキーが落ちてる。拾えるかは君次第" },
  { unsei: "吉", message: "可もなく不可もなく。それが一番平和" },
  { unsei: "末吉", message: "今が底。あとは上がるだけ" },
  { unsei: "凶", message: "今日はおとなしくしてよう。明日がある" },
];

const server = createServer((req, res) => {
  const index = Math.floor(Math.random() * fortunes.length);
  const result = fortunes[index];
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(result));
});

server.listen(3000);
