export default function MainLoader() {
  return (
    <div className="w-full min-h-screen absolute top-0 left-0 bg-whit flex flex-col gap-2 items-center justify-center z-50">
      <span className="w-14 h-14 inline-flex border-8 border-brand-borderColor rounded-full relative">
        <span className="w-14 h-14 border-8 border-r-brand-skyColor border-l-border border-b-brand-borderColor border-l-brand-borderColor rounded-full absolute -top-2 -left-2 animate-spin" />
      </span>
      <p className="text-lg text-center font-semibold tracking-wide text-brand-themeColor">
        Loading ...
      </p>
    </div>
  );
}
