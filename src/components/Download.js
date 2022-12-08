import DownloadCards from "./UI/DownloadCards";

const Download = () => {
  return (
    <div className="pt-5 text-center px-5 mt-md-5">
      <h3 className="py-1">Download the extension</h3>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <DownloadCards className="pb-3" />
    </div>
  );
};

export default Download;
