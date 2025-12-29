import { ArrowLeft, Trash2, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WasteManagementDemo = () => {
  const wasteBins = [
    { location: "Main Entrance", type: "Recyclable", capacity: 75, status: "Active" },
    { location: "Food Court", type: "Organic", capacity: 90, status: "Nearly Full" },
    { location: "Auditorium", type: "General", capacity: 45, status: "Active" },
    { location: "Exhibition Hall", type: "Recyclable", capacity: 60, status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Trash2 className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Waste Management System - ECOFEST</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Web application for efficient waste management during events and conferences
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Event Information
              </CardTitle>
              <CardDescription>
                International Conference on Advancements in Energy Transition and Climate Neutrality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-muted-foreground">Attendees</div>
                </div>
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <Trash2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Waste Bins</div>
                </div>
                <div className="text-center p-4 bg-accent/50 rounded-lg">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm text-muted-foreground">Locations</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Waste Bin Monitoring</CardTitle>
              <CardDescription>Real-time tracking of waste bins across the venue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {wasteBins.map((bin, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">{bin.location}</div>
                        <div className="text-sm text-muted-foreground">{bin.type} Waste</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold">{bin.capacity}%</div>
                        <div className="text-sm text-muted-foreground">Full</div>
                      </div>
                      <Badge variant={bin.status === "Nearly Full" ? "destructive" : "outline"}>
                        {bin.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Real-time waste bin capacity monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Smart waste segregation tracking (Organic, Recyclable, General)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Location-based bin management across venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Alert system for nearly full bins</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Analytics dashboard for waste management insights</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WasteManagementDemo;
