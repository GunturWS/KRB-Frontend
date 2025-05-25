import Wavify from "react-wavify";

export const Wave = () => {
  return (
    <Wavify
      fill="#3B82F6"
      paused={false}
      options={{
        height: 20,
        amplitude: 40,
        speed: 0.15,
        points: 3,
      }}
      style={{ position: "absolute", bottom: 0, width: "100%" }}
    />
  );
};
