module.exports=[126852,e=>{"use strict";var t=e.i(951865),o=e.i(357063),a=e.i(902528),s=e.i(525694),r=e.i(498898),d=e.i(352901),l=e.i(617958),i=e.i(181199);let n=(0,e.i(205400).getInPageUiBaseCSS)(".hexclave-devtool")+`
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

`;function c(e,t,o){let a=Math.max(0,o.width-t.width),s=Math.max(0,o.height-t.height);return{left:Math.max(0,Math.min(e.left,a)),top:Math.max(0,Math.min(e.top,s))}}function p(e,t,o){let a,s,r,d,l=(a=Math.max(0,o.width-t.width),s=Math.max(0,o.height-t.height),r=Math.min(16,a),{minLeft:r,maxLeft:Math.max(r,a-16),minTop:d=Math.min(16,s),maxTop:Math.max(d,s-16)});return c((()=>{switch(e.corner){case"top-left":return{left:l.minLeft,top:l.minTop};case"top-right":return{left:l.maxLeft,top:l.minTop};case"bottom-left":return{left:l.minLeft,top:l.maxTop};case"bottom-right":return{left:l.maxLeft,top:l.maxTop}}})(),t,o)}function h(e,t,o){let a=e.left+t.width/2;return{corner:e.top+t.height/2<o.height/2?a<o.width/2?"top-left":"top-right":a<o.width/2?"bottom-left":"bottom-right"}}let v="__hexclave-dev-tool-state",x="hexclave-devtool-trigger-position",u=t.DEV_TOOL_ROOT_ID,g="__hexclave-dev-tool-instance",b="http://localhost:26700",f="https://app.hexclave.com",m=[{id:"overview",label:"Overview",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'},{id:"customize",label:"Customize",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>'},{id:"ai",label:"AI",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'},{id:"console",label:"Console",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>'},{id:"dashboard",label:"Dashboard",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'},{id:"support",label:"Support",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'}],y={isOpen:!1,activeTab:"overview",panelWidth:800,panelHeight:520},w=0;function k(){return`sdt-${++w}-${Date.now()}`}function C(e){return(0,i.getBaseUrl)(e[s.hexclaveAppInternalsSymbol].getConstructorOptions().baseUrl)}async function N(e){if(!((0,r.isLocalhost)(window.location.href)&&"http:"===window.location.protocol))return!1;let t=`${b}/api/development-environment/project-availability?project_id=${encodeURIComponent(e.projectId)}`,o=new AbortController,a=setTimeout(()=>o.abort(),3e3);try{var s;let e=await fetch(t,{method:"GET",signal:o.signal});if(!e.ok)return!1;return s=await e.json(),"object"==typeof s&&null!==s&&"project_available"in s&&!0===s.project_available}catch{return!1}finally{clearTimeout(a)}}function z(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}function T(e,t){let o,s=/(\[[^\]]+\]\([^)]+\)|`[^`\n]+`|\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*|_[^_\n]+_)/g,r=0;for(;null!==(o=s.exec(t));){o.index>r&&e.appendChild(document.createTextNode(t.slice(r,o.index)));let d=o[0];if(d.startsWith("`"))e.appendChild((0,a.h)("code",{className:"sdt-ai-inline-code"},d.slice(1,-1)));else if(d.startsWith("**")||d.startsWith("__")){let t=(0,a.h)("strong",{className:"sdt-ai-bold"});T(t,d.slice(2,-2)),e.appendChild(t)}else if(d.startsWith("*")||d.startsWith("_")){let t=(0,a.h)("em");T(t,d.slice(1,-1)),e.appendChild(t)}else{let t=d.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(t){let[,o,s]=t,r=s.trim();if(/^(https?:\/\/|mailto:)/i.test(r)){let t=(0,a.h)("a",{className:"sdt-ai-link",href:r,target:"_blank",rel:"noopener noreferrer"});T(t,o),e.appendChild(t)}else e.appendChild(document.createTextNode(d))}else e.appendChild(document.createTextNode(d))}r=s.lastIndex}r<t.length&&e.appendChild(document.createTextNode(t.slice(r)))}e.s(["createDevTool",0,function(e){let t,i,w;if("u"<typeof document||"function"!=typeof document.createElement)return()=>{};let L=Reflect.get(document,"body");if(!(0,a.hasAppendChild)(L))return()=>{};(0,a.getGlobalUiInstance)(g)?.cleanup();let E=document.getElementById(u);for(;null!==E;)E.remove(),E=document.getElementById(u);let S=document.createElement("div");S.id=u,L.appendChild(S);let j=(0,a.h)("div",{className:"hexclave-devtool"});S.appendChild(j);let M=document.createElement("style");M.textContent=n,j.appendChild(M);let H=(t=function(){try{let e=localStorage.getItem(v);if(e){let t=JSON.parse(e);return"components"===t.activeTab&&(t.activeTab="customize"),"docs"===t.activeTab&&(t.activeTab="overview"),{...y,...t,isOpen:!1}}}catch{}return{...y}}(),i=new Set,{get:()=>t,update(e){var o=t={...t,...e};try{localStorage.setItem(v,JSON.stringify({...o,isOpen:!1}))}catch{}i.forEach(e=>e())},subscribe:e=>(i.add(e),()=>{i.delete(e)})}),A=((w=globalThis).__STACK_DEV_TOOL_LOG_STORE__||(w.__STACK_DEV_TOOL_LOG_STORE__={apiLogs:[],eventLogs:[],listeners:new Set,addApiLog(e){this.apiLogs=[e,...this.apiLogs].slice(0,500),this.listeners.forEach(e=>e())},addEventLog(e){this.eventLogs=[e,...this.eventLogs].slice(0,500),this.listeners.forEach(e=>e())},clear(){this.apiLogs=[],this.eventLogs=[],this.listeners.forEach(e=>e())},subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}}),w.__STACK_DEV_TOOL_LOG_STORE__),I=null;function $(){_()}function O(){I||(I=function(e,t,l,i){let n=(0,a.h)("div",{className:"sdt-panel"}),c=null;function p(e,o){if(o?.animate===!0&&(n.classList.add("sdt-panel-geometry-animated"),null!==c&&clearTimeout(c),c=setTimeout(()=>{n.classList.remove("sdt-panel-geometry-animated"),c=null},220)),"dashboard"===e){n.classList.add("sdt-panel-fullscreen"),n.style.width="",n.style.height="";return}n.classList.remove("sdt-panel-fullscreen"),n.style.width=t.get().panelWidth+"px",n.style.height=t.get().panelHeight+"px"}let h=t.get().activeTab,v=m.some(e=>e.id===h)?h:y.activeTab;p(v);let x=(0,a.h)("div",{className:"sdt-panel-inner"}),u=(0,a.h)("button",{className:"sdt-close-btn","aria-label":"Close"});(0,a.setHtml)(u,'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>'),u.addEventListener("click",i);let g=(0,a.h)("a",{href:"https://docs.hexclave.com",target:"_blank",rel:"noopener noreferrer",className:"sdt-docs-link"});g.appendChild(document.createTextNode("Docs"));let w=(0,a.h)("span",{className:"sdt-docs-link-icon","aria-hidden":"true"});(0,a.setHtml)(w,'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>'),g.appendChild(w);let k=function(e,t,o,s){let r=s?.variant??"bar",d="pills"===r?"sdt-console-tab":"sdt-tab",l=(0,a.h)("div",{className:"pills"===r?"sdt-console-tabs":"sdt-tabbar"}),i=(0,a.h)("div",{className:"pills"===r?"sdt-console-tab-indicator":"sdt-tab-indicator"});i.style.opacity="0",l.appendChild(i);let n=t,c=!0,p=e.map(e=>{let s=(0,a.h)("button",{className:d,"data-tab-id":e.id,"data-active":String(e.id===t)});if(e.icon){let t=(0,a.h)("span",{className:"sdt-tab-icon"});(0,a.setHtml)(t,e.icon),s.appendChild(t)}return s.appendChild(document.createTextNode(e.label)),s.addEventListener("click",()=>o(e.id)),l.appendChild(s),s});function h(){let e=l.querySelector(`[data-tab-id="${n}"]`);e&&(i.style.transform=`translateX(${e.offsetLeft}px)`,i.style.width=e.offsetWidth+"px",i.style.height=e.offsetHeight+"px",i.style.opacity="1",i.style.transition=c?"none":"",c=!1)}return"bar"===r&&l.appendChild((0,a.h)("div",{className:"sdt-tabbar-spacer"})),s?.trailing&&l.appendChild(s.trailing),new ResizeObserver(h).observe(l),requestAnimationFrame(h),{el:l,setActive:function(e){n=e,p.forEach(t=>{let o=t.getAttribute("data-tab-id");t.setAttribute("data-active",String(o===e))}),h()}}}(m,v,e=>{t.update({activeTab:e}),p(e,{animate:!0}),H(e)},{trailing:(0,a.h)("div",{className:"sdt-tabbar-actions"},g,u)});x.appendChild(k.el);let L=(0,a.h)("div",{className:"sdt-content"}),E=(0,a.h)("div",{className:"sdt-tab-layers"});L.appendChild(E),x.appendChild(L);let S=new Map,j=[];function M(e,t){"element"in t?(e.appendChild(t.element),t.cleanup&&j.push(t.cleanup)):e.appendChild(t)}function H(t){let i=function(t){if(S.has(t))return S.get(t);let i=(0,a.h)("div",{className:"sdt-tab-pane"});switch("dashboard"===t&&i.classList.add("sdt-tab-pane-iframe"),t){case"overview":M(i,function(e){let t=(0,a.h)("div",{className:"sdt-ov"}),d=null!==e[s.hexclaveAppInternalsSymbol].getConstructorOptions().tokenStore,l=(0,a.h)("div",{className:"sdt-ov-card sdt-ov-card-hero"});l.appendChild((0,a.h)("div",{className:"sdt-ov-label"},"Identity"));let i=(0,a.h)("div",{className:"sdt-ov-user-row"}),n=(0,a.h)("div",{className:"sdt-ov-avatar"},"?"),c=(0,a.h)("div",{className:"sdt-ov-user-meta"}),p=(0,a.h)("div",{className:"sdt-ov-user-name"},"Loading…"),h=(0,a.h)("div",{className:"sdt-ov-user-email"},""),v=(0,a.h)("div",{className:"sdt-ov-auth-indicator",style:{display:"none"}},"Authenticated");c.append(p,h,v),i.append(n,c),l.appendChild(i);let x=(0,a.h)("div",{className:"sdt-ov-actions"}),u=(0,a.h)("div",{className:"sdt-ov-toast",style:{display:"none"}});function g(e){return!!(e instanceof DOMException&&"AbortError"===e.name||e instanceof TypeError)||e instanceof Error&&(e.message.includes("Failed to fetch")||e.message.includes("NetworkError")||e.message.includes("Load failed")||e.message.includes("network connection"))}function b(e,t){u.textContent=e,u.className=`sdt-ov-toast sdt-ov-toast-${t}`,u.style.display="",setTimeout(()=>{u.style.display="none"},4e3)}let f=null,m=!1;function y(){if(x.innerHTML="",!d){p.textContent="Current user unavailable",h.textContent="This app was initialized without a token store",x.appendChild((0,a.h)("button",{className:"sdt-ov-btn sdt-ov-btn-wide",disabled:"true"},"Session actions unavailable"));return}if(f){let e=(0,a.h)("button",{className:"sdt-ov-btn sdt-ov-btn-danger"},"Sign Out");e.disabled=m,e.addEventListener("click",()=>{(0,o.runAsynchronously)(async()=>{m=!0,y();try{await f.signOut(),b("Signed out","success")}catch(e){b(e.message||"Sign out failed","error")}m=!1,await j()})});let t=(0,a.h)("button",{className:"sdt-ov-btn sdt-ov-btn-primary"},"Random User");t.disabled=m,t.addEventListener("click",()=>{(0,o.runAsynchronously)(w())}),x.append(e,t)}else{let e=(0,a.h)("button",{className:"sdt-ov-btn sdt-ov-btn-primary sdt-ov-btn-wide"},m?"Working…":"Quick Sign Up");e.disabled=m,e.addEventListener("click",()=>{(0,o.runAsynchronously)(w())}),x.appendChild(e)}}async function w(){if(!(0,r.isLocalhost)(window.location.href))return void b("Quick sign-in is only available on localhost","error");m=!0,y();let t=function(){let e="";for(let t=0;t<8;t++)e+="abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(36*Math.random())];return`dev-${e}@devtool-quick-sign-up.example.com`}();try{let o=await e.signUpWithCredential({email:t,password:t,noRedirect:!0});if("error"===o.status){b(`Sign up failed: ${o.error.message}`,"error"),m=!1,y();return}let a=await e.signInWithCredential({email:t,password:t,noRedirect:!0});"error"===a.status?b(`Sign in failed: ${a.error.message}`,"error"):b(`Signed in as ${t}`,"success")}catch(e){b(e.message||"Unknown error","error")}m=!1,await j()}l.append(x,u);let k=(0,a.h)("div",{className:"sdt-ov-card sdt-ov-card-auth"});k.appendChild((0,a.h)("div",{className:"sdt-ov-label"},"Auth Methods"));let C=(0,a.h)("div",{className:"sdt-ov-auth-grid"});for(let e=0;e<3;e++)C.appendChild((0,a.h)("div",{className:"sdt-ov-method sdt-ov-skeleton-pill"}));k.appendChild(C);let N=null;async function z(){try{let t=await e.getProject();C.innerHTML="";let o=t.config;for(let e of(N=o.credentialEnabled||o.magicLinkEnabled||o.passkeyEnabled||o.oauthProviders.length>0,[{label:"Password",enabled:o.credentialEnabled},{label:"Magic Link",enabled:o.magicLinkEnabled},{label:"Passkey",enabled:o.passkeyEnabled}])){let t=(0,a.h)("div",{className:`sdt-ov-method ${e.enabled?"sdt-ov-method-on":"sdt-ov-method-off"}`});t.appendChild((0,a.h)("span",{className:"sdt-ov-method-name"},e.label)),C.appendChild(t)}for(let e of o.oauthProviders){let t=(0,a.h)("div",{className:"sdt-ov-method sdt-ov-method-on sdt-ov-method-oauth"});t.appendChild((0,a.h)("span",{className:"sdt-ov-method-name"},e.id)),C.appendChild(t)}if(!o.signUpEnabled){let e=(0,a.h)("div",{className:"sdt-ov-method sdt-ov-method-warn"});e.appendChild((0,a.h)("span",{className:"sdt-ov-method-name"},"Sign-up off")),C.appendChild(e)}S()}catch(e){if(C.innerHTML='<div style="font-size:11px;color:var(--sdt-text-tertiary)">Could not load auth methods</div>',N=null,S(),!g(e))throw e}}(0,o.runAsynchronously)(z());let T=(0,a.h)("div",{className:"sdt-ov-card sdt-ov-card-checks"}),L=e.projectId,E=!1;function S(){T.innerHTML="";let e=[{ok:!!L&&"default"!==L,label:"Project configured",hint:null},{ok:!0===N,label:"Auth method active",hint:null===N?"Still checking project config":null},d?{ok:!!f,label:"Sign in a test user",hint:"Use “Quick Sign Up” above →"}:{ok:!0,label:"Current-user tools unavailable",hint:null}],o=e.filter(e=>e.ok).length;if(o===e.length){E&&T.parentElement&&(t.removeChild(T),E=!1);return}E||(t.appendChild(T),E=!0);let s=(0,a.h)("div",{className:"sdt-ov-checks-header"}),r=(0,a.h)("div",{className:"sdt-ov-label",style:{marginBottom:"0",color:"var(--sdt-warning)"}},"Setup"),l=(0,a.h)("span",{className:"sdt-ov-checks-badge sdt-ov-checks-badge-warn"},`${o}\u200a/\u200a${e.length}`);s.append(r,l),T.appendChild(s);let i=(0,a.h)("div",{className:"sdt-ov-checks-bar"}),n=(0,a.h)("div",{className:"sdt-ov-checks-bar-fill"});for(let t of(n.style.width=`${o/e.length*100}%`,i.appendChild(n),T.appendChild(i),e)){let e=(0,a.h)("div",{className:"sdt-ov-setup-row"});e.appendChild((0,a.h)("span",{className:`sdt-ov-setup-dot ${t.ok?"sdt-ov-setup-dot-ok":"sdt-ov-setup-dot-warn"}`})),e.appendChild((0,a.h)("span",{className:"sdt-ov-setup-label"},t.label)),!t.ok&&t.hint&&e.appendChild((0,a.h)("span",{className:"sdt-ov-setup-hint"},t.hint)),T.appendChild(e)}}async function j(){if(!d){n.className="sdt-ov-avatar",n.textContent="?",p.textContent="Current user unavailable",h.textContent="This app was initialized without a token store",v.style.display="none",f=null,y(),S();return}try{if(f=await e.getUser()){let e=(f.displayName||f.primaryEmail||"?").split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase();(n.className="sdt-ov-avatar sdt-ov-avatar-active",f.profileImageUrl)?n.innerHTML=`<img src="${f.profileImageUrl.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}" alt="" />`:n.textContent=e,p.textContent=f.displayName||"(No display name)",h.textContent=f.primaryEmail||"No email",v.style.display=""}else n.className="sdt-ov-avatar",n.textContent="?",p.textContent="No user signed in",h.textContent="Sign in to test auth flows",v.style.display="none"}catch(e){if(n.className="sdt-ov-avatar",n.textContent="?",p.textContent="Could not load user",h.textContent="Check your local Stack backend",v.style.display="none",f=null,!g(e))throw e}y(),S()}t.append(l,k),S(),(0,o.runAsynchronously)(j());let M=setInterval(()=>{(0,o.runAsynchronously)(j())},3e3);return{element:t,cleanup:()=>clearInterval(M)}}(e));break;case"customize":M(i,function(e){let t,r,l=(0,a.h)("div",{className:"sdt-pg-layout"}),i=C(e),n=e[s.hexclaveAppInternalsSymbol].getUrls(),c=e[s.hexclaveAppInternalsSymbol].getConstructorOptions().urls??{},p=[{key:"signIn",label:"Sign-in"},{key:"signUp",label:"Sign-up"},{key:"forgotPassword",label:"Forgot password"},{key:"passwordReset",label:"Password reset"},{key:"emailVerification",label:"Email verification"},{key:"accountSettings",label:"Account settings"},{key:"teamInvitation",label:"Team invitation"},{key:"cliAuthConfirm",label:"CLI auth confirmation"},{key:"mfa",label:"MFA"},{key:"onboarding",label:"Onboarding"},{key:"error",label:"Error"}],h=null,v=null;(0,o.runAsynchronously)(fetch(`${i}/api/latest/internal/component-versions`).then(e=>e.json()).then(e=>{h=new Map(Object.entries(e.versions??{})),g()}).catch(()=>{}));let x=(0,a.h)("div",{className:"sdt-pg-sidebar"}),u=(0,a.h)("div",{className:"sdt-pg-main"});function g(){x.innerHTML="";let t=p.map(e=>{let t,{classification:o,version:a}="string"==typeof(t=c[e.key]??c.default??{type:"handler-component"})?{classification:"custom",version:null}:"type"in t?"custom"===t.type?{classification:"custom",version:t.version??null}:{classification:t.type,version:null}:{classification:"handler-component",version:null},s="current",r=[];if("custom"===o&&null!=a&&h){let t=h.get(e.key);t&&a<t.version&&(s="outdated",r=Object.entries(t.changelogs).map(([e,t])=>({version:Number(e),changelog:t})).filter(e=>e.version>a).sort((e,t)=>e.version-t.version))}return{key:e.key,label:e.label,url:n[e.key]||"",classification:o,version:a,versionStatus:s,versionChangelogs:r}}),r=t.filter(e=>"outdated"===e.versionStatus).length,l=(0,a.h)("div",{className:"sdt-pg-sidebar-head"});l.appendChild((0,a.h)("span",{className:"sdt-pg-sidebar-title"},"Pages")),l.appendChild((0,a.h)("span",{className:"sdt-pg-sidebar-count"},String(t.length))),r>0&&l.appendChild((0,a.h)("span",{className:"sdt-pg-sidebar-warn"},`${r} outdated`)),x.appendChild(l);let i=(0,a.h)("div",{className:"sdt-pg-list"});for(let r of t){let t="outdated"===r.versionStatus,l=(0,a.h)("div",{className:`sdt-pg-item ${t?"sdt-pg-item-warn":""}`,"data-selected":String(v===r.key)}),n=t?"sdt-pg-item-dot-warn":"custom"===r.classification?"sdt-pg-item-dot-custom":"sdt-pg-item-dot-handler";l.appendChild((0,a.h)("span",{className:`sdt-pg-item-dot ${n}`})),l.appendChild((0,a.h)("span",{className:"sdt-pg-item-label"},r.label)),t&&l.appendChild((0,a.h)("span",{className:"sdt-pg-badge sdt-pg-badge-outdated"},"Outdated")),l.addEventListener("click",()=>{v=r.key,g(),function(t){u.innerHTML="";let r=(0,a.h)("div",{className:"sdt-pg-detail"}),l=(0,a.h)("div",{className:"sdt-pg-header"}),i=(0,a.h)("div",{className:"sdt-pg-header-top"});i.appendChild((0,a.h)("h3",{className:"sdt-pg-title"},`${t.label} Page`)),"outdated"===t.versionStatus&&i.appendChild((0,a.h)("span",{className:"sdt-pg-badge sdt-pg-badge-outdated"},"Outdated")),l.appendChild(i);let n=`hexclaveApp.redirectTo${t.key.charAt(0).toUpperCase()}${t.key.slice(1)}()`,c=(0,a.h)("div",{className:"sdt-pg-code-inline"});c.appendChild((0,a.h)("code",{className:"sdt-pg-code"},n));let p=(0,a.h)("button",{className:"sdt-pg-copy-btn sdt-pg-open-btn"});(0,a.setHtml)(p,'Open <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>'),p.addEventListener("click",()=>{let a=window.open("about:blank","_blank");null!=a&&(a.opener=null),(0,o.runAsynchronouslyWithAlert)(async()=>{let o=new URL(await e[s.hexclaveAppInternalsSymbol].getRedirectToHandlerUrl(t.key),window.location.origin);null!=a?a.location.replace(o.toString()):window.open(o.toString(),"_blank","noopener,noreferrer")})}),c.appendChild(p),l.appendChild(c),r.appendChild(l);let h=(0,d.getPagePrompt)(t.key,t.version??void 0);if(h){let e="outdated"===t.versionStatus;if("handler-component"===t.classification||"hosted"===t.classification||e){let t;if(t=e&&h.upgradePrompt?h.upgradePrompt:h.fullPrompt?h.fullPrompt:""){let s=(0,a.h)("div",{className:"sdt-pg-section"});s.appendChild((0,a.h)("div",{className:"sdt-pg-section-label"},e?"Use this prompt to upgrade your component:":"Want to customize this page? Paste this prompt into your coding agent.")),s.appendChild((0,a.h)("pre",{className:"sdt-pg-pre"},t));let d=(0,a.h)("div",{className:"sdt-pg-section-footer"}),l=(0,a.h)("button",{className:"sdt-pg-copy-btn"},"Copy prompt");l.addEventListener("click",()=>{(0,o.runAsynchronously)(navigator.clipboard.writeText(t).then(()=>{l.textContent="✓ Copied",setTimeout(()=>{l.textContent="Copy prompt"},1500)}))}),d.appendChild(l),s.appendChild(d),r.appendChild(s)}}}u.appendChild(r)}(r)}),i.appendChild(l)}x.appendChild(i)}return g(),u.innerHTML="",t=(0,a.h)("div",{className:"sdt-pg-empty"}),r=(0,a.h)("div",{className:"sdt-pg-empty-icon"}),(0,a.setHtml)(r,'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'),t.appendChild(r),t.appendChild((0,a.h)("div",{className:"sdt-pg-empty-text"},"Select a page to inspect")),t.appendChild((0,a.h)("div",{className:"sdt-pg-empty-sub"},"View configuration, preview, and upgrade prompts")),u.appendChild(t),l.append(x,u),l}(e));break;case"ai":M(i,function(e){let t=(0,a.h)("div",{className:"sdt-ai-container"}),r=C(e),d=[],l=!1,i=null,n=(0,a.h)("div",{className:"sdt-ai-messages"}),c=(0,a.h)("div",{className:"sdt-ai-input-area"}),p=[{icon:"🔒",text:"How do I protect a Next.js route?"},{icon:"👥",text:"How do teams and permissions work?"},{icon:"🔗",text:"How do I add OAuth providers?"},{icon:"✉️",text:"How do I customize auth emails?"}];function h(){if(n.innerHTML="",0===d.length){let e=(0,a.h)("div",{className:"sdt-ai-empty"}),t=(0,a.h)("div",{className:"sdt-ai-empty-icon"});(0,a.setHtml)(t,'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'),e.appendChild(t),e.appendChild((0,a.h)("div",{className:"sdt-ai-empty-title"},"Ask AI")),e.appendChild((0,a.h)("div",{className:"sdt-ai-empty-desc"},"Get help with Hexclave integration, troubleshooting, and best practices."));let s=(0,a.h)("div",{className:"sdt-ai-suggestions"});for(let e of p){let t=(0,a.h)("button",{className:"sdt-ai-suggestion"});t.appendChild((0,a.h)("span",{className:"sdt-ai-suggestion-icon"},e.icon)),t.appendChild((0,a.h)("span",null,e.text)),t.addEventListener("click",()=>{(0,o.runAsynchronously)(m(e.text))}),s.appendChild(t)}e.appendChild(s),n.appendChild(e);return}let e=(0,a.h)("div",{className:"sdt-ai-message-list"});for(let t of d)if("user"===t.role){let o=(0,a.h)("div",{className:"sdt-ai-msg sdt-ai-msg-user"}),s=(0,a.h)("div",{className:"sdt-ai-bubble sdt-ai-bubble-user"});s.appendChild((0,a.h)("p",null,t.content)),o.appendChild(s);let r=(0,a.h)("div",{className:"sdt-ai-avatar sdt-ai-avatar-user"});(0,a.setHtml)(r,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'),o.appendChild(r),e.appendChild(o)}else{let s=(0,a.h)("div",{className:"sdt-ai-msg sdt-ai-msg-assistant"}),r=(0,a.h)("div",{className:"sdt-ai-avatar sdt-ai-avatar-assistant"});(0,a.setHtml)(r,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'),s.appendChild(r);let d=(0,a.h)("div",{className:"sdt-ai-bubble sdt-ai-bubble-assistant"});if(0===t.parts.length)d.innerHTML='<div class="sdt-ai-thinking"><span class="sdt-ai-thinking-dot"></span><span class="sdt-ai-thinking-dot"></span><span class="sdt-ai-thinking-dot"></span></div>';else for(let e of t.parts){if("text"===e.type){let t=(0,a.h)("div",{className:"sdt-ai-part-text"});(function(e,t){function s(t,o,s){let r=(0,a.h)(t,{className:o});T(r,s),e.appendChild(r)}let r=t.split("\n"),d=0;for(;d<r.length;){let t=r[d];if(t.startsWith("```")){let s=t.slice(3).trim(),l=[];for(d++;d<r.length&&!r[d].startsWith("```");)l.push(r[d]),d++;d++;let i=(0,a.h)("div",{className:"sdt-ai-code-block"}),n=(0,a.h)("div",{className:"sdt-ai-code-header"});n.appendChild((0,a.h)("span",{className:"sdt-ai-code-lang"},s||"CODE"));let c=(0,a.h)("button",{className:"sdt-ai-copy-btn"},"⎘"),p=l.join("\n");c.addEventListener("click",()=>{(0,o.runAsynchronously)(navigator.clipboard.writeText(p).then(()=>{c.textContent="✓",setTimeout(()=>{c.textContent="⎘"},1500)}))}),n.appendChild(c),i.appendChild(n);let h=(0,a.h)("pre",{className:"sdt-ai-code-pre"});h.appendChild((0,a.h)("code",null,p)),i.appendChild(h),e.appendChild(i);continue}let l=t.match(/^(#{1,3}) (.+)/);if(l){s(`h${l[1].length}`,"sdt-ai-heading",l[2]),d++;continue}if(/^[-*] /.test(t)){let t=(0,a.h)("ul",{className:"sdt-ai-list"});for(;d<r.length&&/^[-*] /.test(r[d]);){let e=(0,a.h)("li");T(e,r[d].replace(/^[-*] /,"")),t.appendChild(e),d++}e.appendChild(t);continue}if(/^\d+\. /.test(t)){let t=(0,a.h)("ol",{className:"sdt-ai-list sdt-ai-list-ordered"});for(;d<r.length&&/^\d+\. /.test(r[d]);){let e=(0,a.h)("li");T(e,r[d].replace(/^\d+\. /,"")),t.appendChild(e),d++}e.appendChild(t);continue}if(""===t.trim()){d++;continue}s("p","sdt-ai-paragraph",t),d++}})(t,e.content),d.appendChild(t);continue}let s=t.toolCallsById.get(e.toolCallId);if(null==s){let t=(0,a.h)("div",{className:"sdt-ai-tool-card"}),o=(0,a.h)("div",{className:"sdt-ai-tool-body"});o.appendChild((0,a.h)("div",{className:"sdt-ai-tool-label"},"Error"));let s=(0,a.h)("pre",{className:"sdt-ai-tool-pre"});s.appendChild((0,a.h)("code",null,`Missing tool call state for ${e.toolCallId}`)),o.appendChild(s),t.appendChild(o),d.appendChild(t);continue}let r=(0,a.h)("div",{className:"sdt-ai-tools"});r.appendChild(function(e){let t=(0,a.h)("div",{className:"sdt-ai-tool-card"}),o=(0,a.h)("button",{className:"sdt-ai-tool-header",type:"button"});if(o.appendChild((0,a.h)("span",{className:"sdt-ai-tool-name"},e.toolName)),o.appendChild((0,a.h)("span",{className:`sdt-ai-tool-status sdt-ai-tool-status-${e.state}`},e.state)),o.appendChild((0,a.h)("span",{className:`sdt-ai-tool-chevron${e.isExpanded?" sdt-ai-tool-chevron-open":""}`},"▾")),o.addEventListener("click",()=>{e.isExpanded=!e.isExpanded,h()}),t.appendChild(o),e.isExpanded){let o=(0,a.h)("div",{className:"sdt-ai-tool-body"});if(null!==e.argsText){o.appendChild((0,a.h)("div",{className:"sdt-ai-tool-label"},"Args"));let t=(0,a.h)("pre",{className:"sdt-ai-tool-pre"});t.appendChild((0,a.h)("code",null,e.argsText)),o.appendChild(t)}if(null!==e.resultText){o.appendChild((0,a.h)("div",{className:"sdt-ai-tool-label"},"error"===e.state?"Error":"Result"));let t=(0,a.h)("pre",{className:"sdt-ai-tool-pre"});t.appendChild((0,a.h)("code",null,e.resultText)),o.appendChild(t)}"running"===e.state&&o.appendChild((0,a.h)("div",{className:"sdt-ai-tool-running"},"Running...")),t.appendChild(o)}return t}(s)),d.appendChild(r)}s.appendChild(d),e.appendChild(s)}n.appendChild(e),n.scrollTop=n.scrollHeight}function v(e){return void 0===e||"function"==typeof e||"symbol"==typeof e?String(e):JSON.stringify(e,null,2)}function x(e){return e.length>0?e[e.length-1]:void 0}function u(e,t,o){let a=e[t];if("string"!=typeof a)throw Error(`SSE event '${String(e.type)}' missing string '${t}': ${o}`);return a}function g(){let e=x(d);if(e?.role!=="assistant")throw Error("Expected current message to be an assistant message");return e}function b(e,t){e.parts.some(e=>"tool"===e.type&&e.toolCallId===t)||e.parts.push({type:"tool",toolCallId:t})}function f(e,t){let o=g(),a=o.toolCallsById.get(e);if(null!=a)return"tool"===a.toolName&&"tool"!==t&&(a.toolName=t),b(o,e),a;let s={id:e,toolName:t,argsText:null,resultText:null,state:"running",errorText:null,isExpanded:!1};return o.toolCallsById.set(e,s),b(o,e),s}async function m(t){if(t.trim()&&!l){d.push({role:"user",content:t.trim()}),d.push({role:"assistant",parts:[],toolCallsById:new Map}),l=!0,h(),N();try{let t,o,a=new AbortController;i=a;let l=await fetch(`${r}/api/latest/ai/query/stream`,{method:"POST",headers:{"Content-Type":"application/json",...(t=e[s.hexclaveAppInternalsSymbol].getConstructorOptions(),o={"X-Hexclave-Access-Type":"client","X-Hexclave-Project-Id":e.projectId},"publishableClientKey"in t&&t.publishableClientKey&&(o["X-Hexclave-Publishable-Client-Key"]=t.publishableClientKey),o)},signal:a.signal,body:JSON.stringify({systemPrompt:"command-center-ask-ai",tools:["docs"],quality:"smart",speed:"slow",messages:d.slice(0,-1).map(e=>({role:e.role,content:[{type:"text",text:"user"===e.role?e.content:e.parts.filter(e=>"text"===e.type).map(e=>e.content).join("")}]}))})});if(!l.ok)throw Error(`AI request failed with status ${l.status}`);if(!l.body)throw Error("AI request returned no response body");let n=l.body.getReader(),c=new TextDecoder,p="";for(;;){let{done:e,value:t}=await n.read();if(e)break;let o=(p+=c.decode(t,{stream:!0})).split("\n");for(let e of(p=o.pop()||"",o)){let t=e.trim();if(""===t||t.startsWith(":"))continue;if(!t.startsWith("data: "))throw Error(`Unexpected SSE line: ${t}`);let o=t.slice(6);if("[DONE]"===o)continue;let a=function(e,t){if(!("object"==typeof e&&null!==e&&!Array.isArray(e)))throw Error(`SSE payload must be an object: ${t}`);return e}(JSON.parse(o),o),s=u(a,"type",o);switch(s){case"start":case"start-step":case"finish-step":case"finish":case"message-metadata":case"text-start":case"text-end":case"reasoning-start":case"reasoning-delta":case"reasoning-end":case"source-url":case"source-document":case"file":break;case"text-delta":!function(e){let t=g(),o=x(t.parts);if(o?.type==="text"){o.content+=e;return}t.parts.push({type:"text",content:e})}(u(a,"delta",o));break;case"tool-input-start":{let e=f(u(a,"toolCallId",o),u(a,"toolName",o));e.state="running",e.resultText=null,e.errorText=null,e.argsText="";break}case"tool-input-delta":{let e=u(a,"toolCallId",o),t=u(a,"inputTextDelta",o),s=f(e,"tool");s.argsText=(s.argsText??"")+t;break}case"tool-input-available":f(u(a,"toolCallId",o),u(a,"toolName",o)).argsText=v(a.input);break;case"tool-input-error":{let e=u(a,"toolCallId",o),t=u(a,"toolName",o),s=u(a,"errorText",o),r=f(e,t);r.state="error",r.errorText=s,r.resultText=s;break}case"tool-output-available":{let e=f(u(a,"toolCallId",o),"tool"),t=!0===a.preliminary;e.resultText=v(a.output),t||(e.state="success");break}case"tool-output-error":{let e=u(a,"toolCallId",o),t=u(a,"errorText",o),s=f(e,"tool");s.state="error",s.errorText=t,s.resultText=t;break}case"tool-output-denied":{let e=f(u(a,"toolCallId",o),"tool");e.state="error",e.errorText="Tool output denied",e.resultText="Tool output denied";break}case"tool-approval-request":{let e=u(a,"toolCallId",o),t=u(a,"approvalId",o),s=f(e,"tool");s.state="running",s.resultText=`Approval requested (${t})`;break}case"abort":{let e="string"==typeof a.reason?a.reason:"unknown reason";throw Error(`AI stream aborted: ${e}`)}case"error":throw Error("string"==typeof a.errorText?`AI stream error: ${a.errorText}`:`AI stream error event: ${o}`);default:if(s.startsWith("data-"))break;throw Error(`Unexpected AI stream event type: ${s}`)}}h()}}catch(o){if(o instanceof DOMException&&"AbortError"===o.name){let e=g();0===e.parts.length&&e.parts.push({type:"text",content:"Stopped."}),h();return}let e=o instanceof Error?o.message:"Unknown AI stream error",t=x(d);t?.role==="assistant"&&(t.parts=[{type:"text",content:e}],t.toolCallsById.clear()),h(),alert(`AI stream failed: ${e}`)}finally{l=!1,i=null,h(),N()}}}let y=(0,a.h)("div",{className:"sdt-ai-input-wrapper"}),w=(0,a.h)("input",{type:"text",className:"sdt-ai-input",placeholder:"Ask anything about Hexclave...",autocomplete:"off",autocorrect:"off",spellcheck:"false"}),k=(0,a.h)("button",{className:"sdt-ai-send-btn",title:"Send"});function N(){w.disabled=!1,w.placeholder=0===d.length?"Ask anything about Hexclave...":"Ask a follow-up...",l?(k.classList.add("sdt-ai-send-btn-active"),k.classList.add("sdt-ai-stop-btn"),k.setAttribute("title","Stop"),(0,a.setHtml)(k,'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>')):(w.value.trim()?k.classList.add("sdt-ai-send-btn-active"):k.classList.remove("sdt-ai-send-btn-active"),k.classList.remove("sdt-ai-stop-btn"),k.setAttribute("title","Send"),(0,a.setHtml)(k,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'))}(0,a.setHtml)(k,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'),w.addEventListener("input",N),w.addEventListener("keydown",e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),l?i?.abort():((0,o.runAsynchronously)(m(w.value)),w.value=""),N())}),k.addEventListener("click",()=>{l?i?.abort():((0,o.runAsynchronously)(m(w.value)),w.value=""),N()});let z=(0,a.h)("button",{className:"sdt-ai-new-chat",title:"New conversation",style:{display:"none"}});return(0,a.setHtml)(z,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'),z.addEventListener("click",()=>{l&&i?.abort(),d.length=0,w.value="",h(),N(),z.style.display="none"}),y.append(w,k),c.append(z,y),t.append(n,c),h(),N(),t}(e));break;case"console":M(i,function(e){let t=(0,a.h)("div",{className:"sdt-console-panel"}),s={error:"sdt-badge-error",info:"sdt-badge-info"},r=(0,a.h)("div",{className:"sdt-console-title"},"Logs"),d=(0,a.h)("div",{className:"sdt-console-actions"}),l=(0,a.h)("button",{className:"sdt-console-action-btn",title:"Copy logs"});(0,a.setHtml)(l,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy');let i=(0,a.h)("button",{className:"sdt-console-action-btn",title:"Export logs"});(0,a.setHtml)(i,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Export');let n=(0,a.h)("button",{className:"sdt-console-action-btn",title:"Clear logs"});(0,a.setHtml)(n,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>Clear'),d.append(l,i,n),t.appendChild((0,a.h)("div",{className:"sdt-console-header"},r,d));let c=(0,a.h)("div",{className:"sdt-console-log-scroll sdt-tab-content-fade"});t.appendChild(c);let p=100;function h(){return[...e.apiLogs.map(e=>({kind:"api",entry:e})),...e.eventLogs.map(e=>({kind:"event",entry:e}))].sort((e,t)=>t.entry.timestamp-e.entry.timestamp)}function v(e){if("api"===e.kind){let t=e.entry,o=void 0!==t.status?` [${t.status}]`:"",a=void 0!==t.duration?` ${t.duration}ms`:"",s=void 0!==t.error?` ${t.error}`:"";return`${new Date(t.timestamp).toISOString()} ${t.method} ${t.url}${o}${a}${s}`}let t=e.entry;return`${new Date(t.timestamp).toISOString()} ${t.type.toUpperCase()} ${t.message}`}function x(){return["=== Hexclave Dev Tool Logs ===",`Generated: ${new Date().toISOString()}`,`Total logs: ${h().length}`,"",...h().map(v)].join("\n")}function u(){let e=c.scrollTop;c.innerHTML="";let t=h();if(p=Math.min(Math.max(p,100),Math.max(t.length,100)),0===t.length){c.innerHTML='<div class="sdt-empty-state"><div class="sdt-empty-state-icon">📋</div><div>No logs recorded yet</div><div style="font-size:12px;color:var(--sdt-text-tertiary)">API calls and auth events will appear here</div></div>';return}let o=(0,a.h)("div",{className:"sdt-log-list"});for(let e of t.slice(0,p))o.appendChild(function(e){if("api"===e.kind){let t=e.entry,o=(0,a.h)("div",{className:"sdt-log-item"});return o.appendChild((0,a.h)("span",{className:"sdt-log-time"},z(t.timestamp))),o.appendChild((0,a.h)("span",{className:`sdt-log-method sdt-log-method-${t.method.toLowerCase()}`},t.method)),o.appendChild((0,a.h)("span",{className:"sdt-log-url"},t.url)),void 0!==t.status&&o.appendChild((0,a.h)("span",{className:`sdt-log-status ${t.status<400?"sdt-log-status-ok":"sdt-log-status-err"}`},String(t.status))),void 0!==t.duration&&o.appendChild((0,a.h)("span",{className:"sdt-log-time"},t.duration+"ms")),o}let t=e.entry,o=(0,a.h)("div",{className:"sdt-log-item"});return o.appendChild((0,a.h)("span",{className:"sdt-log-time"},z(t.timestamp))),o.appendChild((0,a.h)("span",{className:`sdt-badge ${s[t.type]||"sdt-badge-info"}`},t.type)),o.appendChild((0,a.h)("span",{className:"sdt-log-message"},t.message)),o}(e));p<t.length&&o.appendChild((0,a.h)("div",{className:"sdt-log-load-hint"},`${t.length-p} older logs available`)),c.appendChild(o),c.scrollTop=Math.min(e,c.scrollHeight)}function g(){let e=h().length;!(p>=e)&&c.scrollHeight-c.scrollTop-c.clientHeight<=48&&(p=Math.min(p+100,e),u())}c.addEventListener("scroll",g),u(),l.addEventListener("click",()=>{(0,o.runAsynchronously)(navigator.clipboard.writeText(x()).then(()=>{l.textContent="✓ Copied",setTimeout(()=>{(0,a.setHtml)(l,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy')},1500)}))}),i.addEventListener("click",()=>{let e=new Blob([x()],{type:"text/plain;charset=utf-8"}),t=URL.createObjectURL(e),o=(0,a.h)("a",{href:t,download:`hexclave-dev-tool-logs-${new Date().toISOString()}.txt`});document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(t)}),n.addEventListener("click",()=>{p=100,e.clear()});let b=e.subscribe(()=>{u()});return{element:t,cleanup:()=>{c.removeEventListener("scroll",g),b()}}}(l));break;case"dashboard":M(i,function(e){let t=(0,a.h)("div",{className:"sdt-iframe-container"});async function s(){t.innerHTML="",t.appendChild((0,a.h)("div",{className:"sdt-iframe-loading"},"Checking development environment…"));let o=await N(e);if(t.isConnected)if(o)!function e(t,o,s,r="Loading…",d="Unable to load content",l,i){t.innerHTML="",null!=i&&t.appendChild((0,a.h)("div",{className:"sdt-iframe-toolbar"},(0,a.h)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"sdt-iframe-open-link"},i)));let n=(0,a.h)("div",{className:"sdt-iframe-loading"},r);t.appendChild(n);let c=document.createElement("iframe");c.src=o,c.title=s,c.setAttribute("sandbox","allow-scripts allow-same-origin allow-popups allow-forms"),c.style.display="none",c.addEventListener("load",()=>{n.style.display="none",c.style.display="block"}),c.addEventListener("error",()=>{n.style.display="none",t.innerHTML="";let c=(0,a.h)("div",{className:"sdt-iframe-error"});c.appendChild((0,a.h)("div",null,d)),l&&c.appendChild((0,a.h)("div",{style:{fontSize:"12px",color:"var(--sdt-text-tertiary)"}},l));let p=(0,a.h)("button",{className:"sdt-iframe-error-btn"},"Retry");p.addEventListener("click",()=>{e(t,o,s,r,d,l,i)}),c.appendChild(p);let h=(0,a.h)("a",{href:o,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--sdt-accent)",fontSize:"12px",textDecoration:"none"}},"Open in new tab");c.appendChild(h),t.appendChild(c)}),t.appendChild(c)}(t,`${b}/projects/${encodeURIComponent(e.projectId)}`,"Hexclave Dashboard","Loading dashboard…","Unable to load dashboard","The dashboard may require authentication or block framing","Open in New Tab");else{let e,o;t.innerHTML="",e=(0,a.h)("div",{className:"sdt-dashboard-unavailable"}),(o=(0,a.h)("div",{className:"sdt-dashboard-unavailable-text"})).appendChild(document.createTextNode("Navigate to ")),o.appendChild((0,a.h)("a",{className:"sdt-dashboard-unavailable-link",href:f,target:"_blank",rel:"noopener noreferrer"},f)),o.appendChild(document.createTextNode(" to view this project's dashboard")),e.appendChild(o),t.appendChild(e)}}return(0,o.runAsynchronously)(s),t}(e));break;case"support":let n,c;M(i,(n=(0,a.h)("div",{className:"sdt-support-tab"}),c=C(e),n.appendChild(function(){let e=(0,a.h)("div",{className:"sdt-support-feedback-pane"}),t=(0,a.h)("form",{className:"sdt-support-form"}),s="feedback",r="idle",d="",l=(0,a.h)("input",{className:"sdt-support-input",type:"text",placeholder:"Your name"}),i=(0,a.h)("input",{className:"sdt-support-input",type:"email",placeholder:"you@example.com",required:"true"}),n=(0,a.h)("textarea",{className:"sdt-support-textarea",placeholder:"What's on your mind?",required:"true",rows:"5"});function p(){if(t.innerHTML="","success"===r){let e=(0,a.h)("div",{className:"sdt-support-status sdt-support-status-success"}),o=(0,a.h)("div",{className:"sdt-support-status-icon"});(0,a.setHtml)(o,'<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),e.append(o,(0,a.h)("div",{className:"sdt-support-status-title"},"Feedback sent"),(0,a.h)("div",{className:"sdt-support-status-msg"},"Thank you! We'll get back to you soon."));let s=(0,a.h)("button",{className:"sdt-support-submit",style:{marginTop:"12px",width:"auto"}},"Send another");s.addEventListener("click",()=>{r="idle",p()}),e.appendChild(s),t.appendChild(e);return}if("error"===r){let e=(0,a.h)("div",{className:"sdt-support-status sdt-support-status-error"}),o=(0,a.h)("div",{className:"sdt-support-status-icon"});(0,a.setHtml)(o,'<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 6v5m0 3h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'),e.append(o,(0,a.h)("div",{className:"sdt-support-status-title"},"Failed to send"),(0,a.h)("div",{className:"sdt-support-status-msg"},d||"Please try again."));let s=(0,a.h)("button",{className:"sdt-support-submit",style:{marginTop:"12px",width:"auto"}},"Try again");s.addEventListener("click",()=>{r="idle",d="",p()}),e.appendChild(s),t.appendChild(e);return}let e=(0,a.h)("div",{className:"sdt-support-field"}),o=(0,a.h)("label",{className:"sdt-support-label"},"Name ");o.appendChild((0,a.h)("span",{className:"sdt-support-optional"},"optional")),e.append(o,l),t.appendChild(e);let c=(0,a.h)("div",{className:"sdt-support-field"});c.append((0,a.h)("label",{className:"sdt-support-label"},"Email"),i),t.appendChild(c);let h=(0,a.h)("div",{className:"sdt-support-field"});h.append((0,a.h)("label",{className:"sdt-support-label"},"bug"===s?"Description":"Message"),n),n.placeholder="bug"===s?"Steps to reproduce, expected vs. actual behavior…":"What's on your mind?",t.appendChild(h);let v=(0,a.h)("div",{className:"sdt-support-type-cards"}),x=(0,a.h)("button",{type:"button",className:`sdt-support-type-card ${"feedback"===s?"sdt-support-type-card-active":""}`});(0,a.setHtml)(x,'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Feedback</span>'),x.addEventListener("click",()=>{s="feedback",p()});let u=(0,a.h)("button",{type:"button",className:`sdt-support-type-card ${"bug"===s?"sdt-support-type-card-active":""}`});(0,a.setHtml)(u,'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M6 17H3M21 5c0 2.1-1.6 3.8-3.53 4M18 13h4M21 17h-3"/></svg><span>Bug Report</span>'),u.addEventListener("click",()=>{s="bug",p()}),v.append(x,u),t.appendChild(v);let g=(0,a.h)("button",{type:"submit",className:"sdt-support-submit"});(0,a.setHtml)(g,'Submit <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'),g.disabled="submitting"===r,t.appendChild(g);let b=(0,a.h)("div",{className:"sdt-support-channels"});b.innerHTML=`
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
        </a>`,t.appendChild(b),t.insertBefore(b,t.firstChild)}return t.addEventListener("submit",e=>{e.preventDefault(),i.value.trim()&&n.value.trim()&&(0,o.runAsynchronously)(async()=>{r="submitting",p();try{let e=await fetch(`${c}/api/latest/internal/feedback`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:l.value.trim()||void 0,email:i.value.trim(),message:n.value.trim(),feedback_type:s})});if(!e.ok)throw Error(`Failed to send: ${e.status} ${e.statusText}`);let t=await e.json();if(!t.success)throw Error(t.message||"Failed to send feedback");r="success",n.value=""}catch(e){r="error",d=e.message||"An unexpected error occurred"}p()})}),p(),e.appendChild(t),e}()),n))}return S.set(t,i),E.appendChild(i),i}(t);for(let[,e]of(k.setActive(t),S))e.classList.remove("sdt-tab-pane-active");i.classList.add("sdt-tab-pane-active")}function A(e){let o=(0,a.h)("div",{className:`sdt-resize-handle sdt-resize-${e}`}),s=0,r=0,d=0,l=0;o.addEventListener("pointerdown",e=>{e.preventDefault(),null!==c&&(clearTimeout(c),c=null),n.classList.remove("sdt-panel-geometry-animated"),o.setPointerCapture(e.pointerId),s=e.clientX,r=e.clientY,d=n.offsetWidth,l=n.offsetHeight}),o.addEventListener("pointermove",t=>{if(!o.hasPointerCapture(t.pointerId))return;let a=s-t.clientX,i=r-t.clientY;if("left"===e||"top-left"===e){let e=Math.max(400,Math.min(d+a,window.innerWidth-32));n.style.width=e+"px"}if("top"===e||"top-left"===e){let e=Math.max(300,Math.min(l+i,window.innerHeight-80));n.style.height=e+"px"}}),o.addEventListener("pointerup",e=>{o.releasePointerCapture(e.pointerId),t.update({panelWidth:n.offsetWidth,panelHeight:n.offsetHeight})}),n.appendChild(o)}return H(v),A("top"),A("left"),A("top-left"),n.appendChild(x),{element:n,cleanup:()=>{for(let e of(null!==c&&clearTimeout(c),j))e()}}}(e,H,A,$),j.appendChild(I.element))}function _(){if(!I)return;H.update({isOpen:!1});let e=I;I=null,e.cleanup(),e.element.classList.add("sdt-panel-exiting"),setTimeout(()=>{j.contains(e.element)&&j.removeChild(e.element)},150)}let B=function(e){let t={width:36,height:36},o=null;function s(e){null!==o&&(window.clearTimeout(o),o=null),d.classList.toggle("sdt-trigger-position-animated",e),e&&(o=window.setTimeout(()=>{o=null,d.classList.remove("sdt-trigger-position-animated")},180))}function r(e,t){s(t?.animate===!0),v=e,d.style.left=v.left+"px",d.style.top=v.top+"px"}let d=(0,a.h)("button",{className:"sdt-trigger","aria-label":"Toggle Hexclave Dev Tools","data-hexclave-devtool-trigger":"true",title:"Hexclave Dev Tools"}),i=(0,a.h)("span",{className:"sdt-trigger-logo"});(0,a.setHtml)(i,l.HEXCLAVE_LOGO_SVG),d.appendChild(i);let n=function(){try{let e=localStorage.getItem(x);if(!e)return null;let o=JSON.parse(e);if("object"==typeof o&&null!==o&&["top-left","top-right","bottom-left","bottom-right"].includes(String(Reflect.get(o,"corner"))))return o;if("object"==typeof o&&null!==o&&"side"in o&&"offset"in o){let e=String(Reflect.get(o,"side")),t=Number(Reflect.get(o,"offset")),a=window.innerWidth,s=window.innerHeight;return{corner:"right"===e?t<s/2?"top-right":"bottom-right":"left"===e?t<s/2?"top-left":"bottom-left":"top"===e?t<a/2?"top-left":"top-right":t<a/2?"bottom-left":"bottom-right"}}if("object"==typeof o&&null!==o&&"number"==typeof Reflect.get(o,"left")&&"number"==typeof Reflect.get(o,"top"))return h(o,t,{width:window.innerWidth,height:window.innerHeight})}catch{}return null}()??{corner:"bottom-right"},v=p(n,t,{width:window.innerWidth,height:window.innerHeight});r(v);let u=null;function g(){let e=p(n,t,{width:window.innerWidth,height:window.innerHeight});(e.left!==v.left||e.top!==v.top)&&r(e,{animate:!0})}return requestAnimationFrame(()=>{let e=d.getBoundingClientRect();if(e.width>0&&e.height>0){t={width:e.width,height:e.height};let o=p(n,t,{width:window.innerWidth,height:window.innerHeight});(o.left!==v.left||o.top!==v.top)&&r(o,{animate:!0})}}),d.addEventListener("pointerdown",e=>{e.preventDefault(),s(!1),d.setPointerCapture(e.pointerId),u={startX:e.clientX,startY:e.clientY,startLeft:v.left,startTop:v.top,didDrag:!1}}),d.addEventListener("pointermove",e=>{if(!u)return;let o=e.clientX-u.startX,a=e.clientY-u.startY;!u.didDrag&&Math.abs(o)+Math.abs(a)<5||(u.didDrag=!0,r(c({left:u.startLeft+o,top:u.startTop+a},t,{width:window.innerWidth,height:window.innerHeight})))}),d.addEventListener("pointerup",o=>{let a=u;if(u=null,a)if(d.releasePointerCapture(o.pointerId),a.didDrag){r(p(n=h(v,t,{width:window.innerWidth,height:window.innerHeight}),t,{width:window.innerWidth,height:window.innerHeight}),{animate:!0});var s=n;try{localStorage.setItem(x,JSON.stringify(s))}catch{}}else e()}),window.addEventListener("resize",g),{element:d,cleanup:()=>{null!==o&&window.clearTimeout(o),window.removeEventListener("resize",g)}}}(function(){H.get().isOpen?_():(H.update({isOpen:!0}),O())});j.appendChild(B.element),H.get().isOpen&&O();let D=e[s.hexclaveAppInternalsSymbol].addRequestListener(e=>{let t=Date.now();A.addApiLog({id:k(),timestamp:t,method:e.method,url:e.path,status:e.status,duration:e.duration,error:e.error}),e.error?A.addEventLog({id:k(),timestamp:t,type:"error",message:`Network error on ${e.method} ${e.path}: ${e.error}`}):e.status&&e.status>=400&&A.addEventLog({id:k(),timestamp:t,type:"error",message:`API error ${e.status} on ${e.method} ${e.path}`})}),U=!1,P={cleanup:()=>{!U&&(U=!0,(0,a.getGlobalUiInstance)(g)===P&&(0,a.setGlobalUiInstance)(g,null),B.cleanup(),D(),I?.cleanup(),S.parentNode&&S.parentNode.removeChild(S))}};return(0,a.setGlobalUiInstance)(g,P),()=>{P.cleanup()}}],126852)}];

//# sourceMappingURL=packages_next_dist_esm_dev-tool_dev-tool-core_1xy_jsq.js.map