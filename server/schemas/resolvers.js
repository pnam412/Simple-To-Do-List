const { ToDoList } = require('../models');

const toDoList = {
  Query: {
    toDoList: async () => {
      return ToDoList.find();
    },

    toDoList: async (parent, { toDoListId }) => {
      return ToDoList.findOne({ _id: toDoListId });
    },
  },

  Mutation: {
    addToDoList: async (parent, { toDoListText }) => {
      return ToDoList.create({ toDoListText, });
    },
    addComment: async (parent, { toDoListId, commentText }) => {
      return ToDoList.findOneAndUpdate(
        { _id: toDoListId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeToDoList: async (parent, { toDoListId }) => {
      return ToDoList.findOneAndDelete({ _id: toDoListId });
    },
    removeComment: async (parent, { toDoListId, commentId }) => {
      return ToDoList.findOneAndUpdate(
        { _id: toDoListId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
