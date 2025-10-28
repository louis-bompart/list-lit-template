import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { templateContent } from 'lit/directives/template-content.js'
import { createContext, provide } from '@lit/context'
import { MyResultTemplate } from './my-result-template.js'
import './my-result.js'

// Create context for UUIDs
export const uuidsContext = createContext<string[]>('uuids')

/**
 * A list component that renders results using templates.
 * Templates are selected based on matching conditions.
 */
@customElement('my-list')
export class MyList extends LitElement {
  /**
   * Number of results to render
   */
  @property({ type: Number })
  numberOfResults = 0

  @state()
  private get _templates() {
    return this.querySelectorAll('my-result-template')
  }

  /**
   * Array of UUIDs with length equal to numberOfResults
   */
  @state()
  @provide({ context: uuidsContext })
  private _uuids: string[] = []

  connectedCallback() {
    super.connectedCallback()
  }

  willUpdate(changedProperties: Map<string, any>) {
    super.willUpdate(changedProperties)

    // Manage UUID array when numberOfResults changes
    if (changedProperties.has('numberOfResults')) {
      this._updateUUIDs()
    }
  }

  private _updateUUIDs() {
    if (this._uuids.length > this.numberOfResults) {
      this._uuids.length = this.numberOfResults
    } else while (this._uuids.length < this.numberOfResults) {
      this._uuids.push(crypto.randomUUID())
    }
  }

  private _getTemplateForIndex(index: number): MyResultTemplate | null {
    const templates = Array.from(this._templates)

    // Priority 1: Exact number match
    const exactMatch = templates.find((template: MyResultTemplate) => template.when == index)
    if (exactMatch) return exactMatch

    // Priority 2: Odd/even match
    const isOdd = index % 2 === 1
    const oddEvenMatch = templates.find((template: MyResultTemplate) =>
      template.when === (isOdd ? 'odd' : 'even')
    )
    if (oddEvenMatch) return oddEvenMatch

    // Priority 3: Fallback to undefined
    const fallbackMatch = templates.find((template: MyResultTemplate) => template.when === undefined)
    if (fallbackMatch) return fallbackMatch

    // No template found
    return null
  }

  render() {
    const results = []

    for (let i = 0; i < this.numberOfResults; i++) {
      const template = this._getTemplateForIndex(i)

      // Skip if no template matches
      if (!template) continue

      // Find a template element within the my-result-template
      const templateElement = template.assignedTemplates[0];

      if (templateElement) {
        // Use templateContent directive with the actual template element
        results.push(html`
          <li><my-result .index="${i}">${templateContent(templateElement)}</my-result></li>
        `)
      };
    }

    return html`
      <ul>
        ${results}
      </ul>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-list': MyList
  }
}
