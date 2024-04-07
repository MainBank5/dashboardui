
export default function DashboardLayout({
  children,
  analytics,
  commodities,
  watchlist,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  commodities: React.ReactNode;
  watchlist: React.ReactNode;

}) {
  return (
    <div className="grid gap-8 h-full">
      {children}
      <div className="grid grid-cols-2 gap-6">
        {analytics}
        {watchlist}
        {commodities}   
      </div>
    </div>
  );
}
