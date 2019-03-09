// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = ()=>{
  return (
    <div className ="ui container comments">
     <ApprovalCard>
      <div>
      <h1>Warning!</h1>
       Are u sure u want to do this?
      </div>
     </ApprovalCard>
     <ApprovalCard>
      <CommentDetail
        author ="Sam"
        date="Today at 12:00PM"
        text="Nice blog!"
        avatar={faker.image.avatar()}
      />
     </ApprovalCard>
     <ApprovalCard>
      <CommentDetail
        author ="fam"
        date="Today at 1:00PM"
        text="It's cool !"
        avatar={faker.image.avatar()}
       />
      </ApprovalCard>
      <ApprovalCard>
       <CommentDetail
        author ="Twin"
        date="Today at 3:40AM"
        text="Nice blog post ever!"
        avatar={faker.image.avatar()}
       />
      </ApprovalCard>
    
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
