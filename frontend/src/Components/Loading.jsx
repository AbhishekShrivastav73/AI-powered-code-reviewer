function Loading() {
  return (
      <>
          {Array(3).fill(null).map((_, i) => (
              <div role="status" className="max-w-md *:bg-gray-200 *:dark:bg-gray-700 *:rounded-full animate-pulse mb-4" key={i}>
                  <div className="h-2.5 w-48 mb-4"></div>
                  <div className="h-2 max-w-[60%] mb-2.5"></div>
                  <div className="h-2 max-w-[45%] mb-2.5"></div>
                  <div className="h-2 mb-2.5"></div>
                  <div className="h-2 mb-2.5"></div>
                  <div className="h-2 max-w-[49%] mb-2.5"></div>
                  <div className="h-2 max-w-[60%]"></div>
                  <span className="sr-only">Loading...</span>
              </div>
          ))}
      </>
  );
}

export default Loading;