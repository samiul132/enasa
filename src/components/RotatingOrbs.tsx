const RotatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large rotating gradient orb - top right */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-40 animate-spin"
        style={{
          background: "radial-gradient(circle, hsl(203, 92%, 58%) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDuration: "20s",
        }}
      />
      
      {/* Medium rotating gradient orb - bottom left */}
      <div 
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-35 animate-spin"
        style={{
          background: "radial-gradient(circle, hsl(220, 100%, 85%) 0%, transparent 70%)",
          filter: "blur(70px)",
          animationDuration: "25s",
          animationDirection: "reverse",
        }}
      />
      
      {/* Small pulsing orb - center */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-30 animate-pulse"
        style={{
          background: "radial-gradient(circle, hsl(203, 100%, 70%) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "3s",
        }}
      />
      
      {/* Rotating ring effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 opacity-25 animate-spin" style={{ animationDuration: "30s" }}>
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "conic-gradient(from 0deg, hsl(203, 92%, 58%), hsl(220, 100%, 85%), hsl(203, 100%, 70%), hsl(203, 92%, 58%))",
            filter: "blur(50px)",
          }}
        />
      </div>
    </div>
  );
};

export default RotatingOrbs;
