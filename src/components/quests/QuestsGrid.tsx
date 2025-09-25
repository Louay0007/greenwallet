import React from "react";
import QuestCard, { QuestCardProps } from "./QuestCard";

interface QuestsGridProps {
  items: QuestCardProps[];
}

const QuestsGrid: React.FC<QuestsGridProps> = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((q, i) => (
        <QuestCard key={i} {...q} />
      ))}
    </div>
  );
};

export default QuestsGrid;


