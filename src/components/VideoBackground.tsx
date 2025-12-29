interface VideoBackgroundProps {
  className?: string;
}

const VideoBackground = ({ className = "" }: VideoBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      {/* Purple tint overlay */}
      <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30 mix-blend-overlay" />
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-background/50 dark:bg-background/60" />
    </div>
  );
};

export default VideoBackground;
