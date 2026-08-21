type DigitalSceneProps = {
  variant: "hero" | "story";
  phase?: number;
};

const storyMedia = [
  { type: "image", src: "/visuals/story-context-pexels.jpg" },
  { type: "image", src: "/cases/experience-automation-v3.png" },
  { type: "image", src: "/visuals/story-operation-pexels.jpg" },
];

function DigitalScene({ variant, phase = 0 }: DigitalSceneProps) {
  if (variant === "hero") {
    return (
      <div className="digital-scene digital-scene-hero" aria-hidden="true">
        <div className="real-visual real-visual-hero">
          <img src="/cases/experience-health-intelligence-v7.png" alt="" decoding="async" fetchPriority="high" />
          <div className="real-visual-depth depth-back" />
          <div className="real-visual-depth depth-front" />
        </div>
        <div className="digital-scene-frame"><i /><i /><i /><i /></div>
      </div>
    );
  }

  return (
    <div className={`digital-scene digital-scene-story scene-phase-${phase}`} aria-hidden="true">
      <div className="real-visual real-visual-story">
        {storyMedia.map((media, index) =>
          media.type === "video" ? (
            <video
              className={index === phase ? "active" : ""}
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              key={media.src}
            />
          ) : (
            <img className={index === phase ? "active" : ""} src={media.src} alt="" decoding="async" loading="eager" key={media.src} />
          ),
        )}
        <div className="real-visual-depth depth-back" />
        <div className="real-visual-depth depth-front" />
      </div>
      <div className="digital-scene-frame"><i /><i /><i /><i /></div>
    </div>
  );
}

export default DigitalScene;
