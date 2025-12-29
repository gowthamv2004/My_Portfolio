import { ArrowLeft, Hand, Eye, Activity, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VisionAIDemo = () => {
  const features = [
    {
      title: "Virtual Mouse",
      description: "Control your computer cursor using hand gestures",
      icon: Hand,
    },
    {
      title: "Virtual Painter",
      description: "Draw and create art with hand movements in the air",
      icon: Sparkles,
    },
    {
      title: "AI Fitness Trainer",
      description: "Real-time pose detection for exercise form correction",
      icon: Activity,
    },
    {
      title: "Object Detection",
      description: "Identify and track objects in real-time video streams",
      icon: Eye,
    },
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
            <Hand className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Vision-Based Smart Interface Using AI</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced AI-powered interface using Python, OpenCV, and MediaPipe for real-time gesture recognition
            </p>
          </div>

          <Tabs defaultValue="demo" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            <TabsContent value="demo" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Live Camera Feed</CardTitle>
                  <CardDescription>
                    In a real implementation, your camera feed would appear here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">Camera feed would display here</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Real-time hand tracking and gesture recognition
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <feature.icon className="w-8 h-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span>Real-time hand gesture recognition using MediaPipe</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span>Pose detection and tracking for fitness applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span>Object detection and classification using OpenCV</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span>Virtual mouse control with gesture-based clicks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span>Air canvas for virtual drawing and painting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span>AI fitness trainer with form correction feedback</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default VisionAIDemo;
