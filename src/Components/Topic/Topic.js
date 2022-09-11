import React from "react";
import './Topic.css';

const Topic = ({ topic, onClick }) => (
    <div className="topic" onClick={() => onClick(topic.name)}>
        <div className="container">
            <h2>{topic.name}</h2>
            <span>Total Stargazer: {topic.stargazerCount}</span>
        </div>
    </div>
);

export default Topic;