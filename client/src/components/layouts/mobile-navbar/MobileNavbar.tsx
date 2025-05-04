import { Button } from "@/components/atoms/button/Button";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode, forwardRef, useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export interface MobileNavbarProps extends HTMLAttributes<HTMLDivElement> {
  logo: ReactNode;
  navContent: ReactNode;
}

const MobileNavbar = forwardRef<HTMLDivElement, MobileNavbarProps>(
  ({ className, logo, navContent, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    
    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-background border-b h-14",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between p-4 h-full">
          <div className="flex items-center space-x-2">
            {logo}
          </div>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                className="h-9 w-9 p-0"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <div className="h-full flex flex-col overflow-hidden">
                <div className="p-4 border-b">
                  {logo}
                </div>
                <div className="flex-1 overflow-y-auto">
                  {navContent}
                </div>
                <SheetClose className="sr-only">Close</SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    );
  }
);

MobileNavbar.displayName = "MobileNavbar";

export { MobileNavbar };
