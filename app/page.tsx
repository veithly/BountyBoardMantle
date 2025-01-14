"use client";

import { useAccount } from "wagmi";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import Image from "next/image";
import { Bot, Shield, Rocket, Eye, Users, Share } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { address } = useAccount();
  const { toast } = useToast();
  const router = useRouter();

  const handleCreateBoard = () => {
    if (!address) {
      toast({
        variant: "destructive",
        title: "Wallet not connected",
        description: "Please connect your wallet to create a board",
      });
      return;
    }
    router.push("/boards/create");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <Image
          src="/index-head.png"
          alt="Bounty Board"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold mb-6 glow-text animate-fade-in">
            Welcome to Bounty Board
          </h1>
          <p className="text-xl text-purple-200/90 max-w-3xl mb-8 animate-fade-in-delay">
            A Web3-native platform revolutionizing community engagement and task
            management. Create, manage, and participate in bounty tasks with
            transparency and efficiency.
          </p>
          <div className="flex gap-6 mt-4">
            <Link
              href="/boards"
              className="neon-button-primary group animate-fade-in-delay-2"
            >
              <span className="relative z-10 flex items-center">
                Explore Boards
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
            <button
              type="button"
              onClick={handleCreateBoard}
              className="neon-button-secondary group animate-fade-in-delay-2"
            >
              <span className="relative z-10 flex items-center">
                Create Board
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl">
            <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <Rocket className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Quick Launch
            </h2>
            <p className="text-gray-400">
              Create community reward activities in minutes. Streamlined process
              for setting up bounty boards, defining tasks, and managing rewards
              - all in one place.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              AI Review
            </h2>
            <p className="text-gray-400">
              Leverage AI assistance for task verification or set up multiple
              reviewers for flexible and efficient task assessment. Customizable
              review processes to match your community needs.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              AI Community Management
            </h2>
            <p className="text-gray-400">
              Intelligent AI agents assist in community operations by automating
              announcements, task reviews, and member engagement. Seamlessly
              integrates with Discord for enhanced community interaction and
              management.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Smart Contract Automation
            </h2>
            <p className="text-gray-400">
              Automated reward distribution through smart contracts ensures
              accurate and timely payments. No manual intervention needed,
              eliminating human error and ensuring trustless execution.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Full Transparency
            </h2>
            <p className="text-gray-400">
              Complete visibility of all task activities and progress. On-chain
              records ensure permanent and transparent history of all
              submissions, reviews, and reward distributions.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="h-16 w-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
              <Share className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Social Integration
            </h2>
            <p className="text-gray-400">
              Seamless integration with popular platforms like Discord, Twitter, and GitHub.
              Verify social engagements automatically and track community growth across
              multiple channels.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-sm text-gray-400">
        <p>© 2024 Bounty Board. All rights reserved.</p>
      </footer>
    </div>
  );
}
