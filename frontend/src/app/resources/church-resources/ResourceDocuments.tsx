"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Download, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const resources = [
  {
    id: 1,
    title: "Membership Application",
    description: "Form for new members to join our church community",
    type: "form",
    category: "Membership",
    downloadUrl: "/forms/membership-application.pdf",
  },
  {
    id: 2,
    title: "Baptism Request",
    description: "Request form for those seeking baptism",
    type: "form",
    category: "Sacraments",
    downloadUrl: "/forms/baptism-request.pdf",
  },
  {
    id: 3,
    title: "Statement of Faith",
    description: "Our church's core beliefs and doctrines",
    type: "document",
    category: "Beliefs",
    downloadUrl: "/documents/statement-of-faith.pdf",
  },
  {
    id: 4,
    title: "Volunteer Application",
    description: "Application for those interested in serving",
    type: "form",
    category: "Volunteering",
    downloadUrl: "/forms/volunteer-application.pdf",
  },
  {
    id: 5,
    title: "Church Constitution",
    description: "Governing document of our church",
    type: "document",
    category: "Governance",
    downloadUrl: "/documents/church-constitution.pdf",
  },
  {
    id: 6,
    title: "Event Request Form",
    description: "Form to request use of church facilities for events",
    type: "form",
    category: "Events",
    downloadUrl: "/forms/event-request.pdf",
  },
];

export default function ResourceComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredResources = resources.filter(
    (resource) =>
      (activeTab === "all" || resource.type === activeTab) &&
      (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold text-center mb-2 text-primary">
          Church Resources
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Access forms, documents, and other important materials
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={() => setSearchTerm("")} variant="outline">
            Clear
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="form">Forms</TabsTrigger>
            <TabsTrigger value="document">Documents</TabsTrigger>
          </TabsList>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2">
          {filteredResources.map((resource) => (
            <Card key={resource.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  {resource.title}
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground">
                  Category: {resource.category}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <a href={resource.downloadUrl} download>
                    <Download className="mr-2 h-4 w-4" /> Download
                  </a>
                </Button>
                <Button variant="ghost" asChild>
                  <a
                    href={resource.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>

        {filteredResources.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground mt-8">
            No resources found. Please try a different search term or category.
          </motion.p>
        )}
      </div>
    </div>
  );
}
