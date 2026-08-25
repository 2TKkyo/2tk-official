/*
========================================================
2TK CONTENT — V3 VISUAL PRESERVED
========================================================
重要：
・V3のindex.htmlはデザインのために触らないでください。
・普段の変更はこのファイルだけ。
・このファイルはV3の表示を再構築しません。
  ページ読み込み後、文字・リンクだけを差し替えます。
========================================================
*/

const siteData = {
  // HERO / キャッチコピー
  catchCopy: "J-ROCK UNIT",

  // ABOUT
  profile: `ここに2TKのプロフィールを入力してください。`,

  // SNS
  youtube: "https://youtube.com/@2tk733?si=V_N2FBi4N1S7BxBt",
  x: "",
  instagram: "",

  // CONTACT
  contactTitle: "CONTACT",
  contactText: "ライブ・出演・お問い合わせなどの情報をここに掲載できます。"
};

/*
  V3の既存HTMLから対象を見つけるための安全な置換。
  セレクタはV3の実DOMを優先し、見つからない場合は何もしません。
*/
document.addEventListener("DOMContentLoaded", () => {
  // SNS links: only change href; visual/HTML structure remains V3.
  const allLinks = [...document.querySelectorAll("a")];

  const findLinkByText = (patterns) => allLinks.find(a => {
    const t = (a.textContent || "").trim().toLowerCase();
    return patterns.some(p => t.includes(p));
  });

  if (siteData.youtube) {
    const a = findLinkByText(["youtube"]);
    if (a) { a.href = siteData.youtube; a.target = "_blank"; a.rel = "noopener"; }
  }
  if (siteData.x) {
    const a = findLinkByText(["x /", "twitter", "x account", "x"]);
    if (a) { a.href = siteData.x; a.target = "_blank"; a.rel = "noopener"; }
  }
  if (siteData.instagram) {
    const a = findLinkByText(["instagram"]);
    if (a) { a.href = siteData.instagram; a.target = "_blank"; a.rel = "noopener"; }
  }

  /*
    テキスト変更は、V3の見た目を壊さないよう
    明示的な data-content-key が付いた箇所だけ。
    必要になったらindex.htmlにこの属性を付けます。
  */
  Object.entries({
    catchCopy: siteData.catchCopy,
    profile: siteData.profile,
    contactTitle: siteData.contactTitle,
    contactText: siteData.contactText
  }).forEach(([key, value]) => {
    document.querySelectorAll(`[data-content-key="${key}"]`)
      .forEach(el => el.textContent = value);
  });
});
