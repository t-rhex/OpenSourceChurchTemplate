"use client";

import { motion } from "framer-motion";
import { experienceConfig } from "@/configs/ExperienceConfig";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Users,
  MapPin,
  Heart,
  HandHelping,
  Church,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

export default function Experience() {
  const { title, sections } = experienceConfig;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "User":
        return User;
      case "Users":
        return Users;
      case "MapPin":
        return MapPin;
      case "Heart":
        return Heart;
      case "HandHelping":
        return HandHelping;
      case "Church":
        return Church;
      case "GraduationCap":
        return GraduationCap;
      case "HeartHandshake":
        return HeartHandshake;
      default:
        return Heart;
    }
  };

  const enabledSections = Object.entries(sections).filter(
    ([, section]) => section.enabled
  );
  const gridClass = `grid grid-cols-1 md:grid-cols-${Math.min(
    enabledSections.length,
    3
  )} lg:grid-cols-${Math.min(enabledSections.length, 5)} gap-4`;

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-10 text-black text-center">
          {title}
        </h1>

        <div className={gridClass}>
          {sections.reflect.enabled && (
            <Card className="col-span-full md:col-span-2 lg:col-span-3 row-span-3 overflow-hidden">
              <Image
                src={sections.reflect.imageSrc}
                alt={sections.reflect.imageAlt}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </Card>
          )}

          {sections.userTypes.enabled && (
            <Card
              className={`col-span-full ${
                sections.reflect.enabled
                  ? "md:col-span-1 lg:col-span-2"
                  : "md:col-span-2 lg:col-span-3"
              } row-span-2`}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-black">
                  User Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {sections.userTypes.items.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <item.icon className="mr-2 text-gray-600 h-4 w-4" />
                      <span className="text-gray-800 text-xs font-medium">
                        {item.text}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {sections.getInvolved.enabled && (
            <Card className="col-span-full md:col-span-1 lg:col-span-2 row-span-1">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  {sections.getInvolved.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-xs mb-2">
                  {sections.getInvolved.description}
                </p>
                <ul className="grid grid-cols-2 gap-1 text-xs">
                  {sections.getInvolved.items.map((item, index) => {
                    const Icon = getIcon("Heart");
                    return (
                      <li
                        key={index}
                        className="flex items-center text-gray-800">
                        <Icon className="mr-1 h-3 w-3 text-pakistanGreen" />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          )}

          {sections.forYourFamily.enabled && (
            <Card className="col-span-full md:col-span-1 lg:col-span-2 row-span-1">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  {sections.forYourFamily.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-xs mb-2">
                  {sections.forYourFamily.description}
                </p>
                <ul className="space-y-1 text-xs">
                  {sections.forYourFamily.items.map((item, index) => {
                    const Icon = getIcon("Users");
                    return (
                      <li
                        key={index}
                        className="flex items-center text-gray-800">
                        <Icon className="mr-1 h-3 w-3 text-pakistanGreen" />
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          )}

          {sections.eTeamConnect.enabled && (
            <Card className="col-span-full md:col-span-2 lg:col-span-3 row-span-1 bg-black text-white">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-1">
                  {sections.eTeamConnect.title}
                </h2>
                <h3 className="text-sm font-semibold mb-2">
                  {sections.eTeamConnect.subtitle}
                </h3>
                <p className="text-xs">{sections.eTeamConnect.description}</p>
              </CardContent>
            </Card>
          )}

          {sections.myElevation.enabled && (
            <Card className="col-span-full md:col-span-1 lg:col-span-2 row-span-1">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  {sections.myElevation.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-xs mb-2">
                  {sections.myElevation.description}
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-1">
                  {sections.myElevation.buttonText}
                </Button>
              </CardContent>
            </Card>
          )}

          {sections.socialMedia.enabled && (
            <Card className="col-span-full md:col-span-2 lg:col-span-3 row-span-1">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-black">
                  {sections.socialMedia.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-2">
                  {sections.socialMedia.items.map((item, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="flex items-center">
                      <item.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
