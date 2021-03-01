let supportsPassive = false;
try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('click', () => ({}), opts);
  window.removeEventListener('click', () => ({}), opts);
} catch (e) {
  console.log('e=========================>', e);
}

export const addEventListener = (target, eventType, cb, options) => {
  if (target.addEventListener) {
    const disablePassive = options === undefined && supportsPassive && (eventType === 'touchstart' || eventType === 'touchmove' || eventType === 'wheel');
    if (disablePassive) {
      options = {
        passive: false
      };
    }

    target.addEventListener(eventType, cb, options);
  }

  return {
    remove: () => {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, cb);
      }
    }
  };
}
;
