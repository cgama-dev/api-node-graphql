import { makeExecutableSchema } from 'graphql-tools';
import { Query } from './query';
import { Mutation } from './mutation';
import { commentTypes } from './resources/comment/comment.schema';
import { userTypes } from './resources/user/user.schema';
import { postTypes } from './resources/post/post.schema';

const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        commentTypes,
        userTypes,
        postTypes
    ]
});