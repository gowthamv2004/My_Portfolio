import { ArrowLeft, Plane, TrendingDown, Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const FlightPriceDemo = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [predicting, setPredicting] = useState(false);

  const handlePredict = () => {
    if (!origin || !destination || !date) {
      toast.error("Please fill in all fields");
      return;
    }
    setPredicting(true);
    setTimeout(() => {
      setPredicting(false);
      toast.success("Price prediction complete!");
    }, 1500);
  };

  const samplePredictions = [
    { airline: "Air India", predicted: 4500, actual: 4850, savings: 350 },
    { airline: "IndiGo", predicted: 3800, actual: 4200, savings: 400 },
    { airline: "SpiceJet", predicted: 3500, actual: 3900, savings: 400 },
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
            <Plane className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Flight Price Prediction</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Machine learning model to predict flight prices and find the best deals
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Predict Flight Price</CardTitle>
              <CardDescription>Enter your flight details to get price predictions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="origin">Origin</Label>
                  <Input
                    id="origin"
                    placeholder="e.g., Delhi (DEL)"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="e.g., Mumbai (BOM)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="date">Departure Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <Button className="w-full" onClick={handlePredict} disabled={predicting}>
                {predicting ? "Predicting..." : "Predict Prices"}
              </Button>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5" />
                Price Predictions
              </CardTitle>
              <CardDescription>ML-powered price forecasts for various airlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {samplePredictions.map((pred, index) => (
                  <div key={index} className="p-4 bg-accent/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold">{pred.airline}</div>
                      <div className="text-green-500 font-semibold flex items-center gap-1">
                        <TrendingDown className="w-4 h-4" />
                        Save ₹{pred.savings}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Predicted Price</div>
                        <div className="font-semibold">₹{pred.predicted}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Current Price</div>
                        <div className="font-semibold">₹{pred.actual}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Machine learning model trained on historical flight data</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Predicts optimal booking time for best prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Multi-airline price comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Historical trend analysis and visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Savings calculator to show potential cost reductions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlightPriceDemo;
