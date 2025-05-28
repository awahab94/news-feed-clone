"use client";
import { CreatePost } from "@/components/create-post";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/side-bar";

export default function Home() {
  const handleCreatePost = (content: string, image?: string) => {
    console.log(content, image);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <CreatePost onCreatePost={handleCreatePost} />
          </div>
        </div>
      </div>
    </div>
  );
}
