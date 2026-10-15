export function HomeSectionEdgeFog({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className="home-section-edge-fog"
      data-direction={direction}
    />
  );
}
