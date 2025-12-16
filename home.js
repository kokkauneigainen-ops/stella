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

});
