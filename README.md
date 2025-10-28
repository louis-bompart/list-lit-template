# 🎯 Lit Template List Demo

A comprehensive demonstration of Lit web components featuring conditional templates, UUID management, and context sharing.

[![Deploy to GitHub Pages](https://github.com/lbompart/list-lit-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/lbompart/list-lit-template/actions/workflows/deploy.yml)

## 🚀 [Live Demo](https://lbompart.github.io/list-lit-template)

## ✨ Features

- **Conditional Templates**: Smart template selection based on index conditions
- **UUID Management**: Stable UUID generation and management for list items
- **Context Sharing**: Efficient data sharing using `@lit/context`
- **Modern Lit Components**: Built with Lit 3 and TypeScript
- **Interactive Demo**: Real-time number of results adjustment

## 🏗️ Architecture

### Components

- **`my-list`**: Main list component that manages templates and UUIDs
- **`my-result-template`**: Template holder with conditional `when` attribute
- **`my-result`**: Wrapper component that provides index context
- **`my-result-component`**: Display component that shows UUIDs

### Template Priority System

1. **Exact Match**: Templates with `when="0"` match index 0 exactly
2. **Odd/Even**: Templates with `when="odd"` or `when="even"` match based on index parity
3. **Fallback**: Templates with no `when` attribute serve as defaults

### Context System

- `my-list` provides UUIDs array via `uuidsContext`
- `my-result` provides index via `indexContext`
- `my-result-component` consumes both contexts to display the correct UUID

## 🔧 Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/lbompart/list-lit-template.git
cd list-lit-template

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Usage Example

```html
<my-list numberOfResults="5">
  <!-- Template for the first item -->
  <my-result-template when="0">
    <template>
      <my-result>
        <div class="first-item">
          <h3>🥇 First Item</h3>
          <my-result-component></my-result-component>
        </div>
      </my-result>
    </template>
  </my-result-template>
  
  <!-- Template for odd indices -->
  <my-result-template when="odd">
    <template>
      <my-result>
        <div class="odd-item">
          <h3>🔮 Odd Item</h3>
          <my-result-component></my-result-component>
        </div>
      </my-result>
    </template>
  </my-result-template>
  
  <!-- Template for even indices -->
  <my-result-template when="even">
    <template>
      <my-result>
        <div class="even-item">
          <h3>🌿 Even Item</h3>
          <my-result-component></my-result-component>
        </div>
      </my-result>
    </template>
  </my-result-template>
  
  <!-- Fallback template -->
  <my-result-template>
    <template>
      <my-result>
        <div class="default-item">
          <h3>⭐ Default Item</h3>
          <my-result-component></my-result-component>
        </div>
      </my-result>
    </template>
  </my-result-template>
</my-list>
```

## 🎨 Key Features

### UUID Management
- UUIDs are stable - existing ones don't change when the list grows/shrinks
- New UUIDs are generated when the list grows
- Excess UUIDs are removed when the list shrinks

### Template Conditional Logic
- Smart template selection based on priority system
- Support for exact index matching, odd/even patterns, and fallbacks
- Efficient template reuse and rendering

### Context-Based Architecture
- Decoupled data sharing without prop drilling
- Type-safe context consumption
- Automatic updates when context values change

## 🛠️ Technologies

- [Lit](https://lit.dev/) - Web component framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [@lit/context](https://lit.dev/docs/data/context/) - Context management
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [GitHub Pages](https://pages.github.com/) - Static site hosting

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.