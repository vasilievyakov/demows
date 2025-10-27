# ⚡ Value vs Effort Prioritizer

Simple web prototype for prioritizing ideas based on Value and Effort assessments.

## Features

- **Add Ideas**: Input idea name, value (1-10), and effort (1-10)
- **Auto-Categorization**: Ideas are automatically categorized into:
  - 🟢 Quick Win (High Value, Low Effort)
  - 🔵 Strategic (High Value, High Effort)
  - 🟡 Time-Permitting (Low Value, Low Effort)
  - 🔴 Discard (Low Value, High Effort)
- **Visualization**: Interactive 2x2 matrix showing all ideas
- **Persistent Storage**: Data saved in localStorage
- **Edit & Delete**: Remove unwanted ideas

## Tech Stack

- React 18 + Vite
- TypeScript
- Tailwind CSS
- Recharts (for matrix visualization)
- Lucide React (icons)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Usage

1. Enter an idea name in the form
2. Adjust Value slider (1-10)
3. Adjust Effort slider (1-10)
4. Click "Add Idea"
5. View the idea in the table and on the matrix
6. Ideas are automatically saved to localStorage

## Priority Matrix Rules

| Category | Value | Effort | Action |
|----------|-------|--------|--------|
| Quick Win | ≥ 6 | ≤ 5 | Do immediately |
| Strategic | ≥ 6 | > 5 | Plan carefully |
| Time-Permitting | < 6 | ≤ 5 | Do when available |
| Discard | < 6 | > 5 | Skip or rethink |

