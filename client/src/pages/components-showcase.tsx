import { Card } from "@/components/molecules/card/Card";
import { Badge } from "@/components/atoms/badge/Badge";
import { Button } from "@/components/atoms/button/Button";
import { Icon } from "@/components/atoms/icon/Icon";
import { Typography } from "@/components/atoms/typography/Typography";
import { Input } from "@/components/atoms/input/Input";
import { FormGroup } from "@/components/molecules/form-group/FormGroup";
import { TabsComponent } from "@/components/molecules/tabs/TabsComponent";
import { useMobile } from "@/hooks/use-mobile";
import { Sidebar } from "@/components/layouts/sidebar/Sidebar";
import { MobileNavbar } from "@/components/layouts/mobile-navbar/MobileNavbar";
import { NavigationItem } from "@/components/molecules/navigation-item/NavigationItem";
import { Link } from "wouter";
import { 
  Home, FileText, Settings, Users, Package, LayoutGrid, Box, 
  PenTool, Palette, Layers, Eye, Search, Bell, ChevronRight, ChevronLeft
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";

export default function ComponentsShowcase() {
  const isMobile = useMobile();
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("atoms");
  
  // Logo component for sidebar and mobile nav
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
  
  // Navigation sections
  const navSections = [
    {
      title: "Components",
      items: [
        { label: "Atoms", icon: Box, isActive: activeTab === "atoms", onClick: () => setActiveTab("atoms") },
        { label: "Molecules", icon: Layers, isActive: activeTab === "molecules", onClick: () => setActiveTab("molecules") },
        { label: "Layouts", icon: LayoutGrid, isActive: activeTab === "layouts", onClick: () => setActiveTab("layouts") }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Documentation", icon: FileText },
        { label: "Design System", icon: PenTool },
        { label: "Theming", icon: Palette },
        { label: "Settings", icon: Settings, hasDivider: true }
      ]
    }
  ];
  
  // Footer component for sidebar
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
  
  // Navigation content for mobile navbar
  const navContent = (
    <div className="p-4 space-y-6">
      <div>
        <div className="mb-2 px-2">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Navigation</h3>
        </div>
        <div className="space-y-1">
          <Link href="/">
            <NavigationItem icon={Home}>
              Back to Home
            </NavigationItem>
          </Link>
        </div>
      </div>
      {navSections.map((section, index) => (
        <div key={index}>
          <div className="mb-2 px-2">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{section.title}</h3>
          </div>
          <div className="space-y-1">
            {section.items.map((item, itemIndex) => {
              // Ensure all optional properties are handled
              return (
                <NavigationItem 
                  key={itemIndex} 
                  icon={item.icon} 
                  isActive={item.isActive || false}
                  hasDivider={item.hasDivider || false}
                  onClick={item.onClick}
                >
                  {item.label}
                </NavigationItem>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  // Tabs for component showcase
  const tabs = [
    {
      value: "atoms",
      label: "Atoms",
      content: (
        <div className="space-y-10">
          <section>
            <Typography variant="h3" className="mb-4">Buttons</Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="primary" isLoading>Loading</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="icon"><Search className="h-4 w-4" /></Button>
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Badges</Typography>
            <div className="flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Icons</Typography>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center">
                <Icon name={Home} />
                <span className="text-xs mt-1">Home</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon name={Settings} />
                <span className="text-xs mt-1">Settings</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon name={Bell} />
                <span className="text-xs mt-1">Bell</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon name={Users} size="lg" />
                <span className="text-xs mt-1">Users (lg)</span>
              </div>
              <div className="flex flex-col items-center">
                <Icon name={Search} size="sm" />
                <span className="text-xs mt-1">Search (sm)</span>
              </div>
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Inputs</Typography>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Default input" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="With value" value="Input value" />
              <Input placeholder="With error" error />
              <Input placeholder="Password" type="password" />
              <Input placeholder="Number" type="number" />
              <Input placeholder="Search..." type="search" />
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Typography</Typography>
            <div className="space-y-4">
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="p">
                This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget 
                ultricies nisl nisl eget nisl.
              </Typography>
              <Typography variant="lead">
                This is a lead paragraph that stands out from regular text.
              </Typography>
              <Typography variant="large">This is large text.</Typography>
              <Typography variant="small">This is small text.</Typography>
              <Typography variant="muted">This is muted text for less important content.</Typography>
              <Typography variant="blockquote">
                This is a blockquote for highlighting quotes or important passages.
              </Typography>
              <Typography variant="code">const code = "This is code formatting";</Typography>
            </div>
          </section>
        </div>
      ),
    },
    {
      value: "molecules",
      label: "Molecules",
      content: (
        <div className="space-y-10">
          <section>
            <Typography variant="h3" className="mb-4">Cards</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <Typography variant="h4" className="mb-2">Default Card</Typography>
                <Typography variant="p">This is a basic card component with some content.</Typography>
                <div className="flex justify-end mt-4">
                  <Button size="sm">Action</Button>
                </div>
              </Card>
              
              <Card variant="notification">
                <div className="flex justify-between items-start">
                  <div>
                    <Typography variant="h4" className="mb-2">Notification Card</Typography>
                    <Typography variant="p">You have a new message from the team.</Typography>
                  </div>
                  <Badge>New</Badge>
                </div>
                <div className="flex justify-end mt-4">
                  <Button size="sm" variant="ghost">Dismiss</Button>
                  <Button size="sm" variant="primary" className="ml-2">View</Button>
                </div>
              </Card>
              
              <Card variant="media" mediaContent={
                <div className="bg-secondary/30 h-40 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
              }>
                <Typography variant="h4" className="mb-2">Media Card</Typography>
                <Typography variant="p">Card with media content at the top.</Typography>
                <div className="flex justify-end mt-4">
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              </Card>
              
              <Card
                footer={
                  <div className="flex justify-between items-center">
                    <Typography variant="small" className="text-muted-foreground">Last updated: Today</Typography>
                    <Button size="sm" variant="ghost">
                      View All <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                }
              >
                <Typography variant="h4" className="mb-2">Card with Footer</Typography>
                <Typography variant="p">This card has additional footer content.</Typography>
              </Card>
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Form Groups</Typography>
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
                id="bio"
                label="Biography"
                as="textarea"
                placeholder="Tell us about yourself"
                helpText="Keep it brief and to the point."
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
              
              <div className="flex justify-end mt-6">
                <Button variant="outline" className="mr-2">Cancel</Button>
                <Button>Submit</Button>
              </div>
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Navigation Items</Typography>
            <div className="w-64 border rounded-md p-4 space-y-1">
              <NavigationItem icon={Home} isActive>Dashboard</NavigationItem>
              <NavigationItem icon={Users}>Users</NavigationItem>
              <NavigationItem icon={Package}>Products</NavigationItem>
              <NavigationItem icon={FileText}>Reports</NavigationItem>
              <NavigationItem icon={Settings} hasDivider>Settings</NavigationItem>
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Tabs</Typography>
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
                    value: "notifications",
                    label: "Notifications",
                    content: (
                      <div className="p-4 border rounded-md mt-4">
                        <Typography variant="h4" className="mb-2">Notification Preferences</Typography>
                        <Typography variant="p">Control how and when you receive notifications.</Typography>
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
          </section>
        </div>
      ),
    },
    {
      value: "layouts",
      label: "Layouts",
      content: (
        <div className="space-y-10">
          <section>
            <Typography variant="h3" className="mb-4">Responsive Layouts</Typography>
            <Typography variant="p" className="mb-6">
              This showcase itself demonstrates a responsive layout with a 
              {isMobile ? " mobile navigation bar at the top" : " sidebar on the left side"} 
              for navigation. Resize your browser to see how the layout adapts.
            </Typography>
            
            <div className="rounded-md border p-4">
              <Typography variant="h4" className="mb-4">Current Device: {isMobile ? "Mobile" : "Desktop"}</Typography>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary/20 p-6 rounded-md">
                  <Typography variant="h5" className="mb-2">Mobile Layout Features</Typography>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Top navigation bar with hamburger menu</li>
                    <li>Slide-out navigation sheet</li>
                    <li>Stacked content for smaller screens</li>
                    <li>Optimized touch targets</li>
                  </ul>
                </div>
                
                <div className="bg-primary/20 p-6 rounded-md">
                  <Typography variant="h5" className="mb-2">Desktop Layout Features</Typography>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Persistent sidebar navigation</li>
                    <li>Multi-column content layouts</li>
                    <li>Hover interactions</li>
                    <li>More detailed information display</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-md">
                <Typography variant="h5" className="mb-2">Try it out!</Typography>
                <Typography variant="p">
                  Resize your browser window or use device emulation in your browser's developer tools to see 
                  how the layout adapts to different screen sizes.
                </Typography>
              </div>
            </div>
          </section>
          
          <section>
            <Typography variant="h3" className="mb-4">Page Structure</Typography>
            
            <Card className="mb-6">
              <Typography variant="h4" className="mb-2">Sidebar</Typography>
              <Typography variant="p" className="mb-4">
                The sidebar component is used for navigation on desktop devices. It includes:
              </Typography>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Logo and version display</li>
                <li>Collapsible navigation sections</li>
                <li>Active state indicators</li>
                <li>Optional footer with actions</li>
              </ul>
              <div className="text-center text-muted-foreground text-sm">
                {isMobile ? "⚠️ Switch to desktop view to see the sidebar in action" : "👈 Check out the sidebar on the left"}
              </div>
            </Card>
            
            <Card>
              <Typography variant="h4" className="mb-2">Mobile Navigation</Typography>
              <Typography variant="p" className="mb-4">
                The mobile navigation component is used for navigation on smaller devices. It includes:
              </Typography>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Fixed top navigation bar</li>
                <li>Hamburger menu for opening navigation sheet</li>
                <li>Slide-in navigation sheet with the same content as sidebar</li>
                <li>Optimized for touch interactions</li>
              </ul>
              <div className="text-center text-muted-foreground text-sm">
                {isMobile ? "👆 Check out the mobile navigation at the top" : "⚠️ Switch to mobile view to see the mobile navigation in action"}
              </div>
            </Card>
          </section>
        </div>
      ),
    },
  ];
  
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
            <div className="flex-1 flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" className="h-8 px-2 text-sm flex items-center" title="Back to Home">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="h-6 w-px bg-border mx-1"></div>
              <Button variant="outline" className="h-8 px-2 text-sm">
                <Search className="h-4 w-4 mr-1.5" />
                <span className="text-muted-foreground">Search components...</span>
                <span className="ml-4 text-xs text-muted-foreground">⌘K</span>
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="hidden lg:block mr-2 text-sm text-muted-foreground">
                Component Library Showcase
              </div>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <Bell className="h-5 w-5" />
              </Button>
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
            </div>
          </div>
        </header>
        
        {/* Content area */}
        <main className="flex-1 overflow-y-auto pt-14 md:pt-0 pb-8">
          <div className="container max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="mb-8">
              <Typography variant="h1" className="mb-2">Component Showcase</Typography>
              <Typography variant="p" className="max-w-3xl">
                This page demonstrates all the components available in the vs-zero-kit component library,
                organized following atomic design principles. Use the navigation to explore different component types.
              </Typography>
            </div>
            
            <TabsComponent tabs={tabs} defaultValue="atoms" />
          </div>
        </main>
      </div>
    </div>
  );
}