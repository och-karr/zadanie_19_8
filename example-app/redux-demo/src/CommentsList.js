import React from 'react';
import Comment from './CommentContainer';

//mapowanie przekazanej tablicy z komentarzami na wyrenderowaną postać (widoczną listę komentarzy)
const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;