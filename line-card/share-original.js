const flexCard = {
  type: 'flex',
  altText: '林芷平 Anne｜電子名片',
  contents: {
    type: 'bubble',
    size: 'mega',
    hero: {
      type: 'image',
      url: 'https://annezhiplin.github.io/Anne-card/line-card/anne-original.jpg',
      size: 'full',
      aspectRatio: '2:3',
      aspectMode: 'fit',
      action: {
        type: 'uri',
        label: '開啟 Anne 電子名片',
        uri: 'https://liff.line.me/2012619906-dSxl9LHV'
      }
    }
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
