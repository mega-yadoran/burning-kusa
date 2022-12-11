const onNodeAdded = (mutations) => {
  mutations.forEach((mutation) => {
    // 全てのspanを取得
    const spanList = Array.from(mutation.addedNodes)
      .filter((node) => node instanceof HTMLElement)
      .reduce((result, node) => {
        return result.concat(Array.from(node.getElementsByTagName("span")));
      }, []);

    // spanの中に含まれる"草"を#burn-targetを付与したspanタグで囲う
    spanList.forEach((span) => {
      span.innerHTML = span.innerHTML.replaceAll(
        "草",
        '<span class="burn-target" style="user-select: none">草</span>'
      );
    });

    // "草"spanのリストを取得
    const kusaSpanList = Array.from(mutation.addedNodes)
      .filter(
        (node) =>
          node instanceof HTMLElement &&
          node.querySelector(".burn-target") !== null
      )
      .map((node) => node.querySelector(".burn-target"));

    // "草"spanをクリックしたときにアニメーションを実行
    kusaSpanList.forEach((el) => {
      el.addEventListener("click", (event) => {
        // クリックした位置を基準に表示位置を設定する
        const imagePosition = {
          x: event.clientX + window.pageXOffset - 130,
          y: event.clientY + window.pageYOffset - 105,
        };

        // GIFを表示する
        const image = document.createElement("img");
        image.src = chrome.runtime.getURL("sample.gif") + "?" + Date.now(); // タイムスタンプをつけることによってキャッシュを防ぐ = 常に最初から再生される
        image.height = "360";
        image.width = "480";
        image.style.position = "absolute";
        image.style.left = imagePosition.x + "px";
        image.style.top = imagePosition.y + "px";
        document.body.appendChild(image);

        // 3秒後にテキストを"灰"に変える
        window.setTimeout(() => {
          el.innerHTML = "灰";
        }, 3000);

        // 4秒後にGIFを消す
        window.setTimeout(() => {
          image.remove();
        }, 4000);
      });
    });
  });
};

// bodyに新しいnodeが追加されたときにonSpanAdded関数を発火させる
const observer = new MutationObserver(onNodeAdded);
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
