import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from '@/components/ui/card';


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
        <div className="grid gap-8">
          {watchlist}
          {commodities}
          
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card>Hello World</Card>
       
      </div>
    </div>
  );
}
