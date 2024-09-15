"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Mail, Phone, Home } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-darkMossGreen text-white hover:bg-earthYellow">
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] h-[90vh] max-h-[900px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-3xl font-bold text-center">
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-center">
            Get in touch with us or find our location
          </DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue="info"
          className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="flex-shrink-0 grid w-full grid-cols-2">
            <TabsTrigger value="info">Contact Info</TabsTrigger>
            <TabsTrigger value="form">Contact Form</TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="flex-1 overflow-auto p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 h-full">
              <Card>
                <CardContent className="flex flex-col items-center text-center p-4">
                  <MapPin className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">How to Find Us</h3>
                  <p className="font-medium">SUNDAY WORSHIP MEETING LOCATION</p>
                  <p>7305 AFTON ROAD</p>
                  <p>WOODBURY, MN 55125</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center text-center p-4">
                  <Clock className="w-8 h-8 text-green-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">Opening Hours</h3>
                  <p>Meeting Hour: Sunday 4:00 PM (CST)</p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="flex flex-col items-center text-center p-4">
                    <Mail className="w-8 h-8 text-purple-500 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p>contact@revivalcentermn.org</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-col items-center text-center p-4">
                    <Phone className="w-8 h-8 text-red-500 mb-2" />
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p>612.244.5085</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="flex flex-col items-center text-center p-4">
                  <Home className="w-8 h-8 text-orange-500 mb-2" />
                  <h3 className="text-lg font-semibold mb-1">
                    Mailing Address
                  </h3>
                  <p>REVIVAL CENTER MINNESOTA</p>
                  <p>P.O.BOX 251431</p>
                  <p>WOODBURY, MN 55125</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="form" className="flex-1 overflow-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full">
              <iframe
                src="https://3p3nu25h.paperform.co/?embed=1&takeover=0&inline=1&popup=0&_d=revivalcentermn.org&_in=0"
                width="100%"
                height="100%"
                style={{ border: "none", minHeight: "700px" }}
                allowFullScreen
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
