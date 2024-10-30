import { cn } from "../lib/utils";
import {
    IconMusic,
    IconDeviceMobile,
    IconDownload,
    IconSearch,
    IconPlaylist,
    IconSettings,
    IconCar,
    IconCloudCode
  } from "@tabler/icons-react";

export default function FeaturesSection() {
    const features = [
        {
          title: "Play Any Song or Video",
          description: "Access almost any song or video from YouTube Music for unlimited streaming.",
          icon: <IconMusic />,
        },
        {
          title: "Offline Playback",
          description: "Cache songs for listening offline, anytime, anywhere.",
          icon: <IconDownload />,
        },
        {
          title: "Device Music Support",
          description: "Play songs directly from your device for a versatile listening experience.",
          icon: <IconDeviceMobile />,
        },
        {
          title: "Smart Search",
          description: "Search by song, album, artist, video, or playlist to find your favorites fast.",
          icon: <IconSearch />,
        },
        {
          title: "Custom Playlists",
          description: "Manage playlists locally or sync with the cloud for effortless access.",
          icon: <IconPlaylist />,
        },
        {
          title: "Personalized Discovery",
          description: "Discover new tracks by mood or genre to match your vibe.",
          icon: <IconCloudCode />,
        },
        {
          title: "Dynamic Themes",
          description: "Customize your app with Material You and dynamic theming options.",
          icon: <IconSettings />,
        },
        {
          title: "Android Auto Support",
          description: "Enjoy your music on the go with Android Auto compatibility.",
          icon: <IconCar />,
        },
      ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col cursor-pointer lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
