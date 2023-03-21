const { gql } = require('apollo-server-express');

const toDoList = gql`
  type ToDoList {
    _id: ID
    toDoListText: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    toDoList: [ToDoList]!
    toDoList (toDoListId: ID!): ToDoList
  }

  type Mutation {
    addToDoList(toDoListText: String!): ToDoList
    addComment(toDoListId: ID!, commentText: String!): ToDoList
    removeToDoList(toDoListId: ID!): ToDoList
    removeComment(toDoListId: ID!, commentId: ID!): ToDoList
  }
`;

module.exports = toDoList;
