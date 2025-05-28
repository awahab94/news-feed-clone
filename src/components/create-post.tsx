"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Smile, MapPin } from "lucide-react";

interface CreatePostProps {
  onCreatePost: (content: string, image?: string) => void;
}

export function CreatePost({ onCreatePost }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    if (content.trim()) {
      onCreatePost(content.trim());
      setContent("");
      setIsExpanded(false);
    }
  };

  return (
    <Card className="bg-white border-none">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar>
            <AvatarImage src="https://placehold.co/600x600/svg" alt="You" />
            <AvatarFallback>You</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={e => setContent(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              className="min-h-[50px] resize-none border-none shadow-none focus-visible:ring-0 p-0 text-lg placeholder:text-gray-500 text-black"
            />

            {isExpanded && (
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black">
                      <ImageIcon className="w-5 h-5 mr-2" />
                      Photo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black">
                      <Smile className="w-5 h-5 mr-2" />
                      Feeling
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black">
                      <MapPin className="w-5 h-5 mr-2" />
                      Location
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    className="text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black border-none"
                    onClick={() => {
                      setContent("");
                      setIsExpanded(false);
                    }}>
                    Cancel
                  </Button>
                  <Button onClick={handleSubmit} disabled={!content.trim()} className="bg-blue-500 text-white cursor-pointer hover:bg-blue-700">
                    Post
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
