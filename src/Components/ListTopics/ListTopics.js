import React from "react";
import { useQuery } from "@apollo/client";
import Topic from "../Topic/Topic";
import Loader from "../Loader/Loader";
import { GET_TOPICS } from '../../Api/queries';
import './ListTopics.css';

const ListTopics = ({ search = 'react', onClick }) => {
    const { data, loading } = useQuery(GET_TOPICS, { variables: { name: search } });
    const handleOnClick = name => onClick(name);
    const { relatedTopics } = data?.topic || [];

    return (
        <div className="topics-container">
            <p>
                You are seeing Topics related to <strong>{search}</strong> <br />
                If you want to see more Topics you can click in one item to see al the topics related
            </p>
            <div className="list-topics">
                {loading ? <Loader /> :
                    relatedTopics?.length > 0 && relatedTopics.map(topic =>
                        <Topic key={topic.id} topic={topic} onClick={handleOnClick} />
                    )
                }
            </div>
        </div>
    );
};

export default ListTopics;