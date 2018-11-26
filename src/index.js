import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
    return (        
        <div className="ui container comments">         
            <ApprovalCard>
                <CommentDetail 
                    author="Yla" 
                    timeAgo="Today at 1pm" 
                    comment="Hello, It was nice to meet you" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>   
            <ApprovalCard>
                <CommentDetail 
                    author="Livia" 
                    timeAgo="Today at 4pm"
                    comment="Hello, It's cold today." 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Laiane" 
                    timeAgo="Yesterday at 1pm" 
                    comment="What's today's date?" 
                    avatar={faker.image.avatar()} 
                />  
            </ApprovalCard>
              
        </div>                
    )
}

// Take React component and show it on the screen
ReactDOM.render(<App />,document.querySelector("#root"));