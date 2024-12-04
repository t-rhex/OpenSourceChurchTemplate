import { LucideIcon, Shield, Heart, BookOpen, Cross } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutConfig = {
  hero: {
    title: "About Revival Center Church",
    subtitle:
      "We are a church that believes in Jesus & loves God and people. We are a multi-cultural and multi-generational church committed to reaching the city of Woodbury and Beyond. We exist to help you and your family grow closer to your God-given purpose. Everyone has a first step to take in their journey. Will you take your first step this Sunday?",
  },
  story: {
    title: "Meet Our Pastors",
    content:
      "David and Neelu are the Founding Pastors of Revival Center Minnesota Church. Both came from Hindu families in South India. Soon after their encounter with the Living God Jesus Christ, God called them into full-time ministry. Together, they have served in church and ministry, for around 20 years, and 18 years ago God called David to be a missionary to the USA. After their marriage, both traveled to different parts of the USA ministering to ethnic churches like Russians/Ukrainians, Armenians, Ethiopians, South Sudanese, Koreans, Hmong, Messianic Jews, Nepali/Bhutanese, Indians, Hispanics, and Americans. The Lord planted within David and Neelu’s heart, the vision to plant a Church in Minnesota to reach ALL PEOPLE GROUPS with the LOVE and HOPE of Lord Jesus Christ. Pastor David is a graduate of Victory Bible College & Victory Missions from Tulsa, OK.",
    buttonText: "Learn More",
    image: "/assets/icons/new-placeholder.svg",
    imageAlt: "Our Pastors",
  },
  values: [
    {
      icon: BookOpen,
      title: "THE SCRIPTURES",
      description:
        "The Bible is the inspired Word of God, the product of holy men of old who spoke and wrote as they were moved by the Holy Spirit. The New Covenant, as recorded in the New Testament, we accept as our infallible guide in matters pertaining to conduct and doctrine. (2 Timothy 3:16; 2 Peter 1:21; 1 Thessalonians 2:13)",
    },
    {
      icon: Shield,
      title: "THE GOD HEAD",
      description:
        "Our God is One but manifested in three persons—the Father, the Son, and the Holy Spirit. (Philippians 2:6; John 14:21-26)God the Father is greater than all, and He is the Source of the Word (Logos) and the Begetter. (John 14:28; John 16:28; John 1:14)The Son is the flesh-covered Word, the One Begotten, and has existed with the Father from the beginning. (John 1:14; John 1:18; John 1:1)The Holy Spirit proceeds forth from both the Father and the Son and is eternal. (John 15:26).",
    },
    {
      icon: Heart,
      title: "MAN, HIS FALL AND REDEMPTION",
      description:
        "Man is a created being, made in the likeness and image of God. But through Adam’s transgression and fall, sin came into the world. The Bible tells us in Romans 3:23 that “All have sinned and came short of the glory of God.” Romans 3:10 says, “As it is written, there is none righteous, no not one.” Jesus Christ, the Son of God, was manifested to undo the work of the devil, and He gave His life and shed His blood to redeem and restore man back to God. (Romans 5:12; Romans 3:23; Romans 3:10; 1 John 3:8)Salvation is the gift of God to man, separate from works and the law, and is made operative by grace through faith in Jesus Christ, producing works acceptable to God. (Ephesians 2:8).",
    },
    {
      icon: Cross,
      title: "ETERNAL LIFE AND NEW BIRTH",
      description:
        "Man’s first step toward salvation is godly sorrow that works in repentance. The new birth is available to all mankind, and when Jesus Christ is accepted as Savior, salvation takes place. He is born again. His Spirit becomes alive to God eternally. (2 Corinthians 7:10; 1 John 5:12; John 3:3-5).",
    },
    {
      icon: Heart,
      title: "WATER BAPTISM",
      description:
        "Baptism in water is by immersion. It is a direct commandment of our Lord, and it is for believers only. The ordinance is a symbol of the Christian’s identification with Christ in His death, burial, and resurrection. (Matthew 28:19; Romans 6:4; Colossians 2:12; Acts 8:36-39)The following recommendation regarding the water baptismal formula is adopted to wit: “On the confession of your faith in the Lord Jesus Christ, the Son of God, and by His authority, I baptize you in the name of the Father, the Son, and of the Holy Ghost. Amen.",
    },
    {
      icon: BookOpen,
      title: "BAPTISM IN THE HOLY SPIRIT",
      description:
        "“The baptism in the Holy Spirit and fire is a gift from God. It is promised by the Lord Jesus Christ to those who are believers in this dispensation and is received subsequent to the new birth. This experience is accompanied by the initial evidence of speaking in other tongues as the Holy Spirit Himself gives utterance. (Matthew 3:11; John 14:16-17; Acts 1:8; Acts 2:38-39; Acts 19:1-7; Acts 2:4).",
    },
    {
      icon: Heart,
      title: "SANCTIFICATION",
      description:
        "The Bible teaches that without holiness no man can see the Lord. We believe in the doctrine of sanctification as a definite, yet progressive, work of grace, which commences at the time of regeneration and continues until the consummation of salvation. (Hebrews 12:14; 1 Thessalonians 5:23; 2 Peter 3:18; 2 Corinthians 3:18; Philippians 3:12-14; 1 Corinthians 1:30).",
    },
    {
      icon: BookOpen,
      title: "DIVINE HEALING",
      description:
        "Healing is for the physical ills of the human body and is wrought by the power of God through the prayer of faith and by laying on of hands. It is provided in the atonement of Christ, and it is the privilege of every member of the church today. (Mark 16:18; James 5:14-16; 1 Peter 2:24; Matthew 8:17; Isaiah 53:4-5).",
    },
    {
      icon: Heart,
      title: "RESURRECTION OF THE JUST AND THE RETURN OF OUR LORD",
      description:
        "The angels said, “…this same Jesus shall so come in like manner…” (Acts 1:11). His coming is imminent. When He comes, “the dead in Christ shall rise first: then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air” (1 Thessalonians 4:16-17). Following the Tribulation, He shall return to earth, as KING OF KINGS AND LORD OF LORDS; and together with His saints, who shall be kings and priests, He shall reign for a thousand years. (Revelation 19:16; Revelation 20:6).",
    },
    {
      icon: Cross,
      title: "HELL AND ETERNAL RETRIBUTION",
      description:
        "The person who physically dies in his sins without Christ is hopelessly and eternally lost in the lake of fire. Therefore, he has no further opportunity of hearing the Gospel or for repentance. The lake of fire is literal. The terms “eternal” and “everlasting” used in describing the duration of the punishment of the damned in the lake of fire carry the same thought and meaning of endless existence as used in noting the duration of joy and ecstasy of the saints in the presence of God. (Hebrews 9:27; Revelation 19:20; Revelation 20:15).",
    },
  ] as Value[],
  team: [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/assets/icons/new-placeholder.svg",
    },
    {
      name: "Jane Smith",
      role: "COO",
      image: "/assets/icons/new-placeholder.svg",
    },
    {
      name: "Mike Johnson",
      role: "CTO",
      image: "/assets/icons/new-placeholder.svg",
    },
  ] as TeamMember[],
  mission: {
    title: "Our Mission",
    content:
      "We exist to lead people to Jesus Christ and the fullness of life he has for them. To know Jesus and Make Jesus Known. EQUIP EMPOWER ENRICH. We exist to equip people with God’s word, to empower community engagement, and enrich relationships with God and others.",
  },
};
