const flexCard = {
  "type": "flex",
  "altText": "林芷平 Anne｜電子名片・西裝訂製・肌膚管理",
  "contents": {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "mega",
        "hero": {
          "type": "image",
          "url": "https://annezhiplin.github.io/Anne-card/line-card/anne.jpg",
          "size": "full",
          "aspectRatio": "1:1",
          "aspectMode": "cover"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "backgroundColor": "#F4E8DB",
          "spacing": "sm",
          "contents": [
            {
              "type": "text",
              "text": "個人形象美學顧問",
              "color": "#785139",
              "size": "xs"
            },
            {
              "type": "text",
              "text": "林芷平 Anne",
              "color": "#2F211A",
              "weight": "bold",
              "size": "xl",
              "wrap": true
            },
            {
              "type": "text",
              "text": "Lé Tailor 西裝訂製\nRene-Cell 肌膚管理",
              "color": "#513C32",
              "size": "sm",
              "wrap": true
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "backgroundColor": "#F4E8DB",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "color": "#08783F",
              "action": {
                "type": "uri",
                "label": "加我 LINE 好友",
                "uri": "https://line.me/ti/p/OzcqMaJYTX"
              }
            },
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "color": "#63432E",
              "action": {
                "type": "uri",
                "label": "電子名片",
                "uri": "https://liff.line.me/2012619906-dSxl9LHV"
              }
            },
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "color": "#63432E",
              "action": {
                "type": "uri",
                "label": "分享給好友",
                "uri": "https://liff.line.me/2012619906-dSxl9LHV?share=1"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "mega",
        "hero": {
          "type": "image",
          "url": "https://annezhiplin.github.io/Anne-card/line-card/tailor.jpg",
          "size": "full",
          "aspectRatio": "1:1",
          "aspectMode": "cover"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "backgroundColor": "#F4E8DB",
          "spacing": "sm",
          "contents": [
            {
              "type": "text",
              "text": "個人・企業・團隊",
              "color": "#785139",
              "size": "xs"
            },
            {
              "type": "text",
              "text": "Lé Tailor 西裝訂製",
              "color": "#2F211A",
              "weight": "bold",
              "size": "xl",
              "wrap": true
            },
            {
              "type": "text",
              "text": "量身訂製｜西裝工作坊\n企業制服與形象管理講座",
              "color": "#513C32",
              "size": "sm",
              "wrap": true
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "backgroundColor": "#F4E8DB",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "color": "#08783F",
              "action": {
                "type": "uri",
                "label": "預約諮詢／訂製",
                "uri": "https://line.me/ti/p/OzcqMaJYTX"
              }
            }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "mega",
        "hero": {
          "type": "image",
          "url": "https://annezhiplin.github.io/Anne-card/line-card/skincare.jpg",
          "size": "full",
          "aspectRatio": "1:1",
          "aspectMode": "cover"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "backgroundColor": "#F4E8DB",
          "spacing": "sm",
          "contents": [
            {
              "type": "text",
              "text": "保養諮詢・一對一體驗",
              "color": "#785139",
              "size": "xs"
            },
            {
              "type": "text",
              "text": "Rene-Cell 肌膚管理",
              "color": "#2F211A",
              "weight": "bold",
              "size": "xl",
              "wrap": true
            },
            {
              "type": "text",
              "text": "依膚況安排保養，從日常護膚開始。",
              "color": "#513C32",
              "size": "sm",
              "wrap": true
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "backgroundColor": "#F4E8DB",
          "contents": [
            {
              "type": "button",
              "style": "primary",
              "height": "sm",
              "color": "#08783F",
              "action": {
                "type": "uri",
                "label": "預約肌膚體驗",
                "uri": "https://line.me/ti/p/OzcqMaJYTX"
              }
            }
          ]
        }
      }
    ]
  }
};
const shareButton = document.getElementById('share-flex-card');
const shareMessage = document.getElementById('share-flex-message');
const liffAppId = '2012619906-dSxl9LHV';
const ready = window.liff
  ? liff.init({ liffId: liffAppId }).then(() => true).catch(() => false)
  : Promise.resolve(false);

shareButton.addEventListener('click', async () => {
  shareButton.disabled = true;
  shareMessage.textContent = '';
  try {
    if (!await ready) {
      shareMessage.textContent = '請從 LINE 開啟名片後再分享。';
      return;
    }
    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: location.origin + location.pathname + '?share=1' });
      return;
    }
    if (!liff.isApiAvailable('shareTargetPicker')) {
      shareMessage.textContent = '請在 LINE App 開啟名片，並確認分享功能已啟用。';
      return;
    }
    const result = await liff.shareTargetPicker([flexCard]);
    if (result?.status === 'success') shareMessage.textContent = '名片已分享。';
  } catch {
    shareMessage.textContent = '目前無法分享，請稍後再試。';
  } finally {
    shareButton.disabled = false;
  }
});

ready.then(() => {
  if (new URLSearchParams(location.search).get('share') === '1') {
    shareButton.scrollIntoView({ block: 'center' });
    shareButton.focus({ preventScroll: true });
  }
});
