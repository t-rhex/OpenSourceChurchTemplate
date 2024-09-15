import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  delay: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  title,
  subTitle,
  delay,
}) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}>
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <h3 className="font-montserrat absolute bottom-6 mb-8 left-6 text-white text-3xl font-bold uppercase">
        {title}
      </h3>
      <p className="absolute bottom-6 left-6  text-white text-lg">{subTitle}</p>
    </motion.div>
  );
};

export default ImageCard;
