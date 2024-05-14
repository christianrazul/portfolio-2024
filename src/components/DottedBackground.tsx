export function DottedBackground() {
  return (
    <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] absolute flex  h-[50rem] w-full items-center justify-center bg-transparent dark:bg-black">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    </div>
  );
}
