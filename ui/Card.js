import React from "react";

export default function Card({ name, summary, published, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full no-underline text-inherit"
        >
            <div className="border p-3 mb-4 rounded-xl hover:cursor-pointer transition-all ease-in-out duration-400 hover:scale-102">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm opacity-80">{published}</p>
                <p className="mt-2 line-clamp-3">
                    {summary.replace(/<[^>]*>?/gm, "")}
                </p>
            </div>
        </a>
    );
}