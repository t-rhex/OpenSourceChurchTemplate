import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { components } from "@/configs/DesignSystem";

interface MinistryCardProps {
  program: {
    title: string;
    age?: string;
    time: string;
    description: string;
    image: string;
    link: string;
  };
  index: number;
}

export default function MinistryCard({ program, index }: MinistryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={program.link}>
        <div className={components.cards.default}>
          <div className="relative h-48 rounded-t-3xl overflow-hidden">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-darkMossGreen mb-2">
              {program.title}
            </h3>
            {program.age && (
              <p className="text-sm text-pakistanGreen/80 mb-1">{program.age}</p>
            )}
            <p className="text-sm text-pakistanGreen/80 mb-3">{program.time}</p>
            <p className="text-pakistanGreen/80">{program.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 