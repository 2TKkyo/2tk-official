/*
========================================================
2TK CONTENT
========================================================
ここだけ編集してください。

V3のデザイン・写真・レイアウト・アニメーションは
変更しません。
========================================================
*/

const siteData = {

  // ========================================
  // HERO
  // ========================================

  heroSub: "J — ROCK UNIT",

  heroTitle1: "TWO MINDS.",

  heroTitle2: "ONE SOUND.",

  heroBottom: "THE OFFICIAL 2TK EXPERIENCE",


  // ========================================
  // ABOUT / PROFILE
  // ========================================

  aboutTitle: "2TK",

  aboutLead: "歌で貴方を動かせたらいいと思うんだ",

  aboutText:
    "男性2人組ユニット。作詞作曲・MIX：Kyo　Vo.：Kaz",

  aboutLabel: "PROFILE",


  // ========================================
  // MUSIC / YouTube
  // ========================================

  musicLabel: "YOUTUBE / 2TK733",

  musicTitle1: "THE SOUND",

  musicTitle2: "OF 2TK.",

  musicText:
    "楽曲をYouTubeで公開しています。",

  youtube:
    "https://youtube.com/@2tk733?si=V_N2FBi4N1S7BxBt",


  // ========================================
  // ACTIVITY / LIVE
  // ========================================

  liveDate: "09",

  liveMonth: "SEP / 2026",

  liveLabel: "LIVE / YKOHAMA",

  liveTitle: "EVENT TITLE",

  liveText:
    "会場名・イベント名・出演情報など",

  activityLabel: "ACTIVITY",

  activityMore:
    "新曲公開していきます。しばしお待ちを。",


  // ========================================
  // SNS
  // ========================================

  x: "",

  instagram: "",

  xStatus:
    "@suke2TK1 /Kyo",

  instagramStatus:
    "ACCOUNT / COMING SOON",


  // ========================================
  // CONTACT
  // ========================================

  contactText:
    "出演、イベント、制作、その他のお問い合わせ窓口をここに追加できます。",

  contactLabel:
    "EMAIL　/ CONTACT"kt092396@gmail.com""

};


/*
========================================================
ここから下は変更しないでください
========================================================
*/

document.addEventListener("DOMContentLoaded", function () {

  function replaceText(oldText, newText) {

    if (!newText) return;

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    let node;

    while (node = walker.nextNode()) {

      if (
        node.nodeValue &&
        node.nodeValue.trim() === oldText
      ) {

        nodes.push(node);

      }

    }

    nodes.forEach(function (node) {

      node.nodeValue =
        node.nodeValue.replace(
          oldText,
          newText
        );

    });

  }


  // ========================================
  // HERO
  // ========================================

  replaceText(
    "J — ROCK UNIT",
    siteData.heroSub
  );

  replaceText(
    "TWO MINDS.",
    siteData.heroTitle1
  );

  replaceText(
    "ONE SOUND.",
    siteData.heroTitle2
  );

  replaceText(
    "THE OFFICIAL 2TK EXPERIENCE",
    siteData.heroBottom
  );


  // ========================================
  // ABOUT
  // ========================================

  replaceText(
    "2TK",
    siteData.aboutTitle
  );

  replaceText(
    "音で、残す。",
    siteData.aboutLead
  );

  replaceText(
    "ここに2TKのプロフィール、結成の経緯、2人の音楽性、ユニットとして大切にしていることを入力してください。",
    siteData.aboutText
  );

  replaceText(
    "PROFILE",
    siteData.aboutLabel
  );


  // ========================================
  // MUSIC
  // ========================================

  replaceText(
    "YOUTUBE / 2TK733",
    siteData.musicLabel
  );

  replaceText(
    "THE SOUND",
    siteData.musicTitle1
  );

  replaceText(
    "OF 2TK.",
    siteData.musicTitle2
  );

  replaceText(
    "最新の映像、ライブ、音源をYouTubeで公開しています。",
    siteData.musicText
  );


  // ========================================
  // ACTIVITY
  // ========================================

  replaceText(
    "09",
    siteData.liveDate
  );

  replaceText(
    "SEP / 2026",
    siteData.liveMonth
  );

  replaceText(
    "LIVE / TOKYO",
    siteData.liveLabel
  );

  replaceText(
    "EVENT TITLE",
    siteData.liveTitle
  );

  replaceText(
    "会場名・イベント名・出演情報など",
    siteData.liveText
  );

  replaceText(
    "ACTIVITY",
    siteData.activityLabel
  );

  replaceText(
    "新しい活動情報をここに入力してください。",
    siteData.activityMore
  );


  // ========================================
  // CONTACT
  // ========================================

  replaceText(
    "出演、イベント、制作、その他のお問い合わせ窓口をここに追加できます。",
    siteData.contactText
  );

  replaceText(
    "CONTACT / COMING SOON",
    siteData.contactLabel
  );


  // ========================================
  // YouTube
  // ========================================

  document
    .querySelectorAll("a")
    .forEach(function (link) {

      const text =
        link.innerText || "";

      if (
        text.includes("YOUTUBE") ||
        text.includes("OPEN YOUTUBE")
      ) {

        if (siteData.youtube) {

          link.href =
            siteData.youtube;

          link.target =
            "_blank";

          link.rel =
            "noopener noreferrer";

        }

      }

    });


  // ========================================
  // X
  // ========================================

  if (siteData.x) {

    document
      .querySelectorAll("a")
      .forEach(function (link) {

        const text =
          link.innerText || "";

        if (
          text.includes("X") ||
          text.includes("TWITTER")
        ) {

          link.href =
            siteData.x;

          link.target =
            "_blank";

          link.rel =
            "noopener noreferrer";

        }

      });

  }


  // ========================================
  // Instagram
  // ========================================

  if (siteData.instagram) {

    document
      .querySelectorAll("a")
      .forEach(function (link) {

        const text =
          link.innerText || "";

        if (
          text.includes("INSTAGRAM")
        ) {

          link.href =
            siteData.instagram;

          link.target =
            "_blank";

          link.rel =
            "noopener noreferrer";

        }

      });

  }

});
