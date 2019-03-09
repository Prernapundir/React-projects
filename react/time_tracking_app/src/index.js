
import React from 'react';
import ReactDOM from 'react-dom';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import timers from './timers';
import {newTimer} from './helpers';


class TimersDashboard extends React.Component {

  state = { timers: timers };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId)
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  startTimer = (timerId) => {
     const now = Date.now();
     this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId) {
             return Object.assign({}, timer, {
               runningSince: now,
        });
       } else {
          return timer;
       }
     })
   });
 };

stopTimer = (timerId) => {
    const now = Date.now();
      this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId) {
           const lastElapsed = now - timer.runningSince;
              return Object.assign({}, timer, {
                 elapsed: timer.elapsed + lastElapsed,
                  runningSince: null,
                 });
              } else {
                  return timer;
                }
              }),
            });
          };

  deleteTimer = (timerID) => {
    this.setState({
      timers:this.state.timers.filter((t) => t.id!== timerID)

  });
};

  updateTimer = (attrs) => {
    this.setState({ timers: this.state.timers.map(( timer) => {
      if(timer.id === attrs.id) {
        return Object.assign({} , timer, {
          title:attrs.title,
          project:attrs.project
        });
      } else {
        return timer;
      }
    })
  });
};
  createTimer = (timer) => {
    const t = newTimer(timer);
    this.setState({ timers:this.state.timers.concat(t) });
  };

  render() {
    return (
      <div className=" ui three column centered grid">
       <div className="column">
         <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
         <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
         />
       </div>
      </div>
    );
  }
};

ReactDOM.render(<TimersDashboard />,document.querySelector("#root"));
