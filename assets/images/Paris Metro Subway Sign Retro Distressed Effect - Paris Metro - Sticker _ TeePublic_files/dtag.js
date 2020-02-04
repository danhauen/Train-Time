(function() {
  window.__attentive_domain = 'teepublic.attn.tv';

  // Cookie Setting
  // Both set and get from https://stackoverflow.com/a/24103596/419126
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }
  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function newTag() {
    window.__attentive = {
      invoked: false,
      newTag: true,
      show: function() {
        this.invoked = true;
      },
    };
    var _onload = function() {
      var scrTag = document.createElement('script');
      scrTag.setAttribute('async', 'true');
      scrTag.type = 'text/javascript';
      scrTag.src = 'https://cdn.attn.tv/loader.js';
      (
        (document.getElementsByTagName('head') || [null])[0] ||
        document.getElementsByTagName('script')[0].parentNode
      ).appendChild(scrTag);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', _onload);
    } else {
      _onload();
    }
  }

  function oldTag() {
    window.__attentive = {
      invoked: false,
      show: function() {
        this.invoked = true;
      },
    };
    var loaded = false;
    var _onload = function() {
      if (document.readyState && !/loaded|complete/.test(document.readyState)) {
        setTimeout(_onload, 10);
        return;
      }
      if (!loaded) {
        loaded = true;
        setTimeout(_onload, 50);
        return;
      }
      var scrTag = document.createElement('script');
      scrTag.setAttribute('async', 'true');
      scrTag.type = 'text/javascript';
      scrTag.src = 'https://cdn.attn.tv/loader.js';
      (
        (document.getElementsByTagName('head') || [null])[0] ||
        document.getElementsByTagName('script')[0].parentNode
      ).appendChild(scrTag);
    };
    if (window.addEventListener) {
      window.addEventListener('load', _onload, false);
    } else {
      window.attachEvent('onload', _onload);
    }
  }

  var cookieValue = getCookie('__attentive_tagv');
  if (cookieValue === null) {
    if (Math.random() >= 0.5) {
      cookieValue = 'n';
    } else {
      cookieValue = 'o';
    }
    setCookie('__attentive_tagv', cookieValue, 2147483647);
  }

  if (cookieValue === 'n') {
    newTag();
  } else {
    oldTag();
  }
})();
window.__attentive.show();
