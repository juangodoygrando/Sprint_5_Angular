# Cofferoasters
 
This project is a web application developed in Angular 19 that allows users to create personalized coffee subscription plans. It features an interactive step-by-step wizard where users can customize their coffee preferences, view real-time pricing, and complete their order through a modern, responsive interface.
 
<!-- Add your demo screenshots here -->
<!-- ![Desktop View](public/assets/demo/demo-desktop.png) -->
<!-- ![Mobile View](public/assets/demo/demo-mobile.png) -->
 
## Objectives
 
- **Interactive Subscription Wizard:** Implement a 5-step wizard that guides users through creating their perfect coffee subscription plan.
 
- **Real-Time Price Calculation:** Dynamic pricing that updates instantly based on user selections (brew method, bean type, quantity, and delivery frequency).
 
- **Modern Angular Architecture:** Built with Angular 19 using standalone components, signals for state management, and the latest control flow syntax.
 
- **Responsive Design:** Fully responsive interface using Tailwind CSS that adapts seamlessly across mobile, tablet, and desktop devices.
 
- **Type-Safe Development:** Strict TypeScript implementation with well-defined interfaces for all data structures.
 
- **Unit Testing:** Comprehensive test coverage for critical business logic including pricing calculations and order validation.
 
## Features
 
### Coffee Plan Customization
- **Brew Method:** Choose between Capsule, Filter, or Espresso
- **Bean Type:** Select Single Origin, Decaf, or Blended
- **Bag Size:** Pick 250g, 500g, or 1000g quantities
- **Grind Level:** Wholebean, Filter, or Cafetiére (disabled for Capsule)
- **Delivery Frequency:** Weekly, Every 2 weeks, or Monthly
 
### Smart Features
- Automatic grind level disable when Capsule is selected
- Real-time order summary with formatted description
- Modal confirmation with complete order review
- Instant price calculation based on all selections
 
## Folder Structure
 
```
cofferoasters/
│
├── public/                      # Static assets
│   └── assets/
│       ├── shared/              # Shared icons and logos
│       │   ├── mobile/          # Mobile-specific assets
│       │   └── desktop/         # Desktop-specific assets
│       ├── home/                # Home page assets
│       ├── about/               # About page assets
│       └── plan/                # Create plan page assets
│
├── src/                         # Main source code
│   ├── app/
│   │   ├── core/                # Core modules
│   │   │   └── layout/          # Layout components
│   │   │       ├── header/      # Navigation header
│   │   │       └── footer/      # Page footer
│   │   │
│   │   ├── features/            # Feature modules
│   │   │   └── create-plan/     # Create plan feature
│   │   │       ├── pages/       # Page components
│   │   │       ├── components/  # Feature-specific components
│   │   │       └── create-plan-stepper-section/
│   │   │           ├── stepper/       # Main stepper container
│   │   │           ├── step-item/     # Sidebar navigation
│   │   │           ├── step-content/  # Accordion content
│   │   │           └── step-summary/  # Order summary
│   │   │
│   │   ├── shared/              # Shared resources
│   │   │   ├── components/      # Reusable components
│   │   │   │   ├── modal/       # Generic modal component
│   │   │   │   └── button-create-plan/
│   │   │   └── interfaces/      # TypeScript interfaces
│   │   │
│   │   ├── services/            # Application services
│   │   │   ├── coffee-plan.service.ts    # Order state management
│   │   │   ├── pricing.service.ts        # Price calculations
│   │   │   ├── wizard.service.ts         # Wizard navigation
│   │   │   └── test/                     # Service tests
│   │   │
│   │   ├── data/                # Static data
│   │   │   └── steppers.data.ts # Stepper configuration
│   │   │
│   │   ├── app.component.ts     # Root component
│   │   ├── app.config.ts        # App configuration
│   │   └── app.routes.ts        # Route definitions
│   │
│   ├── index.html               # Main HTML file
│   ├── styles.css               # Global styles
│   └── _redirects               # Netlify SPA configuration
│
├── angular.json                 # Angular CLI configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── eslint.config.js             # ESLint configuration
└── package.json                 # Dependencies and scripts
```
 
## Technologies Used
 
- **Angular 19** - Latest version with standalone components and signals
- **TypeScript 5.7** - Strict type checking enabled
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Karma + Jasmine** - Unit testing framework
- **ESLint** - Code linting with Angular-specific rules
- **Netlify** - Deployment configuration included
 
## Architecture Highlights
 
### State Management with Signals
The application uses Angular Signals for reactive state management:
```typescript
// CoffeePlanService
orderState = signal<OrderState>({
  brewMethod: null,
  beanType: null,
  bagSize: null,
  grindLevel: null,
  delivery: null
});
 
isOrderComplete = computed(() => /* validation logic */);
```
 
### Standalone Components
All components are standalone, eliminating the need for NgModules:
```typescript
@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [StepItemComponent, StepContentComponent, ...],
})
```
 
### Modern Control Flow
Using Angular's new control flow syntax:
```html
@if (condition) {
  <div>Content</div>
}
 
@for (item of items; track item.id) {
  <app-item [data]="item" />
}
```
 
## Installation and Usage
 
1. **Clone the repository:**
   ```bash
   git clone https://github.com/juangodoygrando/Sprint_5_Angular.git
   cd Sprint_5_Angular
   ```
 
2. **Install the dependencies:**
   ```bash
   npm install
   ```
 
3. **Start the development server:**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`
 
4. **Run unit tests:**
   ```bash
   npm test
   ```
 
5. **Run linting:**
   ```bash
   npm run lint
   ```
 
6. **Build for production:**
   ```bash
   npm run build
   ```
   Build artifacts will be stored in the `dist/cofferoasters` directory.
 
## Main Dependencies
 
| Package | Version | Description |
|---------|---------|-------------|
| @angular/core | ^19.2.0 | Angular core framework |
| @angular/router | ^19.2.0 | Angular routing |
| rxjs | ~7.8.0 | Reactive extensions |
| tailwindcss | ^3.4.1 | CSS framework |
| typescript | ~5.7.2 | TypeScript compiler |
| karma | ~6.4.0 | Test runner |
| jasmine-core | ~5.6.0 | Testing framework |
 
(See `package.json` for the complete list of dependencies)
 
## Services
 
### CoffeePlanService
Manages the coffee subscription order state:
- `set(step, value)` - Updates a specific field
- `get()` - Returns current order state
- `isOrderComplete()` - Validates if all required fields are filled
- `getSelectedOptions()` - Returns detailed option information
 
### PricingService
Handles dynamic price calculation:
- `calculatePrice()` - Computes total price based on selections
- Considers brew method, bean type, bag size, and delivery frequency
- Includes delivery fee calculations
 
### WizardService
Controls wizard navigation:
- `currentStep` - Currently active step
- `setCurrentStep(step)` - Navigate to a specific step
 
## Testing
 
The project includes unit tests for critical business logic:
 
```bash
# Run all tests
npm test
 
# Tests cover:
# - Order state initialization
# - State updates and validation
# - Price calculation accuracy
# - Special cases (Capsule without grind level)
```
 
Test files are located in `src/app/services/test/`.
 
## Deployment
 
The project is configured for Netlify deployment:
- `_redirects` file handles SPA routing
- Production build optimized with budget limits
- Assets are hashed for cache busting
 
## Notes
 
- The application requires a modern browser with ES2022 support.
- Tailwind CSS is configured with custom fonts (Barlow and Fraunces).
- All routes redirect to `/create-plan` by default.
 
 👉 [Go to site](https://coffeeroasters-sprint5.netlify.app/create-plan)
---
 
Enjoy using Cofferoasters!
