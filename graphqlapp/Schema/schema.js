const graphql = require('graphql');
const _ = require('lodash');

const{
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema
}= graphql;


const movies = [
    {
        "id": 1,
        "name": "Black Panther",
        "language": "ENGLISH",
        "rate": 4.5,
        "type": "Action Adventure Fantasy",
        "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
        "id": 2,
        "name": "Death Wish",
        "language": "ENGLISH",
        "type": "Action Crime Thriller",
        "rate": 3.2,
        "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
    },
    {
        "id": 3,
        "name": "Coco",
        "language": "ENGLISH",
        "type": "Adventure Animation Family",
        "rate": 5,
        "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
    },
    {
        "id": 4,
        "name": "Avengers",
        "language": "ENGLISH",
        "type": "Actione",
        "rate": 2,
        "imageUrl": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/01/Pictures/_46a0b2c0-3590-11e8-8c5f-3c6cc031651e.jpg"
    }
]

const MovieType = new GraphQLObjectType({
    name:'Movie',
    fields:{
        id:{type: GraphQLInt},
        name:{type: GraphQLString},
        language:{type: GraphQLString},
        type:{type: GraphQLString},
        rate:{type: GraphQLInt},
        imageUrl:{type: GraphQLString},
    }
})

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        movie:{
            type:MovieType,
            args:{id:{type:GraphQLInt}},
            resolve(parentValue,args){
                return _.find(movies,{id:args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})