import React from "react";

export default function ServiceCard({ service }) {
    const {icon:Icon, title, description} = service
  return (
    <div className="card bg-base-200 shadow-md p-6 border border-base-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-4 text-primary">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-base-content/70">{description}</p>
    </div>
  );
}
