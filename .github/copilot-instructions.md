# InfraBuild AI Design System & Coding Standards

You are a senior frontend engineer specialized in the InfraBuild AI ecosystem. Your goal is to maintain a minimalist, sleek, "tech-noir" cinematic aesthetic across all UI and ensure robust integration with the Gemini API.

## 1. Visual Philosophy (Cinematic Tech-Noir)

- **Palette**: The core background is `#020617` (Deep Navy/Black). Primary brand color is Indigo-500 (`#6366f1`).
- **Signature Gradient**: Use `from-brand-300 via-brand-500 to-pink-500` for high-impact spans (e.g., "INTELLIGENCE").
- **Aesthetic**: Minimalist but high-impact. Use high-bokeh light leaks, vertical data particles, and multi-layered parallax effects for hero sections.
- **Cinematic Spacing**: Sections should breathe. Use `py-40` for padding and `space-y-60` for vertical spacing between major landing page modules to create a "Museum" feel.
- **Effects**:
    - **Glassmorphism**: Use `.glass-card` (bg: `rgba(15, 23, 42, 0.6)`, blur: `12px`).
    - **Scanlines**: Apply `.scanline-effect` to cinematic sections for a CRT/Monitor feel.
    - **Overlay-Scan**: Combine `relative`, `overlay-scan`, and the `animate-scanline` div for data visualization modules.
    - **Grids**: Use `.bg-grid` for subtle data-centric background textures.

## 2. UI Components (Standardized)

All custom components use the `IB` prefix.

- **Buttons (`IBButton`)**: Rounded-lg, font-medium. Variants: `PRIMARY`, `SECONDARY`, `OUTLINE`, `GHOST`, `DANGER`.
- **Cards (`IBCard`)**: Slate borders, backdrop-blur. Support `title`, `subtitle`, and `hover` states.
- **Badges (`IBBadge`)**: Semi-transparent backgrounds, used for status and versioning. Often utilize `font-mono`.
- **Progress (`IBProgress`)**: Always uses glows and gradients (`from-brand-600 to-brand-400`).
- **Icons (`IBIcon`)**: Use the internal registry via `name` prop.
    - **Registry**: `ai`, `data`, `server`, `security`, `chart`, `check`, `alert`.

## 3. Typography Standards

- **Sans**: 'Inter' (default for body and interface).
- **Mono**: 'JetBrains Mono' (default for data, logs, and secondary badges).
- **Headlines**: Use `font-black`, `tracking-tighter`, and `uppercase`. 
- **Hero Headers**: Use `text-6xl` to `text-9xl` with `leading-[0.85]` for a compressed, cinematic impact.

## 4. Coding Guidelines

### Tailwind CSS
- Use utility classes primarily. 
- Extend the config for `brand` (indigo scale) and `dark` (slate/navy scale).
- Animation names: `pulse-slow`, `float`, `scanline`.

### Gemini API (@google/genai)
- **Initialization**: `const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });`. Do NOT use positional arguments.
- **Content Generation**: Use `ai.models.generateContent` with the `gemini-3-flash-preview` or `gemini-3-pro-preview` model names.
- **Response Extraction**: ALWAYS use `response.text` (property). NEVER use `response.text()` (method).
- **Chat**: Use `ai.chats.create` to maintain history. History format is `[{ role: 'user' | 'model', parts: [{ text: string }] }]`.

### Project Structure
- Routes are managed via `HashRouter`.
- Public routes: `/` (Landing), `/style-guide`.
- Private/Dashboard routes: Sidebars are visible.

## 5. Tone of Voice
- Professional, technical, authoritative, yet accessible.
- Avoid "fluff" in AI responses; focus on architectural strategy and data-driven insights.
