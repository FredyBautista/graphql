import React, {useEffect, useState} from "react";
import Topic from "../Topic/Topic";
import { getData } from '../../Api/Api';
import './ListTopics.css';

const ListTopics = () => {
    const [topic, setTopic] =useState([]);
    const [selectedTopic, setSelectedTopic] = useState('react');

    useEffect(() => {
        const getTopics = async () => {
          const data = await getData(selectedTopic);
          setTopic(data);
        }
        getTopics();
    },[selectedTopic]);

    const handleOnClick = (name) => {
        setSelectedTopic(name);
    }

    const {name, relatedTopics} =topic;
    return(
        <div className="list-topics">
            <span>You are seeing Topics related to <strong>{name}</strong></span>
            <p>If you want to see more Topics you can click in one item to see al the topics related</p>
            {
                relatedTopics.length > 0 && relatedTopics.map(topic =>
                    <Topic key={topic.id} topic={topic} onClick={handleOnClick} />
                )
            }
        </div>
    );
};

export default ListTopics;