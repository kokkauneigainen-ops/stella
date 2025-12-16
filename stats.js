// データのURL
const url = "https://script.google.com/macros/s/AKfycbzW0eWkiWeuT5NSTMrG3TDWrm4g03ta02ud3Xu6nfL9W_cRvj8KKCsjqRkqrmhASp0HRQ/exec";

// ------------------------------------
// HTMLの読み込み完了を待つ処理
// ------------------------------------
document.addEventListener('DOMContentLoaded', function() {

    // ★ ローディング要素とテーブル要素を取得
    const loadingElement = document.getElementById('loading');
    const tableBody = document.getElementById('country-list');

    // 要素が見つからない場合は処理を中断（エラー防止）
    if (!loadingElement || !tableBody) {
        console.error("必要なHTML要素(loading または country-list)が見つかりません");
        return;
    }

    // ------------------------------------
    // 3. データ取得処理
    // ------------------------------------

    // ★ 1. fetch開始前に「読み込み中」を表示
    loadingElement.style.display = "block";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("取得したデータ:", data);
            
            if (Array.isArray(data)) {
                console.log(`国家数が全部で ${data.length} 国あります。`);
                
                // 表への表示
                data.forEach(country => {
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                        <td>${country.国名 || ''}</td>
                        <td>${country.パスワード || ''}</td>
                        <td>${country.経済とか || ''}</td>
                    `;
                    tableBody.appendChild(tr);
                });
            }
        })
        .catch(error => {
            console.error("エラーが発生しました:", error);
            // エラーを画面に表示
            loadingElement.textContent = "データの読み込みに失敗しました。";
        })
        .finally(() => {
            // ★ 2. 成功しても失敗しても、ローディング非表示
            // （エラー時はメッセージを残すため、style.display = "none" は成功時のみにするか、
            //  ローディングアイコンだけ消すなどの調整が必要ですが、ここでは元の通り消します）
            if (loadingElement.textContent !== "データの読み込みに失敗しました。") {
                 loadingElement.style.display = "none";
            }
            console.log("処理終了");
        });
});
