
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";

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
      <button className="Button px-1" 
      onClick={() => onViewModeChange(ViewMode.Day)}>
        День
      </button>
      <button
        className="Button px-1"
        onClick={() => onViewModeChange(ViewMode.Week)}
      >
        Неделя
      </button>
      <button
        className="Button px-1"
        onClick={() => onViewModeChange(ViewMode.Month)}
      >
        Месяц
      </button>
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
