import React from 'react'
import { USER_ICON } from '../utils/constant';

const commentsData = [
    {
        name: "Aneesh Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        replies: [],
    },
    {
        name: "Aneesh Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
        replies: [
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
           replies: [],
            },
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
           replies: [
                    {
                        name: "Aneesh Sharma",
                        text: "Lorem ipsum dolor sit amet, consectetur adipisc,",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Aneesh Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        replies: [
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
                replies: [],
            },
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                replies: [
                    {
                        name: "Aneesh Sharma",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Aneesh Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
        replies: [
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                replies: [],
            },
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                replies: [
                    {
                        name: "Aneesh Sharma",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Aneesh Sharma",
        text: "Lorem ipsum a quick brown fox jumps over a lazy dog",
        replies: [
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum a quick brown fox jumps over a lazy dog",
                replies: [],
            },
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum a quick brown fox jumps over a lazy dog",
                replies: [
                    {
                        name: "Aneesh Sharma",
                        text: "Lorem ipsum a quick brown fox jumps over a lazy dog",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Aneesh Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        replies: [
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                replies: [],
            },
            {
                name: "Aneesh Sharma",
                text: "Lorem ipsum dolor  enim ad ",
                replies: [
                    {
                        name: "Aneesh Sharma",
                        text: "Lorem ipsum .",
                        replies: [],
                    },
                ],
            },
        ],
    },
    {
        name: "Aneesh Sharma",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        replies: [],
    },
]

const Comment = ({data})=>{
 const {name,text,replies} = data;   
    return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className="w-12 h-12"alt='user' src= {USER_ICON}/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p> 
        </div>
    </div>
    )};

const CommentsList = ({comments}) =>{
    return comments.map((comment,index)=>
    <div key={index}>
        <Comment  data ={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment.replies}/>
        </div>
    </div> 
    );
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <CommentsList comments ={commentsData} />
    </div>
  )
}

export default CommentsContainer