import laptopSvgInner from "../assets/laptopSvgInner";

export default function LaptopIllustration() {
  return (
    <div className="laptop-illustration">
      <div className="laptop-shadow" />
      <svg
        width="420"
        height="380"
        viewBox="0 0 300 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: laptopSvgInner }}
      />
    </div>
  );
}
