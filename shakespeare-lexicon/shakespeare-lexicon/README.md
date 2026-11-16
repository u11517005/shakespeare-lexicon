# THE BARD'S LEXICON｜莎翁文青詞典 A–Z

這是一個專為文學愛好者設計的莎士比亞劇本詞彙學習網站（A–Z 共 26 組原著考據詞彙）。

## 資料夾結構說明

```text
shakespeare-lexicon/
├── index.html          # 網站主頁面
├── style.css           # 古典羊皮紙視覺樣式表
├── data.js             # A–Z 26 組詞彙與金句資料庫
├── script.js           # 互動篩選與外部 MP3 播放控制
├── README.md           # 專案說明與 GitHub Pages 部署指南
├── images/             # 請將 26 張印象派油畫放入此資料夾（a.jpg ~ z.jpg）
└── audio/              # 請將 52 個朗讀音檔放入此資料夾（a-word.mp3, a-quote.mp3 ~ z-quote.mp3）
```

## 音檔抽換方式
未來若您自行錄製朗讀音檔，只需將檔案轉存為 `.mp3` 格式，並依照以下規則命名覆蓋 `audio/` 資料夾內的檔案即可：
- 單字發音：`a-word.mp3`、`b-word.mp3` ... `z-word.mp3`
- 金句朗讀：`a-quote.mp3`、`b-quote.mp3` ... `z-quote.mp3`

## GitHub Pages 上線步驟
1. 在 GitHub 建立一個新的公開儲存庫（Repository），例如 `shakespeare-lexicon`。
2. 將本資料夾內的所有檔案上傳至該儲存庫。
3. 進入儲存庫的 **Settings > Pages**。
4. 在 **Branch** 選擇 `main` 與 `/ (root)` 後點擊 **Save**，數分鐘後即可獲得專屬網站網址。
