// データのURL
const url = "https://script.google.com/macros/s/AKfycbzW0eWkiWeuT5NSTMrG3TDWrm4g03ta02ud3Xu6nfL9W_cRvj8KKCsjqRkqrmhASp0HRQ/exec";

// ------------------------------------
// HTMLの読み込み完了を待つ処理
// ------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------
    // 1. ボタンの要素を取得
    // ------------------------------------
    const worldStatsButton    = document.getElementById('btn-world-stats');
    const personalGovButton   = document.getElementById('btn-personal-gov');
    const tradeTerminalButton = document.getElementById('btn-trade-terminal');
    const opInfoButton        = document.getElementById('btn-op-info');

    // ------------------------------------
    // 2. クリックイベントを設定 (個別に設定)
    // ------------------------------------
    
    // 【世界統計】
    if (worldStatsButton) {
        worldStatsButton.addEventListener('click', function() {
            window.location.href = '世界統計ページ.html'; 
        });
    }

    // 【内政を行う】(以前の「個人運営」ボタン)
    if (personalGovButton) {
        personalGovButton.addEventListener('click', function() {
            window.location.href = '個人内政ページ.html';
        });
    }

    // 【貿易ターミナル】
    if (tradeTerminalButton) {
        tradeTerminalButton.addEventListener('click', function() {
            window.location.href = '貿易ターミナルページ.html';
        });
    }

    // 【運営情報】
    if (opInfoButton) {
        opInfoButton.addEventListener('click', function() {
            window.location.href = '運営情報ページ.html';
        });
    }

// ★ ローディング要素とテーブル要素を取得
        const loadingElement = document.getElementById('loading');
        const tableBody = document.getElementById('country-list');

        // ------------------------------------
        // 3. データ取得処理 (修正版)
        // ------------------------------------

        // ★ 1. fetch開始前に「読み込み中」を表示
        loadingElement.style.display = "block";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("取得したデータ:", data);
                
                if (Array.isArray(data)) {
                    console.log(`国家数が全部で ${data.length} 国あります。`);
                    console.log("テストチェック1国目のデータ:", data[0]);

                    // --- 前回の質問の「表への表示」をここで行います ---
                    data.forEach(country => {
                        const tr = document.createElement("tr");
                        // ※APIによってプロパティ名(name.commonなど)は変わります
                        tr.innerHTML = `
                            <td>${country.国名}</td>
                            <td>${country.パスワード}</td>
                            <td>${country.経済とか}</td>
                        `;
                        tableBody.appendChild(tr);
                    });
                }
            })
            .catch(error => {
                console.error("エラーが発生しました:", error);
                // エラー時は画面にも出すと親切です
                document.body.append("エラーが発生しました。");
            })
            .finally(() => {
                // ★ 2. 成功しても失敗しても、最後に必ず「読み込み中」を消す
                console.log("処理終了");
                loadingElement.style.display = "none";
            });
            
});
