import { useMobile } from "@/hooks/use-mobile";
import { Sidebar } from "@/components/layouts/sidebar/Sidebar";
import { MobileNavbar } from "@/components/layouts/mobile-navbar/MobileNavbar";
import { NavigationItem } from "@/components/molecules/navigation-item/NavigationItem";
import { Home, FileText, Settings, Users, Package, Globe, Box, LayoutGrid } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/atoms/button/Button";
import { Card } from "@/components/molecules/card/Card";
import { Typography } from "@/components/atoms/typography/Typography";

export default function HomePage() {
  const isMobile = useMobile();
  const { theme, setTheme } = useTheme();
  
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
  
  const navSections = [
    {
      title: "Documentation",
      items: [
        { label: "Introduction", icon: Home, isActive: true },
        { label: "Installation", icon: FileText },
        { label: "Theming", icon: Settings },
      ]
    },
    {
      title: "Atoms",
      items: [
        { label: "Button", icon: Box },
        { label: "Input", icon: Box },
        { label: "Badge", icon: Box },
        { label: "Icon", icon: Box },
        { label: "Typography", icon: FileText },
      ]
    },
    {
      title: "Molecules",
      items: [
        { label: "Card", icon: LayoutGrid },
        { label: "Form Group", icon: Box },
        { label: "Navigation Item", icon: Globe },
        { label: "Tabs", icon: Box },
      ]
    },
    {
      title: "Components",
      items: [
        { label: "Alert Dialog", icon: Box },
        { label: "Dropdown Menu", icon: Box },
        { label: "Modal", icon: Box },
        { label: "Toast", icon: Box },
      ]
    }
  ];
  
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
                hasDivider={item.hasDivider}
              >
                {item.label}
              </NavigationItem>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
  
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
              <Button variant="ghost" className="h-8 w-8 p-0">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </Button>
            </div>
          </div>
        </header>
        
        {/* Content area */}
        <main className="flex-1 overflow-y-auto pt-14 md:pt-0 pb-8">
          <div className="container max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="mb-8">
              <Typography variant="h1" className="mb-2">Introduction</Typography>
              <Typography variant="lead">
                vs-zero-kit is a starter kit for building component libraries with Storybook, Vite, TypeScript and shadcn UI. This guide will walk you through the basics of getting started.
              </Typography>
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
                  
                  <Card>
                    <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <Typography variant="h4" className="mb-1">Responsive Design</Typography>
                    <Typography variant="muted">
                      Mobile, tablet, and desktop friendly components with adaptive layouts.
                    </Typography>
                  </Card>
                  
                  <Card>
                    <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <Typography variant="h4" className="mb-1">Documentation</Typography>
                    <Typography variant="muted">
                      Comprehensive component documentation with usage examples and props.
                    </Typography>
                  </Card>
                  
                  <Card>
                    <div className="rounded-full w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 2v6h6"></path>
                        <path d="M3 13v6h6"></path>
                        <path d="M13 2h6v6"></path>
                        <path d="M13 15h6v6"></path>
                      </svg>
                    </div>
                    <Typography variant="h4" className="mb-1">Organized Structure</Typography>
                    <Typography variant="muted">
                      Atoms, molecules, and components organization for scalable design systems.
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
          </div>
        </main>
      </div>
    </div>
  );
}
