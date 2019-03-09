import uuid from 'uuid';

const timers =[
  {
    title:"Practice Tennis",
    project:"Gym Chores",
    id:uuid.v4(),
    elapsed:5456099,
    runningSince:Date.now()
  },
  {
    title:"Bake Cake",
    project:"Kitchen Chores",
    id:uuid.v4(),
    elapsed:4457098,
    runningSince:null
  }
]


export default timers;
