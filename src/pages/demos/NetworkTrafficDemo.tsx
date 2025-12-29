import { ArrowLeft, Globe, MapPin, Activity, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NetworkTrafficDemo = () => {
  const sampleTraffic = [
    { ip: "192.168.1.100", location: "United States", packets: 1243, protocol: "HTTPS" },
    { ip: "10.0.0.45", location: "Germany", packets: 856, protocol: "HTTP" },
    { ip: "172.16.0.12", location: "Japan", packets: 634, protocol: "FTP" },
    { ip: "192.168.2.50", location: "United Kingdom", packets: 432, protocol: "SSH" },
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
            <Activity className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Network Traffic Analysis Tool</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Python-based tool to analyze Wireshark traffic and visualize IP geolocations
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Live Network Traffic
              </CardTitle>
              <CardDescription>Real-time analysis of network packets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleTraffic.map((traffic, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-mono font-semibold">{traffic.ip}</div>
                        <div className="text-sm text-muted-foreground">{traffic.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold">{traffic.packets}</div>
                        <div className="text-sm text-muted-foreground">packets</div>
                      </div>
                      <Badge variant="outline">{traffic.protocol}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Wireshark network traffic analysis and parsing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>GeoIP database integration for location tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Google Maps visualization using KML files</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Protocol detection and classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Real-time packet statistics and metrics</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkTrafficDemo;
