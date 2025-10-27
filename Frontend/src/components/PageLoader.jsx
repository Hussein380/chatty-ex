import { LoaderIcon } from "lucide-react";
function PageLoader() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <LoaderIcon className="size-10 animate-spin text-cyan-500 mx-auto mb-4" />
        <p className="text-slate-400">Loading...</p>
      </div>
    </div>
  );
}
export default PageLoader;