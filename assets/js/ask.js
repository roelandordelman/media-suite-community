(function () {
  'use strict';

  var app      = document.getElementById('ask-app');
  var thread   = document.getElementById('ask-thread');
  var emptyEl  = document.getElementById('ask-empty');
  var input    = document.getElementById('ask-input');
  var sendBtn  = document.getElementById('ask-send');
  var clearBtn = document.getElementById('ask-clear');

  var apiUrl  = (app.dataset.apiUrl || '').replace(/\/$/, '');
  var history = [];
  var loading = false;

  // Save the empty state HTML so we can restore it after clearing
  var emptyHtml = emptyEl ? emptyEl.outerHTML : '';

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function renderMarkdown(text) {
    if (window.marked && window.marked.parse) {
      return window.marked.parse(text, { gfm: true, breaks: true });
    }
    return escHtml(text).replace(/\n/g, '<br>');
  }

  function setEmptyVisible(visible) {
    var el = document.getElementById('ask-empty');
    if (el) el.style.display = visible ? '' : 'none';
  }

  function setClearVisible(visible) {
    clearBtn.style.visibility = visible ? 'visible' : 'hidden';
  }

  function appendMessage(role, content, sources) {
    setEmptyVisible(false);

    var wrapper = document.createElement('div');
    wrapper.className = 'ask-msg-wrapper ask-msg-' + role;

    var bubble = document.createElement('div');
    bubble.className = 'ask-bubble';

    if (role === 'user') {
      bubble.textContent = content;
    } else {
      bubble.innerHTML = renderMarkdown(content);
    }

    wrapper.appendChild(bubble);

    if (sources && sources.length > 0) {
      var sourceBox = document.createElement('div');
      sourceBox.className = 'ask-sources';

      var label = document.createElement('p');
      label.className = 'ask-sources-label';
      label.textContent = 'Sources';
      sourceBox.appendChild(label);

      var ul = document.createElement('ul');
      sources.forEach(function (s) {
        var li = document.createElement('li');
        var a  = document.createElement('a');
        a.href   = s.url;
        a.target = '_blank';
        a.rel    = 'noopener noreferrer';
        a.textContent = s.title;
        li.appendChild(a);
        ul.appendChild(li);
      });
      sourceBox.appendChild(ul);
      wrapper.appendChild(sourceBox);
    }

    thread.appendChild(wrapper);
    thread.scrollTop = thread.scrollHeight;
  }

  function showLoading() {
    var wrapper = document.createElement('div');
    wrapper.className = 'ask-msg-wrapper ask-msg-assistant ask-loading';
    wrapper.innerHTML = '<div class="ask-bubble"><span class="ask-dot"></span><span class="ask-dot"></span><span class="ask-dot"></span></div>';
    thread.appendChild(wrapper);
    thread.scrollTop = thread.scrollHeight;
    return wrapper;
  }

  function showError(msg) {
    var wrapper = document.createElement('div');
    wrapper.className = 'ask-msg-wrapper ask-msg-error';
    wrapper.innerHTML = '<div class="ask-bubble ask-bubble-error">' + escHtml(msg) + '</div>';
    thread.appendChild(wrapper);
    thread.scrollTop = thread.scrollHeight;
  }

  function setInputEnabled(enabled) {
    input.disabled   = !enabled;
    sendBtn.disabled = !enabled;
  }

  function sendQuestion(questionText) {
    var question = (questionText !== undefined ? questionText : input.value).trim();
    if (!question || loading) return;

    if (!apiUrl) {
      showError('API URL is not configured. Set ask_api_url in _config.yml.');
      return;
    }

    loading = true;
    input.value = '';
    resizeTextarea();
    setInputEnabled(false);
    setClearVisible(false);

    appendMessage('user', question);
    var loadingEl = showLoading();

    fetch(apiUrl + '/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: question, history: history })
    })
      .then(function (res) {
        if (!res.ok) {
          return res.text().then(function (body) {
            throw new Error('Server error ' + res.status + (body ? ': ' + body : ''));
          });
        }
        return res.json();
      })
      .then(function (data) {
        loadingEl.remove();
        appendMessage('assistant', data.answer, data.sources || []);
        history.push({ role: 'user',      content: question    });
        history.push({ role: 'assistant', content: data.answer });
      })
      .catch(function (err) {
        loadingEl.remove();
        showError('Request failed: ' + err.message);
      })
      .finally(function () {
        loading = false;
        setInputEnabled(true);
        setClearVisible(history.length > 0);
        input.focus();
      });
  }

  function clearConversation() {
    history = [];
    thread.innerHTML = emptyHtml;
    setEmptyVisible(true);
    setClearVisible(false);
    attachExampleButtons();
    input.focus();
  }

  function resizeTextarea() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 200) + 'px';
  }

  function attachExampleButtons() {
    document.querySelectorAll('.ask-example-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        sendQuestion(btn.textContent.trim());
      });
    });
  }

  sendBtn.addEventListener('click', function () { sendQuestion(); });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendQuestion();
    }
  });

  input.addEventListener('input', resizeTextarea);

  clearBtn.addEventListener('click', clearConversation);

  attachExampleButtons();
}());
