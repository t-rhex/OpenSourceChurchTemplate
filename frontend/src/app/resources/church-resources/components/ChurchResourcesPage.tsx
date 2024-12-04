"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { churchResourcesConfig } from "@/configs/ChurchResourcesConfig";
import { Search, Download, ExternalLink, FileText, File, FileSpreadsheet } from "lucide-react";

// Add type for resource
interface Resource {
  id: number;
  title: string;
  description: string;
  type: "form" | "document";
  downloadUrl: string;
}

export default function ChurchResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Function to get icon based on resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "form":
        return FileSpreadsheet;
      case "document":
        return FileText;
      default:
        return File;
    }
  };

  const filteredResources = churchResourcesConfig.categories.flatMap(category =>
    category.resources.filter(() =>
      activeCategory === "all" || category.id === activeCategory
    ).filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  ) as Resource[];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gray-900 -mt-[104px] md:-mt-[112px]">
        <div className="absolute inset-0">
          <Image
            src={churchResourcesConfig.hero.backgroundImage}
            alt="Church Resources"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
        </div>

        <div className="relative min-h-[60vh] flex items-center">
          <div className="container mx-auto px-4 pt-[104px] md:pt-[112px]">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                {churchResourcesConfig.hero.title}
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-white/90 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                {churchResourcesConfig.hero.subtitle}
              </motion.p>
              <motion.p
                className="text-base text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                {churchResourcesConfig.hero.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
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

            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                {churchResourcesConfig.categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Resources Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource: Resource) => {
              const ResourceIcon = getResourceIcon(resource.type);
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <ResourceIcon className="mr-2 h-5 w-5 text-earthYellow" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{resource.description}</p>
                    <div className="flex justify-between">
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
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          {filteredResources.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 mt-8">
              No resources found. Please try a different search term or category.
            </motion.p>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-darkMossGreen text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {churchResourcesConfig.callToAction.title}
          </h2>
          <p className="text-lg mb-8">{churchResourcesConfig.callToAction.description}</p>
          <Link
            href={churchResourcesConfig.callToAction.button.link}
            className="inline-block bg-earthYellow text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            {churchResourcesConfig.callToAction.button.text}
          </Link>
        </div>
      </section>
    </div>
  );
} 