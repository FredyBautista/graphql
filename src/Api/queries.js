import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
    query Topic($name: String!) {
        topic(name: $name){        
            id
            name
            stargazerCount
            relatedTopics(first: 10){
                name
                id
                stargazerCount
            }
        }
    }
`;