"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, Bookmark, Clock, TrendingUp } from "lucide-react";

export function Sidebar() {
  const menuItems = [
    { icon: Users, label: "Friends", count: 12 },
    { icon: Calendar, label: "Events", count: 3 },
    { icon: Bookmark, label: "Saved", count: 8 },
    { icon: Clock, label: "Memories", count: 2 },
    { icon: TrendingUp, label: "Trending", count: null },
  ];

  return (
    <div className="space-y-4">
      <Card className="bg-white border-none">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="https://placehold.co/600x600/svg" alt="Profile" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-black">Your Profile</h3>
              <p className="text-sm text-gray-500">View your profile</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-none">
        <CardContent className="p-2">
          <nav className="space-y-1">
            {menuItems.map(item => (
              <Button key={item.label} variant="ghost" className="w-full justify-start h-12 cursor-pointer hover:bg-gray-200">
                <item.icon className="w-5 h-5 mr-3 text-black" />
                <span className="flex-1 text-left text-black">{item.label}</span>
                {item.count && <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{item.count}</span>}
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>

      <Card className="bg-white border-none">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3 text-black">Online Friends</h3>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-200 h-10 w-full rounded-md">
                <div className="relative">
                  <Avatar className="w-8 h-8 ml-2">
                    <AvatarImage src={`https://placehold.co/600x600/svg`} alt={`Friend ${i}`} />
                    <AvatarFallback>F{i}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-0 -right-0 w-2 h-2 bg-green-500 rounded-full border-0 border-white"></div>
                </div>
                <span className="text-sm text-black">Friend {i}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
