import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useFontSize from "@/hooks/useFontSize";

const FontSize = () => {
  const [fontSize, setSmallFontSize, setMediumFontSize, setLargeFontSize] =
    useFontSize();

  const handleDecreaseFontSize = () => {
    switch (fontSize) {
      case "large":
        setMediumFontSize();
        break;
      case "medium":
        setSmallFontSize();
        break;
      default:
        break;
    }
  };

  const handleIncreaseFontSize = () => {
    switch (fontSize) {
      case "small":
        setMediumFontSize();
        break;
      case "medium":
        setLargeFontSize();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center h-24 w-full">
        <div>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "15px 25px",
            }}
            variant="contained"
            disabled={fontSize === "small" ? true : false}
            onClick={handleDecreaseFontSize}
          >
            <RemoveIcon />
          </Button>
        </div>
        <div>
          <p className="text-lg font-bold">{fontSize}</p>
        </div>
        <div>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              padding: "15px 25px",
            }}
            variant="contained"
            disabled={fontSize === "large" ? true : false}
            onClick={handleIncreaseFontSize}
          >
            <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FontSize;
