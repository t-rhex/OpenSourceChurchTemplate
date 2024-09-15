"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
const ministries = [
  {
    title: "Stop Human Trafficking",
    description:
      "Join our efforts to combat human trafficking and protect vulnerable individuals.",
    image: "/assets/RC-Projects.jpg",
    link: "#",
    details:
      "Our Stop Human Trafficking ministry works tirelessly to raise awareness, support victims, and collaborate with law enforcement to end this modern-day slavery.",
    currentInitiative: "Rescue and Rehabilitation Program",
    fundingGoal: 1000,
    currentFunding: 0,
    contactEmail: "humantrafficking@example.com",
  },
  {
    title: "Porn 2 Purity",
    description:
      "A program promoting purity and helping individuals overcome pornography addiction.",
    image: "/assets/RC-Projects.jpg",
    link: "https://porn2purity.org",
    details:
      "Porn 2 Purity offers counseling, support groups, and resources to help individuals break free from pornography addiction and live a life of purity.",
    currentInitiative: "Online Recovery Course Development",
    fundingGoal: 10000,
    currentFunding: 0,
    contactEmail: "porn2purity@example.com",
  },
  {
    title: "Noor USA",
    description:
      "Sharing the love, life, and light of Jesus in Somali, Arabic, Turkish, Farsi (Iranian), and Urdu.",
    image: "/assets/RC-Projects.jpg",
    link: "https://noorusa.org",
    details:
      "Noor USA reaches out to immigrant communities, providing spiritual guidance, language support, and cultural integration assistance.",
    currentInitiative: "Multi-language Gospel Broadcast",
    fundingGoal: 10000,
    currentFunding: 0,
    contactEmail: "noorusa@example.com",
  },
  {
    title: "Student Outreach",
    description:
      "Reaching out to students and young adults with the message of hope and purpose.",
    image: "/assets/RC-Projects.jpg",
    link: "#",
    details:
      "Our Student Outreach program engages with local schools and universities, offering mentorship, Bible studies, and community service opportunities.",
    currentInitiative: "Campus Ministry Expansion",
    fundingGoal: 1000,
    currentFunding: 0,
    contactEmail: "studentoutreach@example.com",
  },
];

export default function MinistriesComponent() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Ministries
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Reaching out to our community and beyond
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Your support can make a real difference. Each of our ministries is
            dedicated to transforming lives and communities. By getting involved
            or donating, you become part of something greater than yourself.
            Together, we can bring hope, healing, and positive change to those
            who need it most.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <Image
                    src={ministry.image}
                    alt={ministry.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="text-xl mb-2 mt-4 ">
                    {ministry.title}
                  </CardTitle>
                  <CardDescription>{ministry.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Dialog
                    open={openModal === ministry.title}
                    onOpenChange={(isOpen) =>
                      setOpenModal(isOpen ? ministry.title : null)
                    }>
                    <DialogTrigger asChild>
                      <Button className="w-full">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>{ministry.title}</DialogTitle>
                        <DialogDescription>
                          {ministry.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <h4 className="text-sm font-medium mb-2">
                          About this Ministry
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          {ministry.details}
                        </p>
                        <h4 className="text-sm font-medium mb-2">
                          Current Initiative
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">
                          {ministry.currentInitiative}
                        </p>
                        <div className="space-y-2">
                          <Progress
                            value={
                              (ministry.currentFunding / ministry.fundingGoal) *
                              100
                            }
                          />
                          <p className="text-sm text-gray-700">
                            ${ministry.currentFunding.toLocaleString()} raised
                            of ${ministry.fundingGoal.toLocaleString()} goal
                          </p>
                        </div>
                      </div>
                      {/* Make these buttons centered */}
                      <DialogFooter className="flex flex-col items-center sm:flex-row sm:justify-center gap-2">
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto justify-center">
                          <Button asChild className="w-full sm:w-auto">
                            <a href={`mailto:${ministry.contactEmail}`}>
                              Contact Us
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="w-full sm:w-auto">
                            <a
                              href={ministry.link}
                              target="_blank"
                              rel="noopener noreferrer">
                              Visit Website{" "}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <Button
                            className="w-full sm:w-auto"
                            variant="secondary">
                            <Heart className="mr-2 h-4 w-4" /> Support Us
                          </Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Stay updated with our latest news and events
          </p>
          <div className="aspect-video">
            <iframe
              src="https://ei8giuhz.paperform.co/?embed=1&takeover=0&inline=1&popup=0&_d=revivalcentermn.org&_in=0"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
