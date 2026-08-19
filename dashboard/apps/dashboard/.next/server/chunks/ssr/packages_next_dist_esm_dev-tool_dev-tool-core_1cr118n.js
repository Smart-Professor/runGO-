module.exports=[158994,a=>{"use strict";var b=a.i(666778),c=a.i(591888),d=a.i(898536),e=a.i(624597),f=a.i(876722),g=a.i(483096),h=a.i(890866),i=a.i(763227);let j=(0,a.i(79768).getInPageUiBaseCSS)(".hexclave-devtool")+`
  /* Trigger pill */
  .hexclave-devtool .sdt-trigger {
    position: fixed;
    z-index: 2147483647;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border);
    border-radius: 10px;
    cursor: grab;
    box-shadow: var(--sdt-trigger-shadow);
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    user-select: none;
    touch-action: none;
  }

  .hexclave-devtool .sdt-trigger-position-animated {
    transition: left 0.14s cubic-bezier(0.2, 0.8, 0.2, 1), top 0.14s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .hexclave-devtool .sdt-trigger:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-accent);
    box-shadow: var(--sdt-trigger-shadow), 0 0 0 1px var(--sdt-accent);
  }

  .hexclave-devtool .sdt-trigger:active {
    cursor: grabbing;
  }

  .hexclave-devtool .sdt-trigger-logo {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    background: var(--sdt-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    line-height: 0;
  }

  /* Panel overlay */
  .hexclave-devtool .sdt-panel {
    position: fixed;
    bottom: 60px;
    right: 16px;
    z-index: 2147483647;
    width: 800px;
    max-width: calc(100vw - 32px);
    height: 520px;
    max-height: calc(100vh - 80px);
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-lg);
    box-shadow: var(--sdt-shadow);
    display: flex;
    flex-direction: column;
    overflow: visible;
  }

  .hexclave-devtool .sdt-panel-geometry-animated {
    transition: width 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
                height 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
                right 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
                bottom 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
                border-radius 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),
                border-color 0.18s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .hexclave-devtool .sdt-panel-fullscreen {
    right: 0;
    bottom: 0;
    width: 100vw;
    max-width: none;
    height: 100vh;
    max-height: none;
    border: none;
    border-radius: 0;
  }

  .hexclave-devtool .sdt-panel-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--sdt-radius-lg);
    animation: sdt-panel-enter 0.2s ease-out;
  }

  .hexclave-devtool .sdt-panel-fullscreen .sdt-panel-inner {
    border-radius: 0;
  }

  .hexclave-devtool .sdt-panel-fullscreen .sdt-resize-handle {
    display: none;
  }

  @keyframes sdt-panel-enter {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(8px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .hexclave-devtool .sdt-panel-exiting {
    animation: sdt-panel-exit 0.15s ease-in forwards;
  }

  @keyframes sdt-panel-exit {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateY(8px);
    }
  }

  /* Tab bar */
  .hexclave-devtool .sdt-tabbar {
    position: relative;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 8px;
    background: var(--sdt-bg-subtle);
    border-bottom: 1px solid var(--sdt-border);
    flex-shrink: 0;
    gap: 2px;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .hexclave-devtool .sdt-panel-fullscreen .sdt-tabbar {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    z-index: 2;
    background: var(--sdt-overlay-bg);
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius);
    box-shadow: var(--sdt-trigger-shadow);
  }

  .hexclave-devtool .sdt-tab-indicator {
    position: absolute;
    top: 6px;
    left: 0;
    height: 32px;
    background: var(--sdt-bg-active);
    border-radius: var(--sdt-radius);
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    z-index: 0;
  }

  .hexclave-devtool .sdt-tab {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding: 0 12px;
    background: transparent;
    border: none;
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    color: var(--sdt-text-secondary);
    transition: color 0.15s ease;
    white-space: nowrap;
    outline: none;
  }

  .hexclave-devtool .sdt-tab:hover {
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-tab[data-active="true"] {
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-tab-icon {
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-tabbar-spacer {
    flex: 1;
  }

  .hexclave-devtool .sdt-tabbar-actions {
    position: sticky;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: 4px;
    padding-left: 6px;
    background: inherit;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-docs-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 28px;
    padding: 0 8px;
    color: var(--sdt-text-secondary);
    border-radius: var(--sdt-radius-sm);
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.15s ease, background 0.15s ease;
  }

  .hexclave-devtool .sdt-docs-link:hover {
    color: var(--sdt-text);
    background: var(--sdt-bg-hover);
  }

  .hexclave-devtool .sdt-docs-link-icon {
    display: flex;
    width: 13px;
    height: 13px;
    line-height: 0;
  }

  .hexclave-devtool .sdt-close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: transparent;
    border: none;
    border-radius: var(--sdt-radius-sm);
    cursor: pointer;
    color: var(--sdt-text-tertiary);
    transition: all 0.15s ease;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-close-btn:hover {
    color: var(--sdt-text);
    background: var(--sdt-bg-hover);
  }

  /* Tab content area */
  .hexclave-devtool .sdt-content {
    flex: 1;
    position: relative;
    overflow: hidden;
    min-height: 0;
  }

  .hexclave-devtool .sdt-panel-fullscreen .sdt-content {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hexclave-devtool .sdt-tab-layers {
    position: absolute;
    inset: 0;
  }

  .hexclave-devtool .sdt-tab-pane {
    position: absolute;
    inset: 0;
    display: none;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    background: var(--sdt-bg);
    opacity: 0;
    pointer-events: none;
    z-index: 0;
  }

  .hexclave-devtool .sdt-tab-pane-iframe {
    padding: 0;
    overflow: hidden;
  }

  .hexclave-devtool .sdt-tab-pane-active {
    display: block;
    opacity: 1;
    pointer-events: auto;
    z-index: 1;
  }

  /* Iframe panes lay their content out as a flex column so the embedded
     dashboard (or the fallback message) fills the pane height. Uses two
     classes to win over the plain .sdt-tab-pane-active { display: block }. */
  .hexclave-devtool .sdt-tab-pane-iframe.sdt-tab-pane-active {
    display: flex;
    flex-direction: column;
  }

  /* ===== Overview tab — single column ===== */

  .hexclave-devtool .sdt-ov {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 660px;
    margin: 0 auto;
  }

  /* Card base */
  .hexclave-devtool .sdt-ov-card {
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 0;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    overflow: hidden;
    min-width: 0;
  }

  .hexclave-devtool .sdt-ov-card-hero {
    background: linear-gradient(135deg, rgba(99,102,241,0.04) 0%, transparent 50%), var(--sdt-bg-elevated);
  }

  .hexclave-devtool .sdt-ov-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--sdt-text-tertiary);
    margin-bottom: 10px;
  }

  .hexclave-devtool .sdt-ov-user-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
  }

  .hexclave-devtool .sdt-ov-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--sdt-bg-hover);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: var(--sdt-text-tertiary);
    flex-shrink: 0;
    border: 2px solid var(--sdt-border-subtle);
    overflow: hidden;
  }

  .hexclave-devtool .sdt-ov-avatar-active {
    background: var(--sdt-accent-muted);
    color: var(--sdt-accent);
    border-color: rgba(99,102,241,0.3);
  }

  .hexclave-devtool .sdt-ov-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .hexclave-devtool .sdt-ov-user-meta {
    min-width: 0;
    flex: 1;
  }

  .hexclave-devtool .sdt-ov-user-name {
    font-size: 16px;
    font-weight: 700;
    color: var(--sdt-text);
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hexclave-devtool .sdt-ov-user-email {
    font-size: 12px;
    font-family: var(--sdt-font-mono);
    color: var(--sdt-text-secondary);
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hexclave-devtool .sdt-ov-auth-indicator {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 5px;
    font-size: 11px;
    font-weight: 600;
    color: var(--sdt-success);
  }

  .hexclave-devtool .sdt-ov-auth-indicator::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sdt-success);
    box-shadow: 0 0 6px rgba(34,197,94,0.5);
  }

  /* Actions */
  .hexclave-devtool .sdt-ov-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .hexclave-devtool .sdt-ov-btn {
    height: 30px;
    padding: 0 12px;
    border-radius: 6px;
    border: none;
    font-size: 12px;
    font-weight: 600;
    font-family: var(--sdt-font);
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }
  .hexclave-devtool .sdt-ov-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .hexclave-devtool .sdt-ov-btn-primary {
    background: var(--sdt-accent);
    color: #fff;
  }
  .hexclave-devtool .sdt-ov-btn-primary:hover { background: var(--sdt-accent-hover); }

  .hexclave-devtool .sdt-ov-btn-secondary {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }
  .hexclave-devtool .sdt-ov-btn-secondary:hover { background: var(--sdt-bg-active); }

  .hexclave-devtool .sdt-ov-btn-danger {
    background: var(--sdt-error-muted);
    color: var(--sdt-error);
    border: 1px solid rgba(239, 68, 68, 0.15);
  }
  .hexclave-devtool .sdt-ov-btn-danger:hover { background: rgba(239, 68, 68, 0.2); }

  .hexclave-devtool .sdt-ov-btn-wide { flex: 1; }

  .hexclave-devtool .sdt-ov-email-input {
    display: flex;
    flex: 1 1 180px;
    border: 1px solid var(--sdt-border-subtle);
    border-radius: 6px;
    overflow: hidden;
    background: var(--sdt-bg);
    transition: border-color 0.15s ease;
  }
  .hexclave-devtool .sdt-ov-email-input:focus-within {
    border-color: var(--sdt-accent);
    box-shadow: 0 0 0 2px var(--sdt-accent-muted);
  }
  .hexclave-devtool .sdt-ov-email-input input {
    flex: 1;
    height: 28px;
    padding: 0 8px;
    background: transparent;
    border: none;
    color: var(--sdt-text);
    font-size: 11px;
    font-family: var(--sdt-font);
    outline: none;
    min-width: 0;
  }
  .hexclave-devtool .sdt-ov-email-input input::placeholder { color: var(--sdt-text-tertiary); }
  .hexclave-devtool .sdt-ov-email-input button {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-left: 1px solid var(--sdt-border-subtle);
    background: transparent;
    color: var(--sdt-accent);
    cursor: pointer;
    flex-shrink: 0;
    font-family: var(--sdt-font);
  }
  .hexclave-devtool .sdt-ov-email-input button:hover { background: var(--sdt-accent-muted); }
  .hexclave-devtool .sdt-ov-email-input button:disabled { opacity: 0.3; cursor: not-allowed; }

  .hexclave-devtool .sdt-ov-toast {
    font-size: 11px;
    padding: 5px 10px;
    border-radius: 6px;
    margin-top: 8px;
    line-height: 1.4;
  }
  .hexclave-devtool .sdt-ov-toast-success { background: var(--sdt-success-muted); color: var(--sdt-success); }
  .hexclave-devtool .sdt-ov-toast-error { background: var(--sdt-error-muted); color: var(--sdt-error); }

  /* --- Auth methods card --- */
  .hexclave-devtool .sdt-ov-card-auth {
    padding: 14px 16px;
  }

  .hexclave-devtool .sdt-ov-auth-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .hexclave-devtool .sdt-ov-method {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg);
    transition: all 0.15s ease;
  }

  .hexclave-devtool .sdt-ov-method-on {
    color: var(--sdt-text);
    background: var(--sdt-success-muted);
    border-color: rgba(34, 197, 94, 0.12);
  }

  .hexclave-devtool .sdt-ov-method-off {
    color: var(--sdt-text-tertiary);
    opacity: 0.5;
    border-style: dashed;
  }

  .hexclave-devtool .sdt-ov-method-oauth {
    text-transform: capitalize;
  }

  .hexclave-devtool .sdt-ov-method-warn {
    color: var(--sdt-warning);
    border-color: rgba(234, 179, 8, 0.2);
  }

  .hexclave-devtool .sdt-ov-skeleton-pill {
    width: 64px;
    height: 26px;
    border-radius: 6px;
    background: var(--sdt-bg-hover);
    border: 1px solid var(--sdt-border-subtle);
    animation: sdt-ov-shimmer 1.5s ease-in-out infinite;
  }

  @keyframes sdt-ov-shimmer {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }

  /* --- Setup checklist card (only shown when something is incomplete) --- */
  .hexclave-devtool .sdt-ov-card-checks {
    padding: 14px 16px;
    border-color: rgba(234, 179, 8, 0.25);
  }

  .hexclave-devtool .sdt-ov-checks-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 8px;
  }

  .hexclave-devtool .sdt-ov-checks-badge {
    font-size: 10px;
    font-weight: 700;
    padding: 1px 6px;
    border-radius: 4px;
  }

  .hexclave-devtool .sdt-ov-checks-badge-ok {
    background: var(--sdt-success-muted);
    color: var(--sdt-success);
  }

  .hexclave-devtool .sdt-ov-checks-badge-warn {
    background: var(--sdt-warning-muted);
    color: var(--sdt-warning);
  }

  .hexclave-devtool .sdt-ov-checks-bar {
    height: 3px;
    border-radius: 2px;
    background: var(--sdt-border-subtle);
    margin-bottom: 10px;
    overflow: hidden;
  }

  .hexclave-devtool .sdt-ov-checks-bar-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--sdt-warning);
    transition: width 0.4s ease;
  }

  .hexclave-devtool .sdt-ov-setup-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0;
    font-size: 12px;
    border-bottom: 1px solid var(--sdt-border-subtle);
  }

  .hexclave-devtool .sdt-ov-setup-row:last-child { border-bottom: none; }

  .hexclave-devtool .sdt-ov-setup-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-ov-setup-dot-ok { background: var(--sdt-success); }
  .hexclave-devtool .sdt-ov-setup-dot-warn { background: var(--sdt-warning); }

  .hexclave-devtool .sdt-ov-setup-label {
    color: var(--sdt-text);
    font-size: 12px;
  }

  .hexclave-devtool .sdt-ov-setup-hint {
    margin-left: auto;
    font-size: 11px;
    color: var(--sdt-text-tertiary);
  }

  /* Status badges (shared across tabs) */
  .hexclave-devtool .sdt-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
  }
  .hexclave-devtool .sdt-badge-success { background: var(--sdt-success-muted); color: var(--sdt-success); }
  .hexclave-devtool .sdt-badge-warning { background: var(--sdt-warning-muted); color: var(--sdt-warning); }
  .hexclave-devtool .sdt-badge-error { background: var(--sdt-error-muted); color: var(--sdt-error); }
  .hexclave-devtool .sdt-badge-info { background: var(--sdt-info-muted); color: var(--sdt-info); }

  /* ===== Components / Pages tab ===== */

  .hexclave-devtool .sdt-pg-layout {
    display: flex;
    height: calc(100% + 32px);
    margin: -16px;
  }

  /* --- Sidebar --- */
  .hexclave-devtool .sdt-pg-sidebar {
    width: 250px;
    flex-shrink: 0;
    border-right: 1px solid var(--sdt-border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .hexclave-devtool .sdt-pg-sidebar-head {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 14px 8px;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-pg-sidebar-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--sdt-text-tertiary);
  }

  .hexclave-devtool .sdt-pg-sidebar-count {
    font-size: 10px;
    font-weight: 700;
    color: var(--sdt-text-tertiary);
    background: var(--sdt-bg-active);
    padding: 0 5px;
    border-radius: 6px;
    line-height: 18px;
  }

  .hexclave-devtool .sdt-pg-sidebar-warn {
    margin-left: auto;
    font-size: 10px;
    font-weight: 700;
    color: var(--sdt-warning);
    background: var(--sdt-warning-muted);
    padding: 0 6px;
    border-radius: 6px;
    line-height: 18px;
  }

  .hexclave-devtool .sdt-pg-list {
    flex: 1;
    overflow-y: auto;
    padding: 0 6px 6px;
  }

  /* --- List item --- */
  .hexclave-devtool .sdt-pg-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.12s ease;
    font-size: 13px;
    color: var(--sdt-text);
    position: relative;
  }

  .hexclave-devtool .sdt-pg-item:hover {
    background: var(--sdt-bg-hover);
  }

  .hexclave-devtool .sdt-pg-item[data-selected="true"] {
    background: var(--sdt-accent-muted);
  }

  .hexclave-devtool .sdt-pg-item[data-selected="true"] .sdt-pg-item-label {
    color: var(--sdt-accent-hover);
    font-weight: 600;
  }

  .hexclave-devtool .sdt-pg-item-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .hexclave-devtool .sdt-pg-item-dot-handler { background: var(--sdt-info); }
  .hexclave-devtool .sdt-pg-item-dot-custom { background: var(--sdt-success); }
  .hexclave-devtool .sdt-pg-item-dot-warn {
    background: var(--sdt-warning);
    box-shadow: 0 0 6px rgba(234, 179, 8, 0.4);
  }

  .hexclave-devtool .sdt-pg-item-label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* --- Badges --- */
  .hexclave-devtool .sdt-pg-badge {
    display: inline-flex;
    align-items: center;
    height: 20px;
    padding: 0 7px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2px;
    flex-shrink: 0;
    line-height: 1;
  }

  .hexclave-devtool .sdt-pg-badge-outdated { background: var(--sdt-warning-muted); color: var(--sdt-warning); }

  /* --- Empty state --- */
  .hexclave-devtool .sdt-pg-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;
  }

  .hexclave-devtool .sdt-pg-empty-icon {
    color: var(--sdt-text-tertiary);
    opacity: 0.35;
    margin-bottom: 4px;
  }

  .hexclave-devtool .sdt-pg-empty-text {
    font-size: 14px;
    font-weight: 600;
    color: var(--sdt-text-secondary);
  }

  .hexclave-devtool .sdt-pg-empty-sub {
    font-size: 12px;
    color: var(--sdt-text-tertiary);
  }

  /* --- Main panel --- */
  .hexclave-devtool .sdt-pg-main {
    flex: 1;
    overflow-y: auto;
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
  }

  /* --- Detail view --- */
  .hexclave-devtool .sdt-pg-detail {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Header */
  .hexclave-devtool .sdt-pg-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .hexclave-devtool .sdt-pg-header-top {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .hexclave-devtool .sdt-pg-title {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-pg-title-url {
    min-width: 0;
    max-width: 280px;
    color: var(--sdt-text-tertiary);
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
  }

  .hexclave-devtool .sdt-pg-title-url:hover {
    color: var(--sdt-accent);
  }

  .hexclave-devtool .sdt-pg-subtitle {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.4;
  }

  .hexclave-devtool .sdt-pg-code-inline {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
  }

  .hexclave-devtool .sdt-pg-code {
    flex: 1;
    min-width: 0;
    font-family: var(--sdt-font-mono);
    font-size: 12px;
    color: var(--sdt-accent);
    background: var(--sdt-bg-elevated);
    border-radius: 6px;
    padding: 6px 10px;
    border: 1px solid var(--sdt-border-subtle);
  }

  /* --- Copy button --- */
  .hexclave-devtool .sdt-pg-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid var(--sdt-border);
    background: var(--sdt-bg-active);
    color: var(--sdt-text-secondary);
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    font-family: var(--sdt-font);
    transition: all 0.12s ease;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .hexclave-devtool .sdt-pg-open-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 32px;
    padding: 0 12px;
    font-size: 12px;
  }

  .hexclave-devtool .sdt-pg-open-btn svg {
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-pg-copy-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
    border-color: var(--sdt-accent);
  }

  .hexclave-devtool .sdt-pg-copy-btn-ok {
    border-color: rgba(34, 197, 94, 0.3);
    color: var(--sdt-success);
    background: var(--sdt-success-muted);
  }

  /* --- Update banner --- */
  .hexclave-devtool .sdt-pg-update-banner {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 14px;
    background: rgba(234, 179, 8, 0.08);
    border: 1px solid rgba(234, 179, 8, 0.3);
    border-radius: 10px;
  }

  .hexclave-devtool .sdt-pg-update-banner-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(234, 179, 8, 0.2);
    color: var(--sdt-warning);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .hexclave-devtool .sdt-pg-update-banner-body {
    flex: 1;
    min-width: 0;
  }

  .hexclave-devtool .sdt-pg-update-banner-title {
    font-size: 13px;
    font-weight: 700;
    color: var(--sdt-warning);
    margin-bottom: 2px;
  }

  .hexclave-devtool .sdt-pg-update-banner-text {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.5;
  }

  .hexclave-devtool .sdt-pg-update-banner-text strong {
    color: var(--sdt-text);
    font-weight: 600;
  }

  /* --- Sections (changelog, prompt) --- */
  .hexclave-devtool .sdt-pg-section {
    border: 1px solid var(--sdt-border-subtle);
    border-radius: 10px;
    padding: 12px 14px;
    background: var(--sdt-bg-elevated);
  }

  .hexclave-devtool .sdt-pg-section-warn {
    border-color: rgba(234, 179, 8, 0.25);
    background: rgba(234, 179, 8, 0.03);
  }

  .hexclave-devtool .sdt-pg-section-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--sdt-text-secondary);
    margin-bottom: 8px;
  }

  .hexclave-devtool .sdt-pg-section-warn .sdt-pg-section-label {
    color: var(--sdt-warning);
  }

  .hexclave-devtool .sdt-pg-section-footer {
    display: flex;
    margin-top: 8px;
  }

  /* Changelog list */
  .hexclave-devtool .sdt-pg-changelog-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .hexclave-devtool .sdt-pg-changelog-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12px;
    color: var(--sdt-text);
    line-height: 1.5;
  }

  .hexclave-devtool .sdt-pg-changelog-bullet {
    flex-shrink: 0;
    font-size: 12px;
    line-height: 1.5;
  }

  /* Pre block */
  .hexclave-devtool .sdt-pg-pre {
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    line-height: 1.6;
    color: var(--sdt-text);
    background: var(--sdt-bg);
    border-radius: 6px;
    padding: 10px 12px;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--sdt-border-subtle);
  }

  .hexclave-devtool .sdt-preview-loading,
  .hexclave-devtool .sdt-preview-unavailable {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.5;
  }

  .hexclave-devtool .sdt-preview-error {
    font-size: 12px;
    color: var(--sdt-error);
    line-height: 1.5;
  }

  .hexclave-devtool .sdt-preview-code {
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-props-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }

  .hexclave-devtool .sdt-props-table th {
    text-align: left;
    font-weight: 600;
    color: var(--sdt-text-tertiary);
    padding: 6px 8px;
    border-bottom: 1px solid var(--sdt-border);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .hexclave-devtool .sdt-props-table td {
    padding: 6px 8px;
    border-bottom: 1px solid var(--sdt-border-subtle);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-props-table td:first-child {
    font-family: var(--sdt-font-mono);
    color: var(--sdt-accent-hover);
  }

  .hexclave-devtool .sdt-props-table td:last-child {
    font-family: var(--sdt-font-mono);
    color: var(--sdt-text-secondary);
  }

  /* Iframe tabs */
  .hexclave-devtool .sdt-iframe-container {
    position: relative;
    flex: 1;
    min-height: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .hexclave-devtool .sdt-iframe-toolbar {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 0;
  }

  .hexclave-devtool .sdt-panel-fullscreen .sdt-iframe-toolbar {
    top: 60px;
    right: 12px;
  }

  .hexclave-devtool .sdt-iframe-open-link {
    display: inline-flex;
    align-items: center;
    min-height: 28px;
    padding: 0 10px;
    background: var(--sdt-overlay-bg);
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-sm);
    color: var(--sdt-accent-hover);
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
  }

  .hexclave-devtool .sdt-iframe-open-link:hover {
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-iframe-container iframe {
    flex: 1;
    min-height: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: white;
    border-radius: 0;
  }

  .hexclave-devtool .sdt-iframe-loading {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sdt-text-secondary);
    font-size: 13px;
  }

  .hexclave-devtool .sdt-iframe-error {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--sdt-text-secondary);
    font-size: 13px;
  }

  .hexclave-devtool .sdt-iframe-error-btn {
    padding: 6px 16px;
    background: var(--sdt-accent);
    color: white;
    border: none;
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    transition: background 0.15s ease;
  }

  .hexclave-devtool .sdt-iframe-error-btn:hover {
    background: var(--sdt-accent-hover);
  }

  .hexclave-devtool .sdt-dashboard-unavailable {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 24px;
    text-align: center;
    color: var(--sdt-text-secondary);
    font-size: 14px;
  }

  .hexclave-devtool .sdt-dashboard-unavailable-text {
    max-width: 420px;
    line-height: 1.5;
  }

  .hexclave-devtool .sdt-dashboard-unavailable-link {
    color: var(--sdt-accent);
    text-decoration: none;
  }

  .hexclave-devtool .sdt-dashboard-unavailable-link:hover {
    text-decoration: underline;
  }

  /* Shared content fade animation */
  .hexclave-devtool .sdt-tab-content-fade {
    animation: sdt-tab-fade-in 0.15s ease-out;
  }

  /* Console tab */
  .hexclave-devtool .sdt-console-panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }

  .hexclave-devtool .sdt-console-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-console-title {
    color: var(--sdt-text);
    font-size: 13px;
    font-weight: 600;
  }

  .hexclave-devtool .sdt-console-actions {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .hexclave-devtool .sdt-console-action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 28px;
    padding: 0 9px;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-sm);
    color: var(--sdt-text-secondary);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
    white-space: nowrap;
  }

  .hexclave-devtool .sdt-console-action-btn:hover {
    color: var(--sdt-text);
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
  }

  .hexclave-devtool .sdt-console-action-btn svg {
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-console-log-scroll {
    flex: 1;
    min-height: 0;
    overflow: auto;
  }

  .hexclave-devtool .sdt-console-tabs {
    position: relative;
    display: flex;
    flex: 1;
    gap: 2px;
    background: var(--sdt-bg-subtle);
    border-radius: var(--sdt-radius);
    padding: 2px;
  }

  .hexclave-devtool .sdt-console-tab-indicator {
    position: absolute;
    top: 2px;
    left: 0;
    background: var(--sdt-bg-active);
    border-radius: var(--sdt-radius-sm);
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    z-index: 0;
  }

  .hexclave-devtool .sdt-console-tab {
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 6px 12px;
    background: transparent;
    border: none;
    border-radius: var(--sdt-radius-sm);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    color: var(--sdt-text-secondary);
    transition: color 0.15s ease;
    text-align: center;
  }

  .hexclave-devtool .sdt-console-tab:hover {
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-console-tab[data-active="true"] {
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-log-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .hexclave-devtool .sdt-log-load-hint {
    padding: 8px 10px;
    color: var(--sdt-text-tertiary);
    font-family: var(--sdt-font);
    font-size: 12px;
    text-align: center;
  }

  .hexclave-devtool .sdt-log-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 10px;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    font-size: 12px;
    font-family: var(--sdt-font-mono);
  }

  .hexclave-devtool .sdt-log-time {
    color: var(--sdt-text-tertiary);
    flex-shrink: 0;
    font-size: 11px;
  }

  .hexclave-devtool .sdt-log-type {
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-log-message {
    flex: 1;
    color: var(--sdt-text);
    word-break: break-all;
  }

  .hexclave-devtool .sdt-log-method {
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-log-method-get {
    background: var(--sdt-info-muted);
    color: var(--sdt-info);
  }

  .hexclave-devtool .sdt-log-method-post {
    background: var(--sdt-success-muted);
    color: var(--sdt-success);
  }

  .hexclave-devtool .sdt-log-method-put, .hexclave-devtool .sdt-log-method-patch {
    background: var(--sdt-warning-muted);
    color: var(--sdt-warning);
  }

  .hexclave-devtool .sdt-log-method-delete {
    background: var(--sdt-error-muted);
    color: var(--sdt-error);
  }

  .hexclave-devtool .sdt-log-status {
    font-size: 11px;
    flex-shrink: 0;
  }

  .hexclave-devtool .sdt-log-status-ok {
    color: var(--sdt-success);
  }

  .hexclave-devtool .sdt-log-status-err {
    color: var(--sdt-error);
  }

  .hexclave-devtool .sdt-log-url {
    flex: 1;
    color: var(--sdt-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hexclave-devtool .sdt-empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 40px 20px;
    color: var(--sdt-text-tertiary);
    font-size: 13px;
    text-align: center;
    gap: 4px;
  }

  .hexclave-devtool .sdt-empty-state-icon {
    font-size: 24px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  /* Config info table */
  .hexclave-devtool .sdt-config-table {
    width: 100%;
    border-collapse: collapse;
  }

  .hexclave-devtool .sdt-config-table td {
    padding: 8px 10px;
    border-bottom: 1px solid var(--sdt-border-subtle);
    font-size: 12px;
  }

  .hexclave-devtool .sdt-config-table td:first-child {
    color: var(--sdt-text-secondary);
    width: 160px;
    font-weight: 500;
  }

  .hexclave-devtool .sdt-config-table td:last-child {
    color: var(--sdt-text);
    font-family: var(--sdt-font-mono);
    word-break: break-all;
  }

  .hexclave-devtool .sdt-config-table td .sdt-config-link {
    font-family: inherit;
    color: var(--sdt-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .hexclave-devtool .sdt-config-table td .sdt-config-link:hover {
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-config-muted {
    color: var(--sdt-text-tertiary);
    font-style: italic;
  }

  /* Resize handle */
  .hexclave-devtool .sdt-resize-handle {
    position: absolute;
    top: 0;
    left: -4px;
    width: 8px;
    height: 100%;
    cursor: ew-resize;
    z-index: 10;
  }

  .hexclave-devtool .sdt-resize-handle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 3px;
    width: 2px;
    height: 32px;
    transform: translateY(-50%);
    background: transparent;
    border-radius: 1px;
    transition: background 0.15s ease;
  }

  .hexclave-devtool .sdt-resize-handle:hover::after,
  .hexclave-devtool .sdt-resize-handle:active::after {
    background: var(--sdt-accent);
  }

  .hexclave-devtool .sdt-resize-handle-top {
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 8px;
    cursor: ns-resize;
    z-index: 10;
  }

  .hexclave-devtool .sdt-resize-handle-top::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 3px;
    height: 2px;
    width: 32px;
    transform: translateX(-50%);
    background: transparent;
    border-radius: 1px;
    transition: background 0.15s ease;
  }

  .hexclave-devtool .sdt-resize-handle-top:hover::after,
  .hexclave-devtool .sdt-resize-handle-top:active::after {
    background: var(--sdt-accent);
  }

  .hexclave-devtool .sdt-resize-handle-corner {
    position: absolute;
    top: -6px;
    left: -6px;
    width: 14px;
    height: 14px;
    cursor: nwse-resize;
    z-index: 11;
  }

  .hexclave-devtool .sdt-resize-handle-corner::after {
    content: '';
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 5px;
    height: 5px;
    background: transparent;
    border-radius: 50%;
    transition: background 0.15s ease;
  }

  .hexclave-devtool .sdt-resize-handle-corner:hover::after,
  .hexclave-devtool .sdt-resize-handle-corner:active::after {
    background: var(--sdt-accent);
  }

  .hexclave-devtool .sdt-no-components {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--sdt-text-tertiary);
    font-size: 13px;
    text-align: center;
    padding: 20px;
  }

  /* Support tab */
  .hexclave-devtool .sdt-support-tab {
    display: flex;
    flex-direction: column;
    height: calc(100% + 32px);
    margin: -16px;
  }

  .hexclave-devtool .sdt-support-feedback-pane {
    padding: 20px;
    height: 100%;
    overflow-y: auto;
  }

  /* Form layout */
  .hexclave-devtool .sdt-support-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  /* Type cards */
  .hexclave-devtool .sdt-support-type-cards {
    display: flex;
    gap: 8px;
  }

  .hexclave-devtool .sdt-support-type-card {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 10px;
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 11px;
    font-weight: 500;
    color: var(--sdt-text-secondary);
    transition: all 0.15s ease;
  }

  .hexclave-devtool .sdt-support-type-card svg {
    flex-shrink: 0;
    opacity: 0.6;
    transition: opacity 0.15s ease;
  }

  .hexclave-devtool .sdt-support-type-card:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-support-type-card:hover svg {
    opacity: 1;
  }

  .hexclave-devtool .sdt-support-type-card-active {
    border-color: var(--sdt-accent);
    background: var(--sdt-accent-muted);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-support-type-card-active svg {
    opacity: 1;
    color: var(--sdt-accent);
  }

  /* Field group */
  .hexclave-devtool .sdt-support-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .hexclave-devtool .sdt-support-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--sdt-text-secondary);
    letter-spacing: 0.3px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .hexclave-devtool .sdt-support-optional {
    font-size: 10px;
    font-weight: 400;
    color: var(--sdt-text-tertiary);
    text-transform: none;
    letter-spacing: 0;
  }

  /* Inputs */
  .hexclave-devtool .sdt-support-input,
  .hexclave-devtool .sdt-support-textarea {
    width: 100%;
    padding: 9px 12px;
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    color: var(--sdt-text);
    font-family: var(--sdt-font);
    font-size: 13px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .hexclave-devtool .sdt-support-input::placeholder,
  .hexclave-devtool .sdt-support-textarea::placeholder {
    color: var(--sdt-text-tertiary);
  }

  .hexclave-devtool .sdt-support-input:focus,
  .hexclave-devtool .sdt-support-textarea:focus {
    border-color: var(--sdt-accent);
    box-shadow: 0 0 0 3px var(--sdt-accent-muted);
  }

  .hexclave-devtool .sdt-support-textarea {
    resize: vertical;
    min-height: 100px;
    line-height: 1.6;
  }

  /* Submit button */
  .hexclave-devtool .sdt-support-submit {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 20px;
    background: var(--sdt-accent);
    color: white;
    border: none;
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.2px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(99, 102, 241, 0.3);
  }

  .hexclave-devtool .sdt-support-submit:hover:not(:disabled) {
    background: var(--sdt-accent-hover);
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
    transform: translateY(-1px);
  }

  .hexclave-devtool .sdt-support-submit:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(99, 102, 241, 0.2);
  }

  .hexclave-devtool .sdt-support-submit:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }

  .hexclave-devtool .sdt-support-submit svg {
    flex-shrink: 0;
  }

  @keyframes sdt-spin {
    to { transform: rotate(360deg); }
  }

  .hexclave-devtool .sdt-support-spinner {
    animation: sdt-spin 1s linear infinite;
  }

  /* Status screens (success / error) */
  .hexclave-devtool .sdt-support-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 20px;
    border-radius: var(--sdt-radius-lg);
    text-align: center;
    gap: 6px;
  }

  .hexclave-devtool .sdt-support-status-success {
    background: linear-gradient(180deg, var(--sdt-success-muted), transparent 80%);
    border: 1px solid rgba(34, 197, 94, 0.15);
  }

  .hexclave-devtool .sdt-support-status-error {
    background: linear-gradient(180deg, var(--sdt-error-muted), transparent 80%);
    border: 1px solid rgba(239, 68, 68, 0.15);
  }

  .hexclave-devtool .sdt-support-status-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
  }

  .hexclave-devtool .sdt-support-status-success .sdt-support-status-icon {
    background: rgba(34, 197, 94, 0.15);
    color: var(--sdt-success);
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);
  }

  .hexclave-devtool .sdt-support-status-error .sdt-support-status-icon {
    background: rgba(239, 68, 68, 0.15);
    color: var(--sdt-error);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.1);
  }

  .hexclave-devtool .sdt-support-status-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-support-status-msg {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.5;
    max-width: 260px;
  }

  /* Support channels */
  .hexclave-devtool .sdt-support-channels {
    display: flex;
    gap: 8px;
  }

  .hexclave-devtool .sdt-support-channel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 10px;
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    color: var(--sdt-text-secondary);
    text-decoration: none;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.15s ease;
  }

  .hexclave-devtool .sdt-support-channel:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-support-channel svg {
    flex-shrink: 0;
    opacity: 0.6;
    transition: opacity 0.15s ease;
  }

  .hexclave-devtool .sdt-support-channel:hover svg {
    opacity: 1;
  }

  /* Light theme + data-stack-theme overrides come from the shared in-page-ui
     base styles (in-page-ui/base-styles.ts). */

  /* Export dialog — positioned inside the dev tool panel */
  .hexclave-devtool .sdt-share-overlay {
    position: absolute;
    inset: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: sdt-tab-fade-in 0.15s ease-out;
    border-radius: var(--sdt-radius-lg);
  }

  .hexclave-devtool .sdt-share-dialog {
    width: 380px;
    max-width: calc(100% - 32px);
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-lg);
    box-shadow: var(--sdt-shadow);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .hexclave-devtool .sdt-share-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hexclave-devtool .sdt-share-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-share-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    color: var(--sdt-text-secondary);
    font-size: 13px;
  }

  .hexclave-devtool .sdt-share-url-row {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .hexclave-devtool .sdt-share-url-row .sdt-support-input {
    flex: 1;
    font-family: var(--sdt-font-mono);
    font-size: 12px;
  }

  .hexclave-devtool .sdt-share-copy-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    color: var(--sdt-text-secondary);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .hexclave-devtool .sdt-share-copy-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-share-actions {
    display: flex;
    gap: 8px;
  }

  .hexclave-devtool .sdt-share-action-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 12px;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    color: var(--sdt-text-secondary);
    text-decoration: none;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .hexclave-devtool .sdt-share-action-btn:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-share-action-btn svg {
    flex-shrink: 0;
    opacity: 0.7;
  }

  .hexclave-devtool .sdt-share-action-btn:hover svg {
    opacity: 1;
  }

  .hexclave-devtool .sdt-share-action-btn-accent {
    background: var(--sdt-accent);
    border-color: var(--sdt-accent);
    color: white;
  }

  .hexclave-devtool .sdt-share-action-btn-accent:hover {
    background: var(--sdt-accent-hover);
    border-color: var(--sdt-accent-hover);
    color: white;
  }

  .hexclave-devtool .sdt-share-action-btn-accent svg {
    opacity: 1;
  }

  /* --- AI Chat tab --- */

  .hexclave-devtool .sdt-ai-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  .hexclave-devtool .sdt-ai-messages {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    scroll-behavior: smooth;
  }

  .hexclave-devtool .sdt-ai-message-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* --- Empty state --- */

  .hexclave-devtool .sdt-ai-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 12px;
    padding: 24px;
    text-align: center;
  }

  .hexclave-devtool .sdt-ai-empty-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--sdt-accent-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sdt-accent);
    margin-bottom: 4px;
  }

  .hexclave-devtool .sdt-ai-empty-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-ai-empty-desc {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    max-width: 320px;
    line-height: 1.5;
  }

  .hexclave-devtool .sdt-ai-suggestions {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 8px;
    width: 100%;
    max-width: 340px;
  }

  .hexclave-devtool .sdt-ai-suggestion {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    color: var(--sdt-text-secondary);
    font-size: 12px;
    cursor: pointer;
    text-align: left;
    transition: all 0.15s ease;
    font-family: var(--sdt-font);
    line-height: 1.4;
  }

  .hexclave-devtool .sdt-ai-suggestion:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-ai-suggestion-icon {
    font-size: 14px;
    flex-shrink: 0;
  }

  /* --- Messages --- */

  .hexclave-devtool .sdt-ai-msg {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .hexclave-devtool .sdt-ai-msg-user {
    justify-content: flex-end;
  }

  .hexclave-devtool .sdt-ai-msg-assistant {
    justify-content: flex-start;
  }

  .hexclave-devtool .sdt-ai-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .hexclave-devtool .sdt-ai-avatar-user {
    background: var(--sdt-info-muted);
    color: var(--sdt-info);
    order: 2;
  }

  .hexclave-devtool .sdt-ai-avatar-assistant {
    background: var(--sdt-accent-muted);
    color: var(--sdt-accent);
  }

  .hexclave-devtool .sdt-ai-bubble {
    min-width: 0;
    max-width: 85%;
    border-radius: var(--sdt-radius-lg);
    padding: 10px 14px;
  }

  .hexclave-devtool .sdt-ai-bubble-user {
    background: var(--sdt-info-muted);
    border: 1px solid rgba(59, 130, 246, 0.1);
  }

  .hexclave-devtool .sdt-ai-bubble-user p {
    font-size: 13px;
    line-height: 1.55;
    color: var(--sdt-text);
    margin: 0;
    word-break: break-word;
  }

  .hexclave-devtool .sdt-ai-bubble-assistant {
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
  }

  /* --- Thinking dots --- */

  .hexclave-devtool .sdt-ai-thinking {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 0;
  }

  .hexclave-devtool .sdt-ai-thinking-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--sdt-accent);
    opacity: 0.5;
    animation: sdt-ai-pulse 1.2s ease-in-out infinite;
  }

  .hexclave-devtool .sdt-ai-thinking-dot:nth-child(2) { animation-delay: 0.15s; }
  .hexclave-devtool .sdt-ai-thinking-dot:nth-child(3) { animation-delay: 0.3s; }

  @keyframes sdt-ai-pulse {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
    40% { opacity: 1; transform: scale(1.1); }
  }

  .hexclave-devtool .sdt-ai-streaming-indicator {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 6px;
  }

  /* --- Markdown content inside assistant bubble --- */

  .hexclave-devtool .sdt-ai-paragraph {
    font-size: 13px;
    line-height: 1.6;
    color: var(--sdt-text);
    margin: 0 0 10px;
    word-break: break-word;
  }

  .hexclave-devtool .sdt-ai-paragraph:last-child { margin-bottom: 0; }

  .hexclave-devtool .sdt-ai-bold {
    font-weight: 600;
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-ai-inline-code {
    display: inline;
    padding: 1.5px 5px;
    border-radius: 4px;
    font-family: var(--sdt-font-mono);
    font-size: 11.5px;
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
    border: 1px solid var(--sdt-border-subtle);
  }

  .hexclave-devtool .sdt-ai-link {
    color: var(--sdt-info);
    text-decoration: none;
    transition: color 0.1s;
  }

  .hexclave-devtool .sdt-ai-link:hover {
    color: var(--sdt-accent-hover);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .hexclave-devtool .sdt-ai-heading {
    font-weight: 600;
    color: var(--sdt-text);
    margin: 12px 0 6px;
    line-height: 1.35;
  }

  .hexclave-devtool .sdt-ai-heading:first-child { margin-top: 0; }

  .hexclave-devtool .sdt-ai-bubble-assistant h1.sdt-ai-heading { font-size: 15px; }
  .hexclave-devtool .sdt-ai-bubble-assistant h2.sdt-ai-heading { font-size: 13.5px; }
  .hexclave-devtool .sdt-ai-bubble-assistant h3.sdt-ai-heading { font-size: 13px; }

  .hexclave-devtool .sdt-ai-list {
    font-size: 13px;
    line-height: 1.6;
    color: var(--sdt-text);
    margin: 0 0 10px;
    padding-left: 20px;
  }

  .hexclave-devtool .sdt-ai-list:last-child { margin-bottom: 0; }

  .hexclave-devtool .sdt-ai-list li {
    margin-bottom: 3px;
    padding-left: 2px;
  }

  .hexclave-devtool .sdt-ai-list li::marker {
    color: var(--sdt-text-tertiary);
  }

  .hexclave-devtool .sdt-ai-list-ordered {
    list-style-type: decimal;
  }

  .hexclave-devtool .sdt-ai-tools {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 6px 0;
  }

  .hexclave-devtool .sdt-ai-part-text {
    margin: 6px 0;
  }

  .hexclave-devtool .sdt-ai-tool-card {
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-subtle);
    overflow: hidden;
  }

  .hexclave-devtool .sdt-ai-tool-header {
    width: 100%;
    border: none;
    background: transparent;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    cursor: pointer;
    text-align: left;
    font-family: var(--sdt-font);
  }

  .hexclave-devtool .sdt-ai-tool-header:hover {
    background: var(--sdt-bg-hover);
  }

  .hexclave-devtool .sdt-ai-tool-name {
    font-size: 12px;
    font-weight: 600;
    color: var(--sdt-text);
    flex: 1;
  }

  .hexclave-devtool .sdt-ai-tool-status {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
  }

  .hexclave-devtool .sdt-ai-tool-status-running { color: var(--sdt-warning); }
  .hexclave-devtool .sdt-ai-tool-status-success { color: var(--sdt-success); }
  .hexclave-devtool .sdt-ai-tool-status-error { color: var(--sdt-error); }

  .hexclave-devtool .sdt-ai-tool-chevron {
    color: var(--sdt-text-tertiary);
    font-size: 10px;
    transition: transform 0.15s ease;
  }

  .hexclave-devtool .sdt-ai-tool-chevron-open {
    transform: rotate(180deg);
  }

  .hexclave-devtool .sdt-ai-tool-body {
    border-top: 1px solid var(--sdt-border-subtle);
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .hexclave-devtool .sdt-ai-tool-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: var(--sdt-text-tertiary);
    font-weight: 600;
  }

  .hexclave-devtool .sdt-ai-tool-pre {
    margin: 0;
    padding: 8px;
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    background: var(--sdt-bg);
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    line-height: 1.5;
    color: var(--sdt-text-secondary);
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .hexclave-devtool .sdt-ai-tool-running {
    font-size: 11px;
    color: var(--sdt-text-secondary);
  }

  .hexclave-devtool .sdt-ai-blockquote {
    border-left: 3px solid var(--sdt-accent);
    padding-left: 12px;
    margin: 8px 0;
    font-size: 13px;
    color: var(--sdt-text-secondary);
    font-style: italic;
  }

  .hexclave-devtool .sdt-ai-hr {
    border: none;
    border-top: 1px solid var(--sdt-border-subtle);
    margin: 12px 0;
  }

  /* --- Code blocks --- */

  .hexclave-devtool .sdt-ai-code-block {
    border-radius: var(--sdt-radius);
    overflow: hidden;
    margin: 8px 0;
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-subtle);
  }

  .hexclave-devtool .sdt-ai-code-block:last-child { margin-bottom: 0; }

  .hexclave-devtool .sdt-ai-code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg);
  }

  .hexclave-devtool .sdt-ai-code-lang {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--sdt-text-tertiary);
    font-family: var(--sdt-font);
  }

  .hexclave-devtool .sdt-ai-copy-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: var(--sdt-radius-sm);
    border: none;
    background: transparent;
    color: var(--sdt-text-tertiary);
    cursor: pointer;
    font-size: 12px;
    font-family: var(--sdt-font);
    transition: all 0.15s ease;
  }

  .hexclave-devtool .sdt-ai-copy-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-ai-copy-btn-copied {
    color: var(--sdt-success) !important;
  }

  .hexclave-devtool .sdt-ai-code-pre {
    margin: 0;
    padding: 10px 12px;
    overflow-x: auto;
    font-family: var(--sdt-font-mono);
    font-size: 11.5px;
    line-height: 1.6;
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-ai-code-pre code {
    font-family: inherit;
    background: none;
    border: none;
    padding: 0;
  }

  /* --- Error --- */

  .hexclave-devtool .sdt-ai-error {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 10px 14px;
    margin: 8px 16px;
    border-radius: var(--sdt-radius);
    background: var(--sdt-error-muted);
    border: 1px solid rgba(239, 68, 68, 0.2);
    font-size: 12px;
    color: var(--sdt-error);
    line-height: 1.4;
  }

  /* --- Input area --- */

  .hexclave-devtool .sdt-ai-input-area {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg);
  }

  .hexclave-devtool .sdt-ai-new-chat {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: var(--sdt-radius);
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-elevated);
    color: var(--sdt-text-secondary);
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.15s ease;
    font-family: var(--sdt-font);
  }

  .hexclave-devtool .sdt-ai-new-chat:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .hexclave-devtool .sdt-ai-input-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    padding: 0 4px 0 12px;
    transition: border-color 0.15s ease;
  }

  .hexclave-devtool .sdt-ai-input-wrapper:focus-within {
    border-color: var(--sdt-accent);
    box-shadow: 0 0 0 2px var(--sdt-accent-muted);
  }

  .hexclave-devtool .sdt-ai-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--sdt-text);
    font-size: 13px;
    font-family: var(--sdt-font);
    padding: 8px 0;
    min-width: 0;
  }

  .hexclave-devtool .sdt-ai-input::placeholder {
    color: var(--sdt-text-tertiary);
  }

  .hexclave-devtool .sdt-ai-input:disabled {
    opacity: 0.5;
  }

  .hexclave-devtool .sdt-ai-send-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: var(--sdt-text-tertiary);
    cursor: not-allowed;
    flex-shrink: 0;
    transition: all 0.15s ease;
    font-family: var(--sdt-font);
  }

  .hexclave-devtool .sdt-ai-send-btn-active {
    background: var(--sdt-accent);
    color: white;
    cursor: pointer;
  }

  .hexclave-devtool .sdt-ai-send-btn-active:hover {
    background: var(--sdt-accent-hover);
  }

  .hexclave-devtool .sdt-ai-stop-btn,
  .hexclave-devtool .sdt-ai-stop-btn:hover {
    background: var(--sdt-error);
    color: white;
  }

  /* Accessible focus indicator for keyboard navigation */
  .hexclave-devtool .sdt-tab:focus-visible {
    outline: 2px solid var(--sdt-accent);
    outline-offset: -2px;
    border-radius: var(--sdt-radius);
  }

  /* Reduced motion: disable animations for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    .hexclave-devtool .sdt-panel-inner,
    .hexclave-devtool .sdt-panel-exiting,
    .hexclave-devtool .sdt-tab-content,
    .hexclave-devtool .sdt-ov-pulse-dot,
    .hexclave-devtool .sdt-ov-skeleton-pill,
    .hexclave-devtool .sdt-support-spinner,
    .hexclave-devtool .sdt-ai-thinking-dot {
      animation: none !important;
    }

    .hexclave-devtool .sdt-tab-indicator,
    .hexclave-devtool .sdt-tab {
      transition: none !important;
    }
  }

`;function k(a,b,c){let d=Math.max(0,c.width-b.width),e=Math.max(0,c.height-b.height);return{left:Math.max(0,Math.min(a.left,d)),top:Math.max(0,Math.min(a.top,e))}}function l(a,b,c){let d,e,f,g,h=(d=Math.max(0,c.width-b.width),e=Math.max(0,c.height-b.height),f=Math.min(16,d),{minLeft:f,maxLeft:Math.max(f,d-16),minTop:g=Math.min(16,e),maxTop:Math.max(g,e-16)});return k((()=>{switch(a.corner){case"top-left":return{left:h.minLeft,top:h.minTop};case"top-right":return{left:h.maxLeft,top:h.minTop};case"bottom-left":return{left:h.minLeft,top:h.maxTop};case"bottom-right":return{left:h.maxLeft,top:h.maxTop}}})(),b,c)}function m(a,b,c){let d=a.left+b.width/2;return{corner:a.top+b.height/2<c.height/2?d<c.width/2?"top-left":"top-right":d<c.width/2?"bottom-left":"bottom-right"}}let n="__hexclave-dev-tool-state",o="hexclave-devtool-trigger-position",p=b.DEV_TOOL_ROOT_ID,q="__hexclave-dev-tool-instance",r="http://localhost:26700",s="https://app.hexclave.com",t=[{id:"overview",label:"Overview",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'},{id:"customize",label:"Customize",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>'},{id:"ai",label:"AI",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'},{id:"console",label:"Console",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>'},{id:"dashboard",label:"Dashboard",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'},{id:"support",label:"Support",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'}],u={isOpen:!1,activeTab:"overview",panelWidth:800,panelHeight:520},v=0;function w(){return`sdt-${++v}-${Date.now()}`}function x(a){return(0,i.getBaseUrl)(a[e.hexclaveAppInternalsSymbol].getConstructorOptions().baseUrl)}async function y(a){if(!((0,f.isLocalhost)(window.location.href)&&"http:"===window.location.protocol))return!1;let b=`${r}/api/development-environment/project-availability?project_id=${encodeURIComponent(a.projectId)}`,c=new AbortController,d=setTimeout(()=>c.abort(),3e3);try{var e;let a=await fetch(b,{method:"GET",signal:c.signal});if(!a.ok)return!1;return e=await a.json(),"object"==typeof e&&null!==e&&"project_available"in e&&!0===e.project_available}catch{return!1}finally{clearTimeout(d)}}function z(a){return new Date(a).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}function A(a,b){let c,e=/(\[[^\]]+\]\([^)]+\)|`[^`\n]+`|\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*|_[^_\n]+_)/g,f=0;for(;null!==(c=e.exec(b));){c.index>f&&a.appendChild(document.createTextNode(b.slice(f,c.index)));let g=c[0];if(g.startsWith("`"))a.appendChild((0,d.h)("code",{className:"sdt-ai-inline-code"},g.slice(1,-1)));else if(g.startsWith("**")||g.startsWith("__")){let b=(0,d.h)("strong",{className:"sdt-ai-bold"});A(b,g.slice(2,-2)),a.appendChild(b)}else if(g.startsWith("*")||g.startsWith("_")){let b=(0,d.h)("em");A(b,g.slice(1,-1)),a.appendChild(b)}else{let b=g.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(b){let[,c,e]=b,f=e.trim();if(/^(https?:\/\/|mailto:)/i.test(f)){let b=(0,d.h)("a",{className:"sdt-ai-link",href:f,target:"_blank",rel:"noopener noreferrer"});A(b,c),a.appendChild(b)}else a.appendChild(document.createTextNode(g))}else a.appendChild(document.createTextNode(g))}f=e.lastIndex}f<b.length&&a.appendChild(document.createTextNode(b.slice(f)))}a.s(["createDevTool",0,function(a){let b,i,v;if("u"<typeof document||"function"!=typeof document.createElement)return()=>{};let B=Reflect.get(document,"body");if(!(0,d.hasAppendChild)(B))return()=>{};(0,d.getGlobalUiInstance)(q)?.cleanup();let C=document.getElementById(p);for(;null!==C;)C.remove(),C=document.getElementById(p);let D=document.createElement("div");D.id=p,B.appendChild(D);let E=(0,d.h)("div",{className:"hexclave-devtool"});D.appendChild(E);let F=document.createElement("style");F.textContent=j,E.appendChild(F);let G=(b=function(){try{let a=localStorage.getItem(n);if(a){let b=JSON.parse(a);return"components"===b.activeTab&&(b.activeTab="customize"),"docs"===b.activeTab&&(b.activeTab="overview"),{...u,...b,isOpen:!1}}}catch{}return{...u}}(),i=new Set,{get:()=>b,update(a){var c=b={...b,...a};try{localStorage.setItem(n,JSON.stringify({...c,isOpen:!1}))}catch{}i.forEach(a=>a())},subscribe:a=>(i.add(a),()=>{i.delete(a)})}),H=((v=globalThis).__STACK_DEV_TOOL_LOG_STORE__||(v.__STACK_DEV_TOOL_LOG_STORE__={apiLogs:[],eventLogs:[],listeners:new Set,addApiLog(a){this.apiLogs=[a,...this.apiLogs].slice(0,500),this.listeners.forEach(a=>a())},addEventLog(a){this.eventLogs=[a,...this.eventLogs].slice(0,500),this.listeners.forEach(a=>a())},clear(){this.apiLogs=[],this.eventLogs=[],this.listeners.forEach(a=>a())},subscribe(a){return this.listeners.add(a),()=>{this.listeners.delete(a)}}}),v.__STACK_DEV_TOOL_LOG_STORE__),I=null;function J(){L()}function K(){I||(I=function(a,b,h,i){let j=(0,d.h)("div",{className:"sdt-panel"}),k=null;function l(a,c){if(c?.animate===!0&&(j.classList.add("sdt-panel-geometry-animated"),null!==k&&clearTimeout(k),k=setTimeout(()=>{j.classList.remove("sdt-panel-geometry-animated"),k=null},220)),"dashboard"===a){j.classList.add("sdt-panel-fullscreen"),j.style.width="",j.style.height="";return}j.classList.remove("sdt-panel-fullscreen"),j.style.width=b.get().panelWidth+"px",j.style.height=b.get().panelHeight+"px"}let m=b.get().activeTab,n=t.some(a=>a.id===m)?m:u.activeTab;l(n);let o=(0,d.h)("div",{className:"sdt-panel-inner"}),p=(0,d.h)("button",{className:"sdt-close-btn","aria-label":"Close"});(0,d.setHtml)(p,'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>'),p.addEventListener("click",i);let q=(0,d.h)("a",{href:"https://docs.hexclave.com",target:"_blank",rel:"noopener noreferrer",className:"sdt-docs-link"});q.appendChild(document.createTextNode("Docs"));let v=(0,d.h)("span",{className:"sdt-docs-link-icon","aria-hidden":"true"});(0,d.setHtml)(v,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>'),q.appendChild(v);let w=function(a,b,c,e){let f=e?.variant??"bar",g="pills"===f?"sdt-console-tab":"sdt-tab",h=(0,d.h)("div",{className:"pills"===f?"sdt-console-tabs":"sdt-tabbar"}),i=(0,d.h)("div",{className:"pills"===f?"sdt-console-tab-indicator":"sdt-tab-indicator"});i.style.opacity="0",h.appendChild(i);let j=b,k=!0,l=a.map(a=>{let e=(0,d.h)("button",{className:g,"data-tab-id":a.id,"data-active":String(a.id===b)});if(a.icon){let b=(0,d.h)("span",{className:"sdt-tab-icon"});(0,d.setHtml)(b,a.icon),e.appendChild(b)}return e.appendChild(document.createTextNode(a.label)),e.addEventListener("click",()=>c(a.id)),h.appendChild(e),e});function m(){let a=h.querySelector(`[data-tab-id="${j}"]`);a&&(i.style.transform=`translateX(${a.offsetLeft}px)`,i.style.width=a.offsetWidth+"px",i.style.height=a.offsetHeight+"px",i.style.opacity="1",i.style.transition=k?"none":"",k=!1)}return"bar"===f&&h.appendChild((0,d.h)("div",{className:"sdt-tabbar-spacer"})),e?.trailing&&h.appendChild(e.trailing),new ResizeObserver(m).observe(h),requestAnimationFrame(m),{el:h,setActive:function(a){j=a,l.forEach(b=>{let c=b.getAttribute("data-tab-id");b.setAttribute("data-active",String(c===a))}),m()}}}(t,n,a=>{b.update({activeTab:a}),l(a,{animate:!0}),G(a)},{trailing:(0,d.h)("div",{className:"sdt-tabbar-actions"},q,p)});o.appendChild(w.el);let B=(0,d.h)("div",{className:"sdt-content"}),C=(0,d.h)("div",{className:"sdt-tab-layers"});B.appendChild(C),o.appendChild(B);let D=new Map,E=[];function F(a,b){"element"in b?(a.appendChild(b.element),b.cleanup&&E.push(b.cleanup)):a.appendChild(b)}function G(b){let i=function(b){if(D.has(b))return D.get(b);let i=(0,d.h)("div",{className:"sdt-tab-pane"});switch("dashboard"===b&&i.classList.add("sdt-tab-pane-iframe"),b){case"overview":F(i,function(a){let b=(0,d.h)("div",{className:"sdt-ov"}),g=null!==a[e.hexclaveAppInternalsSymbol].getConstructorOptions().tokenStore,h=(0,d.h)("div",{className:"sdt-ov-card sdt-ov-card-hero"});h.appendChild((0,d.h)("div",{className:"sdt-ov-label"},"Identity"));let i=(0,d.h)("div",{className:"sdt-ov-user-row"}),j=(0,d.h)("div",{className:"sdt-ov-avatar"},"?"),k=(0,d.h)("div",{className:"sdt-ov-user-meta"}),l=(0,d.h)("div",{className:"sdt-ov-user-name"},"Loading…"),m=(0,d.h)("div",{className:"sdt-ov-user-email"},""),n=(0,d.h)("div",{className:"sdt-ov-auth-indicator",style:{display:"none"}},"Authenticated");k.append(l,m,n),i.append(j,k),h.appendChild(i);let o=(0,d.h)("div",{className:"sdt-ov-actions"}),p=(0,d.h)("div",{className:"sdt-ov-toast",style:{display:"none"}});function q(a){return!!(a instanceof DOMException&&"AbortError"===a.name||a instanceof TypeError)||a instanceof Error&&(a.message.includes("Failed to fetch")||a.message.includes("NetworkError")||a.message.includes("Load failed")||a.message.includes("network connection"))}function r(a,b){p.textContent=a,p.className=`sdt-ov-toast sdt-ov-toast-${b}`,p.style.display="",setTimeout(()=>{p.style.display="none"},4e3)}let s=null,t=!1;function u(){if(o.innerHTML="",!g){l.textContent="Current user unavailable",m.textContent="This app was initialized without a token store",o.appendChild((0,d.h)("button",{className:"sdt-ov-btn sdt-ov-btn-wide",disabled:"true"},"Session actions unavailable"));return}if(s){let a=(0,d.h)("button",{className:"sdt-ov-btn sdt-ov-btn-danger"},"Sign Out");a.disabled=t,a.addEventListener("click",()=>{(0,c.runAsynchronously)(async()=>{t=!0,u();try{await s.signOut(),r("Signed out","success")}catch(a){r(a.message||"Sign out failed","error")}t=!1,await E()})});let b=(0,d.h)("button",{className:"sdt-ov-btn sdt-ov-btn-primary"},"Random User");b.disabled=t,b.addEventListener("click",()=>{(0,c.runAsynchronously)(v())}),o.append(a,b)}else{let a=(0,d.h)("button",{className:"sdt-ov-btn sdt-ov-btn-primary sdt-ov-btn-wide"},t?"Working…":"Quick Sign Up");a.disabled=t,a.addEventListener("click",()=>{(0,c.runAsynchronously)(v())}),o.appendChild(a)}}async function v(){if(!(0,f.isLocalhost)(window.location.href))return void r("Quick sign-in is only available on localhost","error");t=!0,u();let b=function(){let a="";for(let b=0;b<8;b++)a+="abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(36*Math.random())];return`dev-${a}@devtool-quick-sign-up.example.com`}();try{let c=await a.signUpWithCredential({email:b,password:b,noRedirect:!0});if("error"===c.status){r(`Sign up failed: ${c.error.message}`,"error"),t=!1,u();return}let d=await a.signInWithCredential({email:b,password:b,noRedirect:!0});"error"===d.status?r(`Sign in failed: ${d.error.message}`,"error"):r(`Signed in as ${b}`,"success")}catch(a){r(a.message||"Unknown error","error")}t=!1,await E()}h.append(o,p);let w=(0,d.h)("div",{className:"sdt-ov-card sdt-ov-card-auth"});w.appendChild((0,d.h)("div",{className:"sdt-ov-label"},"Auth Methods"));let x=(0,d.h)("div",{className:"sdt-ov-auth-grid"});for(let a=0;a<3;a++)x.appendChild((0,d.h)("div",{className:"sdt-ov-method sdt-ov-skeleton-pill"}));w.appendChild(x);let y=null;async function z(){try{let b=await a.getProject();x.innerHTML="";let c=b.config;for(let a of(y=c.credentialEnabled||c.magicLinkEnabled||c.passkeyEnabled||c.oauthProviders.length>0,[{label:"Password",enabled:c.credentialEnabled},{label:"Magic Link",enabled:c.magicLinkEnabled},{label:"Passkey",enabled:c.passkeyEnabled}])){let b=(0,d.h)("div",{className:`sdt-ov-method ${a.enabled?"sdt-ov-method-on":"sdt-ov-method-off"}`});b.appendChild((0,d.h)("span",{className:"sdt-ov-method-name"},a.label)),x.appendChild(b)}for(let a of c.oauthProviders){let b=(0,d.h)("div",{className:"sdt-ov-method sdt-ov-method-on sdt-ov-method-oauth"});b.appendChild((0,d.h)("span",{className:"sdt-ov-method-name"},a.id)),x.appendChild(b)}if(!c.signUpEnabled){let a=(0,d.h)("div",{className:"sdt-ov-method sdt-ov-method-warn"});a.appendChild((0,d.h)("span",{className:"sdt-ov-method-name"},"Sign-up off")),x.appendChild(a)}D()}catch(a){if(x.innerHTML='<div style="font-size:11px;color:var(--sdt-text-tertiary)">Could not load auth methods</div>',y=null,D(),!q(a))throw a}}(0,c.runAsynchronously)(z());let A=(0,d.h)("div",{className:"sdt-ov-card sdt-ov-card-checks"}),B=a.projectId,C=!1;function D(){A.innerHTML="";let a=[{ok:!!B&&"default"!==B,label:"Project configured",hint:null},{ok:!0===y,label:"Auth method active",hint:null===y?"Still checking project config":null},g?{ok:!!s,label:"Sign in a test user",hint:"Use “Quick Sign Up” above →"}:{ok:!0,label:"Current-user tools unavailable",hint:null}],c=a.filter(a=>a.ok).length;if(c===a.length){C&&A.parentElement&&(b.removeChild(A),C=!1);return}C||(b.appendChild(A),C=!0);let e=(0,d.h)("div",{className:"sdt-ov-checks-header"}),f=(0,d.h)("div",{className:"sdt-ov-label",style:{marginBottom:"0",color:"var(--sdt-warning)"}},"Setup"),h=(0,d.h)("span",{className:"sdt-ov-checks-badge sdt-ov-checks-badge-warn"},`${c}\u200a/\u200a${a.length}`);e.append(f,h),A.appendChild(e);let i=(0,d.h)("div",{className:"sdt-ov-checks-bar"}),j=(0,d.h)("div",{className:"sdt-ov-checks-bar-fill"});for(let b of(j.style.width=`${c/a.length*100}%`,i.appendChild(j),A.appendChild(i),a)){let a=(0,d.h)("div",{className:"sdt-ov-setup-row"});a.appendChild((0,d.h)("span",{className:`sdt-ov-setup-dot ${b.ok?"sdt-ov-setup-dot-ok":"sdt-ov-setup-dot-warn"}`})),a.appendChild((0,d.h)("span",{className:"sdt-ov-setup-label"},b.label)),!b.ok&&b.hint&&a.appendChild((0,d.h)("span",{className:"sdt-ov-setup-hint"},b.hint)),A.appendChild(a)}}async function E(){if(!g){j.className="sdt-ov-avatar",j.textContent="?",l.textContent="Current user unavailable",m.textContent="This app was initialized without a token store",n.style.display="none",s=null,u(),D();return}try{if(s=await a.getUser()){let a=(s.displayName||s.primaryEmail||"?").split(" ").map(a=>a[0]).join("").slice(0,2).toUpperCase();(j.className="sdt-ov-avatar sdt-ov-avatar-active",s.profileImageUrl)?j.innerHTML=`<img src="${s.profileImageUrl.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}" alt="" />`:j.textContent=a,l.textContent=s.displayName||"(No display name)",m.textContent=s.primaryEmail||"No email",n.style.display=""}else j.className="sdt-ov-avatar",j.textContent="?",l.textContent="No user signed in",m.textContent="Sign in to test auth flows",n.style.display="none"}catch(a){if(j.className="sdt-ov-avatar",j.textContent="?",l.textContent="Could not load user",m.textContent="Check your local Stack backend",n.style.display="none",s=null,!q(a))throw a}u(),D()}b.append(h,w),D(),(0,c.runAsynchronously)(E());let F=setInterval(()=>{(0,c.runAsynchronously)(E())},3e3);return{element:b,cleanup:()=>clearInterval(F)}}(a));break;case"customize":F(i,function(a){let b,f,h=(0,d.h)("div",{className:"sdt-pg-layout"}),i=x(a),j=a[e.hexclaveAppInternalsSymbol].getUrls(),k=a[e.hexclaveAppInternalsSymbol].getConstructorOptions().urls??{},l=[{key:"signIn",label:"Sign-in"},{key:"signUp",label:"Sign-up"},{key:"forgotPassword",label:"Forgot password"},{key:"passwordReset",label:"Password reset"},{key:"emailVerification",label:"Email verification"},{key:"accountSettings",label:"Account settings"},{key:"teamInvitation",label:"Team invitation"},{key:"cliAuthConfirm",label:"CLI auth confirmation"},{key:"mfa",label:"MFA"},{key:"onboarding",label:"Onboarding"},{key:"error",label:"Error"}],m=null,n=null;(0,c.runAsynchronously)(fetch(`${i}/api/latest/internal/component-versions`).then(a=>a.json()).then(a=>{m=new Map(Object.entries(a.versions??{})),q()}).catch(()=>{}));let o=(0,d.h)("div",{className:"sdt-pg-sidebar"}),p=(0,d.h)("div",{className:"sdt-pg-main"});function q(){o.innerHTML="";let b=l.map(a=>{let b,{classification:c,version:d}="string"==typeof(b=k[a.key]??k.default??{type:"handler-component"})?{classification:"custom",version:null}:"type"in b?"custom"===b.type?{classification:"custom",version:b.version??null}:{classification:b.type,version:null}:{classification:"handler-component",version:null},e="current",f=[];if("custom"===c&&null!=d&&m){let b=m.get(a.key);b&&d<b.version&&(e="outdated",f=Object.entries(b.changelogs).map(([a,b])=>({version:Number(a),changelog:b})).filter(a=>a.version>d).sort((a,b)=>a.version-b.version))}return{key:a.key,label:a.label,url:j[a.key]||"",classification:c,version:d,versionStatus:e,versionChangelogs:f}}),f=b.filter(a=>"outdated"===a.versionStatus).length,h=(0,d.h)("div",{className:"sdt-pg-sidebar-head"});h.appendChild((0,d.h)("span",{className:"sdt-pg-sidebar-title"},"Pages")),h.appendChild((0,d.h)("span",{className:"sdt-pg-sidebar-count"},String(b.length))),f>0&&h.appendChild((0,d.h)("span",{className:"sdt-pg-sidebar-warn"},`${f} outdated`)),o.appendChild(h);let i=(0,d.h)("div",{className:"sdt-pg-list"});for(let f of b){let b="outdated"===f.versionStatus,h=(0,d.h)("div",{className:`sdt-pg-item ${b?"sdt-pg-item-warn":""}`,"data-selected":String(n===f.key)}),j=b?"sdt-pg-item-dot-warn":"custom"===f.classification?"sdt-pg-item-dot-custom":"sdt-pg-item-dot-handler";h.appendChild((0,d.h)("span",{className:`sdt-pg-item-dot ${j}`})),h.appendChild((0,d.h)("span",{className:"sdt-pg-item-label"},f.label)),b&&h.appendChild((0,d.h)("span",{className:"sdt-pg-badge sdt-pg-badge-outdated"},"Outdated")),h.addEventListener("click",()=>{n=f.key,q(),function(b){p.innerHTML="";let f=(0,d.h)("div",{className:"sdt-pg-detail"}),h=(0,d.h)("div",{className:"sdt-pg-header"}),i=(0,d.h)("div",{className:"sdt-pg-header-top"});i.appendChild((0,d.h)("h3",{className:"sdt-pg-title"},`${b.label} Page`)),"outdated"===b.versionStatus&&i.appendChild((0,d.h)("span",{className:"sdt-pg-badge sdt-pg-badge-outdated"},"Outdated")),h.appendChild(i);let j=`hexclaveApp.redirectTo${b.key.charAt(0).toUpperCase()}${b.key.slice(1)}()`,k=(0,d.h)("div",{className:"sdt-pg-code-inline"});k.appendChild((0,d.h)("code",{className:"sdt-pg-code"},j));let l=(0,d.h)("button",{className:"sdt-pg-copy-btn sdt-pg-open-btn"});(0,d.setHtml)(l,'Open <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>'),l.addEventListener("click",()=>{let d=window.open("about:blank","_blank");null!=d&&(d.opener=null),(0,c.runAsynchronouslyWithAlert)(async()=>{let c=new URL(await a[e.hexclaveAppInternalsSymbol].getRedirectToHandlerUrl(b.key),window.location.origin);null!=d?d.location.replace(c.toString()):window.open(c.toString(),"_blank","noopener,noreferrer")})}),k.appendChild(l),h.appendChild(k),f.appendChild(h);let m=(0,g.getPagePrompt)(b.key,b.version??void 0);if(m){let a="outdated"===b.versionStatus;if("handler-component"===b.classification||"hosted"===b.classification||a){let b;if(b=a&&m.upgradePrompt?m.upgradePrompt:m.fullPrompt?m.fullPrompt:""){let e=(0,d.h)("div",{className:"sdt-pg-section"});e.appendChild((0,d.h)("div",{className:"sdt-pg-section-label"},a?"Use this prompt to upgrade your component:":"Want to customize this page? Paste this prompt into your coding agent.")),e.appendChild((0,d.h)("pre",{className:"sdt-pg-pre"},b));let g=(0,d.h)("div",{className:"sdt-pg-section-footer"}),h=(0,d.h)("button",{className:"sdt-pg-copy-btn"},"Copy prompt");h.addEventListener("click",()=>{(0,c.runAsynchronously)(navigator.clipboard.writeText(b).then(()=>{h.textContent="✓ Copied",setTimeout(()=>{h.textContent="Copy prompt"},1500)}))}),g.appendChild(h),e.appendChild(g),f.appendChild(e)}}}p.appendChild(f)}(f)}),i.appendChild(h)}o.appendChild(i)}return q(),p.innerHTML="",b=(0,d.h)("div",{className:"sdt-pg-empty"}),f=(0,d.h)("div",{className:"sdt-pg-empty-icon"}),(0,d.setHtml)(f,'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'),b.appendChild(f),b.appendChild((0,d.h)("div",{className:"sdt-pg-empty-text"},"Select a page to inspect")),b.appendChild((0,d.h)("div",{className:"sdt-pg-empty-sub"},"View configuration, preview, and upgrade prompts")),p.appendChild(b),h.append(o,p),h}(a));break;case"ai":F(i,function(a){let b=(0,d.h)("div",{className:"sdt-ai-container"}),f=x(a),g=[],h=!1,i=null,j=(0,d.h)("div",{className:"sdt-ai-messages"}),k=(0,d.h)("div",{className:"sdt-ai-input-area"}),l=[{icon:"🔒",text:"How do I protect a Next.js route?"},{icon:"👥",text:"How do teams and permissions work?"},{icon:"🔗",text:"How do I add OAuth providers?"},{icon:"✉️",text:"How do I customize auth emails?"}];function m(){if(j.innerHTML="",0===g.length){let a=(0,d.h)("div",{className:"sdt-ai-empty"}),b=(0,d.h)("div",{className:"sdt-ai-empty-icon"});(0,d.setHtml)(b,'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'),a.appendChild(b),a.appendChild((0,d.h)("div",{className:"sdt-ai-empty-title"},"Ask AI")),a.appendChild((0,d.h)("div",{className:"sdt-ai-empty-desc"},"Get help with Hexclave integration, troubleshooting, and best practices."));let e=(0,d.h)("div",{className:"sdt-ai-suggestions"});for(let a of l){let b=(0,d.h)("button",{className:"sdt-ai-suggestion"});b.appendChild((0,d.h)("span",{className:"sdt-ai-suggestion-icon"},a.icon)),b.appendChild((0,d.h)("span",null,a.text)),b.addEventListener("click",()=>{(0,c.runAsynchronously)(t(a.text))}),e.appendChild(b)}a.appendChild(e),j.appendChild(a);return}let a=(0,d.h)("div",{className:"sdt-ai-message-list"});for(let b of g)if("user"===b.role){let c=(0,d.h)("div",{className:"sdt-ai-msg sdt-ai-msg-user"}),e=(0,d.h)("div",{className:"sdt-ai-bubble sdt-ai-bubble-user"});e.appendChild((0,d.h)("p",null,b.content)),c.appendChild(e);let f=(0,d.h)("div",{className:"sdt-ai-avatar sdt-ai-avatar-user"});(0,d.setHtml)(f,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'),c.appendChild(f),a.appendChild(c)}else{let e=(0,d.h)("div",{className:"sdt-ai-msg sdt-ai-msg-assistant"}),f=(0,d.h)("div",{className:"sdt-ai-avatar sdt-ai-avatar-assistant"});(0,d.setHtml)(f,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'),e.appendChild(f);let g=(0,d.h)("div",{className:"sdt-ai-bubble sdt-ai-bubble-assistant"});if(0===b.parts.length)g.innerHTML='<div class="sdt-ai-thinking"><span class="sdt-ai-thinking-dot"></span><span class="sdt-ai-thinking-dot"></span><span class="sdt-ai-thinking-dot"></span></div>';else for(let a of b.parts){if("text"===a.type){let b=(0,d.h)("div",{className:"sdt-ai-part-text"});(function(a,b){function e(b,c,e){let f=(0,d.h)(b,{className:c});A(f,e),a.appendChild(f)}let f=b.split("\n"),g=0;for(;g<f.length;){let b=f[g];if(b.startsWith("```")){let e=b.slice(3).trim(),h=[];for(g++;g<f.length&&!f[g].startsWith("```");)h.push(f[g]),g++;g++;let i=(0,d.h)("div",{className:"sdt-ai-code-block"}),j=(0,d.h)("div",{className:"sdt-ai-code-header"});j.appendChild((0,d.h)("span",{className:"sdt-ai-code-lang"},e||"CODE"));let k=(0,d.h)("button",{className:"sdt-ai-copy-btn"},"⎘"),l=h.join("\n");k.addEventListener("click",()=>{(0,c.runAsynchronously)(navigator.clipboard.writeText(l).then(()=>{k.textContent="✓",setTimeout(()=>{k.textContent="⎘"},1500)}))}),j.appendChild(k),i.appendChild(j);let m=(0,d.h)("pre",{className:"sdt-ai-code-pre"});m.appendChild((0,d.h)("code",null,l)),i.appendChild(m),a.appendChild(i);continue}let h=b.match(/^(#{1,3}) (.+)/);if(h){e(`h${h[1].length}`,"sdt-ai-heading",h[2]),g++;continue}if(/^[-*] /.test(b)){let b=(0,d.h)("ul",{className:"sdt-ai-list"});for(;g<f.length&&/^[-*] /.test(f[g]);){let a=(0,d.h)("li");A(a,f[g].replace(/^[-*] /,"")),b.appendChild(a),g++}a.appendChild(b);continue}if(/^\d+\. /.test(b)){let b=(0,d.h)("ol",{className:"sdt-ai-list sdt-ai-list-ordered"});for(;g<f.length&&/^\d+\. /.test(f[g]);){let a=(0,d.h)("li");A(a,f[g].replace(/^\d+\. /,"")),b.appendChild(a),g++}a.appendChild(b);continue}if(""===b.trim()){g++;continue}e("p","sdt-ai-paragraph",b),g++}})(b,a.content),g.appendChild(b);continue}let e=b.toolCallsById.get(a.toolCallId);if(null==e){let b=(0,d.h)("div",{className:"sdt-ai-tool-card"}),c=(0,d.h)("div",{className:"sdt-ai-tool-body"});c.appendChild((0,d.h)("div",{className:"sdt-ai-tool-label"},"Error"));let e=(0,d.h)("pre",{className:"sdt-ai-tool-pre"});e.appendChild((0,d.h)("code",null,`Missing tool call state for ${a.toolCallId}`)),c.appendChild(e),b.appendChild(c),g.appendChild(b);continue}let f=(0,d.h)("div",{className:"sdt-ai-tools"});f.appendChild(function(a){let b=(0,d.h)("div",{className:"sdt-ai-tool-card"}),c=(0,d.h)("button",{className:"sdt-ai-tool-header",type:"button"});if(c.appendChild((0,d.h)("span",{className:"sdt-ai-tool-name"},a.toolName)),c.appendChild((0,d.h)("span",{className:`sdt-ai-tool-status sdt-ai-tool-status-${a.state}`},a.state)),c.appendChild((0,d.h)("span",{className:`sdt-ai-tool-chevron${a.isExpanded?" sdt-ai-tool-chevron-open":""}`},"▾")),c.addEventListener("click",()=>{a.isExpanded=!a.isExpanded,m()}),b.appendChild(c),a.isExpanded){let c=(0,d.h)("div",{className:"sdt-ai-tool-body"});if(null!==a.argsText){c.appendChild((0,d.h)("div",{className:"sdt-ai-tool-label"},"Args"));let b=(0,d.h)("pre",{className:"sdt-ai-tool-pre"});b.appendChild((0,d.h)("code",null,a.argsText)),c.appendChild(b)}if(null!==a.resultText){c.appendChild((0,d.h)("div",{className:"sdt-ai-tool-label"},"error"===a.state?"Error":"Result"));let b=(0,d.h)("pre",{className:"sdt-ai-tool-pre"});b.appendChild((0,d.h)("code",null,a.resultText)),c.appendChild(b)}"running"===a.state&&c.appendChild((0,d.h)("div",{className:"sdt-ai-tool-running"},"Running...")),b.appendChild(c)}return b}(e)),g.appendChild(f)}e.appendChild(g),a.appendChild(e)}j.appendChild(a),j.scrollTop=j.scrollHeight}function n(a){return void 0===a||"function"==typeof a||"symbol"==typeof a?String(a):JSON.stringify(a,null,2)}function o(a){return a.length>0?a[a.length-1]:void 0}function p(a,b,c){let d=a[b];if("string"!=typeof d)throw Error(`SSE event '${String(a.type)}' missing string '${b}': ${c}`);return d}function q(){let a=o(g);if(a?.role!=="assistant")throw Error("Expected current message to be an assistant message");return a}function r(a,b){a.parts.some(a=>"tool"===a.type&&a.toolCallId===b)||a.parts.push({type:"tool",toolCallId:b})}function s(a,b){let c=q(),d=c.toolCallsById.get(a);if(null!=d)return"tool"===d.toolName&&"tool"!==b&&(d.toolName=b),r(c,a),d;let e={id:a,toolName:b,argsText:null,resultText:null,state:"running",errorText:null,isExpanded:!1};return c.toolCallsById.set(a,e),r(c,a),e}async function t(b){if(b.trim()&&!h){g.push({role:"user",content:b.trim()}),g.push({role:"assistant",parts:[],toolCallsById:new Map}),h=!0,m(),y();try{let b,c,d=new AbortController;i=d;let h=await fetch(`${f}/api/latest/ai/query/stream`,{method:"POST",headers:{"Content-Type":"application/json",...(b=a[e.hexclaveAppInternalsSymbol].getConstructorOptions(),c={"X-Hexclave-Access-Type":"client","X-Hexclave-Project-Id":a.projectId},"publishableClientKey"in b&&b.publishableClientKey&&(c["X-Hexclave-Publishable-Client-Key"]=b.publishableClientKey),c)},signal:d.signal,body:JSON.stringify({systemPrompt:"command-center-ask-ai",tools:["docs"],quality:"smart",speed:"slow",messages:g.slice(0,-1).map(a=>({role:a.role,content:[{type:"text",text:"user"===a.role?a.content:a.parts.filter(a=>"text"===a.type).map(a=>a.content).join("")}]}))})});if(!h.ok)throw Error(`AI request failed with status ${h.status}`);if(!h.body)throw Error("AI request returned no response body");let j=h.body.getReader(),k=new TextDecoder,l="";for(;;){let{done:a,value:b}=await j.read();if(a)break;let c=(l+=k.decode(b,{stream:!0})).split("\n");for(let a of(l=c.pop()||"",c)){let b=a.trim();if(""===b||b.startsWith(":"))continue;if(!b.startsWith("data: "))throw Error(`Unexpected SSE line: ${b}`);let c=b.slice(6);if("[DONE]"===c)continue;let d=function(a,b){if(!("object"==typeof a&&null!==a&&!Array.isArray(a)))throw Error(`SSE payload must be an object: ${b}`);return a}(JSON.parse(c),c),e=p(d,"type",c);switch(e){case"start":case"start-step":case"finish-step":case"finish":case"message-metadata":case"text-start":case"text-end":case"reasoning-start":case"reasoning-delta":case"reasoning-end":case"source-url":case"source-document":case"file":break;case"text-delta":!function(a){let b=q(),c=o(b.parts);if(c?.type==="text"){c.content+=a;return}b.parts.push({type:"text",content:a})}(p(d,"delta",c));break;case"tool-input-start":{let a=s(p(d,"toolCallId",c),p(d,"toolName",c));a.state="running",a.resultText=null,a.errorText=null,a.argsText="";break}case"tool-input-delta":{let a=p(d,"toolCallId",c),b=p(d,"inputTextDelta",c),e=s(a,"tool");e.argsText=(e.argsText??"")+b;break}case"tool-input-available":s(p(d,"toolCallId",c),p(d,"toolName",c)).argsText=n(d.input);break;case"tool-input-error":{let a=p(d,"toolCallId",c),b=p(d,"toolName",c),e=p(d,"errorText",c),f=s(a,b);f.state="error",f.errorText=e,f.resultText=e;break}case"tool-output-available":{let a=s(p(d,"toolCallId",c),"tool"),b=!0===d.preliminary;a.resultText=n(d.output),b||(a.state="success");break}case"tool-output-error":{let a=p(d,"toolCallId",c),b=p(d,"errorText",c),e=s(a,"tool");e.state="error",e.errorText=b,e.resultText=b;break}case"tool-output-denied":{let a=s(p(d,"toolCallId",c),"tool");a.state="error",a.errorText="Tool output denied",a.resultText="Tool output denied";break}case"tool-approval-request":{let a=p(d,"toolCallId",c),b=p(d,"approvalId",c),e=s(a,"tool");e.state="running",e.resultText=`Approval requested (${b})`;break}case"abort":{let a="string"==typeof d.reason?d.reason:"unknown reason";throw Error(`AI stream aborted: ${a}`)}case"error":throw Error("string"==typeof d.errorText?`AI stream error: ${d.errorText}`:`AI stream error event: ${c}`);default:if(e.startsWith("data-"))break;throw Error(`Unexpected AI stream event type: ${e}`)}}m()}}catch(c){if(c instanceof DOMException&&"AbortError"===c.name){let a=q();0===a.parts.length&&a.parts.push({type:"text",content:"Stopped."}),m();return}let a=c instanceof Error?c.message:"Unknown AI stream error",b=o(g);b?.role==="assistant"&&(b.parts=[{type:"text",content:a}],b.toolCallsById.clear()),m(),alert(`AI stream failed: ${a}`)}finally{h=!1,i=null,m(),y()}}}let u=(0,d.h)("div",{className:"sdt-ai-input-wrapper"}),v=(0,d.h)("input",{type:"text",className:"sdt-ai-input",placeholder:"Ask anything about Hexclave...",autocomplete:"off",autocorrect:"off",spellcheck:"false"}),w=(0,d.h)("button",{className:"sdt-ai-send-btn",title:"Send"});function y(){v.disabled=!1,v.placeholder=0===g.length?"Ask anything about Hexclave...":"Ask a follow-up...",h?(w.classList.add("sdt-ai-send-btn-active"),w.classList.add("sdt-ai-stop-btn"),w.setAttribute("title","Stop"),(0,d.setHtml)(w,'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>')):(v.value.trim()?w.classList.add("sdt-ai-send-btn-active"):w.classList.remove("sdt-ai-send-btn-active"),w.classList.remove("sdt-ai-stop-btn"),w.setAttribute("title","Send"),(0,d.setHtml)(w,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'))}(0,d.setHtml)(w,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'),v.addEventListener("input",y),v.addEventListener("keydown",a=>{"Enter"!==a.key||a.shiftKey||(a.preventDefault(),h?i?.abort():((0,c.runAsynchronously)(t(v.value)),v.value=""),y())}),w.addEventListener("click",()=>{h?i?.abort():((0,c.runAsynchronously)(t(v.value)),v.value=""),y()});let z=(0,d.h)("button",{className:"sdt-ai-new-chat",title:"New conversation",style:{display:"none"}});return(0,d.setHtml)(z,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'),z.addEventListener("click",()=>{h&&i?.abort(),g.length=0,v.value="",m(),y(),z.style.display="none"}),u.append(v,w),k.append(z,u),b.append(j,k),m(),y(),b}(a));break;case"console":F(i,function(a){let b=(0,d.h)("div",{className:"sdt-console-panel"}),e={error:"sdt-badge-error",info:"sdt-badge-info"},f=(0,d.h)("div",{className:"sdt-console-title"},"Logs"),g=(0,d.h)("div",{className:"sdt-console-actions"}),h=(0,d.h)("button",{className:"sdt-console-action-btn",title:"Copy logs"});(0,d.setHtml)(h,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy');let i=(0,d.h)("button",{className:"sdt-console-action-btn",title:"Export logs"});(0,d.setHtml)(i,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Export');let j=(0,d.h)("button",{className:"sdt-console-action-btn",title:"Clear logs"});(0,d.setHtml)(j,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>Clear'),g.append(h,i,j),b.appendChild((0,d.h)("div",{className:"sdt-console-header"},f,g));let k=(0,d.h)("div",{className:"sdt-console-log-scroll sdt-tab-content-fade"});b.appendChild(k);let l=100;function m(){return[...a.apiLogs.map(a=>({kind:"api",entry:a})),...a.eventLogs.map(a=>({kind:"event",entry:a}))].sort((a,b)=>b.entry.timestamp-a.entry.timestamp)}function n(a){if("api"===a.kind){let b=a.entry,c=void 0!==b.status?` [${b.status}]`:"",d=void 0!==b.duration?` ${b.duration}ms`:"",e=void 0!==b.error?` ${b.error}`:"";return`${new Date(b.timestamp).toISOString()} ${b.method} ${b.url}${c}${d}${e}`}let b=a.entry;return`${new Date(b.timestamp).toISOString()} ${b.type.toUpperCase()} ${b.message}`}function o(){return["=== Hexclave Dev Tool Logs ===",`Generated: ${new Date().toISOString()}`,`Total logs: ${m().length}`,"",...m().map(n)].join("\n")}function p(){let a=k.scrollTop;k.innerHTML="";let b=m();if(l=Math.min(Math.max(l,100),Math.max(b.length,100)),0===b.length){k.innerHTML='<div class="sdt-empty-state"><div class="sdt-empty-state-icon">📋</div><div>No logs recorded yet</div><div style="font-size:12px;color:var(--sdt-text-tertiary)">API calls and auth events will appear here</div></div>';return}let c=(0,d.h)("div",{className:"sdt-log-list"});for(let a of b.slice(0,l))c.appendChild(function(a){if("api"===a.kind){let b=a.entry,c=(0,d.h)("div",{className:"sdt-log-item"});return c.appendChild((0,d.h)("span",{className:"sdt-log-time"},z(b.timestamp))),c.appendChild((0,d.h)("span",{className:`sdt-log-method sdt-log-method-${b.method.toLowerCase()}`},b.method)),c.appendChild((0,d.h)("span",{className:"sdt-log-url"},b.url)),void 0!==b.status&&c.appendChild((0,d.h)("span",{className:`sdt-log-status ${b.status<400?"sdt-log-status-ok":"sdt-log-status-err"}`},String(b.status))),void 0!==b.duration&&c.appendChild((0,d.h)("span",{className:"sdt-log-time"},b.duration+"ms")),c}let b=a.entry,c=(0,d.h)("div",{className:"sdt-log-item"});return c.appendChild((0,d.h)("span",{className:"sdt-log-time"},z(b.timestamp))),c.appendChild((0,d.h)("span",{className:`sdt-badge ${e[b.type]||"sdt-badge-info"}`},b.type)),c.appendChild((0,d.h)("span",{className:"sdt-log-message"},b.message)),c}(a));l<b.length&&c.appendChild((0,d.h)("div",{className:"sdt-log-load-hint"},`${b.length-l} older logs available`)),k.appendChild(c),k.scrollTop=Math.min(a,k.scrollHeight)}function q(){let a=m().length;!(l>=a)&&k.scrollHeight-k.scrollTop-k.clientHeight<=48&&(l=Math.min(l+100,a),p())}k.addEventListener("scroll",q),p(),h.addEventListener("click",()=>{(0,c.runAsynchronously)(navigator.clipboard.writeText(o()).then(()=>{h.textContent="✓ Copied",setTimeout(()=>{(0,d.setHtml)(h,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy')},1500)}))}),i.addEventListener("click",()=>{let a=new Blob([o()],{type:"text/plain;charset=utf-8"}),b=URL.createObjectURL(a),c=(0,d.h)("a",{href:b,download:`hexclave-dev-tool-logs-${new Date().toISOString()}.txt`});document.body.appendChild(c),c.click(),c.remove(),URL.revokeObjectURL(b)}),j.addEventListener("click",()=>{l=100,a.clear()});let r=a.subscribe(()=>{p()});return{element:b,cleanup:()=>{k.removeEventListener("scroll",q),r()}}}(h));break;case"dashboard":F(i,function(a){let b=(0,d.h)("div",{className:"sdt-iframe-container"});async function e(){b.innerHTML="",b.appendChild((0,d.h)("div",{className:"sdt-iframe-loading"},"Checking development environment…"));let c=await y(a);if(b.isConnected)if(c)!function a(b,c,e,f="Loading…",g="Unable to load content",h,i){b.innerHTML="",null!=i&&b.appendChild((0,d.h)("div",{className:"sdt-iframe-toolbar"},(0,d.h)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"sdt-iframe-open-link"},i)));let j=(0,d.h)("div",{className:"sdt-iframe-loading"},f);b.appendChild(j);let k=document.createElement("iframe");k.src=c,k.title=e,k.setAttribute("sandbox","allow-scripts allow-same-origin allow-popups allow-forms"),k.style.display="none",k.addEventListener("load",()=>{j.style.display="none",k.style.display="block"}),k.addEventListener("error",()=>{j.style.display="none",b.innerHTML="";let k=(0,d.h)("div",{className:"sdt-iframe-error"});k.appendChild((0,d.h)("div",null,g)),h&&k.appendChild((0,d.h)("div",{style:{fontSize:"12px",color:"var(--sdt-text-tertiary)"}},h));let l=(0,d.h)("button",{className:"sdt-iframe-error-btn"},"Retry");l.addEventListener("click",()=>{a(b,c,e,f,g,h,i)}),k.appendChild(l);let m=(0,d.h)("a",{href:c,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--sdt-accent)",fontSize:"12px",textDecoration:"none"}},"Open in new tab");k.appendChild(m),b.appendChild(k)}),b.appendChild(k)}(b,`${r}/projects/${encodeURIComponent(a.projectId)}`,"Hexclave Dashboard","Loading dashboard…","Unable to load dashboard","The dashboard may require authentication or block framing","Open in New Tab");else{let a,c;b.innerHTML="",a=(0,d.h)("div",{className:"sdt-dashboard-unavailable"}),(c=(0,d.h)("div",{className:"sdt-dashboard-unavailable-text"})).appendChild(document.createTextNode("Navigate to ")),c.appendChild((0,d.h)("a",{className:"sdt-dashboard-unavailable-link",href:s,target:"_blank",rel:"noopener noreferrer"},s)),c.appendChild(document.createTextNode(" to view this project's dashboard")),a.appendChild(c),b.appendChild(a)}}return(0,c.runAsynchronously)(e),b}(a));break;case"support":let j,k;F(i,(j=(0,d.h)("div",{className:"sdt-support-tab"}),k=x(a),j.appendChild(function(){let a=(0,d.h)("div",{className:"sdt-support-feedback-pane"}),b=(0,d.h)("form",{className:"sdt-support-form"}),e="feedback",f="idle",g="",h=(0,d.h)("input",{className:"sdt-support-input",type:"text",placeholder:"Your name"}),i=(0,d.h)("input",{className:"sdt-support-input",type:"email",placeholder:"you@example.com",required:"true"}),j=(0,d.h)("textarea",{className:"sdt-support-textarea",placeholder:"What's on your mind?",required:"true",rows:"5"});function l(){if(b.innerHTML="","success"===f){let a=(0,d.h)("div",{className:"sdt-support-status sdt-support-status-success"}),c=(0,d.h)("div",{className:"sdt-support-status-icon"});(0,d.setHtml)(c,'<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),a.append(c,(0,d.h)("div",{className:"sdt-support-status-title"},"Feedback sent"),(0,d.h)("div",{className:"sdt-support-status-msg"},"Thank you! We'll get back to you soon."));let e=(0,d.h)("button",{className:"sdt-support-submit",style:{marginTop:"12px",width:"auto"}},"Send another");e.addEventListener("click",()=>{f="idle",l()}),a.appendChild(e),b.appendChild(a);return}if("error"===f){let a=(0,d.h)("div",{className:"sdt-support-status sdt-support-status-error"}),c=(0,d.h)("div",{className:"sdt-support-status-icon"});(0,d.setHtml)(c,'<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 6v5m0 3h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'),a.append(c,(0,d.h)("div",{className:"sdt-support-status-title"},"Failed to send"),(0,d.h)("div",{className:"sdt-support-status-msg"},g||"Please try again."));let e=(0,d.h)("button",{className:"sdt-support-submit",style:{marginTop:"12px",width:"auto"}},"Try again");e.addEventListener("click",()=>{f="idle",g="",l()}),a.appendChild(e),b.appendChild(a);return}let a=(0,d.h)("div",{className:"sdt-support-field"}),c=(0,d.h)("label",{className:"sdt-support-label"},"Name ");c.appendChild((0,d.h)("span",{className:"sdt-support-optional"},"optional")),a.append(c,h),b.appendChild(a);let k=(0,d.h)("div",{className:"sdt-support-field"});k.append((0,d.h)("label",{className:"sdt-support-label"},"Email"),i),b.appendChild(k);let m=(0,d.h)("div",{className:"sdt-support-field"});m.append((0,d.h)("label",{className:"sdt-support-label"},"bug"===e?"Description":"Message"),j),j.placeholder="bug"===e?"Steps to reproduce, expected vs. actual behavior…":"What's on your mind?",b.appendChild(m);let n=(0,d.h)("div",{className:"sdt-support-type-cards"}),o=(0,d.h)("button",{type:"button",className:`sdt-support-type-card ${"feedback"===e?"sdt-support-type-card-active":""}`});(0,d.setHtml)(o,'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Feedback</span>'),o.addEventListener("click",()=>{e="feedback",l()});let p=(0,d.h)("button",{type:"button",className:`sdt-support-type-card ${"bug"===e?"sdt-support-type-card-active":""}`});(0,d.setHtml)(p,'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M6 17H3M21 5c0 2.1-1.6 3.8-3.53 4M18 13h4M21 17h-3"/></svg><span>Bug Report</span>'),p.addEventListener("click",()=>{e="bug",l()}),n.append(o,p),b.appendChild(n);let q=(0,d.h)("button",{type:"submit",className:"sdt-support-submit"});(0,d.setHtml)(q,'Submit <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'),q.disabled="submitting"===f,b.appendChild(q);let r=(0,d.h)("div",{className:"sdt-support-channels"});r.innerHTML=`
        <a href="https://discord.hexclave.com" target="_blank" rel="noopener noreferrer" class="sdt-support-channel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          <span>Discord</span>
        </a>
        <a href="mailto:team@hexclave.com" class="sdt-support-channel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>Email</span>
        </a>
        <a href="https://github.com/hexclave/hexclave" target="_blank" rel="noopener noreferrer" class="sdt-support-channel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          <span>GitHub</span>
        </a>`,b.appendChild(r),b.insertBefore(r,b.firstChild)}return b.addEventListener("submit",a=>{a.preventDefault(),i.value.trim()&&j.value.trim()&&(0,c.runAsynchronously)(async()=>{f="submitting",l();try{let a=await fetch(`${k}/api/latest/internal/feedback`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:h.value.trim()||void 0,email:i.value.trim(),message:j.value.trim(),feedback_type:e})});if(!a.ok)throw Error(`Failed to send: ${a.status} ${a.statusText}`);let b=await a.json();if(!b.success)throw Error(b.message||"Failed to send feedback");f="success",j.value=""}catch(a){f="error",g=a.message||"An unexpected error occurred"}l()})}),l(),a.appendChild(b),a}()),j))}return D.set(b,i),C.appendChild(i),i}(b);for(let[,a]of(w.setActive(b),D))a.classList.remove("sdt-tab-pane-active");i.classList.add("sdt-tab-pane-active")}function H(a){let c=(0,d.h)("div",{className:`sdt-resize-handle sdt-resize-${a}`}),e=0,f=0,g=0,h=0;c.addEventListener("pointerdown",a=>{a.preventDefault(),null!==k&&(clearTimeout(k),k=null),j.classList.remove("sdt-panel-geometry-animated"),c.setPointerCapture(a.pointerId),e=a.clientX,f=a.clientY,g=j.offsetWidth,h=j.offsetHeight}),c.addEventListener("pointermove",b=>{if(!c.hasPointerCapture(b.pointerId))return;let d=e-b.clientX,i=f-b.clientY;if("left"===a||"top-left"===a){let a=Math.max(400,Math.min(g+d,window.innerWidth-32));j.style.width=a+"px"}if("top"===a||"top-left"===a){let a=Math.max(300,Math.min(h+i,window.innerHeight-80));j.style.height=a+"px"}}),c.addEventListener("pointerup",a=>{c.releasePointerCapture(a.pointerId),b.update({panelWidth:j.offsetWidth,panelHeight:j.offsetHeight})}),j.appendChild(c)}return G(n),H("top"),H("left"),H("top-left"),j.appendChild(o),{element:j,cleanup:()=>{for(let a of(null!==k&&clearTimeout(k),E))a()}}}(a,G,H,J),E.appendChild(I.element))}function L(){if(!I)return;G.update({isOpen:!1});let a=I;I=null,a.cleanup(),a.element.classList.add("sdt-panel-exiting"),setTimeout(()=>{E.contains(a.element)&&E.removeChild(a.element)},150)}let M=function(a){let b={width:36,height:36},c=null;function e(a){null!==c&&(window.clearTimeout(c),c=null),g.classList.toggle("sdt-trigger-position-animated",a),a&&(c=window.setTimeout(()=>{c=null,g.classList.remove("sdt-trigger-position-animated")},180))}function f(a,b){e(b?.animate===!0),n=a,g.style.left=n.left+"px",g.style.top=n.top+"px"}let g=(0,d.h)("button",{className:"sdt-trigger","aria-label":"Toggle Hexclave Dev Tools","data-hexclave-devtool-trigger":"true",title:"Hexclave Dev Tools"}),i=(0,d.h)("span",{className:"sdt-trigger-logo"});(0,d.setHtml)(i,h.HEXCLAVE_LOGO_SVG),g.appendChild(i);let j=function(){try{let a=localStorage.getItem(o);if(!a)return null;let c=JSON.parse(a);if("object"==typeof c&&null!==c&&["top-left","top-right","bottom-left","bottom-right"].includes(String(Reflect.get(c,"corner"))))return c;if("object"==typeof c&&null!==c&&"side"in c&&"offset"in c){let a=String(Reflect.get(c,"side")),b=Number(Reflect.get(c,"offset")),d=window.innerWidth,e=window.innerHeight;return{corner:"right"===a?b<e/2?"top-right":"bottom-right":"left"===a?b<e/2?"top-left":"bottom-left":"top"===a?b<d/2?"top-left":"top-right":b<d/2?"bottom-left":"bottom-right"}}if("object"==typeof c&&null!==c&&"number"==typeof Reflect.get(c,"left")&&"number"==typeof Reflect.get(c,"top"))return m(c,b,{width:window.innerWidth,height:window.innerHeight})}catch{}return null}()??{corner:"bottom-right"},n=l(j,b,{width:window.innerWidth,height:window.innerHeight});f(n);let p=null;function q(){let a=l(j,b,{width:window.innerWidth,height:window.innerHeight});(a.left!==n.left||a.top!==n.top)&&f(a,{animate:!0})}return requestAnimationFrame(()=>{let a=g.getBoundingClientRect();if(a.width>0&&a.height>0){b={width:a.width,height:a.height};let c=l(j,b,{width:window.innerWidth,height:window.innerHeight});(c.left!==n.left||c.top!==n.top)&&f(c,{animate:!0})}}),g.addEventListener("pointerdown",a=>{a.preventDefault(),e(!1),g.setPointerCapture(a.pointerId),p={startX:a.clientX,startY:a.clientY,startLeft:n.left,startTop:n.top,didDrag:!1}}),g.addEventListener("pointermove",a=>{if(!p)return;let c=a.clientX-p.startX,d=a.clientY-p.startY;!p.didDrag&&Math.abs(c)+Math.abs(d)<5||(p.didDrag=!0,f(k({left:p.startLeft+c,top:p.startTop+d},b,{width:window.innerWidth,height:window.innerHeight})))}),g.addEventListener("pointerup",c=>{let d=p;if(p=null,d)if(g.releasePointerCapture(c.pointerId),d.didDrag){f(l(j=m(n,b,{width:window.innerWidth,height:window.innerHeight}),b,{width:window.innerWidth,height:window.innerHeight}),{animate:!0});var e=j;try{localStorage.setItem(o,JSON.stringify(e))}catch{}}else a()}),window.addEventListener("resize",q),{element:g,cleanup:()=>{null!==c&&window.clearTimeout(c),window.removeEventListener("resize",q)}}}(function(){G.get().isOpen?L():(G.update({isOpen:!0}),K())});E.appendChild(M.element),G.get().isOpen&&K();let N=a[e.hexclaveAppInternalsSymbol].addRequestListener(a=>{let b=Date.now();H.addApiLog({id:w(),timestamp:b,method:a.method,url:a.path,status:a.status,duration:a.duration,error:a.error}),a.error?H.addEventLog({id:w(),timestamp:b,type:"error",message:`Network error on ${a.method} ${a.path}: ${a.error}`}):a.status&&a.status>=400&&H.addEventLog({id:w(),timestamp:b,type:"error",message:`API error ${a.status} on ${a.method} ${a.path}`})}),O=!1,P={cleanup:()=>{!O&&(O=!0,(0,d.getGlobalUiInstance)(q)===P&&(0,d.setGlobalUiInstance)(q,null),M.cleanup(),N(),I?.cleanup(),D.parentNode&&D.parentNode.removeChild(D))}};return(0,d.setGlobalUiInstance)(q,P),()=>{P.cleanup()}}],158994)}];

//# sourceMappingURL=packages_next_dist_esm_dev-tool_dev-tool-core_1cr118n.js.map