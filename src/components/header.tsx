"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Home, Users, MessageCircle, Bell, Menu, Plus } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-xl text-blue-600 hidden sm:block">FeedBook</span>
            </div>

            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search FeedBook"
                className="pl-10 w-64 text-black placeholder:text-gray-400 cursor-auto bg-gray-100 border-none hover:bg-gray-200 focus:bg-gray-200  focus:shadow-md transition-all duration-200"
              />
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="lg" className="cursor-pointer text-blue-600 bg-blue-50 hover:bg-blue-100 relative px-6 py-3 rounded-lg transition-all duration-200">
              <Home className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="lg" className="cursor-pointer text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-200 relative">
              <Users className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="lg" className="cursor-pointer text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-200 relative">
              <MessageCircle className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="lg" className="cursor-pointer text-gray-600 hover:text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-200 relative">
              <Bell className="w-6 h-6" />
            </Button>
          </nav>

          <div className="flex items-center space-x-3">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hidden sm:flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New Post</span>
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-lg transition-all duration-200">
              <Menu className="w-6 h-6" />
            </Button>

            <div className="relative">
              <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-blue-200 transition-all duration-200">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">You</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
