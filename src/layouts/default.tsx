import { Link } from "@nextui-org/link";

import { Sidebar } from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen">
      <Sidebar />

      <div className="flex flex-col h-full w-full">
        <main className="container mx-auto max-h-full px-6 flex-grow pt-10">
          {children}
        </main>

        {/* <footer className="w-full flex items-center justify-center py-3">
            <p className="text-default text-sm select-none">© 2024 Concept Academy. All rights reserved.</p>
        </footer> */}
        
      </div>

    </div>
  );
}
