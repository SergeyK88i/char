
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
import { Button } from "@/components/ui/button";

type ViewSwitcherProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};
export const ViewSwitcher: React.SFC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked
}) => {


   
  return (
    <div className="ViewContainer" >
      <Button className="Button px-5 bg-gradient-to-r from-violet-300 to-violet-400" 
      onClick={() => onViewModeChange(ViewMode.Day)}>
        День
      </Button>
      <Button
        className="Button px-5 ml-2 bg-gradient-to-r from-violet-300 to-violet-400"
        onClick={() => onViewModeChange(ViewMode.Week)}
      >
        Неделя
        </Button>
      <Button
        className="Button px-5 mx-2 bg-gradient-to-r from-violet-300 to-violet-400"
        onClick={() => onViewModeChange(ViewMode.Month)}
      >
        Месяц
        </Button>
      {/* <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div> */}
    </div>
  );
};
