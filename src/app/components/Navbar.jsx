'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    HomeIcon,
    MessageCircleIcon,
    LayoutDashboardIcon,
    BotIcon,
    UserIcon,
} from "lucide-react";

const NavItem = ({ icon, label, href }) => {
    const pathname = usePathname();
    const active = pathname === href;

    const colorClass = active ? 'text-[#613EEA]' : 'text-gray-400';

    return (
        <Link
            href={href}
            className={`flex flex-col items-center justify-center gap-1 transition-colors duration-200 ${colorClass} hover:text-[#886afc]`}
        >
            {icon}
            <span className="text-xs font-medium">{label}</span>
        </Link>
    );
};

const BottomNav = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-20 bg-[#2a2830] border-t border-gray-700/50 flex justify-around items-start pt-2 max-w-[400px] mx-auto z-50">
            <NavItem icon={<HomeIcon size={20} />} label="Home" href="/home" />
            <NavItem icon={<MessageCircleIcon size={20} />} label="Messages" href="/messages" />
            <NavItem icon={<LayoutDashboardIcon size={20} />} label="Dashboard" href="/dashboard" />
            <NavItem icon={<BotIcon size={20} />} label="AI Therapist" href="/ai-chat" />
            <NavItem icon={<UserIcon size={20} />} label="Profile" href="/profile" />
        </nav>
    );
};

export default BottomNav;
