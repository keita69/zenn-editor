import { escapeHtml } from 'markdown-it/lib/common/utils';
import type Token from 'markdown-it/lib/token';

// containers
// ref: https://github.com/markdown-it/markdown-it-container

// ::: details Detail
//   summary comes here
// :::
export const containerDetailsOptions = {
  validate: function (params: string) {
    return /^details\s+(.*)$/.test(params.trim());
  },
  render: function (tokens: Token[], idx: number) {
    const m = tokens[idx].info.trim().match(/^details\s+(.*)$/);
    const summary = m?.[1] || '';
    if (tokens[idx].nesting === 1) {
      // opening tag
      return (
        '<details><summary>' +
        escapeHtml(summary) +
        '</summary><div class="details-content">'
      );
    } else {
      // closing tag
      return '</div></details>\n';
    }
  },
};
// ::: message alert
//   text
// :::
const msgClassRegex = /^message\s*(alert)?$/;

export const containerMessageOptions = {
  validate: function (params: string) {
    return msgClassRegex.test(params.trim());
  },
  render: function (tokens: Token[], idx: number) {
    const m = tokens[idx].info.trim().match(msgClassRegex);
    const msgClassName = m?.[1] || '';

    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="msg ' + escapeHtml(msgClassName) + '">';
    } else {
      // closing tag
      return '</div>\n';
    }
  },
};

// ::: lchat (左側のチャット)
//   text
// :::
const lChatClassRegex = /^lchat\s*(dummiy)?$/;

export const containerLChatOptions = {
  validate: function (params: string) {
    return lChatClassRegex.test(params.trim());
  },
  render: function (tokens: Token[], idx: number) {
    const m = tokens[idx].info.trim().match(lChatClassRegex);
    const chatClassName = m?.[1] || '';

    if (tokens[idx].nesting === 1) {
      // opening tag
      return (
        '<div class="flex items-center">' +
        '  <div class="text-center flex flex-col">' +
        '    <div class="flex-none licon">' +
        '      <img style="margin: 0px" src="/assets/blog/chat-images/chat-icon-left.jpg">' +
        '    </div>' +
        '    <div>k69</div>' +
        '  </div>' +
        '  <div class="lchat ' + escapeHtml(chatClassName) + '">');
    } else {
      // closing tag
      return (
        '  </div>' +
        '</div>\n');
    }
  },
};

// ::: rchat (右側のチャット)
//   text
// :::
const rChatClassRegex = /^rchat\s*(dummy)?$/;

export const containerRChatOptions = {
  validate: function (params: string) {
    return rChatClassRegex.test(params.trim());
  },
  render: function (tokens: Token[], idx: number) {
    const m = tokens[idx].info.trim().match(rChatClassRegex);
    const chatClassName = m?.[1] || '';

    if (tokens[idx].nesting === 1) {
      // opening tag
      return (
        '<div class="flex items-center justify-end">' +
        '  <div class="rchat ' + escapeHtml(chatClassName) + '">');
    } else {
      // closing tag
      return (
        '  </div>' +
        '  <div class="text-center flex flex-col">' +
        '    <div class="flex-none ricon">' +
        '      <img style="margin: 0px" src="/assets/blog/chat-images/chat-icon-right.jpg">' +
        '    </div>' +
        '    <div>くるみ</div>' +
        '  </div>' +
        '</div>\n');
    }
  },
};
