(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,998403,(e,t,i)=>{Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),i.clickmapCSS=(0,e.r(361075).getInPageUiBaseCSS)(".hexclave-clickmap")+`
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
`},514286,(e,t,i)=>{Object.defineProperty(i,Symbol.toStringTag,{value:"Module"});let a=e.r(958602),r=e.r(964359),n=e.r(704698),l=e.r(736394),o=e.r(902842),s=e.r(869920),d=e.r(898527),c=e.r(677332),h=e.r(500709),p=e.r(998403),u="hexclave-clickmap-overlay-filters",m={range:"7d",device:"all",urlPattern:"",elementSearch:"",showDead:!1},f={"24h":864e5,"7d":6048e5,"30d":2592e6},g={mobile:{min:0,max:767},tablet:{min:768,max:1023},laptop:{min:1024,max:1199},desktop:{min:1200,max:1439},widescreen:{min:1440,max:1919},tv:{min:1920,max:null}};function v(e){return"24h"===e||"7d"===e||"30d"===e}function b(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function x(e,t){if(!Object.prototype.hasOwnProperty.call(e.attrs,t))return"";let i=e.attrs[t];return"string"==typeof i?i:""}function y(e){let t=e,i="";for(let e of["k","m","b"]){if(t<999.95)break;t/=1e3,i=e}return""===i?String(Math.round(t)):`${Math.round(10*t)/10}${i}`}function w(e){let t=e.getAttribute("aria-label");if(null!=t&&""!==t.trim())return t.trim().slice(0,80);let i=e.getAttribute("title");if(null!=i&&""!==i.trim())return i.trim().slice(0,80);let a=e.textContent.trim().replace(/\s+/g," ");return""!==a?a.slice(0,80):e.tagName.toLowerCase()}function k(e){if(null!=e.closest(`#${(0,l.cssEscapeIdent)(n.CLICKMAP_ROOT_ID)}, #${(0,l.cssEscapeIdent)(n.DEV_TOOL_ROOT_ID)}`)||null!=e.closest('[hidden], [aria-hidden="true"], [inert]'))return!1;let t=e.getBoundingClientRect();if(t.width<=0||t.height<=0)return!1;let i=window.getComputedStyle(e);return"none"!==i.display&&"hidden"!==i.visibility&&"0"!==i.opacity}function _(){var e=r.CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY;try{let t=sessionStorage.getItem(e);return null==t||""===t.trim()?null:t}catch{return null}}function N(){let e=_();return null==e?null:function(e,t){let i=e.split(".");if(i.length<2||""===i[1])return null;try{let e=i[1].replace(/-/g,"+").replace(/_/g,"/"),a=e.padEnd(4*Math.ceil(e.length/4),"="),r=JSON.parse(atob(a));if("object"!=typeof r||null===r)return null;let n=Reflect.get(r,t);return"string"==typeof n?n:null}catch{return null}}(e,"origin")}function C(e){let t=e.length>1&&e.endsWith("/"),i=e.split("/").map(e=>!function(e){if(""===e)return!1;let t=e;try{t=decodeURIComponent(e)}catch{}return!!(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t)||/^[0-9a-f]{32}$/i.test(t)||/^[0-9a-f]{24}$/i.test(t)||/^[0-9A-HJKMNP-TV-Z]{26}$/i.test(t)||/^\d+$/.test(t))}(e)?e:"*").join("/");return t?`${i}/`:i}let S="__hexclave-clickmap-instance";i.openClickmapOverlay=function(e,t){if("u"<typeof document||"function"!=typeof document.createElement)return()=>{};let i=Reflect.get(document,"body");if(!(0,c.hasAppendChild)(i))return()=>{};(0,c.getGlobalUiInstance)(S)?.cleanup();let E=document.getElementById(n.CLICKMAP_ROOT_ID);for(;null!==E;)E.remove(),E=document.getElementById(n.CLICKMAP_ROOT_ID);let L=document.createElement("div");L.id=n.CLICKMAP_ROOT_ID,i.appendChild(L);let A=(0,c.h)("div",{className:"hexclave-clickmap"});L.appendChild(A);let M=document.createElement("style");M.textContent=p.clickmapCSS,A.appendChild(M);let O=function(e,t){let i,p=(0,c.h)("div",{className:"sdt-hm"}),S=(0,c.h)("div",{className:"sdt-hm-highlight"}),E=(0,c.h)("div",{className:"sdt-hm-overlay-root","aria-hidden":"true"},S),L=(0,c.h)("div",{className:"sdt-hm-stat-value"},"0"),A=(0,c.h)("div",{className:"sdt-hm-stat-value"},"0"),M=(0,c.h)("div",{className:"sdt-hm-stat-value"},`${window.innerWidth}x${window.innerHeight}`),O=(0,c.h)("div",{className:"sdt-hm-list"}),$=(0,c.h)("div",{className:"sdt-hm-empty"},"Paste a clickmap token from the dashboard to load aggregated element clicks for this page."),T=(0,c.h)("div",{className:"sdt-hm-token-status"}),z=(0,c.h)("div",{className:"sdt-hm-viewport-warning-title"}),j=(0,c.h)("div",{className:"sdt-hm-viewport-warning-body"}),I=(0,c.h)("code",{className:"sdt-hm-viewport-warning-code"}),R=(0,c.h)("code",{className:"sdt-hm-viewport-warning-code"}),D=(0,c.h)("button",{className:"sdt-hm-copy-btn",type:"button"}),P=(0,c.h)("button",{className:"sdt-hm-copy-btn",type:"button"}),B=(0,c.h)("div",{className:"sdt-hm-viewport-warning",role:"status"},z,j,(0,c.h)("div",{className:"sdt-hm-viewport-warning-actions"},(0,c.h)("span",{className:"sdt-hm-viewport-warning-action"},(0,c.h)("span",{className:"sdt-hm-viewport-warning-label"},"Width"),I,D),(0,c.h)("span",{className:"sdt-hm-viewport-warning-action"},(0,c.h)("span",{className:"sdt-hm-viewport-warning-label"},"Height"),R,P))),K=(0,c.h)("button",{className:"sdt-hm-btn sdt-hm-btn-primary"},"Hide"),H=(0,c.h)("button",{className:"sdt-hm-icon-btn","aria-label":"Expand clickmap options","data-sdt-tip":"Expand clickmap options"}),U=(0,c.h)("button",{className:"sdt-hm-icon-btn","aria-label":"Close clickmap","data-sdt-tip":"Close clickmap"}),V=(0,c.h)("span",{className:"sdt-hm-toolbar-metric-value"},"0"),Y=(0,c.h)("span",{className:"sdt-hm-toolbar-metric-value"},"0");function W(e){try{sessionStorage.setItem(u,JSON.stringify(e))}catch{}}let G=window.location.pathname,q={path:G,totalClicks:0,selectors:[],elements:[]},F=!1,J=null,X=0,Z=!0,Q=!1,ee=0,et="hidden",ei=null,ea=null,er=null,en=null,el=new Set,eo=new Set,es=null,ed=[],ec=new Map,eh=new Map;function ep(e,t){e.textContent=t}function eu(e,t,i){(0,s.runAsynchronously)(async()=>{try{await navigator.clipboard.writeText(t),e.textContent="Copied",window.setTimeout(()=>ep(e,i),1200)}catch{e.textContent="Copy failed",window.setTimeout(()=>ep(e,i),1600)}})}let em=new Map,ef=!0,eg=0;function ev(){for(let e of(em.clear(),eb=new WeakMap,document.querySelectorAll("*"))){if(!k(e))continue;let t=e.tagName.toLowerCase(),i=em.get(t)??[];i.push(e),em.set(t,i)}ef=!1}let eb=new WeakMap;function ex(e){let t=eb.get(e);if(null!=t)return t;let i=e,a=e;for(let e=0;null!=a&&a!==document.body&&a!==document.documentElement&&e<10;e++){if(a.matches('a[href], button, input, select, textarea, summary, label, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="radio"], [role="switch"], [role="option"], [contenteditable="true"]')){i=a;break}let e=a.parentElement;if("pointer"===window.getComputedStyle(a).cursor&&(null==e||"pointer"!==window.getComputedStyle(e).cursor)){i=a;break}a=e}let r={target:i,key:(0,o.buildElementsChain)(i)};return eb.set(e,r),r}function ey(e){let t=e.filter(k);return 1===t.length?t[0]:null}function ew(e){try{return ey(Array.from(document.querySelectorAll(e)))}catch{return null}}function ek(e,t,i,a,r){let n=e;for(let e=0;e<t.length;e++){if(null==n)return!1;let l=t[e];if(!function(e,t,i){if(e.tagName.toLowerCase()!==t.tag)return!1;if(i){for(let i of t.classes)if(!e.classList.contains(i))return!1}return!0}(n,l,i)||a&&null!=l.nthOfType&&function(e){let t=1,i=e.previousElementSibling,a=e.tagName;for(;null!=i;)i.tagName===a&&(t+=1),i=i.previousElementSibling;return t}(n)!==l.nthOfType||r&&null!=l.nthChild&&function(e){let t=1,i=e.previousElementSibling;for(;null!=i;)t+=1,i=i.previousElementSibling;return t}(n)!==l.nthChild)return!1;n=n.parentElement}return!0}(0,c.setHtml)(U,'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>');let e_='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',eN='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>',eC="";function eS(){let e=Q?'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>':'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';eC!==e&&(eC=e,(0,c.setHtml)(H,e))}eS(),ep(D,"Copy width"),ep(P,"Copy height"),D.addEventListener("click",()=>{eu(D,I.textContent,"Copy width")}),P.addEventListener("click",()=>{eu(P,R.textContent,"Copy height")});let eE=(0,c.h)("div",{className:"sdt-hm-stats"},(0,c.h)("div",{className:"sdt-hm-stat"},(0,c.h)("div",{className:"sdt-hm-stat-label"},"Clicks"),L),(0,c.h)("div",{className:"sdt-hm-stat"},(0,c.h)("div",{className:"sdt-hm-stat-label"},"Elements"),A),(0,c.h)("div",{className:"sdt-hm-stat"},(0,c.h)("div",{className:"sdt-hm-stat-label"},"Viewport"),M)),eL=function(){try{var e;let t=sessionStorage.getItem(u);if(null==t)return{...m};let i=JSON.parse(t);if(null==i||"object"!=typeof i)return{...m};return{range:v(i.range)?i.range:m.range,device:(e=i.device,"all"===e||"mobile"===e||"tablet"===e||"laptop"===e||"desktop"===e||"widescreen"===e||"tv"===e)?i.device:m.device,urlPattern:"string"==typeof i.urlPattern?i.urlPattern:m.urlPattern,elementSearch:"string"==typeof i.elementSearch?i.elementSearch:m.elementSearch,showDead:"boolean"==typeof i.showDead?i.showDead:m.showDead}}catch{return{...m}}}(),eA=0,eM=""!==eL.urlPattern.trim();function eO(){return eM?eL.urlPattern.trim():C(window.location.pathname)}let e$=function(e,t){let i=(0,c.h)("select",{className:"sdt-hm-filter-input"});for(let[t,a]of e){let e=(0,c.h)("option",{value:t},a);i.appendChild(e)}return i.value=t,i}([["24h","Last 24h"],["7d","Last 7 days"],["30d","Last 30 days"]],eL.range),eT=(0,c.h)("span",{className:"sdt-hm-seg-thumb","aria-hidden":"true"}),ez=(0,c.h)("div",{className:"sdt-hm-seg",role:"radiogroup","aria-label":"Viewport"},eT),ej=new Map,eI=!1;function eR(){let e=ej.get(eL.device);null!=e&&0!==e.offsetWidth&&(eI||(eT.style.transition="none"),eT.style.transform=`translateX(${e.offsetLeft}px)`,eT.style.width=`${e.offsetWidth}px`,eI||(eT.offsetWidth,eT.style.transition="",eI=!0))}for(let[e,t]of[["all","All"],["mobile","Mobile"],["tablet","Tablet"],["laptop","Laptop"],["desktop","Desktop"],["widescreen","Wide"],["tv","TV"]]){let i=(0,c.h)("button",{className:"sdt-hm-seg-btn",type:"button",role:"radio"},t);i.setAttribute("aria-checked",String(e===eL.device)),i.addEventListener("click",()=>{if(eL.device!==e){for(let[t,i]of(te({device:e}),ej))i.setAttribute("aria-checked",String(t===e));eR()}}),ej.set(e,i),ez.appendChild(i)}let eD=(0,c.h)("input",{className:"sdt-hm-filter-input",type:"text",placeholder:"/products/*",spellcheck:"false",autocomplete:"off",autocapitalize:"off"});eD.value=eO();let eP=(0,c.h)("button",{className:"sdt-hm-filter-reset",type:"button","aria-label":"Revert the URL pattern to the current page","data-sdt-tip":"Revert to the current page"});function eB(){let e=C(window.location.pathname),t=eM&&eL.urlPattern.trim()!==e;eP.classList.toggle("sdt-hm-filter-reset-visible",t)}(0,c.setHtml)(eP,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>');let eK=(0,c.h)("button",{className:"sdt-hm-filter-info",type:"button","aria-label":"URL pattern help","aria-expanded":"false","data-sdt-tip":"How URL patterns work"});function eH(e,t){return(0,c.h)("div",{className:"sdt-hm-url-help-row"},(0,c.h)("code",{className:"sdt-hm-url-help-code"},e),(0,c.h)("span",{className:"sdt-hm-url-help-desc"},t))}function eU(e){return(0,c.h)("code",{className:"sdt-hm-url-help-code"},e)}(0,c.setHtml)(eK,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>');let eV=(0,c.h)("div",{className:"sdt-hm-url-help-title"}),eY=(0,c.h)("div",{className:"sdt-hm-url-help-body"}),eW=(0,c.h)("div",{className:"sdt-hm-url-help-rows"}),eG=(0,c.h)("div",{className:"sdt-hm-url-help",role:"dialog","aria-label":"URL pattern help"},eV,eY,eW),eq=!1;function eF(e){eq=e,eG.classList.toggle("sdt-hm-url-help-open",e),eK.setAttribute("aria-expanded",String(e))}eK.addEventListener("click",e=>{e.stopPropagation(),eF(!eq)}),eG.addEventListener("click",e=>{e.stopPropagation()}),eV.textContent="URL pattern · glob",eY.replaceChildren("Limits the clickmap to pages whose path matches. Matched against the pathname only — no domain, hash, or query string. ",eU("*")," is the only wildcard and stands in for any characters (including ",eU("/"),"). Everything else is matched literally."),eW.replaceChildren(eH("/pricing","That exact page"),eH("/products/*","Any path under /products/"),eH("/teams/*/members","A wildcard segment in the middle"),eH("*/settings","Any path ending in /settings"),eH("*","Every page"),eH("(empty)","Auto-tracks the page you are viewing"));let eJ=(0,c.h)("input",{className:"sdt-hm-filter-input",type:"text",placeholder:"Search element text or tag","aria-label":"Search element text or tag",spellcheck:"false",autocomplete:"off",autocapitalize:"off"});eJ.value=eL.elementSearch;let eX=(0,c.h)("span",{className:"sdt-hm-toolbar-metric-icon"}),eZ=(0,c.h)("span",{className:"sdt-hm-toolbar-metric-icon"});(0,c.setHtml)(eX,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>'),(0,c.setHtml)(eZ,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>');let eQ='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 10h.01"/><path d="M15 10h.01"/><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"/></svg>',e0=(0,c.h)("button",{className:"sdt-hm-icon-btn sdt-hm-dead-toggle",type:"button","aria-pressed":"false","aria-label":"Show dead clicks","data-sdt-tip":"Show dead clicks"});(0,c.setHtml)(e0,eQ);let e1=(0,c.h)("span",{className:"sdt-hm-dead-toggle-icon"});(0,c.setHtml)(e1,eQ);let e2=(0,c.h)("button",{className:"sdt-hm-btn sdt-hm-dead-toggle",type:"button","aria-pressed":"false","data-sdt-tip":"Include clicks that had no effect"},e1,"Dead clicks");function e4(){for(let e of[e0,e2])e.setAttribute("aria-pressed",String(eL.showDead)),e.classList.toggle("sdt-hm-dead-toggle-active",eL.showDead)}function e5(e){eL.showDead!==e&&(W(eL={...eL,showDead:e}),e4(),tp())}e0.addEventListener("click",()=>e5(!eL.showDead)),e2.addEventListener("click",()=>e5(!eL.showDead)),e4();let e9=(0,c.h)("button",{className:"sdt-hm-icon-btn",type:"button","aria-pressed":"false","aria-label":"Hide overlay","data-sdt-tip":"Hide overlay"}),e6="";function e8(){e9.setAttribute("aria-pressed",String(!Z));let e=Z?"Hide overlay":"Show overlay";e9.setAttribute("aria-label",e),e9.setAttribute("data-sdt-tip",e),e9.classList.toggle("sdt-hm-overlay-mini-off",!Z);let t=Z?e_:eN;e6!==t&&(e6=t,(0,c.setHtml)(e9,t))}e9.addEventListener("click",()=>{Z=!Z,t_()}),e8();let e3=(0,c.h)("div",{className:"sdt-hm-toolbar"},U,(0,c.h)("div",{className:"sdt-hm-toolbar-title"},"Clickmap"),(0,c.h)("div",{className:"sdt-hm-toolbar-filters"},e$,(0,c.h)("div",{className:"sdt-hm-toolbar-url"},eD,eP,eK,eG)),(0,c.h)("div",{className:"sdt-hm-toolbar-metrics"},(0,c.h)("span",{className:"sdt-hm-toolbar-metric","data-sdt-tip":"Aggregate clicks"},V,eX),(0,c.h)("span",{className:"sdt-hm-toolbar-metric","data-sdt-tip":"Mapped elements"},Y,eZ)),e0,e9,H),e7=(0,c.h)("div",{className:"sdt-hm-filters"},(i=(0,c.h)("span",{className:"sdt-hm-filter-label-row"},(0,c.h)("span",{className:"sdt-hm-filter-label"},"Viewport")),(0,c.h)("label",{className:"sdt-hm-filter-field"},i,ez)),B);function te(e){W(eL={...eL,...e}),0!==eA&&window.clearTimeout(eA),eA=window.setTimeout(()=>{eA=0,(0,s.runAsynchronously)(tN())},250)}let tt=0;e$.addEventListener("change",()=>{v(e$.value)&&te({range:e$.value})}),eD.addEventListener("input",()=>{let e=eD.value;eM=""!==e.trim(),te({urlPattern:e}),eB()}),eP.addEventListener("click",()=>{eM=!1,eD.value=C(window.location.pathname),te({urlPattern:""}),eB()}),eJ.addEventListener("input",()=>{var e;e=eJ.value,W(eL={...eL,elementSearch:e}),0!==tt&&window.clearTimeout(tt),tt=window.setTimeout(()=>{tt=0,tp()},120)});let ti=(0,c.h)("div",{className:"sdt-hm-head"},e7,(0,c.h)("div",{className:"sdt-hm-actions"},eE,e2,K)),ta=(0,c.h)("button",{className:"sdt-hm-row-check",type:"button",role:"checkbox","aria-checked":"false","aria-label":"Select all elements"}),tr=(0,c.h)("span",{className:"sdt-hm-list-header-summary"}),tn=(0,c.h)("button",{className:"sdt-hm-btn sdt-hm-btn-sm",type:"button"},"Show all"),tl=(0,c.h)("button",{className:"sdt-hm-btn sdt-hm-btn-sm",type:"button"},"Hide all"),to=(0,c.h)("div",{className:"sdt-hm-list-header"},ta,tr,eJ,tn,tl);ta.addEventListener("click",()=>{if(ed.length>0&&ed.every(e=>eo.has(e.selector)))return void tg();for(let e of(eo.clear(),ed))eo.add(e.selector);es=null,tp()}),tn.addEventListener("click",()=>{for(let e of tx())el.delete(e.selector);tp()}),tl.addEventListener("click",()=>{for(let e of tx())el.add(e.selector);tp()});let ts=(0,c.h)("div",{className:"sdt-hm-body"},T,to,O),td=(0,c.h)("div",{className:"sdt-hm-details"},ti,ts);function tc(e){return eL.showDead?e.count:Math.max(0,e.count-e.deadCount)}function th(e){return e.count<=0?100:Math.min(100,Math.round(e.deadCount/e.count*100))}function tp(){cancelAnimationFrame(ee),ee=requestAnimationFrame(t_)}function tu(){ec.clear(),E.replaceChildren(S),S.classList.remove("sdt-hm-highlight-visible","sdt-hm-highlight-animating"),ea=null}function tm(){eh.clear(),O.replaceChildren()}function tf(e){el.has(e)?el.delete(e):el.add(e),tp()}function tg(){(0!==eo.size||null!=ei)&&(eo.clear(),es=null,ei=null,tp())}function tv(e){eo.has(e)?(eo.delete(e),ei===e&&(ei=null)):(eo.add(e),ei=e),es=e,tp()}function tb(e,t){let i=t.ctrlKey||t.metaKey;if(t.shiftKey&&null!=es){let t=ed.map(e=>e.selector),a=t.indexOf(es),r=t.indexOf(e.selector);if(-1!==a&&-1!==r){i||eo.clear();let[n,l]=a<=r?[a,r]:[r,a];for(let e of t.slice(n,l+1))eo.add(e);ei=e.selector,tp();return}}i?tv(e.selector):(es=e.selector,1===eo.size&&eo.has(e.selector)?(eo.delete(e.selector),ei=null):(eo.clear(),eo.add(e.selector),ei=e.selector),tp())}function tx(){return eo.size>0?ed.filter(e=>eo.has(e.selector)):ed}function ty(e){en!==e&&(en=e,tp())}let tw='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',tk="";function t_(){var e;let t;G!==window.location.pathname&&(q={path:G=window.location.pathname,totalClicks:0,selectors:[],elements:[]},J=null,tm(),function(){if(eM)return;let e=C(window.location.pathname);eD.value!==e&&(eD.value=e)}(),(0,s.runAsynchronously)(tN()));let i=function(){let e=new Map;if(q.path!==G)return[];let t=eL.elementSearch.trim().toLowerCase(),i=e=>""===t||[e.elementsText,e.tagName,e.href??"",e.elementsChain].some(e=>e.toLowerCase().includes(t));if(q.elements.length>0)for(let t of(ef&&ev(),q.elements)){if(!i(t))continue;let a=(0,o.parseElementsChain)(t.elementsChain),r=a.length>0?function(e){if(0===e.length)return null;let t=e[0];for(let{attr:e}of[{attr:"data-hexclave-id"},{attr:"data-testid"},{attr:"data-test-id"},{attr:"name"}]){let i=x(t,e);if(""===i)continue;let a=ew(`[${e}="${b(i)}"]`);if(a)return a}let i=x(t,"id");if(""!==i){let e=ew(`#${(0,l.cssEscapeIdent)(i)}`);if(e)return e}if(null!=t.href&&""!==t.href&&"a"===t.tag){let e=ew(`a[href="${b(t.href)}"]`);if(e)return e}for(let e of["aria-label","role","placeholder","title","type"]){let i=x(t,e);if(""===i)continue;let a=ew(`${t.tag}[${e}="${b(i)}"]`);if(a)return a}ef&&ev();let a=em.get(t.tag)??[];if(0===a.length)return null;let r=[];for(let t of a)ek(t,e,!0,!1,!1)&&r.push(t);let n=ey(r);if(null!=n)return n;let o=[];for(let t of a)ek(t,e,!0,!0,!1)&&o.push(t);let s=ey(o);if(null!=s)return s;let d=[];for(let t of a)ek(t,e,!0,!0,!0)&&d.push(t);let c=ey(d);return null!=c?c:null}(a):null;if(null==r&&null!=t.href&&""!==t.href&&"a"===t.tagName.toLowerCase()&&(r=ew(`a[href="${b(t.href)}"]`)),null==r)continue;let{target:n,key:s}=ex(r),d=e.get(s);if(null!=d){d.count+=t.clicks,d.deadCount+=t.deadClicks;continue}e.set(s,{selector:s,label:w(n),count:t.clicks,deadCount:t.deadClicks,element:n,rect:n.getBoundingClientRect()})}if(0===e.size)for(let i of q.selectors){if(""!==t&&!i.selector.toLowerCase().includes(t))continue;let a=function(e){try{return Array.from(document.querySelectorAll(e)).find(k)??null}catch{return null}}(i.selector);if(null==a)continue;let{target:r,key:n}=ex(a),l=e.get(n);if(null!=l){l.count+=i.clicks;continue}e.set(n,{selector:n,label:w(r),count:i.clicks,deadCount:0,element:r,rect:r.getBoundingClientRect()})}let a=Array.from(e.values());return eL.showDead||(a=a.filter(e=>tc(e)>0)),a.sort((e,t)=>tc(t)-tc(e)||(0,d.stringCompare)(e.selector,t.selector))}();ed=i;let a=new Set(i.map(e=>e.selector));for(let e of el)a.has(e)||el.delete(e);for(let e of eo)a.has(e)||eo.delete(e);null==es||a.has(es)||(es=null),null==ei||a.has(ei)||(ei=null),null==en||a.has(en)||(en=null);let r=i.reduce((e,t)=>e+tc(t),0),n=q.path===G?q.totalClicks:0,h=null!=(t=window.visualViewport)?{width:t.width,height:t.height}:{width:window.innerWidth,height:window.innerHeight},u=Math.round(h.width),m=Math.round(h.height),f="all"===(e=eL.device)?null:g[e],v=null==f||u>=f.min&&(null==f.max||u<=f.max);if(L.textContent=y(n),A.textContent=y(i.length),M.textContent=`${u}x${m}`,K.textContent=Z?"Hide overlay":"Show overlay",e8(),B.classList.toggle("sdt-hm-viewport-warning-visible",!v),null!=f&&!v){let e=null==f.max?f.min:Math.round((f.min+f.max)/2),t=Math.max(1,m);z.textContent="Viewport filter mismatch",j.textContent=`This page is ${u}px wide, but ${eL.device} is ${null==f.max?`${f.min}px+`:`${f.min}-${f.max}px`}. Resize the window or use the DevTools device toolbar before comparing this clickmap.`,I.textContent=String(e),R.textContent=String(t)}let D=eO(),P=function(e,t){if(""===e)return!0;try{return RegExp(`^${e.split("*").map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join(".*")}$`).test(t)}catch{return!1}}(D,G);eB();let U=_(),W=N();if(null==U)T.textContent=J??"No clickmap token in sessionStorage. Paste one from the dashboard to load this page.";else if(null!=W&&W!==window.location.origin)T.textContent=`Token was minted for ${W}, but this page is ${window.location.origin}. Generate a token for this exact origin.`;else if(F)T.textContent="Loading aggregate clickmap...";else if(null!=J)T.textContent=J;else{let e=""!==D&&D!==G?D:G,t=`Loaded ${y(n)} aggregate clicks for ${e}.`;0===n?t=`No clicks recorded for ${e} in this range.`:P?0===i.length?t+=" No matching elements found on this page yet.":r<n&&(t+=` ${y(r)} mapped to elements on this page.`):t+=" This page isn’t covered by the pattern — reset it or open a matching page to see the overlay.",T.textContent=t}T.classList.toggle("sdt-hm-token-status-error",null!=J||null!=U&&null!=W&&W!==window.location.origin),V.textContent=y(n),Y.textContent=y(i.length),p.classList.toggle("sdt-hm-expanded",Q),H.setAttribute("aria-expanded",String(Q)),H.setAttribute("aria-label",Q?"Collapse clickmap options":"Expand clickmap options"),H.setAttribute("data-sdt-tip",Q?"Collapse clickmap options":"Expand clickmap options"),eS(),eR(),function(e){let t=Z?"elements":"hidden";if(et!==t&&(et=t,tu()),!Z)return;let i=new Set,a=Math.max(1,...e.map(tc));for(let t of e){if(null==t.rect||t.rect.width<=0||t.rect.height<=0)continue;i.add(t.selector);let e=tc(t),r=a<=1?185:185-Math.round(155*Math.min(1,e/a)),n=el.has(t.selector),l=ei===t.selector||eo.has(t.selector),o=ec.get(t.selector);if(null==o){let e=(0,c.h)("button",{className:"sdt-hm-marker",type:"button",tabindex:"-1"});e.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),tf(t.selector)}),e.addEventListener("pointerenter",()=>ty(t.selector)),e.addEventListener("pointerleave",()=>{en===t.selector&&ty(null)}),o={marker:e,outline:(0,c.h)("div",{className:"sdt-hm-outline"})},ec.set(t.selector,o),E.append(o.outline,o.marker)}let{marker:s,outline:d}=o,h=eL.showDead&&t.deadCount>0&&t.count>0?` (${th(t)}% dead)`:"";s.title=n?`Unmute ${t.selector}`:`Mute ${e} clicks${h} on ${t.selector}`,s.setAttribute("aria-label",s.title),s.style.left=`${Math.round(t.rect.left+t.rect.width/2)}px`,s.style.top=`${Math.round(t.rect.top+t.rect.height/2)}px`,s.style.background=`hsla(${r}, 96%, 58%, 0.94)`,s.style.boxShadow=`0 0 0 1px hsla(${r}, 96%, 22%, 0.35), 0 8px 24px hsla(${r}, 96%, 45%, 0.32)`,s.textContent=y(e),s.classList.toggle("sdt-hm-marker-muted",n),s.classList.toggle("sdt-hm-marker-highlighted",l),d.style.left=`${t.rect.left}px`,d.style.top=`${t.rect.top}px`,d.style.width=`${t.rect.width}px`,d.style.height=`${t.rect.height}px`,d.style.borderColor=`hsla(${r}, 96%, 58%, 0.5)`,d.style.background=en===t.selector?`hsla(${r}, 96%, 58%, 0.16)`:"",d.classList.toggle("sdt-hm-outline-muted",n),d.classList.toggle("sdt-hm-outline-highlighted",l)}for(let[e,t]of ec)i.has(e)||(t.marker.remove(),t.outline.remove(),ec.delete(e));!function(e){let t=null==ei?null:e.find(e=>e.selector===ei)??null,i=t?.rect??null;if(null==t||null==i||i.width<=0||i.height<=0){null!=er&&(window.clearTimeout(er),er=null),S.classList.remove("sdt-hm-highlight-visible","sdt-hm-highlight-animating"),ea=null;return}S.classList.contains("sdt-hm-highlight-visible")&&ea!==t.selector&&(S.classList.add("sdt-hm-highlight-animating"),null!=er&&window.clearTimeout(er),er=window.setTimeout(()=>{S.classList.remove("sdt-hm-highlight-animating"),er=null},700)),ea=t.selector,S.style.left=`${i.left}px`,S.style.top=`${i.top}px`,S.style.width=`${i.width}px`,S.style.height=`${i.height}px`,S.classList.add("sdt-hm-highlight-visible")}(e)}(i),function(e){let t=e.length>0||""!==eL.elementSearch.trim();if(to.classList.toggle("sdt-hm-list-header-visible",t),!t)return;let i=eo.size,a=i>0&&e.every(e=>eo.has(e.selector));ta.setAttribute("aria-checked",a?"true":i>0?"mixed":"false"),ta.setAttribute("aria-label",a?"Clear selection":"Select all elements");let r=a?tw:i>0?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>':"";tk!==r&&(tk=r,(0,c.setHtml)(ta,r)),tr.textContent=i>0?`${y(i)} of ${y(e.length)} selected`:`${y(e.length)} element${1===e.length?"":"s"}`;let n=tx(),l=i>0?"selected":"all";tn.textContent=`Show ${l}`,tl.textContent=`Hide ${l}`,tn.disabled=n.every(e=>!el.has(e.selector)),tl.disabled=n.every(e=>el.has(e.selector))}(i),function(e){if(0===e.length){tm(),O.appendChild($);return}let t=ts.scrollTop;$.remove();let i=new Set,a=O.firstChild;for(let t of e.slice(0,30)){i.add(t.selector);let e=eh.get(t.selector);null==e&&(e=function(e){let t=(0,c.h)("span",{className:"sdt-hm-row-count"}),i=(0,c.h)("span",{className:"sdt-hm-row-label"}),a=(0,c.h)("span",{className:"sdt-hm-row-dead"}),r=(0,c.h)("span",{className:"sdt-hm-row-selector"}),n=(0,c.h)("button",{className:"sdt-hm-row-check",type:"button",role:"checkbox","aria-checked":"false"}),l=(0,c.h)("button",{className:"sdt-hm-row-eye",type:"button"}),o=(0,c.h)("div",{className:"sdt-hm-row",role:"button",tabindex:"0"},n,t,(0,c.h)("span",{className:"sdt-hm-row-meta"},(0,c.h)("span",{className:"sdt-hm-row-label-row"},i,a),r),l),s={row:o,count:t,check:n,eye:l,label:i,dead:a,selector:r,group:null,renderedEyeIcon:"",renderedCheckIcon:""};return n.addEventListener("click",e=>{if(e.preventDefault(),e.stopPropagation(),null!=s.group){if(e.shiftKey&&null!=es)return void tb(s.group,{shiftKey:!0,ctrlKey:!0,metaKey:!1});tv(s.group.selector)}}),l.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),tf(e)}),o.addEventListener("click",e=>{null!=s.group&&tb(s.group,e)}),o.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null!=s.group&&tb(s.group,e))}),s}(t.selector),eh.set(t.selector,e)),function(e,t){let i=el.has(t.selector),a=ei===t.selector,r=eo.has(t.selector);e.group=t,e.row.classList.toggle("sdt-hm-row-muted",i),e.row.classList.toggle("sdt-hm-row-highlighted",a),e.row.classList.toggle("sdt-hm-row-selected",r),e.check.setAttribute("aria-checked",String(r)),e.check.setAttribute("aria-label",r?`Deselect ${t.label}`:`Select ${t.label}`);let n=r?tw:"";e.renderedCheckIcon!==n&&(e.renderedCheckIcon=n,(0,c.setHtml)(e.check,n)),e.count.textContent=y(tc(t)),e.eye.setAttribute("aria-pressed",String(i)),e.eye.setAttribute("aria-label",i?`Unmute ${t.label}`:`Mute ${t.label}`),e.eye.title=i?"Unmute element":"Mute element";let l=i?eN:e_;if(e.renderedEyeIcon!==l&&(e.renderedEyeIcon=l,(0,c.setHtml)(e.eye,l)),e.label.textContent=t.label,eL.showDead&&t.deadCount>0){let i=th(t);e.dead.textContent=`${i}% dead`,e.dead.title=`${y(t.deadCount)} of ${y(t.count)} clicks had no visible effect`,e.dead.classList.add("sdt-hm-row-dead-visible")}else e.dead.textContent="",e.dead.title="",e.dead.classList.remove("sdt-hm-row-dead-visible");e.selector.textContent=t.selector}(e,t),e.row!==a&&O.insertBefore(e.row,a),a=e.row.nextSibling}for(let[e,t]of eh)i.has(e)||(t.row.remove(),eh.delete(e));ts.scrollTop=t}(i)}async function tN(){let t=X+1;X=t;let i=_();if(null==i){q={path:G,totalClicks:0,selectors:[],elements:[]},J=null,F=!1,t_();return}let n=N();if(null!=n&&n!==window.location.origin){q={path:G,totalClicks:0,selectors:[],elements:[]},J=null,F=!1,t_();return}F=!0,J=null,t_();try{let r=new Date,n=new Date(r.getTime()-f[eL.range]),l=window.location.pathname,o=eO(),s={clickmap_token:i,origin:window.location.origin,since:n.toISOString(),until:r.toISOString()};""!==o?s.url_pattern=o:s.route_path=l,"all"!==eL.device&&(s.device=eL.device);let d=await e[h.hexclaveAppInternalsSymbol].sendRequest("/analytics/clickmap",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(s)},"client");if(!d.ok)throw Error(`Clickmap request failed with HTTP ${d.status}`);let c=await d.json();if(t!==X)return;q=function(e,t){let i;try{i=a.AnalyticsClickmapResponseBodySchema.validateSync(e)}catch{return{path:t,totalClicks:0,selectors:[],elements:[]}}return{path:t,totalClicks:i.routes.reduce((e,t)=>e+t.clicks,0),selectors:i.selectors.map(e=>({selector:e.selector,clicks:e.clicks})),elements:i.elements.map(e=>({elementsChain:e.elements_chain,elementsText:e.elements_text,tagName:e.tag_name,href:e.href,clicks:e.clicks,deadClicks:e.dead_clicks}))}}(c,l)}catch(e){if(t!==X)return;if(q={path:G,totalClicks:0,selectors:[],elements:[]},e instanceof Error&&e.message.includes("Clickmap token does not belong to this project")){var l=r.CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY;try{sessionStorage.removeItem(l)}catch{}J="The stored clickmap token belongs to another project. Generate a fresh token for this project."}else J=e instanceof Error?e.message:"Failed to load clickmap data"}finally{t===X&&(F=!1,t_())}}let tC=()=>{let e=_(),t=N();if(null!=e&&(null==t||t===window.location.origin))try{sessionStorage.setItem(r.CLICKMAP_OVERLAY_RESUME_STORAGE_KEY,"1")}catch{}},tS=e=>{e.addEventListener("pointerdown",t=>{try{e.setPointerCapture(t.pointerId)}catch{}})};tS(K),tS(U),tS(H),tS(e0),tS(e2),tS(e9),tS(ta),tS(tn),tS(tl),K.addEventListener("click",()=>{Z=!Z,t_()}),U.addEventListener("click",t),H.addEventListener("click",()=>{Q=!Q,t_()});let tE=()=>{(0,s.runAsynchronously)(tN())},tL=window.setInterval(tp,500),tA=new MutationObserver(e=>{e.every(e=>{var t;let i;return null!=(i=(t=e.target)instanceof Element?t:t?.parentElement??null)&&(E.contains(i)||null!=i.closest(`#${(0,l.cssEscapeIdent)(n.CLICKMAP_ROOT_ID)}, #${(0,l.cssEscapeIdent)(n.DEV_TOOL_ROOT_ID)}`))})||(0!==eg&&window.clearTimeout(eg),eg=window.setTimeout(()=>{eg=0,ef=!0,tp()},250),tp())}),tM=window.visualViewport;tA.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),(document.getElementById(n.CLICKMAP_ROOT_ID)??document.body).appendChild(E),ev(),tp(),window.addEventListener("beforeunload",tC);let tO=()=>{tp()};document.addEventListener("scroll",tp,!0),window.addEventListener("resize",tO),tM?.addEventListener("resize",tp),tM?.addEventListener("scroll",tp),window.addEventListener(r.CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT,tE);let t$=e=>{!eq||e.target instanceof Node&&eG.contains(e.target)||e.target instanceof Node&&eK.contains(e.target)||eF(!1)},tT=e=>{if("Escape"===e.key){if(eq)return void eF(!1);tg()}};return document.addEventListener("mousedown",t$,!0),document.addEventListener("keydown",tT,!0),t_(),(0,s.runAsynchronously)(tN()),p.append(td,e3),{element:p,cleanup:()=>{cancelAnimationFrame(ee),0!==eg&&window.clearTimeout(eg),0!==eA&&window.clearTimeout(eA),0!==tt&&window.clearTimeout(tt),window.clearInterval(tL),tA.disconnect(),tu(),em.clear(),window.removeEventListener("beforeunload",tC),document.removeEventListener("scroll",tp,!0),window.removeEventListener("resize",tO),tM?.removeEventListener("resize",tp),tM?.removeEventListener("scroll",tp),window.removeEventListener(r.CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT,tE),document.removeEventListener("mousedown",t$,!0),document.removeEventListener("keydown",tT,!0),E.remove()}}}(e,()=>T.cleanup());A.appendChild((0,c.h)("div",{className:"sdt-hm-panel"},(0,c.h)("div",{className:"sdt-hm-panel-inner"},O.element)));let $=!1,T={cleanup:()=>{$||($=!0,(0,c.getGlobalUiInstance)(S)===T&&(0,c.setGlobalUiInstance)(S,null),O.cleanup?.(),L.parentNode&&L.parentNode.removeChild(L),t())}};return(0,c.setGlobalUiInstance)(S,T),()=>{T.cleanup()}}},958602,(e,t,i)=>{Object.defineProperty(i,Symbol.toStringTag,{value:"Module"});let a=e.r(287820),r=(0,a.yupObject)({date:(0,a.yupString)().defined(),activity:(0,a.yupNumber)().defined()}).defined(),n=(0,a.yupArray)(r).defined(),l=(0,a.yupObject)({total:n,new:n,retained:n,reactivated:n}).defined(),o=(0,a.yupObject)({verified_users:(0,a.yupNumber)().integer().defined(),unverified_users:(0,a.yupNumber)().integer().defined(),anonymous_users:(0,a.yupNumber)().integer().defined(),total_teams:(0,a.yupNumber)().integer().defined(),mau:(0,a.yupNumber)().integer().defined(),daily_active_users_split:l,daily_active_teams_split:l,total_users_filtered:(0,a.yupNumber)().integer().defined()}).defined(),s=(0,a.yupObject)({subscriptions_by_status:(0,a.yupRecord)((0,a.yupString)().defined(),(0,a.yupNumber)().defined()).defined(),active_subscription_count:(0,a.yupNumber)().integer().defined(),total_one_time_purchases:(0,a.yupNumber)().integer().defined(),daily_subscriptions:n,revenue_cents:(0,a.yupNumber)().integer().defined(),mrr_cents:(0,a.yupNumber)().integer().defined(),total_orders:(0,a.yupNumber)().integer().defined(),checkout_conversion_rate:(0,a.yupNumber)().defined()}).defined(),d=(0,a.yupObject)({id:(0,a.yupString)().defined(),status:(0,a.yupString)().defined(),subject:(0,a.yupString)().defined(),created_at_millis:(0,a.yupNumber)().defined()}).defined(),c=(0,a.yupObject)({date:(0,a.yupString)().defined(),ok:(0,a.yupNumber)().integer().defined(),error:(0,a.yupNumber)().integer().defined(),in_progress:(0,a.yupNumber)().integer().defined()}).defined(),h=(0,a.yupObject)({emails_by_status:(0,a.yupRecord)((0,a.yupString)().defined(),(0,a.yupNumber)().defined()).defined(),total_emails:(0,a.yupNumber)().integer().defined(),daily_emails:n,daily_emails_by_status:(0,a.yupArray)(c).defined(),emails_sent:(0,a.yupNumber)().integer().defined(),recent_emails:(0,a.yupArray)(d).defined(),deliverability_status:(0,a.yupObject)({delivered:(0,a.yupNumber)().integer().defined(),bounced:(0,a.yupNumber)().integer().defined(),error:(0,a.yupNumber)().integer().defined(),in_progress:(0,a.yupNumber)().integer().defined()}).defined(),deliverability_rate:(0,a.yupNumber)().defined(),bounce_rate:(0,a.yupNumber)().defined(),click_rate:(0,a.yupNumber)().defined()}).defined(),p=(0,a.yupObject)({date:(0,a.yupString)().defined(),new_cents:(0,a.yupNumber)().integer().defined(),refund_cents:(0,a.yupNumber)().integer().defined()}).defined(),u=(0,a.yupObject)({referrer:(0,a.yupString)().defined(),visitors:(0,a.yupNumber)().integer().defined()}).defined(),m=(0,a.yupObject)({name:(0,a.yupString)().defined(),visitors:(0,a.yupNumber)().integer().defined()}).defined(),f=(0,a.yupObject)({country_code:(0,a.yupString)().nullable().defined(),region_code:(0,a.yupString)().nullable().defined(),count:(0,a.yupNumber)().integer().defined()}).defined(),g=(0,a.yupObject)({country_code:(0,a.yupString)().defined(),count:(0,a.yupNumber)().integer().defined()}).defined(),v=(0,a.yupObject)({daily_page_views:n,daily_clicks:n,daily_visitors:n,hourly_page_views:(0,a.yupArray)(r).optional().default([]),hourly_active_users:(0,a.yupArray)(r).optional().default([]),hourly_visitors:(0,a.yupArray)(r).optional().default([]),daily_anonymous_visitors_fallback:(0,a.yupArray)(r).optional().default([]),daily_revenue:(0,a.yupArray)(p).defined(),total_revenue_cents:(0,a.yupNumber)().integer().defined(),total_replays:(0,a.yupNumber)().integer().defined(),recent_replays:(0,a.yupNumber)().integer().defined(),visitors:(0,a.yupNumber)().integer().defined(),anonymous_visitors_fallback:(0,a.yupNumber)().integer().optional().default(0),avg_session_seconds:(0,a.yupNumber)().defined(),online_live:(0,a.yupNumber)().integer().defined(),revenue_per_visitor:(0,a.yupNumber)().defined(),top_referrers:(0,a.yupArray)(u).defined(),top_region:f.nullable().defined(),top_regions:(0,a.yupArray)(g).optional().default([]),bounce_rate:(0,a.yupNumber)().optional().default(0),daily_bounce_rate:(0,a.yupArray)(r).optional().default([]),daily_avg_session_seconds:(0,a.yupArray)(r).optional().default([]),top_browsers:(0,a.yupArray)(m).optional().default([]),top_operating_systems:(0,a.yupArray)(m).optional().default([]),top_devices:(0,a.yupArray)(m).optional().default([]),conversion_rate:(0,a.yupNumber)().optional(),deltas:(0,a.yupMixed)().optional()}).defined(),b=(0,a.yupObject)({method:(0,a.yupString)().defined(),count:(0,a.yupNumber)().integer().defined()}).defined(),x=(0,a.yupObject)({id:(0,a.yupString)().defined(),display_name:(0,a.yupString)().nullable().defined(),primary_email:(0,a.yupString)().nullable().defined(),profile_image_url:(0,a.yupString)().nullable().defined(),signed_up_at_millis:(0,a.yupNumber)().defined(),last_active_at_millis:(0,a.yupNumber)().nullable().defined()}).noUnknown(!1).defined(),y=(0,a.yupObject)({data_points:n}).defined(),w=(0,a.yupString)().oneOf(["team_user_hour_of_week","session_replay_clicks"]).defined(),k=(0,a.yupString)().oneOf(["tv","widescreen","desktop","laptop","tablet","mobile"]).defined(),_=(0,a.yupObject)({token:(0,a.yupString)().defined(),origin:(0,a.yupString)().defined(),expires_at_millis:(0,a.yupNumber)().integer().defined()}).defined(),N=(0,a.yupObject)({weekday:(0,a.yupNumber)().integer().min(1).max(7).defined(),hour:(0,a.yupNumber)().integer().min(0).max(23).defined(),value:(0,a.yupNumber)().integer().defined()}).defined(),C=(0,a.yupObject)({kind:w,cells:(0,a.yupArray)(N).defined(),sampling:(0,a.yupNumber)().min(0).max(1).optional().default(1),routes:(0,a.yupArray)((0,a.yupObject)({path:(0,a.yupString)().defined(),clicks:(0,a.yupNumber)().integer().defined(),users:(0,a.yupNumber)().integer().defined(),replays:(0,a.yupNumber)().integer().defined()}).defined()).optional().default([]),users:(0,a.yupArray)((0,a.yupObject)({id:(0,a.yupString)().defined(),display_name:(0,a.yupString)().nullable().defined(),primary_email:(0,a.yupString)().nullable().defined(),profile_image_url:(0,a.yupString)().nullable().defined(),clicks:(0,a.yupNumber)().integer().defined(),replays:(0,a.yupNumber)().integer().defined(),last_event_at_millis:(0,a.yupNumber)().defined()}).defined()).optional().default([]),replays:(0,a.yupArray)((0,a.yupObject)({id:(0,a.yupString)().defined(),user_id:(0,a.yupString)().nullable().defined(),route_path:(0,a.yupString)().nullable().defined(),viewport_width:(0,a.yupNumber)().integer().nullable().defined(),viewport_height:(0,a.yupNumber)().integer().nullable().defined(),clicks:(0,a.yupNumber)().integer().defined(),last_event_at_millis:(0,a.yupNumber)().defined()}).defined()).optional().default([]),selectors:(0,a.yupArray)((0,a.yupObject)({selector:(0,a.yupString)().defined(),clicks:(0,a.yupNumber)().integer().defined()}).defined()).optional().default([]),elements:(0,a.yupArray)((0,a.yupObject)({elements_chain:(0,a.yupString)().defined(),elements_text:(0,a.yupString)().defined(),tag_name:(0,a.yupString)().defined(),href:(0,a.yupString)().nullable().defined(),clicks:(0,a.yupNumber)().integer().defined(),dead_clicks:(0,a.yupNumber)().integer().optional().default(0)}).defined()).optional().default([])}).defined(),S=(0,a.yupRecord)((0,a.yupString)().defined(),(0,a.yupArray)(x).defined()).optional().default({}),E=(0,a.yupObject)({total_users:(0,a.yupNumber)().integer().defined(),live_users:(0,a.yupNumber)().integer().optional().default(0),daily_users:n,daily_active_users:n,hourly_users:(0,a.yupArray)(r).optional().default([]),hourly_active_users:(0,a.yupArray)(r).optional().default([]),users_by_country:(0,a.yupRecord)((0,a.yupString)().defined(),(0,a.yupNumber)().defined()).defined(),active_users_by_country:S,recently_registered:(0,a.yupArray)(x).defined(),recently_active:(0,a.yupArray)(x).defined(),login_methods:(0,a.yupArray)(b).defined(),auth_overview:o,payments_overview:s,email_overview:h,analytics_overview:v}).defined(),L=(0,a.yupObject)({total_users:(0,a.yupNumber)().integer().defined(),anonymous_users:(0,a.yupNumber)().integer().defined()}).defined();i.AnalyticsClickmapCellSchema=N,i.AnalyticsClickmapDeviceSchema=k,i.AnalyticsClickmapKindSchema=w,i.AnalyticsClickmapResponseBodySchema=C,i.AnalyticsClickmapTokenResponseBodySchema=_,i.MetricsActiveUsersByCountrySchema=S,i.MetricsActivitySplitSchema=l,i.MetricsAnalyticsOverviewSchema=v,i.MetricsAuthOverviewSchema=o,i.MetricsDailyEmailStatusBreakdownSchema=c,i.MetricsDailyRevenuePointSchema=p,i.MetricsDataPointSchema=r,i.MetricsDataPointsSchema=n,i.MetricsEmailOverviewSchema=h,i.MetricsLoginMethodEntrySchema=b,i.MetricsNamedCountSchema=m,i.MetricsPaymentsOverviewSchema=s,i.MetricsRecentEmailSchema=d,i.MetricsRecentUserSchema=x,i.MetricsResponseBodySchema=E,i.MetricsTopCountrySchema=g,i.MetricsTopReferrerSchema=u,i.MetricsTopRegionSchema=f,i.MetricsUserCountsSchema=L,i.UserActivityResponseBodySchema=y}]);