import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { createContext, provide } from '@lit/context'

// Create context for index
export const indexContext = createContext<number>('index')

/**
 * A result component that provides its index as context and renders its slot.
 */
@customElement('my-result')
export class MyResult extends LitElement {
  /**
   * Index of this result item
   */
  @property({ type: Number })
  @provide({ context: indexContext })
  index = 0

  render() {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-result': MyResult
  }
}
