import { useScrapedData } from "./context";
function Prospects() {
  const { scrapedData, loading, error } = useScrapedData();
  console.log(scrapedData);
  return (
    <div className="content">
      <div className="news">prospects content</div>;
    </div>
  );
}

export default Prospects;
