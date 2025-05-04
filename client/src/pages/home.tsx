import { useMobile } from "@/hooks/use-mobile";
import { Sidebar } from "@/components/layouts/sidebar/Sidebar";
import { MobileNavbar } from "@/components/layouts/mobile-navbar/MobileNavbar";
import { NavigationItem } from "@/components/molecules/navigation-item/NavigationItem";
import { Home, FileText, Settings, Users, Package, Globe, Box, LayoutGrid } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/atoms/button/Button";
import { Card } from "@/components/molecules/card/Card";
import { Typography } from "@/components/atoms/typography/Typography";
import { Link } from "wouter";
import { useState } from "react";
import { FormGroup } from "@/components/molecules/form-group/FormGroup";
import { Badge } from "@/components/atoms/badge/Badge";
import { Input } from "@/components/atoms/input/Input";
import { Icon } from "@/components/atoms/icon/Icon";

export default function HomePage() {
  const isMobile = useMobile();
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("introduction");
  
  const logo = (
    <div className="flex items-center space-x-2">
      <div className="rounded-md bg-primary/10 p-1.5">
        <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3 6h18M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </div>
      <h2 className="text-lg font-semibold">vs-zero-kit</h2>
    </div>
  );
  
  // Generate navigation sections with active state and onClick handlers
  const generateNavSections = () => {
    const sections = [
      {
        title: "Documentation",
        items: [
          { label: "Introduction", icon: Home, id: "introduction" },
          { label: "Installation", icon: FileText, id: "installation" },
          { label: "Theming", icon: Settings, id: "theming" },
        ]
      },
      {
        title: "Atoms",
        items: [
          { label: "Button", icon: Box, id: "button" },
          { label: "Input", icon: Box, id: "input" },
          { label: "Badge", icon: Box, id: "badge" },
          { label: "Icon", icon: Box, id: "icon" },
          { label: "Typography", icon: FileText, id: "typography" },
        ]
      },
      {
        title: "Molecules",
        items: [
          { label: "Card", icon: LayoutGrid, id: "card" },
          { label: "Form Group", icon: Box, id: "form-group" },
          { label: "Navigation Item", icon: Globe, id: "navigation-item" },
          { label: "Tabs", icon: Box, id: "tabs" },
        ]
      },
      {
        title: "Components",
        items: [
          { label: "Alert Dialog", icon: Box, id: "alert-dialog" },
          { label: "Dropdown Menu", icon: Box, id: "dropdown-menu" },
          { label: "Modal", icon: Box, id: "modal" },
          { label: "Toast", icon: Box, id: "toast" },
        ]
      }
    ];

    // Add isActive and onClick to each item
    return sections.map(section => ({
      ...section,
      items: section.items.map(item => ({
        ...item,
        isActive: activeSection === item.id,
        onClick: () => setActiveSection(item.id)
      }))
    }));
  };
  
  const navSections = generateNavSections();
  
  const sidebarFooter = (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          className="h-8 w-8 p-0"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </Button>
        <Button 
          className="h-8 w-8 rounded-md inline-flex items-center justify-center text-primary bg-primary/10 p-0"
          variant="ghost"
        >
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </Button>
      </div>
      <div className="text-xs text-muted-foreground">
        <span>Powered by </span>
        <span className="font-semibold">shadcn</span>
      </div>
    </div>
  );
  
  const navContent = (
    <div className="p-4 space-y-6">
      {navSections.map((section, index) => (
        <div key={index}>
          <div className="mb-2 px-2">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{section.title}</h3>
          </div>
          <div className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <NavigationItem 
                key={itemIndex} 
                icon={item.icon} 
                isActive={item.isActive}
                onClick={item.onClick}
              >
                {item.label}
              </NavigationItem>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
  // Generate content based on the active section
  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return (
          <>
            <div className="mb-8">
              <Typography variant="h1" className="mb-2">Introduction</Typography>
              <Typography variant="lead">
                vs-zero-kit is a starter kit for building component libraries with Storybook, Vite, TypeScript and shadcn UI. This guide will walk you through the basics of getting started.
              </Typography>
              <div className="mt-4">
                <Link href="/components">
                  <Button variant="primary">
                    View Component Showcase
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="space-y-10">
              <section>
                <Typography variant="h2" className="mb-4">Key Features</Typography>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m8 18 3-3-3-3"></path>
                        <path d="m13 12 3-3-3-3"></path>
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                      </svg>
                    </div>
                    <Typography variant="h4" className="mb-1">Vite Powered</Typography>
                    <Typography variant="muted">
                      Lightning-fast development environment with hot module replacement and optimized builds.
                    </Typography>
                  </Card>
                  
                  <Card>
                    <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 2H3v16h5v4l4-4h4l5-5V2zM10 8v3"></path>
                        <path d="M14 8v6"></path>
                      </svg>
                    </div>
                    <Typography variant="h4" className="mb-1">TypeScript Support</Typography>
                    <Typography variant="muted">
                      Full type safety with TypeScript integration for component development and documentation.
                    </Typography>
                  </Card>
                  
                  <Card>
                    <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                    </div>
                    <Typography variant="h4" className="mb-1">shadcn UI</Typography>
                    <Typography variant="muted">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </Typography>
                  </Card>
                </div>
              </section>
              
              <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
                <Typography variant="h2" className="mb-3">Ready to Get Started?</Typography>
                <Typography variant="muted" className="max-w-xl mx-auto mb-6">
                  Start building your component library with vs-zero-kit today. Explore the documentation, customize components, and create beautiful user interfaces.
                </Typography>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button>
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    Read Documentation
                  </Button>
                  <Button variant="outline">
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    View on GitHub
                  </Button>
                </div>
              </section>
            </div>
          </>
        );
      
      case "installation":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Installation</Typography>
              <Typography variant="lead">
                Follow these steps to install and set up the vs-zero-kit component library in your project.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Getting Started</Typography>
              <div className="space-y-4">
                <Typography variant="p">
                  First, create a new Vite project with TypeScript:
                </Typography>
                <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
                  npm create vite@latest my-app -- --template react-ts
                </div>
                
                <Typography variant="p">
                  Clone the vs-zero-kit repository:
                </Typography>
                <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
                  git clone https://github.com/yourusername/vs-zero-kit.git
                </div>
                
                <Typography variant="p">
                  Install dependencies:
                </Typography>
                <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
                  cd vs-zero-kit<br/>
                  npm install
                </div>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Project Structure</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
{`vs-zero-kit/
├── .storybook/        # Storybook configuration
├── public/            # Static assets
├── src/
│   ├── components/    # Component library
│   │   ├── atoms/     # Atomic components
│   │   ├── molecules/ # Composite components
│   │   └── layouts/   # Layout components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── stories/       # Storybook stories
├── package.json
└── README.md`}
              </div>
            </div>
          </div>
        );
        
      case "theming":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Theming</Typography>
              <Typography variant="lead">
                Learn how to customize themes and styles in the vs-zero-kit component library.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Theme Configuration</Typography>
              <Typography variant="p" className="mb-4">
                vs-zero-kit uses CSS variables for theming, built on top of Tailwind CSS. You can customize colors, spacing, and other design tokens.
              </Typography>
              
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm mb-6">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          // ... more colors
        }
      }
    }
  }
}`}
              </div>
              
              <Typography variant="h3" className="mb-2">CSS Variables</Typography>
              <Typography variant="p" className="mb-4">
                The theme is defined using CSS variables in the root stylesheet:
              </Typography>
              
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 243 75% 59%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 262 80% 65%;
  --accent-foreground: 222.2 47.4% 11.2%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 243 75% 59%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  /* ... more dark theme variables */
}`}
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Dark Mode</Typography>
              <Typography variant="p" className="mb-4">
                vs-zero-kit includes a built-in dark mode. Use the ThemeProvider to enable dark mode switching in your application.
              </Typography>
              
              <div className="flex justify-center my-8">
                <Button 
                  className="flex items-center space-x-2" 
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "light" ? (
                    <>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                      <span>Switch to Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                      <span>Switch to Light Mode</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        );
      
      case "button":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Button Component</Typography>
              <Typography variant="lead">
                Buttons allow users to trigger actions or events with a single click.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Variants</Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Sizes</Typography>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary">Default</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" size="icon"><Icon name={Home} /></Button>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">States</Typography>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" isLoading>Loading</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Button } from "@/components/atoms/button/Button";

// Default button
<Button>Click me</Button>

// Primary variant with loading state
<Button variant="primary" isLoading>Processing</Button>

// Small ghost button
<Button variant="ghost" size="sm">Cancel</Button>

// Icon button
<Button variant="primary" size="icon">
  <Icon name={Home} />
</Button>`}
              </div>
            </div>
          </div>
        );
      
      case "input":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Input Component</Typography>
              <Typography variant="lead">
                Input components allow users to enter text or other data.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Variants</Typography>
              <div className="space-y-4 max-w-md">
                <Input placeholder="Default input" />
                <Input placeholder="With value" value="Input value" />
                <Input placeholder="With error" error />
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Types</Typography>
              <div className="space-y-4 max-w-md">
                <Input placeholder="Text input (default)" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Number" type="number" />
                <Input placeholder="Search..." type="search" />
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Input } from "@/components/atoms/input/Input";

// Default input
<Input placeholder="Enter your name" />

// Input with error state
<Input placeholder="Username" error />

// Disabled input with value
<Input value="john.doe@example.com" disabled />

// Password input
<Input type="password" placeholder="Enter password" />`}
              </div>
            </div>
          </div>
        );
      
      case "badge":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Badge Component</Typography>
              <Typography variant="lead">
                Badges are small status descriptors for UI elements.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Variants</Typography>
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Examples</Typography>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge>New</Badge>
                  <Typography variant="p">Feature just released</Typography>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Beta</Badge>
                  <Typography variant="p">This feature is in beta</Typography>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">v1.0.0</Badge>
                  <Typography variant="p">Version information</Typography>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="destructive">Deprecated</Badge>
                  <Typography variant="p">This feature will be removed soon</Typography>
                </div>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Badge } from "@/components/atoms/badge/Badge";

// Default badge
<Badge>New</Badge>

// Secondary variant
<Badge variant="secondary">Beta</Badge>

// Outline variant
<Badge variant="outline">v1.0.0</Badge>

// Destructive variant
<Badge variant="destructive">Deprecated</Badge>`}
              </div>
            </div>
          </div>
        );
      
      case "card":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Card Component</Typography>
              <Typography variant="lead">
                Cards are used to group related content and actions.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Variants</Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <Typography variant="h4" className="mb-2">Default Card</Typography>
                  <Typography variant="p">This is a basic card component with some content.</Typography>
                </Card>
                
                <Card variant="notification">
                  <div className="flex justify-between items-start">
                    <div>
                      <Typography variant="h4" className="mb-2">Notification Card</Typography>
                      <Typography variant="p">You have a new message from the team.</Typography>
                    </div>
                    <Badge>New</Badge>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">With Media</Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="media" mediaContent={
                  <div className="bg-secondary/30 h-40 flex items-center justify-center">
                    <svg className="h-10 w-10 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </div>
                }>
                  <Typography variant="h4" className="mb-2">Media Card</Typography>
                  <Typography variant="p">Card with media content at the top.</Typography>
                </Card>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">With Footer</Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card
                  footer={
                    <div className="flex justify-between items-center">
                      <Typography variant="small" className="text-muted-foreground">Last updated: Today</Typography>
                      <Button size="sm" variant="ghost">View All</Button>
                    </div>
                  }
                >
                  <Typography variant="h4" className="mb-2">Card with Footer</Typography>
                  <Typography variant="p">This card has additional footer content.</Typography>
                </Card>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Card } from "@/components/molecules/card/Card";

// Default card
<Card>
  <Typography variant="h4">Card Title</Typography>
  <Typography variant="p">Card content goes here.</Typography>
</Card>

// Card with media
<Card variant="media" mediaContent={<img src="image.jpg" alt="Media" />}>
  <Typography variant="h4">Media Card</Typography>
  <Typography variant="p">Card with media content.</Typography>
</Card>

// Card with footer
<Card
  footer={
    <div className="flex justify-between">
      <span>Footer left</span>
      <Button>Action</Button>
    </div>
  }
>
  <Typography variant="h4">Card with Footer</Typography>
  <Typography variant="p">Card content goes here.</Typography>
</Card>`}
              </div>
            </div>
          </div>
        );
      
      case "form-group":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Form Group Component</Typography>
              <Typography variant="lead">
                Form Groups combine labels, inputs, and help text for form controls.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Variants</Typography>
              <div className="space-y-4 max-w-md">
                <FormGroup
                  id="name"
                  label="Name"
                  placeholder="Enter your name"
                />
                
                <FormGroup
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  helpText="We'll never share your email with anyone else."
                />
                
                <FormGroup
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                />
                
                <FormGroup
                  id="error-field"
                  label="Username"
                  placeholder="Choose a username"
                  error="This username is already taken."
                />
                
                <FormGroup
                  id="disabled-field"
                  label="Account ID"
                  value="ACC-12345"
                  disabled
                  helpText="Your account ID cannot be changed."
                />
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">With Textarea</Typography>
              <div className="space-y-4 max-w-md">
                <FormGroup
                  id="bio"
                  label="Biography"
                  as="textarea"
                  placeholder="Tell us about yourself"
                  helpText="Keep it brief and to the point."
                />
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { FormGroup } from "@/components/molecules/form-group/FormGroup";

// Basic form group
<FormGroup
  id="name"
  label="Name"
  placeholder="Enter your name"
/>

// With help text
<FormGroup
  id="email"
  label="Email"
  type="email"
  placeholder="Enter your email"
  helpText="We'll never share your email with anyone else."
/>

// With error message
<FormGroup
  id="username"
  label="Username"
  placeholder="Choose a username"
  error="This username is already taken."
/>

// With textarea
<FormGroup
  id="bio"
  label="Biography"
  as="textarea"
  placeholder="Tell us about yourself"
  helpText="Keep it brief and to the point."
/>`}
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Component Documentation</Typography>
              <Typography variant="lead">
                Select a component from the sidebar to view its documentation and examples.
              </Typography>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg text-center">
              <svg className="h-16 w-16 mx-auto mb-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <Typography variant="h4" className="mb-2">Component Not Found</Typography>
              <Typography variant="p" className="max-w-md mx-auto">
                The selected component documentation is not available yet. Please check back later or choose another component from the sidebar.
              </Typography>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (desktop) */}
      <div className="hidden md:block md:w-64 lg:w-72">
        <Sidebar
          logo={logo}
          version="0.1.0"
          navSections={navSections}
          footer={sidebarFooter}
        />
      </div>
      
      {/* Mobile navigation */}
      {isMobile && (
        <MobileNavbar
          logo={logo}
          navContent={navContent}
        />
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main toolbar (desktop) */}
        <header className="hidden md:flex sticky top-0 bg-background z-10 border-b h-14 items-center px-6">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="h-8 px-2 text-sm">
                <svg className="h-4 w-4 mr-1.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="text-muted-foreground">Search...</span>
                <span className="ml-4 text-xs text-muted-foreground">⌘K</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="hidden lg:flex mr-2 text-sm text-muted-foreground">
                Powered by Storybook + Vite + TypeScript + shadcn
              </div>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2v6h-6"></path>
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                  <path d="M3 12a9 9 0 0 0 6.7 15L13 21"></path>
                  <path d="M13 21h8"></path>
                  <path d="M21 16v5"></path>
                </svg>
              </Button>
              <Button 
                variant="ghost" 
                className="h-8 w-8 p-0"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </header>
        
        {/* Content area */}
        <main className="flex-1 overflow-y-auto pt-14 md:pt-0 pb-8">
          <div className="container max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}