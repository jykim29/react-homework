export default function Skeleton() {
  return (
    <li>
      <div className="relative p-3 border-b flex flex-row justify-between gap-1">
        <div className="w-full flex flex-col flex-shrink-1 justify-center items-start gap-3">
          <div className="flex items-center">
            <span className="skeleton-loading w-12 h-4"></span>
          </div>
          <span className="skeleton-loading w-[70%] h-[11px]"></span>
          <span className="skeleton-loading w-[90%] h-[11px]"></span>
          <span className="skeleton-loading w-[30%] h-[11px]"></span>
          <div className="flex gap-1 items-center w-full">
            <span className="skeleton-loading w-[10%] h-[11px]"></span>
            <span className="skeleton-loading w-[10%] h-[11px]"></span>
          </div>
        </div>

        <div className="w-[70px] min-w-[70px] flex justify-center items-center">
          <div className="w-full aspect-square skeleton-loading"></div>
        </div>
      </div>
    </li>
  );
}
