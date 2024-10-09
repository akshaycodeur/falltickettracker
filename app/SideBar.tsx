"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChartBarIcon,
  File,
  FilePlus2Icon,
  FilesIcon,
  FolderCheck,
  House,
  SirenIcon,
  TagIcon,
  TagsIcon,
  Users2Icon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const SideBar: React.FC = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <aside className="w-full h-screen bg-gray-900 text-white">
      <nav className="p-4">
        {/* Dashboard */}
        <div className="logo">
          <div className="uppercase text-2xl font-bold my-5">
            Ticket Tracker
          </div>
        </div>
        <div className="mb-2">
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <House className="mr-2 text-sky-500 w-5" />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Tickets */}
        <div className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-800 rounded-md">
            <TagsIcon className="mr-2 text-sky-500 w-5" />
            <span>Issues</span>
          </div>
          <ul className="pl-6">
            <li className="mb-1">
              <Link
                href="/tickets/"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <TagIcon className="mr-2 text-sky-500 w-4" />
                All Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/my"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <TagIcon className="mr-2 text-sky-500 w-4" />
                My Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/open"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <TagIcon className="mr-2 text-sky-500 w-4" />
                Open Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/closed"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <FolderCheck className="mr-2 text-sky-500 w-4" />
                Closed Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/overdue"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <SirenIcon className="mr-2 text-amber-500 w-4" />
                Overdue Tickets
              </Link>
            </li>
          </ul>
        </div>

        {/* Create Ticket */}
        <div className="mb-2">
          <Link
            href="/tickets/new"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <FilePlus2Icon className="mr-2 text-sky-500 w-5" />
            <span>Create Ticket</span>
          </Link>
        </div>

        {/* Projects */}
        <div className="mb-2">
          <Link
            href="/projects"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <FilesIcon className="mr-2 text-sky-500 w-5" />
            <span>Projects</span>
          </Link>
        </div>

        {/* Teams */}
        <div className="mb-2">
          <Link
            href="/teams"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <Users2Icon className="mr-2 text-sky-500 w-5" />
            <span>Teams</span>
          </Link>
        </div>

        {/* Calendar / Timeline */}
        <div className="mb-2">
          <button
            onClick={toggleCalendar}
            className="flex items-center p-2 hover:bg-gray-800 rounded-md w-full text-left"
          >
            <CalendarDays className="mr-2 text-sky-500 w-5" />
            <span>{isCalendarVisible ? "Timeline" : "Calendar"}</span>
          </button>
        </div>

        {/* Reports */}
        <div className="mb-2">
          <Link
            href="/reports"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <ChartBarIcon className="mr-2 text-sky-500 w-5" />
            <span>Reports</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
