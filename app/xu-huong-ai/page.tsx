import { Metadata } from "next";
export const metadata: Metadata = { title: "Xu Hướng AI", description: "Tin tức AI, workflow AI và ứng dụng thực chiến cho content marketing." };
export default function Page() { return <div className="container-shell py-12"><h1 className="text-3xl font-bold">Xu Hướng AI</h1><ul className="mt-4 list-disc space-y-2 pl-5"><li>Tin tức AI</li><li>AI ứng dụng</li><li>Workflow AI</li><li>Review AI Tool</li></ul></div>; }
