import { CardLoader } from "../loaders/CardLoader";
import { GridLoader } from "../loaders/GridLoader";
import Loader2 from "../loaders/Loader2";
import LoaderBar from "../loaders/LoaderBar";
import LoaderDots from "../loaders/LoaderDots";
import LoaderRing from "../loaders/LoaderRing";
import LoaderSkeleton from "../loaders/LoaderSkeleton";
import { ModalLoader } from "../loaders/ModalLoader";
import Skeleton from "../loaders/Skeleton";

function Loaders() {
  return (
    <div>
      <div className=" flex items-center flex-col w-full max-w-5xl mx-auto mt-4">
        <LoaderDots />
        <br />
        <LoaderRing />
        <br />
        <LoaderBar />
        <br />
        <LoaderSkeleton />
        <br />
      </div>
    </div>
  );
}

export default Loaders;
