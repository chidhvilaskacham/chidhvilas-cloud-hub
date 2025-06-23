
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              onClick={() => scrollToSection('blog')}
            >
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink 
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navigation;
