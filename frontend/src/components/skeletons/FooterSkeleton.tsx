export default function FooterSkeleton() {
  return (
    <footer className="bg-[#1a1a1a] text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} data-testid="skeleton-item">
              {/* Section Title Skeleton */}
              <div className="h-7 bg-white/10 rounded-lg w-3/4 mb-6 animate-pulse"></div>
              
              {/* Links Skeleton */}
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, linkIndex) => (
                  <div
                    key={linkIndex}
                    className="h-5 bg-white/10 rounded-lg w-1/2 animate-pulse">
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section Skeleton */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-8 bg-white/10 rounded-lg w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-5 bg-white/10 rounded-lg w-96 mx-auto mb-8 animate-pulse"></div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 h-12 bg-white/10 rounded-full animate-pulse"></div>
              <div className="w-32 h-12 bg-white/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Skeleton */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="h-5 bg-white/10 rounded-lg w-64 animate-pulse"></div>
            <div className="flex items-center gap-6">
              <div className="h-5 bg-white/10 rounded-lg w-24 animate-pulse"></div>
              <div className="h-5 bg-white/10 rounded-lg w-24 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 