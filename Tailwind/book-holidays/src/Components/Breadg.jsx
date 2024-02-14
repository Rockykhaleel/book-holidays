import { Breadcrumbs } from "@material-tailwind/react";

export function BreadcrumbsDefault2() {
  return (
    <div className="bg-cyan-400 w-full h-60 py-20 flex text-center items-center justify-center">
      <Breadcrumbs className="text-center items-center">
        <a href="/" className="opacity-60">
          Home
        </a>
        <a href="#" className="opacity-60">
          Gallery
        </a>
      </Breadcrumbs>
    </div>
  );
}
