import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { consume } from '@lit/context'
import { uuidsContext } from './my-list.js'
import { indexContext } from './my-result.js'

/**
 * A component that displays a button with the UUID matching its position in the list.
 */
@customElement('my-result-component')
export class MyResultComponent extends LitElement {
  /**
   * Array of UUIDs from the list context
   */
  @consume({ context: uuidsContext })
  uuids!: string[]

  /**
   * Index of this result from the result context
   */
  @consume({ context: indexContext })
  index!: number

  @property({type: String})
  noUuidText = 'no-uuid'

  render() {
    const uuid = this.uuids[this.index] || this.noUuidText

    return html`
      <button part="button">${uuid}</button>
    `
  }

  static styles = css`
    button {
      padding: 0.75rem 1.25rem;
      border: 1px solid #cbd5e0;
      border-radius: 6px;
      background: #ffffff;
      color: #4a5568;
      cursor: pointer;
      font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
      font-size: 0.85rem;
      font-weight: 500;
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      min-width: 280px;
      text-align: left;
    }
    
    button:hover {
      background: #f7fafc;
      border-color: #a0aec0;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    }
    
    button:active {
      transform: translateY(0);
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      background: #edf2f7;
    }
    
    button:focus {
      outline: none;
      border-color: #4299e1;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-result-component': MyResultComponent
  }
}
