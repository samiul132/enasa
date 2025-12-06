const AirFlowEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Flowing wave layers */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          {/* Gradient for air flow */}
          <linearGradient id="airFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(203, 92%, 58%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(203, 100%, 70%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(220, 100%, 85%)" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="airFlow2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 100%, 73%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(203, 92%, 58%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(203, 80%, 50%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* First wave layer - slow horizontal flow */}
        <g>
          <path
            d="M-500,100 Q-250,80 0,100 T500,100 T1000,100 T1500,100 T2000,100 V0 H-500 Z"
            fill="url(#airFlow1)"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M-500,100 Q-250,80 0,100 T500,100 T1000,100 T1500,100 T2000,100 V0 H-500 Z;
                M-500,100 Q-250,120 0,100 T500,100 T1000,100 T1500,100 T2000,100 V0 H-500 Z;
                M-500,100 Q-250,80 0,100 T500,100 T1000,100 T1500,100 T2000,100 V0 H-500 Z
              "
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0,0"
              to="500,0"
              dur="30s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Second wave layer - medium flow */}
        <g>
          <path
            d="M-500,300 Q-250,280 0,300 T500,300 T1000,300 T1500,300 T2000,300 V0 H-500 Z"
            fill="url(#airFlow2)"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="
                M-500,300 Q-250,280 0,300 T500,300 T1000,300 T1500,300 T2000,300 V0 H-500 Z;
                M-500,300 Q-250,320 0,300 T500,300 T1000,300 T1500,300 T2000,300 V0 H-500 Z;
                M-500,300 Q-250,280 0,300 T500,300 T1000,300 T1500,300 T2000,300 V0 H-500 Z
              "
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="500,0"
              to="0,0"
              dur="35s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Third wave layer - bottom flow */}
        <g>
          <path
            d="M-500,500 Q-250,480 0,500 T500,500 T1000,500 T1500,500 T2000,500 V0 H-500 Z"
            fill="url(#airFlow1)"
            opacity="0.2"
          >
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="
                M-500,500 Q-250,480 0,500 T500,500 T1000,500 T1500,500 T2000,500 V0 H-500 Z;
                M-500,500 Q-250,520 0,500 T500,500 T1000,500 T1500,500 T2000,500 V0 H-500 Z;
                M-500,500 Q-250,480 0,500 T500,500 T1000,500 T1500,500 T2000,500 V0 H-500 Z
              "
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0,0"
              to="500,0"
              dur="40s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      {/* Subtle flowing particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `airDrift ${20 + Math.random() * 20}s ease-in-out ${Math.random() * 5}s infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AirFlowEffect;
