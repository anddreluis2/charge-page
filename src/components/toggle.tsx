"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="pt-4">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue" : "bg-gray"
        } border-blue relative inline-flex h-4 w-10 items-center rounded-full`}
      />
    </div>
  );
}
