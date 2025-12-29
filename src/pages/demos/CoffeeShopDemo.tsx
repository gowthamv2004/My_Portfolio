import { ArrowLeft, Coffee, Calendar, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const CoffeeShopDemo = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("2");

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select date and time");
      return;
    }
    toast.success("Table booked successfully!");
  };

  const availableTables = [
    { id: 1, capacity: 2, location: "Window Side", available: true },
    { id: 2, capacity: 4, location: "Corner Booth", available: true },
    { id: 3, capacity: 2, location: "Garden View", available: false },
    { id: 4, capacity: 6, location: "Private Room", available: true },
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
            <Coffee className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Coffee Shop Table Booking</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seamless online table reservation system for coffee shops
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Book a Table</CardTitle>
                <CardDescription>Reserve your spot at our cozy coffee shop</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </div>
                <Button className="w-full" onClick={handleBooking}>
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Tables</CardTitle>
                <CardDescription>Choose your preferred seating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableTables.map((table) => (
                    <div
                      key={table.id}
                      className={`p-4 rounded-lg border ${
                        table.available
                          ? "border-primary/20 bg-accent/50"
                          : "border-muted bg-muted/50 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">Table {table.id}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {table.capacity} seats
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{table.location}</span>
                        <span
                          className={`text-sm font-medium ${
                            table.available ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {table.available ? "Available" : "Booked"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="w-5 h-5" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <span>Easy date and time selection for table reservations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <span>Specify number of guests and seating preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <span>Real-time availability updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Coffee className="w-5 h-5 text-primary mt-0.5" />
                  <span>View table locations and capacity</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopDemo;
