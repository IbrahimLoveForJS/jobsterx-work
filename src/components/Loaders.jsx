import LoaderBar from "../loaders/LoaderBar";
import LoaderDots from "../loaders/LoaderDots";
import LoaderRing from "../loaders/LoaderRing";
import LoaderSkeleton from "../loaders/LoaderSkeleton";

function Loaders() {
  return (
    <div>
      <div className="w-full max-w-5xl mx-auto">
        <LoaderDots />
        <br />
        <LoaderRing />
        <br />
        <LoaderBar />
        <br />
        <LoaderSkeleton />
      </div>
    </div>
  );
}

export default Loaders;
