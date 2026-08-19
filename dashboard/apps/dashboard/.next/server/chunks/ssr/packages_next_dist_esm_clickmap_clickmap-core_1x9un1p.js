module.exports=[585254,a=>{"use strict";var b=a.i(563108),c=a.i(623858),d=a.i(666778),e=a.i(282753),f=a.i(338451),g=a.i(591888),h=a.i(964569),i=a.i(898536),j=a.i(624597);let k=(0,a.i(79768).getInPageUiBaseCSS)(".hexclave-clickmap")+`
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
`,l="hexclave-clickmap-overlay-filters",m={range:"7d",device:"all",urlPattern:"",elementSearch:"",showDead:!1},n={"24h":864e5,"7d":6048e5,"30d":2592e6},o={mobile:{min:0,max:767},tablet:{min:768,max:1023},laptop:{min:1024,max:1199},desktop:{min:1200,max:1439},widescreen:{min:1440,max:1919},tv:{min:1920,max:null}};function p(a){return"24h"===a||"7d"===a||"30d"===a}function q(a){return a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function r(a,b){if(!Object.prototype.hasOwnProperty.call(a.attrs,b))return"";let c=a.attrs[b];return"string"==typeof c?c:""}function s(a){let b=a,c="";for(let a of["k","m","b"]){if(b<999.95)break;b/=1e3,c=a}return""===c?String(Math.round(b)):`${Math.round(10*b)/10}${c}`}function t(a){let b=a.getAttribute("aria-label");if(null!=b&&""!==b.trim())return b.trim().slice(0,80);let c=a.getAttribute("title");if(null!=c&&""!==c.trim())return c.trim().slice(0,80);let d=a.textContent.trim().replace(/\s+/g," ");return""!==d?d.slice(0,80):a.tagName.toLowerCase()}function u(a){if(null!=a.closest(`#${(0,e.cssEscapeIdent)(d.CLICKMAP_ROOT_ID)}, #${(0,e.cssEscapeIdent)(d.DEV_TOOL_ROOT_ID)}`)||null!=a.closest('[hidden], [aria-hidden="true"], [inert]'))return!1;let b=a.getBoundingClientRect();if(b.width<=0||b.height<=0)return!1;let c=window.getComputedStyle(a);return"none"!==c.display&&"hidden"!==c.visibility&&"0"!==c.opacity}function v(){var a=c.CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY;try{let b=sessionStorage.getItem(a);return null==b||""===b.trim()?null:b}catch{return null}}function w(){let a=v();return null==a?null:function(a,b){let c=a.split(".");if(c.length<2||""===c[1])return null;try{let a=c[1].replace(/-/g,"+").replace(/_/g,"/"),d=a.padEnd(4*Math.ceil(a.length/4),"="),e=JSON.parse(atob(d));if("object"!=typeof e||null===e)return null;let f=Reflect.get(e,b);return"string"==typeof f?f:null}catch{return null}}(a,"origin")}function x(a){let b=a.length>1&&a.endsWith("/"),c=a.split("/").map(a=>!function(a){if(""===a)return!1;let b=a;try{b=decodeURIComponent(a)}catch{}return!!(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(b)||/^[0-9a-f]{32}$/i.test(b)||/^[0-9a-f]{24}$/i.test(b)||/^[0-9A-HJKMNP-TV-Z]{26}$/i.test(b)||/^\d+$/.test(b))}(a)?a:"*").join("/");return b?`${c}/`:c}let y="__hexclave-clickmap-instance";a.s(["openClickmapOverlay",0,function(a,z){if("u"<typeof document||"function"!=typeof document.createElement)return()=>{};let A=Reflect.get(document,"body");if(!(0,i.hasAppendChild)(A))return()=>{};(0,i.getGlobalUiInstance)(y)?.cleanup();let B=document.getElementById(d.CLICKMAP_ROOT_ID);for(;null!==B;)B.remove(),B=document.getElementById(d.CLICKMAP_ROOT_ID);let C=document.createElement("div");C.id=d.CLICKMAP_ROOT_ID,A.appendChild(C);let D=(0,i.h)("div",{className:"hexclave-clickmap"});C.appendChild(D);let E=document.createElement("style");E.textContent=k,D.appendChild(E);let F=function(a,k){let y,z=(0,i.h)("div",{className:"sdt-hm"}),A=(0,i.h)("div",{className:"sdt-hm-highlight"}),B=(0,i.h)("div",{className:"sdt-hm-overlay-root","aria-hidden":"true"},A),C=(0,i.h)("div",{className:"sdt-hm-stat-value"},"0"),D=(0,i.h)("div",{className:"sdt-hm-stat-value"},"0"),E=(0,i.h)("div",{className:"sdt-hm-stat-value"},`${window.innerWidth}x${window.innerHeight}`),F=(0,i.h)("div",{className:"sdt-hm-list"}),G=(0,i.h)("div",{className:"sdt-hm-empty"},"Paste a clickmap token from the dashboard to load aggregated element clicks for this page."),H=(0,i.h)("div",{className:"sdt-hm-token-status"}),I=(0,i.h)("div",{className:"sdt-hm-viewport-warning-title"}),J=(0,i.h)("div",{className:"sdt-hm-viewport-warning-body"}),K=(0,i.h)("code",{className:"sdt-hm-viewport-warning-code"}),L=(0,i.h)("code",{className:"sdt-hm-viewport-warning-code"}),M=(0,i.h)("button",{className:"sdt-hm-copy-btn",type:"button"}),N=(0,i.h)("button",{className:"sdt-hm-copy-btn",type:"button"}),O=(0,i.h)("div",{className:"sdt-hm-viewport-warning",role:"status"},I,J,(0,i.h)("div",{className:"sdt-hm-viewport-warning-actions"},(0,i.h)("span",{className:"sdt-hm-viewport-warning-action"},(0,i.h)("span",{className:"sdt-hm-viewport-warning-label"},"Width"),K,M),(0,i.h)("span",{className:"sdt-hm-viewport-warning-action"},(0,i.h)("span",{className:"sdt-hm-viewport-warning-label"},"Height"),L,N))),P=(0,i.h)("button",{className:"sdt-hm-btn sdt-hm-btn-primary"},"Hide"),Q=(0,i.h)("button",{className:"sdt-hm-icon-btn","aria-label":"Expand clickmap options","data-sdt-tip":"Expand clickmap options"}),R=(0,i.h)("button",{className:"sdt-hm-icon-btn","aria-label":"Close clickmap","data-sdt-tip":"Close clickmap"}),S=(0,i.h)("span",{className:"sdt-hm-toolbar-metric-value"},"0"),T=(0,i.h)("span",{className:"sdt-hm-toolbar-metric-value"},"0");function U(a){try{sessionStorage.setItem(l,JSON.stringify(a))}catch{}}let V=window.location.pathname,W={path:V,totalClicks:0,selectors:[],elements:[]},X=!1,Y=null,Z=0,$=!0,_=!1,aa=0,ab="hidden",ac=null,ad=null,ae=null,af=null,ag=new Set,ah=new Set,ai=null,aj=[],ak=new Map,al=new Map;function am(a,b){a.textContent=b}function an(a,b,c){(0,g.runAsynchronously)(async()=>{try{await navigator.clipboard.writeText(b),a.textContent="Copied",window.setTimeout(()=>am(a,c),1200)}catch{a.textContent="Copy failed",window.setTimeout(()=>am(a,c),1600)}})}let ao=new Map,ap=!0,aq=0;function ar(){for(let a of(ao.clear(),as=new WeakMap,document.querySelectorAll("*"))){if(!u(a))continue;let b=a.tagName.toLowerCase(),c=ao.get(b)??[];c.push(a),ao.set(b,c)}ap=!1}let as=new WeakMap;function at(a){let b=as.get(a);if(null!=b)return b;let c=a,d=a;for(let a=0;null!=d&&d!==document.body&&d!==document.documentElement&&a<10;a++){if(d.matches('a[href], button, input, select, textarea, summary, label, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="radio"], [role="switch"], [role="option"], [contenteditable="true"]')){c=d;break}let a=d.parentElement;if("pointer"===window.getComputedStyle(d).cursor&&(null==a||"pointer"!==window.getComputedStyle(a).cursor)){c=d;break}d=a}let e={target:c,key:(0,f.buildElementsChain)(c)};return as.set(a,e),e}function au(a){let b=a.filter(u);return 1===b.length?b[0]:null}function av(a){try{return au(Array.from(document.querySelectorAll(a)))}catch{return null}}function aw(a,b,c,d,e){let f=a;for(let a=0;a<b.length;a++){if(null==f)return!1;let g=b[a];if(!function(a,b,c){if(a.tagName.toLowerCase()!==b.tag)return!1;if(c){for(let c of b.classes)if(!a.classList.contains(c))return!1}return!0}(f,g,c)||d&&null!=g.nthOfType&&function(a){let b=1,c=a.previousElementSibling,d=a.tagName;for(;null!=c;)c.tagName===d&&(b+=1),c=c.previousElementSibling;return b}(f)!==g.nthOfType||e&&null!=g.nthChild&&function(a){let b=1,c=a.previousElementSibling;for(;null!=c;)b+=1,c=c.previousElementSibling;return b}(f)!==g.nthChild)return!1;f=f.parentElement}return!0}(0,i.setHtml)(R,'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>');let ax='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',ay='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>',az="";function aA(){let a=_?'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>':'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';az!==a&&(az=a,(0,i.setHtml)(Q,a))}aA(),am(M,"Copy width"),am(N,"Copy height"),M.addEventListener("click",()=>{an(M,K.textContent,"Copy width")}),N.addEventListener("click",()=>{an(N,L.textContent,"Copy height")});let aB=(0,i.h)("div",{className:"sdt-hm-stats"},(0,i.h)("div",{className:"sdt-hm-stat"},(0,i.h)("div",{className:"sdt-hm-stat-label"},"Clicks"),C),(0,i.h)("div",{className:"sdt-hm-stat"},(0,i.h)("div",{className:"sdt-hm-stat-label"},"Elements"),D),(0,i.h)("div",{className:"sdt-hm-stat"},(0,i.h)("div",{className:"sdt-hm-stat-label"},"Viewport"),E)),aC=function(){try{var a;let b=sessionStorage.getItem(l);if(null==b)return{...m};let c=JSON.parse(b);if(null==c||"object"!=typeof c)return{...m};return{range:p(c.range)?c.range:m.range,device:(a=c.device,"all"===a||"mobile"===a||"tablet"===a||"laptop"===a||"desktop"===a||"widescreen"===a||"tv"===a)?c.device:m.device,urlPattern:"string"==typeof c.urlPattern?c.urlPattern:m.urlPattern,elementSearch:"string"==typeof c.elementSearch?c.elementSearch:m.elementSearch,showDead:"boolean"==typeof c.showDead?c.showDead:m.showDead}}catch{return{...m}}}(),aD=0,aE=""!==aC.urlPattern.trim();function aF(){return aE?aC.urlPattern.trim():x(window.location.pathname)}let aG=function(a,b){let c=(0,i.h)("select",{className:"sdt-hm-filter-input"});for(let[b,d]of a){let a=(0,i.h)("option",{value:b},d);c.appendChild(a)}return c.value=b,c}([["24h","Last 24h"],["7d","Last 7 days"],["30d","Last 30 days"]],aC.range),aH=(0,i.h)("span",{className:"sdt-hm-seg-thumb","aria-hidden":"true"}),aI=(0,i.h)("div",{className:"sdt-hm-seg",role:"radiogroup","aria-label":"Viewport"},aH),aJ=new Map,aK=!1;function aL(){let a=aJ.get(aC.device);null!=a&&0!==a.offsetWidth&&(aK||(aH.style.transition="none"),aH.style.transform=`translateX(${a.offsetLeft}px)`,aH.style.width=`${a.offsetWidth}px`,aK||(aH.offsetWidth,aH.style.transition="",aK=!0))}for(let[a,b]of[["all","All"],["mobile","Mobile"],["tablet","Tablet"],["laptop","Laptop"],["desktop","Desktop"],["widescreen","Wide"],["tv","TV"]]){let c=(0,i.h)("button",{className:"sdt-hm-seg-btn",type:"button",role:"radio"},b);c.setAttribute("aria-checked",String(a===aC.device)),c.addEventListener("click",()=>{if(aC.device!==a){for(let[b,c]of(ba({device:a}),aJ))c.setAttribute("aria-checked",String(b===a));aL()}}),aJ.set(a,c),aI.appendChild(c)}let aM=(0,i.h)("input",{className:"sdt-hm-filter-input",type:"text",placeholder:"/products/*",spellcheck:"false",autocomplete:"off",autocapitalize:"off"});aM.value=aF();let aN=(0,i.h)("button",{className:"sdt-hm-filter-reset",type:"button","aria-label":"Revert the URL pattern to the current page","data-sdt-tip":"Revert to the current page"});function aO(){let a=x(window.location.pathname),b=aE&&aC.urlPattern.trim()!==a;aN.classList.toggle("sdt-hm-filter-reset-visible",b)}(0,i.setHtml)(aN,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>');let aP=(0,i.h)("button",{className:"sdt-hm-filter-info",type:"button","aria-label":"URL pattern help","aria-expanded":"false","data-sdt-tip":"How URL patterns work"});function aQ(a,b){return(0,i.h)("div",{className:"sdt-hm-url-help-row"},(0,i.h)("code",{className:"sdt-hm-url-help-code"},a),(0,i.h)("span",{className:"sdt-hm-url-help-desc"},b))}function aR(a){return(0,i.h)("code",{className:"sdt-hm-url-help-code"},a)}(0,i.setHtml)(aP,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>');let aS=(0,i.h)("div",{className:"sdt-hm-url-help-title"}),aT=(0,i.h)("div",{className:"sdt-hm-url-help-body"}),aU=(0,i.h)("div",{className:"sdt-hm-url-help-rows"}),aV=(0,i.h)("div",{className:"sdt-hm-url-help",role:"dialog","aria-label":"URL pattern help"},aS,aT,aU),aW=!1;function aX(a){aW=a,aV.classList.toggle("sdt-hm-url-help-open",a),aP.setAttribute("aria-expanded",String(a))}aP.addEventListener("click",a=>{a.stopPropagation(),aX(!aW)}),aV.addEventListener("click",a=>{a.stopPropagation()}),aS.textContent="URL pattern · glob",aT.replaceChildren("Limits the clickmap to pages whose path matches. Matched against the pathname only — no domain, hash, or query string. ",aR("*")," is the only wildcard and stands in for any characters (including ",aR("/"),"). Everything else is matched literally."),aU.replaceChildren(aQ("/pricing","That exact page"),aQ("/products/*","Any path under /products/"),aQ("/teams/*/members","A wildcard segment in the middle"),aQ("*/settings","Any path ending in /settings"),aQ("*","Every page"),aQ("(empty)","Auto-tracks the page you are viewing"));let aY=(0,i.h)("input",{className:"sdt-hm-filter-input",type:"text",placeholder:"Search element text or tag","aria-label":"Search element text or tag",spellcheck:"false",autocomplete:"off",autocapitalize:"off"});aY.value=aC.elementSearch;let aZ=(0,i.h)("span",{className:"sdt-hm-toolbar-metric-icon"}),a$=(0,i.h)("span",{className:"sdt-hm-toolbar-metric-icon"});(0,i.setHtml)(aZ,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>'),(0,i.setHtml)(a$,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>');let a_='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>',a0=(0,i.h)("button",{className:"sdt-hm-icon-btn sdt-hm-dead-toggle",type:"button","aria-pressed":"false","aria-label":"Show dead clicks","data-sdt-tip":"Show dead clicks"});(0,i.setHtml)(a0,a_);let a1=(0,i.h)("span",{className:"sdt-hm-dead-toggle-icon"});(0,i.setHtml)(a1,a_);let a2=(0,i.h)("button",{className:"sdt-hm-btn sdt-hm-dead-toggle",type:"button","aria-pressed":"false","data-sdt-tip":"Include clicks that had no effect"},a1,"Dead clicks");function a3(){for(let a of[a0,a2])a.setAttribute("aria-pressed",String(aC.showDead)),a.classList.toggle("sdt-hm-dead-toggle-active",aC.showDead)}function a4(a){aC.showDead!==a&&(U(aC={...aC,showDead:a}),a3(),bm())}a0.addEventListener("click",()=>a4(!aC.showDead)),a2.addEventListener("click",()=>a4(!aC.showDead)),a3();let a5=(0,i.h)("button",{className:"sdt-hm-icon-btn",type:"button","aria-pressed":"false","aria-label":"Hide overlay","data-sdt-tip":"Hide overlay"}),a6="";function a7(){a5.setAttribute("aria-pressed",String(!$));let a=$?"Hide overlay":"Show overlay";a5.setAttribute("aria-label",a),a5.setAttribute("data-sdt-tip",a),a5.classList.toggle("sdt-hm-overlay-mini-off",!$);let b=$?ax:ay;a6!==b&&(a6=b,(0,i.setHtml)(a5,b))}a5.addEventListener("click",()=>{$=!$,bx()}),a7();let a8=(0,i.h)("div",{className:"sdt-hm-toolbar"},R,(0,i.h)("div",{className:"sdt-hm-toolbar-title"},"Clickmap"),(0,i.h)("div",{className:"sdt-hm-toolbar-filters"},aG,(0,i.h)("div",{className:"sdt-hm-toolbar-url"},aM,aN,aP,aV)),(0,i.h)("div",{className:"sdt-hm-toolbar-metrics"},(0,i.h)("span",{className:"sdt-hm-toolbar-metric","data-sdt-tip":"Aggregate clicks"},S,aZ),(0,i.h)("span",{className:"sdt-hm-toolbar-metric","data-sdt-tip":"Mapped elements"},T,a$)),a0,a5,Q),a9=(0,i.h)("div",{className:"sdt-hm-filters"},(y=(0,i.h)("span",{className:"sdt-hm-filter-label-row"},(0,i.h)("span",{className:"sdt-hm-filter-label"},"Viewport")),(0,i.h)("label",{className:"sdt-hm-filter-field"},y,aI)),O);function ba(a){U(aC={...aC,...a}),0!==aD&&window.clearTimeout(aD),aD=window.setTimeout(()=>{aD=0,(0,g.runAsynchronously)(by())},250)}let bb=0;aG.addEventListener("change",()=>{p(aG.value)&&ba({range:aG.value})}),aM.addEventListener("input",()=>{let a=aM.value;aE=""!==a.trim(),ba({urlPattern:a}),aO()}),aN.addEventListener("click",()=>{aE=!1,aM.value=x(window.location.pathname),ba({urlPattern:""}),aO()}),aY.addEventListener("input",()=>{var a;a=aY.value,U(aC={...aC,elementSearch:a}),0!==bb&&window.clearTimeout(bb),bb=window.setTimeout(()=>{bb=0,bm()},120)});let bc=(0,i.h)("div",{className:"sdt-hm-head"},a9,(0,i.h)("div",{className:"sdt-hm-actions"},aB,a2,P)),bd=(0,i.h)("button",{className:"sdt-hm-row-check",type:"button",role:"checkbox","aria-checked":"false","aria-label":"Select all elements"}),be=(0,i.h)("span",{className:"sdt-hm-list-header-summary"}),bf=(0,i.h)("button",{className:"sdt-hm-btn sdt-hm-btn-sm",type:"button"},"Show all"),bg=(0,i.h)("button",{className:"sdt-hm-btn sdt-hm-btn-sm",type:"button"},"Hide all"),bh=(0,i.h)("div",{className:"sdt-hm-list-header"},bd,be,aY,bf,bg);bd.addEventListener("click",()=>{if(aj.length>0&&aj.every(a=>ah.has(a.selector)))return void bq();for(let a of(ah.clear(),aj))ah.add(a.selector);ai=null,bm()}),bf.addEventListener("click",()=>{for(let a of bt())ag.delete(a.selector);bm()}),bg.addEventListener("click",()=>{for(let a of bt())ag.add(a.selector);bm()});let bi=(0,i.h)("div",{className:"sdt-hm-body"},H,bh,F),bj=(0,i.h)("div",{className:"sdt-hm-details"},bc,bi);function bk(a){return aC.showDead?a.count:Math.max(0,a.count-a.deadCount)}function bl(a){return a.count<=0?100:Math.min(100,Math.round(a.deadCount/a.count*100))}function bm(){cancelAnimationFrame(aa),aa=requestAnimationFrame(bx)}function bn(){ak.clear(),B.replaceChildren(A),A.classList.remove("sdt-hm-highlight-visible","sdt-hm-highlight-animating"),ad=null}function bo(){al.clear(),F.replaceChildren()}function bp(a){ag.has(a)?ag.delete(a):ag.add(a),bm()}function bq(){(0!==ah.size||null!=ac)&&(ah.clear(),ai=null,ac=null,bm())}function br(a){ah.has(a)?(ah.delete(a),ac===a&&(ac=null)):(ah.add(a),ac=a),ai=a,bm()}function bs(a,b){let c=b.ctrlKey||b.metaKey;if(b.shiftKey&&null!=ai){let b=aj.map(a=>a.selector),d=b.indexOf(ai),e=b.indexOf(a.selector);if(-1!==d&&-1!==e){c||ah.clear();let[f,g]=d<=e?[d,e]:[e,d];for(let a of b.slice(f,g+1))ah.add(a);ac=a.selector,bm();return}}c?br(a.selector):(ai=a.selector,1===ah.size&&ah.has(a.selector)?(ah.delete(a.selector),ac=null):(ah.clear(),ah.add(a.selector),ac=a.selector),bm())}function bt(){return ah.size>0?aj.filter(a=>ah.has(a.selector)):aj}function bu(a){af!==a&&(af=a,bm())}let bv='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',bw="";function bx(){var a;let b;V!==window.location.pathname&&(W={path:V=window.location.pathname,totalClicks:0,selectors:[],elements:[]},Y=null,bo(),function(){if(aE)return;let a=x(window.location.pathname);aM.value!==a&&(aM.value=a)}(),(0,g.runAsynchronously)(by()));let c=function(){let a=new Map;if(W.path!==V)return[];let b=aC.elementSearch.trim().toLowerCase(),c=a=>""===b||[a.elementsText,a.tagName,a.href??"",a.elementsChain].some(a=>a.toLowerCase().includes(b));if(W.elements.length>0)for(let b of(ap&&ar(),W.elements)){if(!c(b))continue;let d=(0,f.parseElementsChain)(b.elementsChain),g=d.length>0?function(a){if(0===a.length)return null;let b=a[0];for(let{attr:a}of[{attr:"data-hexclave-id"},{attr:"data-testid"},{attr:"data-test-id"},{attr:"name"}]){let c=r(b,a);if(""===c)continue;let d=av(`[${a}="${q(c)}"]`);if(d)return d}let c=r(b,"id");if(""!==c){let a=av(`#${(0,e.cssEscapeIdent)(c)}`);if(a)return a}if(null!=b.href&&""!==b.href&&"a"===b.tag){let a=av(`a[href="${q(b.href)}"]`);if(a)return a}for(let a of["aria-label","role","placeholder","title","type"]){let c=r(b,a);if(""===c)continue;let d=av(`${b.tag}[${a}="${q(c)}"]`);if(d)return d}ap&&ar();let d=ao.get(b.tag)??[];if(0===d.length)return null;let f=[];for(let b of d)aw(b,a,!0,!1,!1)&&f.push(b);let g=au(f);if(null!=g)return g;let h=[];for(let b of d)aw(b,a,!0,!0,!1)&&h.push(b);let i=au(h);if(null!=i)return i;let j=[];for(let b of d)aw(b,a,!0,!0,!0)&&j.push(b);let k=au(j);return null!=k?k:null}(d):null;if(null==g&&null!=b.href&&""!==b.href&&"a"===b.tagName.toLowerCase()&&(g=av(`a[href="${q(b.href)}"]`)),null==g)continue;let{target:h,key:i}=at(g),j=a.get(i);if(null!=j){j.count+=b.clicks,j.deadCount+=b.deadClicks;continue}a.set(i,{selector:i,label:t(h),count:b.clicks,deadCount:b.deadClicks,element:h,rect:h.getBoundingClientRect()})}if(0===a.size)for(let c of W.selectors){if(""!==b&&!c.selector.toLowerCase().includes(b))continue;let d=function(a){try{return Array.from(document.querySelectorAll(a)).find(u)??null}catch{return null}}(c.selector);if(null==d)continue;let{target:e,key:f}=at(d),g=a.get(f);if(null!=g){g.count+=c.clicks;continue}a.set(f,{selector:f,label:t(e),count:c.clicks,deadCount:0,element:e,rect:e.getBoundingClientRect()})}let d=Array.from(a.values());return aC.showDead||(d=d.filter(a=>bk(a)>0)),d.sort((a,b)=>bk(b)-bk(a)||(0,h.stringCompare)(a.selector,b.selector))}();aj=c;let d=new Set(c.map(a=>a.selector));for(let a of ag)d.has(a)||ag.delete(a);for(let a of ah)d.has(a)||ah.delete(a);null==ai||d.has(ai)||(ai=null),null==ac||d.has(ac)||(ac=null),null==af||d.has(af)||(af=null);let j=c.reduce((a,b)=>a+bk(b),0),k=W.path===V?W.totalClicks:0,l=null!=(b=window.visualViewport)?{width:b.width,height:b.height}:{width:window.innerWidth,height:window.innerHeight},m=Math.round(l.width),n=Math.round(l.height),p="all"===(a=aC.device)?null:o[a],y=null==p||m>=p.min&&(null==p.max||m<=p.max);if(C.textContent=s(k),D.textContent=s(c.length),E.textContent=`${m}x${n}`,P.textContent=$?"Hide overlay":"Show overlay",a7(),O.classList.toggle("sdt-hm-viewport-warning-visible",!y),null!=p&&!y){let a=null==p.max?p.min:Math.round((p.min+p.max)/2),b=Math.max(1,n);I.textContent="Viewport filter mismatch",J.textContent=`This page is ${m}px wide, but ${aC.device} is ${null==p.max?`${p.min}px+`:`${p.min}-${p.max}px`}. Resize the window or use the DevTools device toolbar before comparing this clickmap.`,K.textContent=String(a),L.textContent=String(b)}let M=aF(),N=function(a,b){if(""===a)return!0;try{return RegExp(`^${a.split("*").map(a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join(".*")}$`).test(b)}catch{return!1}}(M,V);aO();let R=v(),U=w();if(null==R)H.textContent=Y??"No clickmap token in sessionStorage. Paste one from the dashboard to load this page.";else if(null!=U&&U!==window.location.origin)H.textContent=`Token was minted for ${U}, but this page is ${window.location.origin}. Generate a token for this exact origin.`;else if(X)H.textContent="Loading aggregate clickmap...";else if(null!=Y)H.textContent=Y;else{let a=""!==M&&M!==V?M:V,b=`Loaded ${s(k)} aggregate clicks for ${a}.`;0===k?b=`No clicks recorded for ${a} in this range.`:N?0===c.length?b+=" No matching elements found on this page yet.":j<k&&(b+=` ${s(j)} mapped to elements on this page.`):b+=" This page isn’t covered by the pattern — reset it or open a matching page to see the overlay.",H.textContent=b}H.classList.toggle("sdt-hm-token-status-error",null!=Y||null!=R&&null!=U&&U!==window.location.origin),S.textContent=s(k),T.textContent=s(c.length),z.classList.toggle("sdt-hm-expanded",_),Q.setAttribute("aria-expanded",String(_)),Q.setAttribute("aria-label",_?"Collapse clickmap options":"Expand clickmap options"),Q.setAttribute("data-sdt-tip",_?"Collapse clickmap options":"Expand clickmap options"),aA(),aL(),function(a){let b=$?"elements":"hidden";if(ab!==b&&(ab=b,bn()),!$)return;let c=new Set,d=Math.max(1,...a.map(bk));for(let b of a){if(null==b.rect||b.rect.width<=0||b.rect.height<=0)continue;c.add(b.selector);let a=bk(b),e=d<=1?185:185-Math.round(155*Math.min(1,a/d)),f=ag.has(b.selector),g=ac===b.selector||ah.has(b.selector),h=ak.get(b.selector);if(null==h){let a=(0,i.h)("button",{className:"sdt-hm-marker",type:"button",tabindex:"-1"});a.addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),bp(b.selector)}),a.addEventListener("pointerenter",()=>bu(b.selector)),a.addEventListener("pointerleave",()=>{af===b.selector&&bu(null)}),h={marker:a,outline:(0,i.h)("div",{className:"sdt-hm-outline"})},ak.set(b.selector,h),B.append(h.outline,h.marker)}let{marker:j,outline:k}=h,l=aC.showDead&&b.deadCount>0&&b.count>0?` (${bl(b)}% dead)`:"";j.title=f?`Unmute ${b.selector}`:`Mute ${a} clicks${l} on ${b.selector}`,j.setAttribute("aria-label",j.title),j.style.left=`${Math.round(b.rect.left+b.rect.width/2)}px`,j.style.top=`${Math.round(b.rect.top+b.rect.height/2)}px`,j.style.background=`hsla(${e}, 96%, 58%, 0.94)`,j.style.boxShadow=`0 0 0 1px hsla(${e}, 96%, 22%, 0.35), 0 8px 24px hsla(${e}, 96%, 45%, 0.32)`,j.textContent=s(a),j.classList.toggle("sdt-hm-marker-muted",f),j.classList.toggle("sdt-hm-marker-highlighted",g),k.style.left=`${b.rect.left}px`,k.style.top=`${b.rect.top}px`,k.style.width=`${b.rect.width}px`,k.style.height=`${b.rect.height}px`,k.style.borderColor=`hsla(${e}, 96%, 58%, 0.5)`,k.style.background=af===b.selector?`hsla(${e}, 96%, 58%, 0.16)`:"",k.classList.toggle("sdt-hm-outline-muted",f),k.classList.toggle("sdt-hm-outline-highlighted",g)}for(let[a,b]of ak)c.has(a)||(b.marker.remove(),b.outline.remove(),ak.delete(a));!function(a){let b=null==ac?null:a.find(a=>a.selector===ac)??null,c=b?.rect??null;if(null==b||null==c||c.width<=0||c.height<=0){null!=ae&&(window.clearTimeout(ae),ae=null),A.classList.remove("sdt-hm-highlight-visible","sdt-hm-highlight-animating"),ad=null;return}A.classList.contains("sdt-hm-highlight-visible")&&ad!==b.selector&&(A.classList.add("sdt-hm-highlight-animating"),null!=ae&&window.clearTimeout(ae),ae=window.setTimeout(()=>{A.classList.remove("sdt-hm-highlight-animating"),ae=null},700)),ad=b.selector,A.style.left=`${c.left}px`,A.style.top=`${c.top}px`,A.style.width=`${c.width}px`,A.style.height=`${c.height}px`,A.classList.add("sdt-hm-highlight-visible")}(a)}(c),function(a){let b=a.length>0||""!==aC.elementSearch.trim();if(bh.classList.toggle("sdt-hm-list-header-visible",b),!b)return;let c=ah.size,d=c>0&&a.every(a=>ah.has(a.selector));bd.setAttribute("aria-checked",d?"true":c>0?"mixed":"false"),bd.setAttribute("aria-label",d?"Clear selection":"Select all elements");let e=d?bv:c>0?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>':"";bw!==e&&(bw=e,(0,i.setHtml)(bd,e)),be.textContent=c>0?`${s(c)} of ${s(a.length)} selected`:`${s(a.length)} element${1===a.length?"":"s"}`;let f=bt(),g=c>0?"selected":"all";bf.textContent=`Show ${g}`,bg.textContent=`Hide ${g}`,bf.disabled=f.every(a=>!ag.has(a.selector)),bg.disabled=f.every(a=>ag.has(a.selector))}(c),function(a){if(0===a.length){bo(),F.appendChild(G);return}let b=bi.scrollTop;G.remove();let c=new Set,d=F.firstChild;for(let b of a.slice(0,30)){c.add(b.selector);let a=al.get(b.selector);null==a&&(a=function(a){let b=(0,i.h)("span",{className:"sdt-hm-row-count"}),c=(0,i.h)("span",{className:"sdt-hm-row-label"}),d=(0,i.h)("span",{className:"sdt-hm-row-dead"}),e=(0,i.h)("span",{className:"sdt-hm-row-selector"}),f=(0,i.h)("button",{className:"sdt-hm-row-check",type:"button",role:"checkbox","aria-checked":"false"}),g=(0,i.h)("button",{className:"sdt-hm-row-eye",type:"button"}),h=(0,i.h)("div",{className:"sdt-hm-row",role:"button",tabindex:"0"},f,b,(0,i.h)("span",{className:"sdt-hm-row-meta"},(0,i.h)("span",{className:"sdt-hm-row-label-row"},c,d),e),g),j={row:h,count:b,check:f,eye:g,label:c,dead:d,selector:e,group:null,renderedEyeIcon:"",renderedCheckIcon:""};return f.addEventListener("click",a=>{if(a.preventDefault(),a.stopPropagation(),null!=j.group){if(a.shiftKey&&null!=ai)return void bs(j.group,{shiftKey:!0,ctrlKey:!0,metaKey:!1});br(j.group.selector)}}),g.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation(),bp(a)}),h.addEventListener("click",a=>{null!=j.group&&bs(j.group,a)}),h.addEventListener("keydown",a=>{"Enter"!==a.key&&" "!==a.key||(a.preventDefault(),null!=j.group&&bs(j.group,a))}),j}(b.selector),al.set(b.selector,a)),function(a,b){let c=ag.has(b.selector),d=ac===b.selector,e=ah.has(b.selector);a.group=b,a.row.classList.toggle("sdt-hm-row-muted",c),a.row.classList.toggle("sdt-hm-row-highlighted",d),a.row.classList.toggle("sdt-hm-row-selected",e),a.check.setAttribute("aria-checked",String(e)),a.check.setAttribute("aria-label",e?`Deselect ${b.label}`:`Select ${b.label}`);let f=e?bv:"";a.renderedCheckIcon!==f&&(a.renderedCheckIcon=f,(0,i.setHtml)(a.check,f)),a.count.textContent=s(bk(b)),a.eye.setAttribute("aria-pressed",String(c)),a.eye.setAttribute("aria-label",c?`Unmute ${b.label}`:`Mute ${b.label}`),a.eye.title=c?"Unmute element":"Mute element";let g=c?ay:ax;if(a.renderedEyeIcon!==g&&(a.renderedEyeIcon=g,(0,i.setHtml)(a.eye,g)),a.label.textContent=b.label,aC.showDead&&b.deadCount>0){let c=bl(b);a.dead.textContent=`${c}% dead`,a.dead.title=`${s(b.deadCount)} of ${s(b.count)} clicks had no visible effect`,a.dead.classList.add("sdt-hm-row-dead-visible")}else a.dead.textContent="",a.dead.title="",a.dead.classList.remove("sdt-hm-row-dead-visible");a.selector.textContent=b.selector}(a,b),a.row!==d&&F.insertBefore(a.row,d),d=a.row.nextSibling}for(let[a,b]of al)c.has(a)||(b.row.remove(),al.delete(a));bi.scrollTop=b}(c)}async function by(){let d=Z+1;Z=d;let e=v();if(null==e){W={path:V,totalClicks:0,selectors:[],elements:[]},Y=null,X=!1,bx();return}let f=w();if(null!=f&&f!==window.location.origin){W={path:V,totalClicks:0,selectors:[],elements:[]},Y=null,X=!1,bx();return}X=!0,Y=null,bx();try{let c=new Date,f=new Date(c.getTime()-n[aC.range]),g=window.location.pathname,h=aF(),i={clickmap_token:e,origin:window.location.origin,since:f.toISOString(),until:c.toISOString()};""!==h?i.url_pattern=h:i.route_path=g,"all"!==aC.device&&(i.device=aC.device);let k=await a[j.hexclaveAppInternalsSymbol].sendRequest("/analytics/clickmap",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(i)},"client");if(!k.ok)throw Error(`Clickmap request failed with HTTP ${k.status}`);let l=await k.json();if(d!==Z)return;W=function(a,c){let d;try{d=b.AnalyticsClickmapResponseBodySchema.validateSync(a)}catch{return{path:c,totalClicks:0,selectors:[],elements:[]}}return{path:c,totalClicks:d.routes.reduce((a,b)=>a+b.clicks,0),selectors:d.selectors.map(a=>({selector:a.selector,clicks:a.clicks})),elements:d.elements.map(a=>({elementsChain:a.elements_chain,elementsText:a.elements_text,tagName:a.tag_name,href:a.href,clicks:a.clicks,deadClicks:a.dead_clicks}))}}(l,g)}catch(a){if(d!==Z)return;if(W={path:V,totalClicks:0,selectors:[],elements:[]},a instanceof Error&&a.message.includes("Clickmap token does not belong to this project")){var g=c.CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY;try{sessionStorage.removeItem(g)}catch{}Y="The stored clickmap token belongs to another project. Generate a fresh token for this project."}else Y=a instanceof Error?a.message:"Failed to load clickmap data"}finally{d===Z&&(X=!1,bx())}}let bz=()=>{let a=v(),b=w();if(null!=a&&(null==b||b===window.location.origin))try{sessionStorage.setItem(c.CLICKMAP_OVERLAY_RESUME_STORAGE_KEY,"1")}catch{}},bA=a=>{a.addEventListener("pointerdown",b=>{try{a.setPointerCapture(b.pointerId)}catch{}})};bA(P),bA(R),bA(Q),bA(a0),bA(a2),bA(a5),bA(bd),bA(bf),bA(bg),P.addEventListener("click",()=>{$=!$,bx()}),R.addEventListener("click",k),Q.addEventListener("click",()=>{_=!_,bx()});let bB=()=>{(0,g.runAsynchronously)(by())},bC=window.setInterval(bm,500),bD=new MutationObserver(a=>{a.every(a=>{var b;let c;return null!=(c=(b=a.target)instanceof Element?b:b?.parentElement??null)&&(B.contains(c)||null!=c.closest(`#${(0,e.cssEscapeIdent)(d.CLICKMAP_ROOT_ID)}, #${(0,e.cssEscapeIdent)(d.DEV_TOOL_ROOT_ID)}`))})||(0!==aq&&window.clearTimeout(aq),aq=window.setTimeout(()=>{aq=0,ap=!0,bm()},250),bm())}),bE=window.visualViewport;bD.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),(document.getElementById(d.CLICKMAP_ROOT_ID)??document.body).appendChild(B),ar(),bm(),window.addEventListener("beforeunload",bz);let bF=()=>{bm()};document.addEventListener("scroll",bm,!0),window.addEventListener("resize",bF),bE?.addEventListener("resize",bm),bE?.addEventListener("scroll",bm),window.addEventListener(c.CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT,bB);let bG=a=>{!aW||a.target instanceof Node&&aV.contains(a.target)||a.target instanceof Node&&aP.contains(a.target)||aX(!1)},bH=a=>{if("Escape"===a.key){if(aW)return void aX(!1);bq()}};return document.addEventListener("mousedown",bG,!0),document.addEventListener("keydown",bH,!0),bx(),(0,g.runAsynchronously)(by()),z.append(bj,a8),{element:z,cleanup:()=>{cancelAnimationFrame(aa),0!==aq&&window.clearTimeout(aq),0!==aD&&window.clearTimeout(aD),0!==bb&&window.clearTimeout(bb),window.clearInterval(bC),bD.disconnect(),bn(),ao.clear(),window.removeEventListener("beforeunload",bz),document.removeEventListener("scroll",bm,!0),window.removeEventListener("resize",bF),bE?.removeEventListener("resize",bm),bE?.removeEventListener("scroll",bm),window.removeEventListener(c.CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT,bB),document.removeEventListener("mousedown",bG,!0),document.removeEventListener("keydown",bH,!0),B.remove()}}}(a,()=>H.cleanup());D.appendChild((0,i.h)("div",{className:"sdt-hm-panel"},(0,i.h)("div",{className:"sdt-hm-panel-inner"},F.element)));let G=!1,H={cleanup:()=>{G||(G=!0,(0,i.getGlobalUiInstance)(y)===H&&(0,i.setGlobalUiInstance)(y,null),F.cleanup?.(),C.parentNode&&C.parentNode.removeChild(C),z())}};return(0,i.setGlobalUiInstance)(y,H),()=>{H.cleanup()}}],585254)}];

//# sourceMappingURL=packages_next_dist_esm_clickmap_clickmap-core_1x9un1p.js.map