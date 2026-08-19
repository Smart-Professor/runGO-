(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,954076,e=>{"use strict";var t=e.i(754018),a=e.i(793609),r=e.i(973264),l=e.i(19905),i=e.i(469897),n=e.i(368886),o=e.i(506170),s=e.i(364286),d=e.i(860982);let c=(0,e.i(546851).getInPageUiBaseCSS)(".hexclave-clickmap")+`
  /* Bottom-centered floating panel (the clickmap's only chrome) */
  .hexclave-clickmap .sdt-hm-panel {
    position: fixed;
    left: 50%;
    bottom: 18px;
    z-index: 2147483647;
    width: min(680px, calc(100vw - 24px));
    max-width: calc(100vw - 24px);
    max-height: calc(100vh - 36px);
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    overflow: visible;
  }

  .hexclave-clickmap .sdt-hm-panel-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    animation: sdt-hm-panel-enter 0.2s ease-out;
  }

  @keyframes sdt-hm-panel-enter {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(8px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  /* --- Clickmaps --- */

  .hexclave-clickmap .sdt-hm {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: visible;
    background: transparent;
  }

  /* One spacing rhythm across the pill: a tight 2px base gap so adjacent
     controls read as clusters, with the wider between-group separation
     coming only from the metrics block's own padding (and the title's
     trailing padding). Item-level whitespace inside ghost icon buttons
     already provides the rest of the breathing room. */
  .hexclave-clickmap .sdt-hm-toolbar {
    position: relative;
    z-index: 4;
    display: flex;
    align-items: center;
    gap: 2px;
    min-height: 44px;
    padding: 6px 8px;
    border: 1px solid var(--sdt-border);
    border-radius: 999px;
    background: var(--sdt-overlay-bg);
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(18px);
  }

  .hexclave-clickmap .sdt-hm-toolbar-title {
    flex-shrink: 0;
    padding: 0 6px 0 2px;
    font-size: 13px;
    font-weight: 650;
    color: var(--sdt-text);
    line-height: 1.1;
  }

  .hexclave-clickmap .sdt-hm-toolbar-filters {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .hexclave-clickmap .sdt-hm-toolbar-filters .sdt-hm-filter-input {
    height: 28px;
    border-radius: 999px;
    font-size: 11.5px;
  }

  .hexclave-clickmap .sdt-hm-toolbar-filters > .sdt-hm-filter-input {
    flex-shrink: 0;
    width: auto;
    max-width: 120px;
    padding-right: 4px;
  }

  .hexclave-clickmap .sdt-hm-toolbar-url {
    position: relative;
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    /* The revert/info ghost buttons hug the input they belong to. */
    gap: 2px;
  }

  .hexclave-clickmap .sdt-hm-toolbar-url .sdt-hm-filter-input {
    flex: 1;
  }

  .hexclave-clickmap .sdt-hm-mode {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 2px;
    border-radius: 999px;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
  }

  .hexclave-clickmap .sdt-hm-mode-btn {
    min-width: 24px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--sdt-text-tertiary);
    padding: 0 7px;
    font: inherit;
    font-family: var(--sdt-font-mono, ui-monospace, monospace);
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
  }

  .hexclave-clickmap .sdt-hm-mode-btn:not(.sdt-hm-mode-btn-active):hover {
    color: var(--sdt-text);
  }

  .hexclave-clickmap .sdt-hm-mode-btn-active {
    background: var(--sdt-accent);
    color: white;
  }

  .hexclave-clickmap .sdt-hm-filter-input-error,
  .hexclave-clickmap .sdt-hm-filter-input-error:focus {
    border-color: var(--sdt-error);
  }

  .hexclave-clickmap .sdt-hm-filter-info {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--sdt-text-tertiary);
    cursor: pointer;
    padding: 0;
  }

  .hexclave-clickmap .sdt-hm-filter-info:hover,
  .hexclave-clickmap .sdt-hm-filter-info[aria-expanded="true"] {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }

  .hexclave-clickmap .sdt-hm-url-help {
    display: none;
    position: absolute;
    bottom: calc(100% + 10px);
    right: 0;
    z-index: 6;
    width: 320px;
    max-width: min(320px, calc(100vw - 32px));
    box-sizing: border-box;
    padding: 14px;
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-lg);
    background: var(--sdt-bg);
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
    backdrop-filter: blur(18px);
    cursor: default;
  }

  .hexclave-clickmap .sdt-hm-url-help-open {
    display: block;
  }

  .hexclave-clickmap .sdt-hm-url-help-title {
    font-size: 12px;
    font-weight: 650;
    color: var(--sdt-text);
    margin-bottom: 6px;
  }

  .hexclave-clickmap .sdt-hm-url-help-body {
    font-size: 11.5px;
    line-height: 1.5;
    color: var(--sdt-text-secondary);
  }

  .hexclave-clickmap .sdt-hm-url-help-rows {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--sdt-border-subtle);
  }

  .hexclave-clickmap .sdt-hm-url-help-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .hexclave-clickmap .sdt-hm-url-help-code {
    flex-shrink: 0;
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    padding: 1px 6px;
    font-family: var(--sdt-font-mono, ui-monospace, monospace);
    font-size: 11px;
    color: var(--sdt-text);
    white-space: nowrap;
  }

  .hexclave-clickmap .sdt-hm-url-help-desc {
    font-size: 11px;
    line-height: 1.4;
    color: var(--sdt-text-secondary);
  }

  .hexclave-clickmap .sdt-hm-toolbar-metrics {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    /* Side padding is what separates the metrics group from the url field
       on its left and the toggle cluster on its right. */
    padding: 0 8px;
  }

  .hexclave-clickmap .sdt-hm-toolbar-metric {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--sdt-text-secondary);
  }

  .hexclave-clickmap .sdt-hm-toolbar-metric-value {
    font-size: 12px;
    font-weight: 700;
    color: var(--sdt-text);
    font-variant-numeric: tabular-nums;
  }

  .hexclave-clickmap .sdt-hm-toolbar-metric-icon {
    display: inline-flex;
    align-items: center;
    color: var(--sdt-text-tertiary);
  }

  .hexclave-clickmap .sdt-hm-icon-btn {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--sdt-text-secondary);
    cursor: pointer;
  }

  .hexclave-clickmap .sdt-hm-icon-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }

  /* Presses must always target the button itself: the chevron svg is replaced
     when the panel toggles, and a press whose mousedown landed on a since-
     detached svg never produces a click. */
  .hexclave-clickmap .sdt-hm-icon-btn svg {
    pointer-events: none;
  }

  /* Styled tooltips for toolbar controls, driven by a data-sdt-tip attribute
     instead of native title so they match the overlay theme and also show on
     keyboard focus. The hover transition-delay acts as a hover-intent gate so
     tooltips don't flash while the pointer crosses the toolbar; hover-out has
     no delay, so they dismiss instantly. */
  .hexclave-clickmap [data-sdt-tip] {
    position: relative;
  }

  .hexclave-clickmap [data-sdt-tip]::after {
    content: attr(data-sdt-tip);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(2px);
    padding: 4px 8px;
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius);
    background: var(--sdt-overlay-bg);
    backdrop-filter: blur(18px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
    color: var(--sdt-text);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.12s ease, transform 0.12s ease;
    z-index: 3;
  }

  .hexclave-clickmap [data-sdt-tip]:hover::after,
  .hexclave-clickmap [data-sdt-tip]:focus-visible::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    transition-delay: 0.35s;
  }

  /* The info button's tooltip would sit on top of its own help popover. */
  .hexclave-clickmap .sdt-hm-filter-info[aria-expanded="true"]::after {
    opacity: 0;
  }

  .hexclave-clickmap .sdt-hm-details {
    display: none;
    position: relative;
    z-index: 1;
    max-height: min(460px, calc(100vh - 98px));
    overflow: hidden;
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-lg);
    background: var(--sdt-bg);
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
  }

  .hexclave-clickmap .sdt-hm-expanded .sdt-hm-details {
    display: flex;
    flex-direction: column;
  }

  .hexclave-clickmap .sdt-hm-head {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 16px;
    border-bottom: 1px solid var(--sdt-border-subtle);
  }

  .hexclave-clickmap .sdt-hm-filters {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .hexclave-clickmap .sdt-hm-filter-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .hexclave-clickmap .sdt-hm-seg {
    position: relative;
    display: flex;
    align-items: stretch;
    gap: 2px;
    height: 30px;
    padding: 3px;
    border-radius: var(--sdt-radius);
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-elevated);
    box-sizing: border-box;
  }

  .hexclave-clickmap .sdt-hm-seg-thumb {
    position: absolute;
    top: 3px;
    left: 0;
    bottom: 3px;
    width: 0;
    border-radius: calc(var(--sdt-radius) - 2px);
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
    transform: translateX(0);
    transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1), width 220ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  .hexclave-clickmap .sdt-hm-seg-btn {
    position: relative;
    z-index: 1;
    flex: 1 1 0;
    min-width: 0;
    border: 0;
    background: transparent;
    color: var(--sdt-text-tertiary);
    font: inherit;
    font-family: var(--sdt-font);
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    padding: 0 4px;
    border-radius: calc(var(--sdt-radius) - 2px);
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 160ms ease;
  }

  .hexclave-clickmap .sdt-hm-seg-btn:hover {
    color: var(--sdt-text-secondary);
  }

  .hexclave-clickmap .sdt-hm-seg-btn[aria-checked="true"] {
    color: var(--sdt-text);
  }

  .hexclave-clickmap .sdt-hm-seg-btn:focus-visible {
    outline: 2px solid var(--sdt-accent);
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .hexclave-clickmap .sdt-hm-seg-thumb {
      transition: none;
    }
  }

  .hexclave-clickmap .sdt-hm-filter-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
  }

  .hexclave-clickmap .sdt-hm-filter-label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 13px;
  }

  .hexclave-clickmap .sdt-hm-filter-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--sdt-text-tertiary);
  }

  .hexclave-clickmap .sdt-hm-filter-reset {
    display: none;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 999px;
    background: transparent;
    padding: 0;
    color: var(--sdt-accent);
    cursor: pointer;
  }

  .hexclave-clickmap .sdt-hm-filter-reset:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-accent-hover);
  }

  .hexclave-clickmap .sdt-hm-filter-reset-visible {
    display: inline-flex;
  }

  .hexclave-clickmap .sdt-hm-filter-input {
    height: 30px;
    border-radius: var(--sdt-radius);
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-elevated);
    color: var(--sdt-text);
    padding: 0 9px;
    font: inherit;
    font-size: 12px;
    font-family: var(--sdt-font);
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .hexclave-clickmap .sdt-hm-filter-input:focus {
    outline: none;
    border-color: var(--sdt-accent);
  }

  .hexclave-clickmap .sdt-hm-actions {
    display: flex;
    align-items: stretch;
    gap: 10px;
  }

  .hexclave-clickmap .sdt-hm-actions .sdt-hm-btn {
    height: auto;
    flex-shrink: 0;
    white-space: nowrap;
    padding: 0 16px;
  }

  .hexclave-clickmap .sdt-hm-btn {
    height: 30px;
    border-radius: var(--sdt-radius);
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-elevated);
    color: var(--sdt-text-secondary);
    padding: 0 10px;
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }

  .hexclave-clickmap .sdt-hm-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
    transition: none;
  }

  .hexclave-clickmap .sdt-hm-btn-primary {
    background: var(--sdt-accent);
    border-color: var(--sdt-accent);
    color: white;
  }

  .hexclave-clickmap .sdt-hm-btn-primary:hover {
    background: var(--sdt-accent);
    border-color: var(--sdt-accent);
    color: white;
    transition: none;
  }

  .hexclave-clickmap .sdt-hm-btn-sm {
    height: 24px;
    flex-shrink: 0;
    border-radius: 999px;
    padding: 0 10px;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
  }

  .hexclave-clickmap .sdt-hm-btn:disabled {
    opacity: 0.45;
    pointer-events: none;
  }

  /* Dead-clicks-only filter toggle (toolbar icon button + expanded-panel
     button). Active state borrows the error tint used by the dead chips so
     the mode reads as "you are looking at failures". */
  .hexclave-clickmap .sdt-hm-dead-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .hexclave-clickmap .sdt-hm-dead-toggle-icon {
    display: inline-flex;
    align-items: center;
  }

  .hexclave-clickmap .sdt-hm-dead-toggle-active,
  .hexclave-clickmap .sdt-hm-dead-toggle-active:hover {
    background: var(--sdt-error-muted);
    border-color: var(--sdt-error);
    color: var(--sdt-error);
    transition: none;
  }

  /* Toolbar overlay toggle while the overlay is hidden: tinted so the off
     state reads at a glance, eye-off icon carries the meaning. */
  .hexclave-clickmap .sdt-hm-overlay-mini-off,
  .hexclave-clickmap .sdt-hm-overlay-mini-off:hover {
    background: var(--sdt-accent-muted);
    color: var(--sdt-accent-hover);
  }

  .hexclave-clickmap .sdt-hm-stats {
    flex: 1;
    min-width: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
  }

  .hexclave-clickmap .sdt-hm-stat {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-elevated);
    padding: 7px 10px;
  }

  .hexclave-clickmap .sdt-hm-stat-label {
    font-size: 9.5px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--sdt-text-tertiary);
  }

  .hexclave-clickmap .sdt-hm-stat-value {
    font-size: 15px;
    font-weight: 650;
    color: var(--sdt-text);
    font-variant-numeric: tabular-nums;
  }

  /* No top padding on the scroller: the sticky list header pins at top 0,
     and scroller padding reads as a see-through strip above it while the
     list scrolls (Chromium offsets sticky insets by the scroll container's
     padding). The status line below carries the 12px instead. */
  .hexclave-clickmap .sdt-hm-body {
    flex: 1;
    min-height: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 16px 14px;
  }

  .hexclave-clickmap .sdt-hm-token-status {
    color: var(--sdt-text-secondary);
    padding: 12px 2px 0;
    font-size: 11.5px;
    line-height: 1.45;
  }

  .hexclave-clickmap .sdt-hm-token-status-error {
    color: var(--sdt-error);
  }

  .hexclave-clickmap .sdt-hm-viewport-warning {
    display: none;
    gap: 8px;
    padding: 10px;
    border-radius: var(--sdt-radius);
    border: 1px solid rgba(234, 179, 8, 0.24);
    background: var(--sdt-warning-muted);
    color: var(--sdt-text);
  }

  .hexclave-clickmap .sdt-hm-viewport-warning-visible {
    display: flex;
    flex-direction: column;
  }

  .hexclave-clickmap .sdt-hm-viewport-warning-title {
    font-size: 12px;
    font-weight: 650;
    color: var(--sdt-text);
    line-height: 1.2;
  }

  .hexclave-clickmap .sdt-hm-viewport-warning-body {
    font-size: 11.5px;
    line-height: 1.45;
    color: var(--sdt-text-secondary);
  }

  .hexclave-clickmap .sdt-hm-viewport-warning-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .hexclave-clickmap .sdt-hm-viewport-warning-action {
    min-width: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-radius: var(--sdt-radius);
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-elevated);
    padding: 4px 5px 4px 8px;
  }

  .hexclave-clickmap .sdt-hm-viewport-warning-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--sdt-text-tertiary);
  }

  .hexclave-clickmap .sdt-hm-viewport-warning-code {
    font-family: var(--sdt-font-mono);
    font-size: 11.5px;
    font-weight: 650;
    color: var(--sdt-text);
    font-variant-numeric: tabular-nums;
  }

  .hexclave-clickmap .sdt-hm-copy-btn {
    height: 22px;
    border: 1px solid var(--sdt-border-subtle);
    border-radius: 999px;
    background: var(--sdt-bg);
    color: var(--sdt-text-secondary);
    padding: 0 8px;
    font: inherit;
    font-size: 10.5px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  }

  .hexclave-clickmap .sdt-hm-copy-btn:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
    transition: none;
  }

  .hexclave-clickmap .sdt-hm-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  /* Datagrid-style header above the element list. Sticky inside the
     scrolling body (full-bleed via negative margins) so select-all and the
     bulk show/hide actions stay reachable while the list scrolls. The 24px
     left padding lines its master checkbox up with the row checkboxes
     (16px body padding + 8px row padding). */
  .hexclave-clickmap .sdt-hm-list-header {
    display: none;
    position: sticky;
    top: 0;
    z-index: 2;
    align-items: center;
    gap: 8px;
    margin: 0 -16px;
    padding: 8px 24px;
    background: var(--sdt-bg);
    border-bottom: 1px solid var(--sdt-border-subtle);
  }

  .hexclave-clickmap .sdt-hm-list-header-visible {
    display: flex;
  }

  .hexclave-clickmap .sdt-hm-list-header-summary {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    font-weight: 600;
    color: var(--sdt-text-secondary);
    font-variant-numeric: tabular-nums;
  }

  /* Element search, compacted to header height. Shrinks before the summary
     does, but never below a usable width. */
  .hexclave-clickmap .sdt-hm-list-header .sdt-hm-filter-input {
    flex: 0 1 220px;
    width: auto;
    min-width: 90px;
    height: 24px;
    border-radius: 999px;
    font-size: 11px;
    padding: 0 10px;
  }

  .hexclave-clickmap .sdt-hm-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 140px;
    border-radius: var(--sdt-radius);
    border: 1px dashed var(--sdt-border);
    color: var(--sdt-text-tertiary);
    font-size: 12px;
    text-align: center;
    padding: 0 16px;
  }

  .hexclave-clickmap .sdt-hm-row {
    width: 100%;
    display: grid;
    grid-template-columns: 16px minmax(42px, auto) minmax(0, 1fr) 24px;
    align-items: center;
    gap: 10px;
    border: 0;
    border-radius: var(--sdt-radius);
    background: transparent;
    color: var(--sdt-text);
    padding: 8px;
    text-align: left;
    cursor: pointer;
    font-family: var(--sdt-font);
    user-select: none;
  }

  .hexclave-clickmap .sdt-hm-row:hover {
    background: var(--sdt-bg-hover);
    transition: none;
  }

  .hexclave-clickmap .sdt-hm-row:focus-visible {
    outline: 2px solid var(--sdt-accent);
    outline-offset: 2px;
  }

  .hexclave-clickmap .sdt-hm-row-muted {
    opacity: 0.52;
  }

  .hexclave-clickmap .sdt-hm-row-highlighted {
    background: rgba(250, 204, 21, 0.12);
  }

  /* Declared after -highlighted and with a :hover pair so the selection tint
     wins over both the lead-highlight wash and the plain hover background. */
  .hexclave-clickmap .sdt-hm-row-selected,
  .hexclave-clickmap .sdt-hm-row-selected:hover {
    background: var(--sdt-accent-muted);
  }

  /* Row checkbox (also reused as the list header's master checkbox). A
     button with role=checkbox instead of a native input so it can render the
     overlay-themed check/indeterminate icons. */
  .hexclave-clickmap .sdt-hm-row-check {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border: 1px solid var(--sdt-border);
    border-radius: calc(var(--sdt-radius) - 3px);
    background: var(--sdt-bg-elevated);
    color: white;
    appearance: none;
    padding: 0;
    cursor: pointer;
  }

  .hexclave-clickmap .sdt-hm-row-check:hover {
    border-color: var(--sdt-accent);
  }

  .hexclave-clickmap .sdt-hm-row-check[aria-checked="true"],
  .hexclave-clickmap .sdt-hm-row-check[aria-checked="mixed"] {
    background: var(--sdt-accent);
    border-color: var(--sdt-accent);
  }

  .hexclave-clickmap .sdt-hm-row-check:focus-visible {
    outline: 2px solid var(--sdt-accent);
    outline-offset: 2px;
  }

  .hexclave-clickmap .sdt-hm-row-check svg {
    pointer-events: none;
  }

  .hexclave-clickmap .sdt-hm-row-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    border-radius: calc(var(--sdt-radius) - 2px);
    background: var(--sdt-accent-muted);
    color: var(--sdt-accent-hover);
    padding: 0 7px;
    font-size: 12px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    font-family: var(--sdt-font);
  }

  .hexclave-clickmap .sdt-hm-row-muted .sdt-hm-row-count {
    background: var(--sdt-bg-elevated);
    color: var(--sdt-text-tertiary);
  }

  .hexclave-clickmap .sdt-hm-row-eye {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--sdt-border-subtle);
    border-radius: calc(var(--sdt-radius) - 2px);
    background: var(--sdt-bg-elevated);
    color: var(--sdt-text-secondary);
    appearance: none;
    padding: 0;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
  }

  .hexclave-clickmap .sdt-hm-row:hover .sdt-hm-row-eye,
  .hexclave-clickmap .sdt-hm-row:focus-within .sdt-hm-row-eye,
  .hexclave-clickmap .sdt-hm-row-muted .sdt-hm-row-eye {
    opacity: 1;
    pointer-events: auto;
  }

  .hexclave-clickmap .sdt-hm-row-eye:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
    transition: none;
  }

  .hexclave-clickmap .sdt-hm-row-eye:focus-visible {
    outline: 2px solid var(--sdt-accent);
    outline-offset: 2px;
  }

  .hexclave-clickmap .sdt-hm-row-meta {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .hexclave-clickmap .sdt-hm-row-label-row {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  .hexclave-clickmap .sdt-hm-row-label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    font-size: 12px;
    font-weight: 600;
  }

  .hexclave-clickmap .sdt-hm-row-dead {
    display: none;
    flex: none;
    align-items: center;
    height: 16px;
    border-radius: calc(var(--sdt-radius) - 3px);
    background: var(--sdt-error-muted);
    color: var(--sdt-error);
    padding: 0 5px;
    font-size: 10px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .hexclave-clickmap .sdt-hm-row-dead-visible {
    display: inline-flex;
  }

  .hexclave-clickmap .sdt-hm-row-selector {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: var(--sdt-font-mono);
    font-size: 10.5px;
    color: var(--sdt-text-tertiary);
  }

  .sdt-hm-overlay-root {
    position: fixed;
    inset: 0;
    z-index: 2147483646;
    pointer-events: none;
    --resize-dur: 320ms;
    --resize-ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  .sdt-hm-overlay-root .sdt-hm-marker {
    position: fixed;
    transform: translate(-50%, -50%);
    min-width: 28px;
    height: 24px;
    border-radius: 999px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    color: rgba(10, 10, 11, 0.92);
    font: 700 12px/1 var(--sdt-font, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    pointer-events: auto;
    transition: opacity 0.15s ease, transform 0.15s ease, filter 0.15s ease;
  }

  .sdt-hm-overlay-root .sdt-hm-marker:hover {
    transform: translate(-50%, -50%) scale(1.06);
    transition: none;
  }

  .sdt-hm-overlay-root .sdt-hm-marker-muted {
    opacity: 0.18;
    filter: saturate(0.25);
    text-decoration: line-through;
  }

  .sdt-hm-overlay-root .sdt-hm-marker-highlighted {
    transform: translate(-50%, -50%) scale(1.08);
  }

  .sdt-hm-overlay-root .sdt-hm-outline {
    position: fixed;
    border: 1px solid;
    border-radius: 4px;
    background: rgba(99, 102, 241, 0.04);
    transition: opacity 0.15s ease, background 0.15s ease, border-color 0.15s ease;
  }

  .sdt-hm-overlay-root .sdt-hm-outline-muted {
    opacity: 0;
  }

  .sdt-hm-overlay-root .sdt-hm-outline-highlighted {
    border-color: rgba(250, 204, 21, 0.92) !important;
  }

  .sdt-hm-overlay-root .sdt-hm-highlight {
    position: fixed;
    border-radius: 5px;
    background: rgba(250, 204, 21, 0.28);
    box-shadow: 0 0 0 1px rgba(250, 204, 21, 0.7), 0 0 0 9999px rgba(0, 0, 0, 0.04);
    opacity: 0;
    will-change: top, left, width, height;
    transition: opacity 0.18s ease;
  }

  .sdt-hm-overlay-root .sdt-hm-highlight-visible {
    opacity: 1;
  }

  .sdt-hm-overlay-root .sdt-hm-highlight-animating {
    transition:
      top var(--resize-dur) var(--resize-ease),
      left var(--resize-dur) var(--resize-ease),
      width var(--resize-dur) var(--resize-ease),
      height var(--resize-dur) var(--resize-ease),
      opacity 0.18s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .sdt-hm-overlay-root .sdt-hm-highlight-animating {
      transition: opacity 0.18s ease;
    }
  }
`,h="hexclave-clickmap-overlay-filters",p={range:"7d",device:"all",urlPattern:"",elementSearch:"",showDead:!1},m={"24h":864e5,"7d":6048e5,"30d":2592e6},u={mobile:{min:0,max:767},tablet:{min:768,max:1023},laptop:{min:1024,max:1199},desktop:{min:1200,max:1439},widescreen:{min:1440,max:1919},tv:{min:1920,max:null}};function v(e){return"24h"===e||"7d"===e||"30d"===e}function g(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function f(e,t){if(!Object.prototype.hasOwnProperty.call(e.attrs,t))return"";let a=e.attrs[t];return"string"==typeof a?a:""}function x(e){let t=e,a="";for(let e of["k","m","b"]){if(t<999.95)break;t/=1e3,a=e}return""===a?String(Math.round(t)):`${Math.round(10*t)/10}${a}`}function b(e){let t=e.getAttribute("aria-label");if(null!=t&&""!==t.trim())return t.trim().slice(0,80);let a=e.getAttribute("title");if(null!=a&&""!==a.trim())return a.trim().slice(0,80);let r=e.textContent.trim().replace(/\s+/g," ");return""!==r?r.slice(0,80):e.tagName.toLowerCase()}function w(e){if(null!=e.closest(`#${(0,l.cssEscapeIdent)(r.CLICKMAP_ROOT_ID)}, #${(0,l.cssEscapeIdent)(r.DEV_TOOL_ROOT_ID)}`)||null!=e.closest('[hidden], [aria-hidden="true"], [inert]'))return!1;let t=e.getBoundingClientRect();if(t.width<=0||t.height<=0)return!1;let a=window.getComputedStyle(e);return"none"!==a.display&&"hidden"!==a.visibility&&"0"!==a.opacity}function k(){var e=a.CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY;try{let t=sessionStorage.getItem(e);return null==t||""===t.trim()?null:t}catch{return null}}function y(){let e=k();return null==e?null:function(e,t){let a=e.split(".");if(a.length<2||""===a[1])return null;try{let e=a[1].replace(/-/g,"+").replace(/_/g,"/"),r=e.padEnd(4*Math.ceil(e.length/4),"="),l=JSON.parse(atob(r));if("object"!=typeof l||null===l)return null;let i=Reflect.get(l,t);return"string"==typeof i?i:null}catch{return null}}(e,"origin")}function C(e){let t=e.length>1&&e.endsWith("/"),a=e.split("/").map(e=>!function(e){if(""===e)return!1;let t=e;try{t=decodeURIComponent(e)}catch{}return!!(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t)||/^[0-9a-f]{32}$/i.test(t)||/^[0-9a-f]{24}$/i.test(t)||/^[0-9A-HJKMNP-TV-Z]{26}$/i.test(t)||/^\d+$/.test(t))}(e)?e:"*").join("/");return t?`${a}/`:a}let N="__hexclave-clickmap-instance";e.s(["openClickmapOverlay",0,function(e,E){if("u"<typeof document||"function"!=typeof document.createElement)return()=>{};let L=Reflect.get(document,"body");if(!(0,s.hasAppendChild)(L))return()=>{};(0,s.getGlobalUiInstance)(N)?.cleanup();let S=document.getElementById(r.CLICKMAP_ROOT_ID);for(;null!==S;)S.remove(),S=document.getElementById(r.CLICKMAP_ROOT_ID);let $=document.createElement("div");$.id=r.CLICKMAP_ROOT_ID,L.appendChild($);let A=(0,s.h)("div",{className:"hexclave-clickmap"});$.appendChild(A);let z=document.createElement("style");z.textContent=c,A.appendChild(z);let T=function(e,c){let N,E=(0,s.h)("div",{className:"sdt-hm"}),L=(0,s.h)("div",{className:"sdt-hm-highlight"}),S=(0,s.h)("div",{className:"sdt-hm-overlay-root","aria-hidden":"true"},L),$=(0,s.h)("div",{className:"sdt-hm-stat-value"},"0"),A=(0,s.h)("div",{className:"sdt-hm-stat-value"},"0"),z=(0,s.h)("div",{className:"sdt-hm-stat-value"},`${window.innerWidth}x${window.innerHeight}`),T=(0,s.h)("div",{className:"sdt-hm-list"}),M=(0,s.h)("div",{className:"sdt-hm-empty"},"Paste a clickmap token from the dashboard to load aggregated element clicks for this page."),I=(0,s.h)("div",{className:"sdt-hm-token-status"}),O=(0,s.h)("div",{className:"sdt-hm-viewport-warning-title"}),_=(0,s.h)("div",{className:"sdt-hm-viewport-warning-body"}),D=(0,s.h)("code",{className:"sdt-hm-viewport-warning-code"}),P=(0,s.h)("code",{className:"sdt-hm-viewport-warning-code"}),R=(0,s.h)("button",{className:"sdt-hm-copy-btn",type:"button"}),j=(0,s.h)("button",{className:"sdt-hm-copy-btn",type:"button"}),K=(0,s.h)("div",{className:"sdt-hm-viewport-warning",role:"status"},O,_,(0,s.h)("div",{className:"sdt-hm-viewport-warning-actions"},(0,s.h)("span",{className:"sdt-hm-viewport-warning-action"},(0,s.h)("span",{className:"sdt-hm-viewport-warning-label"},"Width"),D,R),(0,s.h)("span",{className:"sdt-hm-viewport-warning-action"},(0,s.h)("span",{className:"sdt-hm-viewport-warning-label"},"Height"),P,j))),H=(0,s.h)("button",{className:"sdt-hm-btn sdt-hm-btn-primary"},"Hide"),B=(0,s.h)("button",{className:"sdt-hm-icon-btn","aria-label":"Expand clickmap options","data-sdt-tip":"Expand clickmap options"}),U=(0,s.h)("button",{className:"sdt-hm-icon-btn","aria-label":"Close clickmap","data-sdt-tip":"Close clickmap"}),V=(0,s.h)("span",{className:"sdt-hm-toolbar-metric-value"},"0"),Y=(0,s.h)("span",{className:"sdt-hm-toolbar-metric-value"},"0");function W(e){try{sessionStorage.setItem(h,JSON.stringify(e))}catch{}}let G=window.location.pathname,q={path:G,totalClicks:0,selectors:[],elements:[]},F=!1,J=null,X=0,Z=!0,Q=!1,ee=0,et="hidden",ea=null,er=null,el=null,ei=null,en=new Set,eo=new Set,es=null,ed=[],ec=new Map,eh=new Map;function ep(e,t){e.textContent=t}function em(e,t,a){(0,n.runAsynchronously)(async()=>{try{await navigator.clipboard.writeText(t),e.textContent="Copied",window.setTimeout(()=>ep(e,a),1200)}catch{e.textContent="Copy failed",window.setTimeout(()=>ep(e,a),1600)}})}let eu=new Map,ev=!0,eg=0;function ef(){for(let e of(eu.clear(),ex=new WeakMap,document.querySelectorAll("*"))){if(!w(e))continue;let t=e.tagName.toLowerCase(),a=eu.get(t)??[];a.push(e),eu.set(t,a)}ev=!1}let ex=new WeakMap;function eb(e){let t=ex.get(e);if(null!=t)return t;let a=e,r=e;for(let e=0;null!=r&&r!==document.body&&r!==document.documentElement&&e<10;e++){if(r.matches('a[href], button, input, select, textarea, summary, label, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="radio"], [role="switch"], [role="option"], [contenteditable="true"]')){a=r;break}let e=r.parentElement;if("pointer"===window.getComputedStyle(r).cursor&&(null==e||"pointer"!==window.getComputedStyle(e).cursor)){a=r;break}r=e}let l={target:a,key:(0,i.buildElementsChain)(a)};return ex.set(e,l),l}function ew(e){let t=e.filter(w);return 1===t.length?t[0]:null}function ek(e){try{return ew(Array.from(document.querySelectorAll(e)))}catch{return null}}function ey(e,t,a,r,l){let i=e;for(let e=0;e<t.length;e++){if(null==i)return!1;let n=t[e];if(!function(e,t,a){if(e.tagName.toLowerCase()!==t.tag)return!1;if(a){for(let a of t.classes)if(!e.classList.contains(a))return!1}return!0}(i,n,a)||r&&null!=n.nthOfType&&function(e){let t=1,a=e.previousElementSibling,r=e.tagName;for(;null!=a;)a.tagName===r&&(t+=1),a=a.previousElementSibling;return t}(i)!==n.nthOfType||l&&null!=n.nthChild&&function(e){let t=1,a=e.previousElementSibling;for(;null!=a;)t+=1,a=a.previousElementSibling;return t}(i)!==n.nthChild)return!1;i=i.parentElement}return!0}(0,s.setHtml)(U,'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>');let eC='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',eN='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>',eE="";function eL(){let e=Q?'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>':'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';eE!==e&&(eE=e,(0,s.setHtml)(B,e))}eL(),ep(R,"Copy width"),ep(j,"Copy height"),R.addEventListener("click",()=>{em(R,D.textContent,"Copy width")}),j.addEventListener("click",()=>{em(j,P.textContent,"Copy height")});let eS=(0,s.h)("div",{className:"sdt-hm-stats"},(0,s.h)("div",{className:"sdt-hm-stat"},(0,s.h)("div",{className:"sdt-hm-stat-label"},"Clicks"),$),(0,s.h)("div",{className:"sdt-hm-stat"},(0,s.h)("div",{className:"sdt-hm-stat-label"},"Elements"),A),(0,s.h)("div",{className:"sdt-hm-stat"},(0,s.h)("div",{className:"sdt-hm-stat-label"},"Viewport"),z)),e$=function(){try{var e;let t=sessionStorage.getItem(h);if(null==t)return{...p};let a=JSON.parse(t);if(null==a||"object"!=typeof a)return{...p};return{range:v(a.range)?a.range:p.range,device:(e=a.device,"all"===e||"mobile"===e||"tablet"===e||"laptop"===e||"desktop"===e||"widescreen"===e||"tv"===e)?a.device:p.device,urlPattern:"string"==typeof a.urlPattern?a.urlPattern:p.urlPattern,elementSearch:"string"==typeof a.elementSearch?a.elementSearch:p.elementSearch,showDead:"boolean"==typeof a.showDead?a.showDead:p.showDead}}catch{return{...p}}}(),eA=0,ez=""!==e$.urlPattern.trim();function eT(){return ez?e$.urlPattern.trim():C(window.location.pathname)}let eM=function(e,t){let a=(0,s.h)("select",{className:"sdt-hm-filter-input"});for(let[t,r]of e){let e=(0,s.h)("option",{value:t},r);a.appendChild(e)}return a.value=t,a}([["24h","Last 24h"],["7d","Last 7 days"],["30d","Last 30 days"]],e$.range),eI=(0,s.h)("span",{className:"sdt-hm-seg-thumb","aria-hidden":"true"}),eO=(0,s.h)("div",{className:"sdt-hm-seg",role:"radiogroup","aria-label":"Viewport"},eI),e_=new Map,eD=!1;function eP(){let e=e_.get(e$.device);null!=e&&0!==e.offsetWidth&&(eD||(eI.style.transition="none"),eI.style.transform=`translateX(${e.offsetLeft}px)`,eI.style.width=`${e.offsetWidth}px`,eD||(eI.offsetWidth,eI.style.transition="",eD=!0))}for(let[e,t]of[["all","All"],["mobile","Mobile"],["tablet","Tablet"],["laptop","Laptop"],["desktop","Desktop"],["widescreen","Wide"],["tv","TV"]]){let a=(0,s.h)("button",{className:"sdt-hm-seg-btn",type:"button",role:"radio"},t);a.setAttribute("aria-checked",String(e===e$.device)),a.addEventListener("click",()=>{if(e$.device!==e){for(let[t,a]of(te({device:e}),e_))a.setAttribute("aria-checked",String(t===e));eP()}}),e_.set(e,a),eO.appendChild(a)}let eR=(0,s.h)("input",{className:"sdt-hm-filter-input",type:"text",placeholder:"/products/*",spellcheck:"false",autocomplete:"off",autocapitalize:"off"});eR.value=eT();let ej=(0,s.h)("button",{className:"sdt-hm-filter-reset",type:"button","aria-label":"Revert the URL pattern to the current page","data-sdt-tip":"Revert to the current page"});function eK(){let e=C(window.location.pathname),t=ez&&e$.urlPattern.trim()!==e;ej.classList.toggle("sdt-hm-filter-reset-visible",t)}(0,s.setHtml)(ej,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>');let eH=(0,s.h)("button",{className:"sdt-hm-filter-info",type:"button","aria-label":"URL pattern help","aria-expanded":"false","data-sdt-tip":"How URL patterns work"});function eB(e,t){return(0,s.h)("div",{className:"sdt-hm-url-help-row"},(0,s.h)("code",{className:"sdt-hm-url-help-code"},e),(0,s.h)("span",{className:"sdt-hm-url-help-desc"},t))}function eU(e){return(0,s.h)("code",{className:"sdt-hm-url-help-code"},e)}(0,s.setHtml)(eH,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>');let eV=(0,s.h)("div",{className:"sdt-hm-url-help-title"}),eY=(0,s.h)("div",{className:"sdt-hm-url-help-body"}),eW=(0,s.h)("div",{className:"sdt-hm-url-help-rows"}),eG=(0,s.h)("div",{className:"sdt-hm-url-help",role:"dialog","aria-label":"URL pattern help"},eV,eY,eW),eq=!1;function eF(e){eq=e,eG.classList.toggle("sdt-hm-url-help-open",e),eH.setAttribute("aria-expanded",String(e))}eH.addEventListener("click",e=>{e.stopPropagation(),eF(!eq)}),eG.addEventListener("click",e=>{e.stopPropagation()}),eV.textContent="URL pattern · glob",eY.replaceChildren("Limits the clickmap to pages whose path matches. Matched against the pathname only — no domain, hash, or query string. ",eU("*")," is the only wildcard and stands in for any characters (including ",eU("/"),"). Everything else is matched literally."),eW.replaceChildren(eB("/pricing","That exact page"),eB("/products/*","Any path under /products/"),eB("/teams/*/members","A wildcard segment in the middle"),eB("*/settings","Any path ending in /settings"),eB("*","Every page"),eB("(empty)","Auto-tracks the page you are viewing"));let eJ=(0,s.h)("input",{className:"sdt-hm-filter-input",type:"text",placeholder:"Search element text or tag","aria-label":"Search element text or tag",spellcheck:"false",autocomplete:"off",autocapitalize:"off"});eJ.value=e$.elementSearch;let eX=(0,s.h)("span",{className:"sdt-hm-toolbar-metric-icon"}),eZ=(0,s.h)("span",{className:"sdt-hm-toolbar-metric-icon"});(0,s.setHtml)(eX,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>'),(0,s.setHtml)(eZ,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>');let eQ='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>',e0=(0,s.h)("button",{className:"sdt-hm-icon-btn sdt-hm-dead-toggle",type:"button","aria-pressed":"false","aria-label":"Show dead clicks","data-sdt-tip":"Show dead clicks"});(0,s.setHtml)(e0,eQ);let e1=(0,s.h)("span",{className:"sdt-hm-dead-toggle-icon"});(0,s.setHtml)(e1,eQ);let e2=(0,s.h)("button",{className:"sdt-hm-btn sdt-hm-dead-toggle",type:"button","aria-pressed":"false","data-sdt-tip":"Include clicks that had no effect"},e1,"Dead clicks");function e4(){for(let e of[e0,e2])e.setAttribute("aria-pressed",String(e$.showDead)),e.classList.toggle("sdt-hm-dead-toggle-active",e$.showDead)}function e5(e){e$.showDead!==e&&(W(e$={...e$,showDead:e}),e4(),tp())}e0.addEventListener("click",()=>e5(!e$.showDead)),e2.addEventListener("click",()=>e5(!e$.showDead)),e4();let e9=(0,s.h)("button",{className:"sdt-hm-icon-btn",type:"button","aria-pressed":"false","aria-label":"Hide overlay","data-sdt-tip":"Hide overlay"}),e6="";function e8(){e9.setAttribute("aria-pressed",String(!Z));let e=Z?"Hide overlay":"Show overlay";e9.setAttribute("aria-label",e),e9.setAttribute("data-sdt-tip",e),e9.classList.toggle("sdt-hm-overlay-mini-off",!Z);let t=Z?eC:eN;e6!==t&&(e6=t,(0,s.setHtml)(e9,t))}e9.addEventListener("click",()=>{Z=!Z,tC()}),e8();let e3=(0,s.h)("div",{className:"sdt-hm-toolbar"},U,(0,s.h)("div",{className:"sdt-hm-toolbar-title"},"Clickmap"),(0,s.h)("div",{className:"sdt-hm-toolbar-filters"},eM,(0,s.h)("div",{className:"sdt-hm-toolbar-url"},eR,ej,eH,eG)),(0,s.h)("div",{className:"sdt-hm-toolbar-metrics"},(0,s.h)("span",{className:"sdt-hm-toolbar-metric","data-sdt-tip":"Aggregate clicks"},V,eX),(0,s.h)("span",{className:"sdt-hm-toolbar-metric","data-sdt-tip":"Mapped elements"},Y,eZ)),e0,e9,B),e7=(0,s.h)("div",{className:"sdt-hm-filters"},(N=(0,s.h)("span",{className:"sdt-hm-filter-label-row"},(0,s.h)("span",{className:"sdt-hm-filter-label"},"Viewport")),(0,s.h)("label",{className:"sdt-hm-filter-field"},N,eO)),K);function te(e){W(e$={...e$,...e}),0!==eA&&window.clearTimeout(eA),eA=window.setTimeout(()=>{eA=0,(0,n.runAsynchronously)(tN())},250)}let tt=0;eM.addEventListener("change",()=>{v(eM.value)&&te({range:eM.value})}),eR.addEventListener("input",()=>{let e=eR.value;ez=""!==e.trim(),te({urlPattern:e}),eK()}),ej.addEventListener("click",()=>{ez=!1,eR.value=C(window.location.pathname),te({urlPattern:""}),eK()}),eJ.addEventListener("input",()=>{var e;e=eJ.value,W(e$={...e$,elementSearch:e}),0!==tt&&window.clearTimeout(tt),tt=window.setTimeout(()=>{tt=0,tp()},120)});let ta=(0,s.h)("div",{className:"sdt-hm-head"},e7,(0,s.h)("div",{className:"sdt-hm-actions"},eS,e2,H)),tr=(0,s.h)("button",{className:"sdt-hm-row-check",type:"button",role:"checkbox","aria-checked":"false","aria-label":"Select all elements"}),tl=(0,s.h)("span",{className:"sdt-hm-list-header-summary"}),ti=(0,s.h)("button",{className:"sdt-hm-btn sdt-hm-btn-sm",type:"button"},"Show all"),tn=(0,s.h)("button",{className:"sdt-hm-btn sdt-hm-btn-sm",type:"button"},"Hide all"),to=(0,s.h)("div",{className:"sdt-hm-list-header"},tr,tl,eJ,ti,tn);tr.addEventListener("click",()=>{if(ed.length>0&&ed.every(e=>eo.has(e.selector)))return void tg();for(let e of(eo.clear(),ed))eo.add(e.selector);es=null,tp()}),ti.addEventListener("click",()=>{for(let e of tb())en.delete(e.selector);tp()}),tn.addEventListener("click",()=>{for(let e of tb())en.add(e.selector);tp()});let ts=(0,s.h)("div",{className:"sdt-hm-body"},I,to,T),td=(0,s.h)("div",{className:"sdt-hm-details"},ta,ts);function tc(e){return e$.showDead?e.count:Math.max(0,e.count-e.deadCount)}function th(e){return e.count<=0?100:Math.min(100,Math.round(e.deadCount/e.count*100))}function tp(){cancelAnimationFrame(ee),ee=requestAnimationFrame(tC)}function tm(){ec.clear(),S.replaceChildren(L),L.classList.remove("sdt-hm-highlight-visible","sdt-hm-highlight-animating"),er=null}function tu(){eh.clear(),T.replaceChildren()}function tv(e){en.has(e)?en.delete(e):en.add(e),tp()}function tg(){(0!==eo.size||null!=ea)&&(eo.clear(),es=null,ea=null,tp())}function tf(e){eo.has(e)?(eo.delete(e),ea===e&&(ea=null)):(eo.add(e),ea=e),es=e,tp()}function tx(e,t){let a=t.ctrlKey||t.metaKey;if(t.shiftKey&&null!=es){let t=ed.map(e=>e.selector),r=t.indexOf(es),l=t.indexOf(e.selector);if(-1!==r&&-1!==l){a||eo.clear();let[i,n]=r<=l?[r,l]:[l,r];for(let e of t.slice(i,n+1))eo.add(e);ea=e.selector,tp();return}}a?tf(e.selector):(es=e.selector,1===eo.size&&eo.has(e.selector)?(eo.delete(e.selector),ea=null):(eo.clear(),eo.add(e.selector),ea=e.selector),tp())}function tb(){return eo.size>0?ed.filter(e=>eo.has(e.selector)):ed}function tw(e){ei!==e&&(ei=e,tp())}let tk='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',ty="";function tC(){var e;let t;G!==window.location.pathname&&(q={path:G=window.location.pathname,totalClicks:0,selectors:[],elements:[]},J=null,tu(),function(){if(ez)return;let e=C(window.location.pathname);eR.value!==e&&(eR.value=e)}(),(0,n.runAsynchronously)(tN()));let a=function(){let e=new Map;if(q.path!==G)return[];let t=e$.elementSearch.trim().toLowerCase(),a=e=>""===t||[e.elementsText,e.tagName,e.href??"",e.elementsChain].some(e=>e.toLowerCase().includes(t));if(q.elements.length>0)for(let t of(ev&&ef(),q.elements)){if(!a(t))continue;let r=(0,i.parseElementsChain)(t.elementsChain),n=r.length>0?function(e){if(0===e.length)return null;let t=e[0];for(let{attr:e}of[{attr:"data-hexclave-id"},{attr:"data-testid"},{attr:"data-test-id"},{attr:"name"}]){let a=f(t,e);if(""===a)continue;let r=ek(`[${e}="${g(a)}"]`);if(r)return r}let a=f(t,"id");if(""!==a){let e=ek(`#${(0,l.cssEscapeIdent)(a)}`);if(e)return e}if(null!=t.href&&""!==t.href&&"a"===t.tag){let e=ek(`a[href="${g(t.href)}"]`);if(e)return e}for(let e of["aria-label","role","placeholder","title","type"]){let a=f(t,e);if(""===a)continue;let r=ek(`${t.tag}[${e}="${g(a)}"]`);if(r)return r}ev&&ef();let r=eu.get(t.tag)??[];if(0===r.length)return null;let i=[];for(let t of r)ey(t,e,!0,!1,!1)&&i.push(t);let n=ew(i);if(null!=n)return n;let o=[];for(let t of r)ey(t,e,!0,!0,!1)&&o.push(t);let s=ew(o);if(null!=s)return s;let d=[];for(let t of r)ey(t,e,!0,!0,!0)&&d.push(t);let c=ew(d);return null!=c?c:null}(r):null;if(null==n&&null!=t.href&&""!==t.href&&"a"===t.tagName.toLowerCase()&&(n=ek(`a[href="${g(t.href)}"]`)),null==n)continue;let{target:o,key:s}=eb(n),d=e.get(s);if(null!=d){d.count+=t.clicks,d.deadCount+=t.deadClicks;continue}e.set(s,{selector:s,label:b(o),count:t.clicks,deadCount:t.deadClicks,element:o,rect:o.getBoundingClientRect()})}if(0===e.size)for(let a of q.selectors){if(""!==t&&!a.selector.toLowerCase().includes(t))continue;let r=function(e){try{return Array.from(document.querySelectorAll(e)).find(w)??null}catch{return null}}(a.selector);if(null==r)continue;let{target:l,key:i}=eb(r),n=e.get(i);if(null!=n){n.count+=a.clicks;continue}e.set(i,{selector:i,label:b(l),count:a.clicks,deadCount:0,element:l,rect:l.getBoundingClientRect()})}let r=Array.from(e.values());return e$.showDead||(r=r.filter(e=>tc(e)>0)),r.sort((e,t)=>tc(t)-tc(e)||(0,o.stringCompare)(e.selector,t.selector))}();ed=a;let r=new Set(a.map(e=>e.selector));for(let e of en)r.has(e)||en.delete(e);for(let e of eo)r.has(e)||eo.delete(e);null==es||r.has(es)||(es=null),null==ea||r.has(ea)||(ea=null),null==ei||r.has(ei)||(ei=null);let d=a.reduce((e,t)=>e+tc(t),0),c=q.path===G?q.totalClicks:0,h=null!=(t=window.visualViewport)?{width:t.width,height:t.height}:{width:window.innerWidth,height:window.innerHeight},p=Math.round(h.width),m=Math.round(h.height),v="all"===(e=e$.device)?null:u[e],N=null==v||p>=v.min&&(null==v.max||p<=v.max);if($.textContent=x(c),A.textContent=x(a.length),z.textContent=`${p}x${m}`,H.textContent=Z?"Hide overlay":"Show overlay",e8(),K.classList.toggle("sdt-hm-viewport-warning-visible",!N),null!=v&&!N){let e=null==v.max?v.min:Math.round((v.min+v.max)/2),t=Math.max(1,m);O.textContent="Viewport filter mismatch",_.textContent=`This page is ${p}px wide, but ${e$.device} is ${null==v.max?`${v.min}px+`:`${v.min}-${v.max}px`}. Resize the window or use the DevTools device toolbar before comparing this clickmap.`,D.textContent=String(e),P.textContent=String(t)}let R=eT(),j=function(e,t){if(""===e)return!0;try{return RegExp(`^${e.split("*").map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join(".*")}$`).test(t)}catch{return!1}}(R,G);eK();let U=k(),W=y();if(null==U)I.textContent=J??"No clickmap token in sessionStorage. Paste one from the dashboard to load this page.";else if(null!=W&&W!==window.location.origin)I.textContent=`Token was minted for ${W}, but this page is ${window.location.origin}. Generate a token for this exact origin.`;else if(F)I.textContent="Loading aggregate clickmap...";else if(null!=J)I.textContent=J;else{let e=""!==R&&R!==G?R:G,t=`Loaded ${x(c)} aggregate clicks for ${e}.`;0===c?t=`No clicks recorded for ${e} in this range.`:j?0===a.length?t+=" No matching elements found on this page yet.":d<c&&(t+=` ${x(d)} mapped to elements on this page.`):t+=" This page isn’t covered by the pattern — reset it or open a matching page to see the overlay.",I.textContent=t}I.classList.toggle("sdt-hm-token-status-error",null!=J||null!=U&&null!=W&&W!==window.location.origin),V.textContent=x(c),Y.textContent=x(a.length),E.classList.toggle("sdt-hm-expanded",Q),B.setAttribute("aria-expanded",String(Q)),B.setAttribute("aria-label",Q?"Collapse clickmap options":"Expand clickmap options"),B.setAttribute("data-sdt-tip",Q?"Collapse clickmap options":"Expand clickmap options"),eL(),eP(),function(e){let t=Z?"elements":"hidden";if(et!==t&&(et=t,tm()),!Z)return;let a=new Set,r=Math.max(1,...e.map(tc));for(let t of e){if(null==t.rect||t.rect.width<=0||t.rect.height<=0)continue;a.add(t.selector);let e=tc(t),l=r<=1?185:185-Math.round(155*Math.min(1,e/r)),i=en.has(t.selector),n=ea===t.selector||eo.has(t.selector),o=ec.get(t.selector);if(null==o){let e=(0,s.h)("button",{className:"sdt-hm-marker",type:"button",tabindex:"-1"});e.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),tv(t.selector)}),e.addEventListener("pointerenter",()=>tw(t.selector)),e.addEventListener("pointerleave",()=>{ei===t.selector&&tw(null)}),o={marker:e,outline:(0,s.h)("div",{className:"sdt-hm-outline"})},ec.set(t.selector,o),S.append(o.outline,o.marker)}let{marker:d,outline:c}=o,h=e$.showDead&&t.deadCount>0&&t.count>0?` (${th(t)}% dead)`:"";d.title=i?`Unmute ${t.selector}`:`Mute ${e} clicks${h} on ${t.selector}`,d.setAttribute("aria-label",d.title),d.style.left=`${Math.round(t.rect.left+t.rect.width/2)}px`,d.style.top=`${Math.round(t.rect.top+t.rect.height/2)}px`,d.style.background=`hsla(${l}, 96%, 58%, 0.94)`,d.style.boxShadow=`0 0 0 1px hsla(${l}, 96%, 22%, 0.35), 0 8px 24px hsla(${l}, 96%, 45%, 0.32)`,d.textContent=x(e),d.classList.toggle("sdt-hm-marker-muted",i),d.classList.toggle("sdt-hm-marker-highlighted",n),c.style.left=`${t.rect.left}px`,c.style.top=`${t.rect.top}px`,c.style.width=`${t.rect.width}px`,c.style.height=`${t.rect.height}px`,c.style.borderColor=`hsla(${l}, 96%, 58%, 0.5)`,c.style.background=ei===t.selector?`hsla(${l}, 96%, 58%, 0.16)`:"",c.classList.toggle("sdt-hm-outline-muted",i),c.classList.toggle("sdt-hm-outline-highlighted",n)}for(let[e,t]of ec)a.has(e)||(t.marker.remove(),t.outline.remove(),ec.delete(e));!function(e){let t=null==ea?null:e.find(e=>e.selector===ea)??null,a=t?.rect??null;if(null==t||null==a||a.width<=0||a.height<=0){null!=el&&(window.clearTimeout(el),el=null),L.classList.remove("sdt-hm-highlight-visible","sdt-hm-highlight-animating"),er=null;return}L.classList.contains("sdt-hm-highlight-visible")&&er!==t.selector&&(L.classList.add("sdt-hm-highlight-animating"),null!=el&&window.clearTimeout(el),el=window.setTimeout(()=>{L.classList.remove("sdt-hm-highlight-animating"),el=null},700)),er=t.selector,L.style.left=`${a.left}px`,L.style.top=`${a.top}px`,L.style.width=`${a.width}px`,L.style.height=`${a.height}px`,L.classList.add("sdt-hm-highlight-visible")}(e)}(a),function(e){let t=e.length>0||""!==e$.elementSearch.trim();if(to.classList.toggle("sdt-hm-list-header-visible",t),!t)return;let a=eo.size,r=a>0&&e.every(e=>eo.has(e.selector));tr.setAttribute("aria-checked",r?"true":a>0?"mixed":"false"),tr.setAttribute("aria-label",r?"Clear selection":"Select all elements");let l=r?tk:a>0?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>':"";ty!==l&&(ty=l,(0,s.setHtml)(tr,l)),tl.textContent=a>0?`${x(a)} of ${x(e.length)} selected`:`${x(e.length)} element${1===e.length?"":"s"}`;let i=tb(),n=a>0?"selected":"all";ti.textContent=`Show ${n}`,tn.textContent=`Hide ${n}`,ti.disabled=i.every(e=>!en.has(e.selector)),tn.disabled=i.every(e=>en.has(e.selector))}(a),function(e){if(0===e.length){tu(),T.appendChild(M);return}let t=ts.scrollTop;M.remove();let a=new Set,r=T.firstChild;for(let t of e.slice(0,30)){a.add(t.selector);let e=eh.get(t.selector);null==e&&(e=function(e){let t=(0,s.h)("span",{className:"sdt-hm-row-count"}),a=(0,s.h)("span",{className:"sdt-hm-row-label"}),r=(0,s.h)("span",{className:"sdt-hm-row-dead"}),l=(0,s.h)("span",{className:"sdt-hm-row-selector"}),i=(0,s.h)("button",{className:"sdt-hm-row-check",type:"button",role:"checkbox","aria-checked":"false"}),n=(0,s.h)("button",{className:"sdt-hm-row-eye",type:"button"}),o=(0,s.h)("div",{className:"sdt-hm-row",role:"button",tabindex:"0"},i,t,(0,s.h)("span",{className:"sdt-hm-row-meta"},(0,s.h)("span",{className:"sdt-hm-row-label-row"},a,r),l),n),d={row:o,count:t,check:i,eye:n,label:a,dead:r,selector:l,group:null,renderedEyeIcon:"",renderedCheckIcon:""};return i.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),null!=d.group){if(e.shiftKey&&null!=es)return void tx(d.group,{shiftKey:!0,ctrlKey:!0,metaKey:!1});tf(d.group.selector)}}),n.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),tv(e)}),o.addEventListener("click",e=>{null!=d.group&&tx(d.group,e)}),o.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null!=d.group&&tx(d.group,e))}),d}(t.selector),eh.set(t.selector,e)),function(e,t){let a=en.has(t.selector),r=ea===t.selector,l=eo.has(t.selector);e.group=t,e.row.classList.toggle("sdt-hm-row-muted",a),e.row.classList.toggle("sdt-hm-row-highlighted",r),e.row.classList.toggle("sdt-hm-row-selected",l),e.check.setAttribute("aria-checked",String(l)),e.check.setAttribute("aria-label",l?`Deselect ${t.label}`:`Select ${t.label}`);let i=l?tk:"";e.renderedCheckIcon!==i&&(e.renderedCheckIcon=i,(0,s.setHtml)(e.check,i)),e.count.textContent=x(tc(t)),e.eye.setAttribute("aria-pressed",String(a)),e.eye.setAttribute("aria-label",a?`Unmute ${t.label}`:`Mute ${t.label}`),e.eye.title=a?"Unmute element":"Mute element";let n=a?eN:eC;if(e.renderedEyeIcon!==n&&(e.renderedEyeIcon=n,(0,s.setHtml)(e.eye,n)),e.label.textContent=t.label,e$.showDead&&t.deadCount>0){let a=th(t);e.dead.textContent=`${a}% dead`,e.dead.title=`${x(t.deadCount)} of ${x(t.count)} clicks had no visible effect`,e.dead.classList.add("sdt-hm-row-dead-visible")}else e.dead.textContent="",e.dead.title="",e.dead.classList.remove("sdt-hm-row-dead-visible");e.selector.textContent=t.selector}(e,t),e.row!==r&&T.insertBefore(e.row,r),r=e.row.nextSibling}for(let[e,t]of eh)a.has(e)||(t.row.remove(),eh.delete(e));ts.scrollTop=t}(a)}async function tN(){let r=X+1;X=r;let l=k();if(null==l){q={path:G,totalClicks:0,selectors:[],elements:[]},J=null,F=!1,tC();return}let i=y();if(null!=i&&i!==window.location.origin){q={path:G,totalClicks:0,selectors:[],elements:[]},J=null,F=!1,tC();return}F=!0,J=null,tC();try{let a=new Date,i=new Date(a.getTime()-m[e$.range]),n=window.location.pathname,o=eT(),s={clickmap_token:l,origin:window.location.origin,since:i.toISOString(),until:a.toISOString()};""!==o?s.url_pattern=o:s.route_path=n,"all"!==e$.device&&(s.device=e$.device);let c=await e[d.hexclaveAppInternalsSymbol].sendRequest("/analytics/clickmap",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(s)},"client");if(!c.ok)throw Error(`Clickmap request failed with HTTP ${c.status}`);let h=await c.json();if(r!==X)return;q=function(e,a){let r;try{r=t.AnalyticsClickmapResponseBodySchema.validateSync(e)}catch{return{path:a,totalClicks:0,selectors:[],elements:[]}}return{path:a,totalClicks:r.routes.reduce((e,t)=>e+t.clicks,0),selectors:r.selectors.map(e=>({selector:e.selector,clicks:e.clicks})),elements:r.elements.map(e=>({elementsChain:e.elements_chain,elementsText:e.elements_text,tagName:e.tag_name,href:e.href,clicks:e.clicks,deadClicks:e.dead_clicks}))}}(h,n)}catch(e){if(r!==X)return;if(q={path:G,totalClicks:0,selectors:[],elements:[]},e instanceof Error&&e.message.includes("Clickmap token does not belong to this project")){var n=a.CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY;try{sessionStorage.removeItem(n)}catch{}J="The stored clickmap token belongs to another project. Generate a fresh token for this project."}else J=e instanceof Error?e.message:"Failed to load clickmap data"}finally{r===X&&(F=!1,tC())}}let tE=()=>{let e=k(),t=y();if(null!=e&&(null==t||t===window.location.origin))try{sessionStorage.setItem(a.CLICKMAP_OVERLAY_RESUME_STORAGE_KEY,"1")}catch{}},tL=e=>{e.addEventListener("pointerdown",t=>{try{e.setPointerCapture(t.pointerId)}catch{}})};tL(H),tL(U),tL(B),tL(e0),tL(e2),tL(e9),tL(tr),tL(ti),tL(tn),H.addEventListener("click",()=>{Z=!Z,tC()}),U.addEventListener("click",c),B.addEventListener("click",()=>{Q=!Q,tC()});let tS=()=>{(0,n.runAsynchronously)(tN())},t$=window.setInterval(tp,500),tA=new MutationObserver(e=>{e.every(e=>{var t;let a;return null!=(a=(t=e.target)instanceof Element?t:t?.parentElement??null)&&(S.contains(a)||null!=a.closest(`#${(0,l.cssEscapeIdent)(r.CLICKMAP_ROOT_ID)}, #${(0,l.cssEscapeIdent)(r.DEV_TOOL_ROOT_ID)}`))})||(0!==eg&&window.clearTimeout(eg),eg=window.setTimeout(()=>{eg=0,ev=!0,tp()},250),tp())}),tz=window.visualViewport;tA.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),(document.getElementById(r.CLICKMAP_ROOT_ID)??document.body).appendChild(S),ef(),tp(),window.addEventListener("beforeunload",tE);let tT=()=>{tp()};document.addEventListener("scroll",tp,!0),window.addEventListener("resize",tT),tz?.addEventListener("resize",tp),tz?.addEventListener("scroll",tp),window.addEventListener(a.CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT,tS);let tM=e=>{!eq||e.target instanceof Node&&eG.contains(e.target)||e.target instanceof Node&&eH.contains(e.target)||eF(!1)},tI=e=>{if("Escape"===e.key){if(eq)return void eF(!1);tg()}};return document.addEventListener("mousedown",tM,!0),document.addEventListener("keydown",tI,!0),tC(),(0,n.runAsynchronously)(tN()),E.append(td,e3),{element:E,cleanup:()=>{cancelAnimationFrame(ee),0!==eg&&window.clearTimeout(eg),0!==eA&&window.clearTimeout(eA),0!==tt&&window.clearTimeout(tt),window.clearInterval(t$),tA.disconnect(),tm(),eu.clear(),window.removeEventListener("beforeunload",tE),document.removeEventListener("scroll",tp,!0),window.removeEventListener("resize",tT),tz?.removeEventListener("resize",tp),tz?.removeEventListener("scroll",tp),window.removeEventListener(a.CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT,tS),document.removeEventListener("mousedown",tM,!0),document.removeEventListener("keydown",tI,!0),S.remove()}}}(e,()=>I.cleanup());A.appendChild((0,s.h)("div",{className:"sdt-hm-panel"},(0,s.h)("div",{className:"sdt-hm-panel-inner"},T.element)));let M=!1,I={cleanup:()=>{M||(M=!0,(0,s.getGlobalUiInstance)(N)===I&&(0,s.setGlobalUiInstance)(N,null),T.cleanup?.(),$.parentNode&&$.parentNode.removeChild($),E())}};return(0,s.setGlobalUiInstance)(N,I),()=>{I.cleanup()}}],954076)}]);