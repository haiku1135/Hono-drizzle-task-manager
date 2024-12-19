import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreVertical, SearchIcon } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between p-4 shadow-sm bg-white">
      <Link href="/">
        <h1 className="md:text-2xl font-bold">Task Manager</h1>
      </Link>
      <div className="relative">
        <Input placeholder="Search" className="pl-10" />
        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
      </div>
      <div className="space-x-4 hidden md:block">
        <Button>Sign In</Button>
        <Button>Log In</Button>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Sign In</DropdownMenuItem>
            <DropdownMenuItem>Log In</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </header>
  )
}
