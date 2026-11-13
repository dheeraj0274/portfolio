"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function getVisitors() {
      try {
        const response = await fetch("/api/visit", {
          method: "POST",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch visitors");
        }

        const data = await response.json();
        setCount(data.totalVisitors);
      } catch (error) {
        console.error(error);
      }
    }

    getVisitors();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <span className="text-lg">👥</span>
      <span>
        {count === null
          ? "Loading visitors..."
          : `${count.toLocaleString("en-IN")} visitors`}
      </span>
    </div>
  );
}