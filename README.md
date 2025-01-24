# Dashboard

A modern dashboard interface built with Next.js, featuring a clean design, interactive charts, and real-time data visualization.

## Design Approach and Implementation Challenges

### Design Approach
I focused on creating a minimalist yet functional dashboard that prioritizes user experience. The teal-cream color scheme was chosen to create a professional yet welcoming atmosphere. The layout follows a clear hierarchy with the most important information (statistics) displayed prominently, followed by recent activities. The left sidebar provides intuitive navigation while maintaining visual consistency.

### Implementation Challenges
The main challenges included:
- Implementing responsive charts that maintain visual appeal across different screen sizes
- Ensuring consistent styling of SVG icons across different components
- Creating smooth hover animations while maintaining performance

These challenges were overcome through careful component composition, and responsive design practices.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** Iconfax
- **Typography:** Poppins font
- **Design Tool:** Figma

## Design Decisions

The dashboard features a soothing color palette:
- Primary Teal (`#578E7E`): Represents trust and professionalism
- Warm Cream (`#FFFAEC`): Creates a welcoming atmosphere
- Accent Pink (`#FF5789`): Adds visual interest and highlights important elements

The layout prioritizes clarity with:
- Fixed sidebar navigation
- Card-based statistics display
- Clear typography hierarchy
- Ample white space

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/KartikLabhshetwar/Figma-Dashboard-UI
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/         # Reusable UI components
├── constants/         # Global constants
├── data/             # Mock data
└── types/            # TypeScript type definitions
```
## Design

The UI was designed in Figma with a focus on usability and clean aesthetics. View the design file [Figma-link](https://www.figma.com/design/GSEGjogAnRH1RVt36McfGo/Dashboard-UI?node-id=0-1&t=EKITIPrf6PY18Jgi-1).

## Future Improvements

- Add dark mode support
- Implement more interactive charts
- Add user authentication
- Expand analytics features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
