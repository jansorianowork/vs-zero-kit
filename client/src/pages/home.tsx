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

// Mock TabsComponent for the content sections
const TabsComponent = ({ tabs, defaultValue }: { 
  tabs: {value: string, label: string, content: React.ReactNode, disabled?: boolean}[],
  defaultValue: string 
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return (
    <div>
      <div className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab.value}
            className={`px-4 py-2 ${activeTab === tab.value ? 'border-b-2 border-primary font-medium' : 'text-muted-foreground'} ${tab.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => !tab.disabled && setActiveTab(tab.value)}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find(tab => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

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
                  defaultValue="ACC-12345"
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
        
      case "navigation-item":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Navigation Item Component</Typography>
              <Typography variant="lead">
                Navigation items are used for building menus, sidebars, and navigation components.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Variants</Typography>
              <div className="w-64 border rounded-md p-4 space-y-1 mb-4">
                <NavigationItem icon={Home} isActive>Dashboard</NavigationItem>
                <NavigationItem icon={Users}>Users</NavigationItem>
                <NavigationItem icon={Package}>Products</NavigationItem>
                <NavigationItem icon={FileText}>Reports</NavigationItem>
                <div className="h-px bg-border my-2"></div>
                <NavigationItem icon={Settings}>Settings</NavigationItem>
              </div>
              
              <Typography variant="p" className="mb-6">
                Navigation items can be used in sidebars, mobile menus, and other navigation components. They support icons, active states, and dividers.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Interactive Example</Typography>
              <div className="w-64 border rounded-md p-4 space-y-1 mb-4">
                <NavigationItem 
                  icon={Home} 
                  isActive={true}
                  onClick={() => alert("Dashboard clicked")}
                >
                  Dashboard
                </NavigationItem>
                <NavigationItem 
                  icon={Users}
                  onClick={() => alert("Users clicked")}
                >
                  Users
                </NavigationItem>
                <NavigationItem 
                  icon={Package}
                  onClick={() => alert("Products clicked")}
                >
                  Products
                </NavigationItem>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { NavigationItem } from "@/components/molecules/navigation-item/NavigationItem";
import { Home, Users, Settings } from "lucide-react";

// Default navigation item
<NavigationItem icon={Home}>
  Dashboard
</NavigationItem>

// Active navigation item
<NavigationItem icon={Users} isActive>
  Users
</NavigationItem>

// With click handler
<NavigationItem 
  icon={Settings}
  onClick={() => handleNavigation('settings')}
>
  Settings
</NavigationItem>`}
              </div>
            </div>
          </div>
        );
        
      case "tabs":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Tabs Component</Typography>
              <Typography variant="lead">
                Tabs organize content into separate views where only one view is visible at a time.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Example</Typography>
              <div className="border rounded-md p-4">
                <TabsComponent
                  tabs={[
                    {
                      value: "account",
                      label: "Account",
                      content: (
                        <div className="p-4 border rounded-md mt-4">
                          <Typography variant="h4" className="mb-2">Account Settings</Typography>
                          <Typography variant="p">Manage your account settings and preferences.</Typography>
                        </div>
                      ),
                    },
                    {
                      value: "security",
                      label: "Security",
                      content: (
                        <div className="p-4 border rounded-md mt-4">
                          <Typography variant="h4" className="mb-2">Security Settings</Typography>
                          <Typography variant="p">Update your security settings and password.</Typography>
                        </div>
                      ),
                    },
                    {
                      value: "disabled",
                      label: "API",
                      disabled: true,
                      content: (
                        <div className="p-4 border rounded-md mt-4">
                          <Typography variant="h4" className="mb-2">API Settings</Typography>
                          <Typography variant="p">This tab is disabled.</Typography>
                        </div>
                      ),
                    },
                  ]}
                  defaultValue="account"
                />
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { TabsComponent } from "@/components/molecules/tabs/TabsComponent";

// Basic tabs
<TabsComponent
  tabs={[
    {
      value: "tab1",
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      value: "tab2",
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      value: "tab3",
      label: "Tab 3",
      disabled: true,
      content: <div>Content for Tab 3</div>,
    },
  ]}
  defaultValue="tab1"
/>`}
              </div>
            </div>
          </div>
        );
        
      case "icon":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Icon Component</Typography>
              <Typography variant="lead">
                The Icon component provides a consistent way to display icons across your application.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Examples</Typography>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <Icon name={Home} />
                  <span className="text-xs mt-1">Home</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Settings} />
                  <span className="text-xs mt-1">Settings</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Users} />
                  <span className="text-xs mt-1">Users</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={FileText} />
                  <span className="text-xs mt-1">File</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Package} />
                  <span className="text-xs mt-1">Package</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Globe} />
                  <span className="text-xs mt-1">Globe</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Box} />
                  <span className="text-xs mt-1">Box</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={LayoutGrid} />
                  <span className="text-xs mt-1">Grid</span>
                </div>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Sizes</Typography>
              <div className="flex flex-wrap gap-8 mb-6">
                <div className="flex flex-col items-center">
                  <Icon name={Users} size="sm" />
                  <span className="text-xs mt-1">Small</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Users} size="md" />
                  <span className="text-xs mt-1">Medium</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Users} size="lg" />
                  <span className="text-xs mt-1">Large</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon name={Users} size="xl" />
                  <span className="text-xs mt-1">Extra Large</span>
                </div>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Icon } from "@/components/atoms/icon/Icon";
import { Home, Settings, Users } from "lucide-react";

// Default icon
<Icon name={Home} />

// Icon with custom size
<Icon name={Settings} size="lg" />

// Icon with custom className
<Icon name={Users} className="text-primary" />`}
              </div>
            </div>
          </div>
        );
        
      case "typography":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Typography Component</Typography>
              <Typography variant="lead">
                The Typography component provides consistent text styling across your application.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Headings</Typography>
              <div className="space-y-4">
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="h4">Heading 4</Typography>
                <Typography variant="h5">Heading 5</Typography>
                <Typography variant="h6">Heading 6</Typography>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Text Styles</Typography>
              <div className="space-y-6">
                <div>
                  <Typography variant="p" className="mb-2">
                    This is a paragraph. It can be used for standard text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Paragraph variant: p
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="lead" className="mb-2">
                    This is a lead paragraph. It stands out from regular text and is often used for introductions or important information.
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Paragraph variant: lead
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="large" className="mb-2">
                    This is large text. It's bigger than regular paragraph text but not as prominent as headings.
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Paragraph variant: large
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="small" className="mb-2">
                    This is small text. It's used for less important information or metadata.
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Paragraph variant: small
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="muted" className="mb-2">
                    This is muted text. It has reduced emphasis and is often used for secondary information.
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Paragraph variant: muted
                  </Typography>
                </div>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Special Formats</Typography>
              <div className="space-y-6">
                <div>
                  <Typography variant="blockquote" className="mb-2">
                    This is a blockquote. It's used to highlight quotes or important passages.
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Paragraph variant: blockquote
                  </Typography>
                </div>
                
                <div>
                  <Typography variant="code" className="mb-2">
                    const code = "This is code formatting";
                  </Typography>
                  <Typography variant="small" className="text-muted-foreground">
                    Paragraph variant: code
                  </Typography>
                </div>
              </div>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Typography } from "@/components/atoms/typography/Typography";

// Basic usage with different variants
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="p">Normal paragraph text</Typography>
<Typography variant="lead">Lead paragraph</Typography>
<Typography variant="small">Small text</Typography>
<Typography variant="muted">Muted text</Typography>
<Typography variant="blockquote">Blockquote text</Typography>
<Typography variant="code">Code formatting</Typography>

// With custom element
<Typography variant="h1" as="div">
  This is a div with h1 styling
</Typography>`}
              </div>
            </div>
          </div>
        );
      
      case "alert-dialog":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Alert Dialog Component</Typography>
              <Typography variant="lead">
                Alert Dialogs are used to get the user's confirmation for a destructive action or important decision.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Example</Typography>
              <div className="flex justify-center mb-8">
                <Button onClick={() => alert("This would open an alert dialog")}>
                  Open Alert Dialog
                </Button>
              </div>
              
              <Typography variant="p" className="mb-4">
                Alert dialogs interrupt the user flow with a focused message and action. 
                They are typically used for critical actions that require explicit confirmation, 
                such as deleting data or disconnecting an account.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Button } from "@/components/atoms/button/Button";

function DeleteUserDialog() {
  return (
    <>
      <Button onClick={() => setShowDialog(true)}>
        Delete Account
      </Button>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Delete Account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}`}
              </div>
            </div>
          </div>
        );
        
      case "dropdown-menu":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Dropdown Menu Component</Typography>
              <Typography variant="lead">
                Dropdown menus display a list of actions or options that users can choose from.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Example</Typography>
              <div className="flex justify-center mb-8">
                <Button onClick={() => alert("This would open a dropdown menu")}>
                  Open Menu
                </Button>
              </div>
              
              <Typography variant="p" className="mb-4">
                Dropdown menus appear when users click on a button or trigger element. 
                They provide a list of options or actions that the user can select from.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Button } from "@/components/atoms/button/Button";

function UserActionsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => handleEdit()}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleViewProfile()}>
          View Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleDelete()} className="text-destructive">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
              </div>
            </div>
          </div>
        );
      
      case "modal":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Modal Component</Typography>
              <Typography variant="lead">
                Modals display content that temporarily blocks interactions with the main view.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Example</Typography>
              <div className="flex justify-center mb-8">
                <Button onClick={() => alert("This would open a modal")}>
                  Open Modal
                </Button>
              </div>
              
              <Typography variant="p" className="mb-4">
                Modals appear on top of the main content and disable interaction with the rest 
                of the page until they are closed. They are commonly used for focusing user 
                attention on important content, forms, or actions.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Button } from "@/components/atoms/button/Button";

function CreateUserModal() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Create User
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New User</DialogTitle>
            <DialogDescription>
              Fill out the form below to create a new user account.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <form onSubmit={handleSubmit}>
              {/* Form fields go here */}
            </form>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleCreate}>
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}`}
              </div>
            </div>
          </div>
        );
        
      case "toast":
        return (
          <div className="space-y-8">
            <div>
              <Typography variant="h1" className="mb-2">Toast Component</Typography>
              <Typography variant="lead">
                Toasts provide brief notifications or feedback messages to users.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Example</Typography>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button onClick={() => alert("Success toast would appear")}>
                  Show Success Toast
                </Button>
                <Button variant="outline" onClick={() => alert("Error toast would appear")}>
                  Show Error Toast
                </Button>
              </div>
              
              <Typography variant="p" className="mb-4">
                Toasts appear temporarily and automatically disappear after a few seconds. 
                They are used to provide feedback about operations without interrupting the 
                user's workflow.
              </Typography>
            </div>
            
            <div>
              <Typography variant="h2" className="mb-4">Usage</Typography>
              <div className="bg-secondary/30 p-4 rounded-md font-mono text-sm">
{`import { Button } from "@/components/atoms/button/Button";
import { useToast } from "@/hooks/use-toast";

function ToastExample() {
  const { toast } = useToast();
  
  const showSuccessToast = () => {
    toast({
      title: "Success!",
      description: "Your changes have been saved.",
      variant: "default",
    });
  };
  
  const showErrorToast = () => {
    toast({
      title: "Error!",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  };
  
  return (
    <div className="flex space-x-4">
      <Button onClick={showSuccessToast}>
        Show Success Toast
      </Button>
      <Button variant="outline" onClick={showErrorToast}>
        Show Error Toast
      </Button>
    </div>
  );
}`}
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