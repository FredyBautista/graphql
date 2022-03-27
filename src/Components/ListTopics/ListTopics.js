import React, {useEffect, useState} from "react";
import Topic from "../Topic/Topic";
import Loader from "../Loader/Loader";
import { getData } from '../../Api/Api';
import './ListTopics.css';

const ListTopics = () => {
    const [topic, setTopic] =useState([]);
    const [isLoading, setLoading] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('react');

    useEffect(() => {
        const getTopics = async () => {
            setLoading(true);
            const data = await getData(selectedTopic);
            setTopic(data);
            setLoading(false);
        }
        getTopics();
    },[selectedTopic]);

    const handleOnClick = (name) => {
        setSelectedTopic(name);
    }

    const {name, relatedTopics} =topic;
    return(
        <div className="topics-container">
            <p>
                You are seeing Topics related to <strong>{name}</strong> <br />
                If you want to see more Topics you can click in one item to see al the topics related
            </p>
            <div className="list-topics">
                { isLoading ? <Loader /> :
                    relatedTopics?.length > 0 && relatedTopics.map(topic =>
                        <Topic key={topic.id} topic={topic} onClick={handleOnClick} />
                    )
                }
            </div>
        </div>
    );
};

export default ListTopics;