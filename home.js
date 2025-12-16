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
    // 2. クリックイベントを設定
    // ------------------------------------
    
    // 【世界統計】
    if (worldStatsButton) {
        worldStatsButton.addEventListener('click', function() {
            window.location.href = 'wourd.html'; 
        });
    }

    // 【内政を行う】
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
});
