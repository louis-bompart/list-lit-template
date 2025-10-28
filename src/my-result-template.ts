import { LitElement, html } from 'lit'
import { customElement, property, queryAssignedElements } from 'lit/decorators.js'

/**
 * A template component that holds content for my-result.
 * This component simply renders its slotted content.
 *
 * @slot - Template content to be consumed by my-result
 */
@customElement('my-result-template')
export class MyResultTemplate extends LitElement {
  /**
   * Condition used by my-list to choose which templates to apply.
   * Can be 'odd', 'even', a specific number, or undefined for default.
   */
  @property()
  when?: 'odd' | 'even' | number | undefined

  /**
   * Query all assigned template elements from the slot
   */
  @queryAssignedElements({ selector: 'template' })
  assignedTemplates!: HTMLTemplateElement[]

  render() {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-result-template': MyResultTemplate
  }
}
